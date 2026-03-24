<?php
/**
 * Payment Controller for Razorpay Integration
 */

require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/Validator.php';
require_once __DIR__ . '/../models/InternshipEnrolment.php';

class PaymentController {
    private $enrolment_model;
    
    public function __construct() {
        $this->enrolment_model = new InternshipEnrolment();
    }
    
    public function createOrder() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        if (!isset($input['enrolment_id']) || empty($input['enrolment_id'])) {
            Response::validation_error(['enrolment_id' => 'Enrolment ID is required']);
        }
        
        if (!isset($input['amount']) || empty($input['amount'])) {
            Response::validation_error(['amount' => 'Amount is required']);
        }
        
        $enrolment_id = (int)$input['enrolment_id'];
        $amount = (float)$input['amount'];
        
        // Verify enrolment exists
        $enrolment = $this->enrolment_model->findById($enrolment_id);
        if (!$enrolment) {
            Response::not_found('Enrolment not found');
        }
        
        // Check if payment is already processed
        if ($enrolment['payment_status'] === 'paid') {
            Response::error('Payment already processed for this enrolment');
        }
        
        // Create Razorpay order
        $order_data = [
            'receipt' => 'enrolment_' . $enrolment_id,
            'amount' => $amount * 100, // Convert to paise
            'currency' => 'INR',
            'payment_capture' => 1
        ];
        
        // Initialize Razorpay
        $api_key = RAZORPAY_KEY_ID;
        $api_secret = RAZORPAY_KEY_SECRET;
        
        $curl = curl_init();
        
        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://api.razorpay.com/v1/orders',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode($order_data),
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'Authorization: Basic ' . base64_encode($api_key . ':' . $api_secret)
            ],
        ]);
        
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        
        if ($err) {
            Response::error('Payment gateway error: ' . $err);
        }
        
        $order_response = json_decode($response, true);
        
        if (isset($order_response['error'])) {
            Response::error('Payment error: ' . $order_response['error']['description']);
        }
        
        // Update enrolment with order ID
        $this->enrolment_model->updatePaymentStatus($enrolment_id, 'pending', [
            'razorpay_order_id' => $order_response['id'],
            'payment_amount' => $amount
        ]);
        
        Response::success('Order created successfully', [
            'order_id' => $order_response['id'],
            'amount' => $amount,
            'currency' => 'INR',
            'key_id' => $api_key
        ]);
    }
    
    public function verifyPayment() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $required_fields = ['razorpay_order_id', 'razorpay_payment_id', 'razorpay_signature'];
        $validation_errors = Validator::required($input, $required_fields);
        
        if (!empty($validation_errors)) {
            Response::validation_error($validation_errors);
        }
        
        $order_id = $input['razorpay_order_id'];
        $payment_id = $input['razorpay_payment_id'];
        $signature = $input['razorpay_signature'];
        
        // Find enrolment by order ID
        $enrolments = $this->enrolment_model->query(
            "SELECT * FROM internship_enrolments WHERE razorpay_order_id = ?",
            [$order_id]
        );
        
        if (empty($enrolments)) {
            Response::not_found('Order not found');
        }
        
        $enrolment = $enrolments[0];
        
        // Verify signature
        $generated_signature = hash_hmac(
            'sha256',
            $order_id . '|' . $payment_id,
            RAZORPAY_KEY_SECRET
        );
        
        if ($generated_signature !== $signature) {
            Response::error('Payment verification failed');
        }
        
        // Update enrolment with payment details
        $payment_data = [
            'razorpay_payment_id' => $payment_id,
            'razorpay_signature' => $signature,
            'payment_status' => 'paid',
            'enrolment_status' => 'confirmed'
        ];
        
        try {
            if ($this->enrolment_model->update($enrolment['id'], $payment_data)) {
                // Get updated enrolment data
                $updated_enrolment = $this->enrolment_model->findById($enrolment['id']);
                
                // Send payment confirmation email (optional - don't fail if email fails)
                try {
                    if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
                        require_once __DIR__ . '/../utils/Email.php';
                        $email = new Email();
                        $email->sendPaymentConfirmation($updated_enrolment['email'], $updated_enrolment);
                    }
                } catch (Exception $e) {
                    error_log('Failed to send payment confirmation email: ' . $e->getMessage());
                    // Don't fail the request if email fails
                }
                
                Response::success('Payment verified successfully', [
                    'enrolment_id' => $enrolment['id'],
                    'payment_status' => 'paid',
                    'enrolment_status' => 'confirmed'
                ]);
            } else {
                Response::error('Failed to update payment status');
            }
        } catch (Exception $e) {
            error_log('Payment update error: ' . $e->getMessage());
            Response::error('Failed to update payment: ' . $e->getMessage());
        }
    }
}
?>
