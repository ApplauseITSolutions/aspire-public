<?php
/**
 * Landing Enquiry Controller
 */

require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/Validator.php';
require_once __DIR__ . '/../models/LandingEnquiry.php';

class EnquiryController {
    private $enquiry_model;
    
    public function __construct() {
        $this->enquiry_model = new LandingEnquiry();
    }
    
    public function handleRequest($method) {
        switch ($method) {
            case 'POST':
                $this->createEnquiry();
                break;
            default:
                Response::error('Method not allowed', 405);
                break;
        }
    }
    
    private function createEnquiry() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $required_fields = ['name', 'email'];
        
        $validation_errors = Validator::required($input, $required_fields);
        
        if (!empty($validation_errors)) {
            Response::validation_error($validation_errors);
        }
        
        // Validate email format
        if (!Validator::email($input['email'])) {
            Response::error('Invalid email format');
        }
        
        // Validate phone format if provided
        if (isset($input['phone']) && !empty($input['phone'])) {
            if (!Validator::phone($input['phone'])) {
                Response::error('Invalid phone number format');
            }
        }
        
        // Validate name format
        if (!Validator::name($input['name'])) {
            Response::error('Invalid name format');
        }
        
        // Sanitize input
        $sanitized_data = Validator::sanitize($input);
        
        // Prepare data for insertion
        $enquiry_data = [
            'name' => $sanitized_data['name'],
            'email' => $sanitized_data['email'],
            'phone' => isset($sanitized_data['phone']) ? $sanitized_data['phone'] : null,
            'course_interest' => isset($sanitized_data['course_interest']) ? $sanitized_data['course_interest'] : null,
            'current_status' => isset($sanitized_data['current_status']) ? $sanitized_data['current_status'] : null,
            'message' => isset($sanitized_data['message']) ? $sanitized_data['message'] : null,
            'status' => 'new'
        ];
        
        // Create enquiry
        $enquiry_id = $this->enquiry_model->createEnquiry($enquiry_data);
        
        if ($enquiry_id) {
            // TODO: Send confirmation email
            // TODO: Send notification email to admin
            
            Response::success('Enquiry submitted successfully', [
                'enquiry_id' => $enquiry_id
            ]);
        } else {
            Response::error('Failed to submit enquiry');
        }
    }
}
?>
