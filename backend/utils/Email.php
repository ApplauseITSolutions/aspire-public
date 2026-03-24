<?php
/**
 * Email Utility Class using PHPMailer
 */

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Email {
    private $mailer;
    
    public function __construct() {
        $this->mailer = new PHPMailer(true);
        
        try {
            // Server settings
            $this->mailer->isSMTP();
            $this->mailer->Host       = SMTP_HOST;
            $this->mailer->SMTPAuth   = true;
            $this->mailer->Username   = SMTP_USERNAME;
            $this->mailer->Password   = SMTP_PASSWORD;
            $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $this->mailer->Port       = SMTP_PORT;
            
            // Recipients
            $this->mailer->setFrom(FROM_EMAIL, FROM_NAME);
            
            // Content
            $this->mailer->isHTML(true);
            $this->mailer->CharSet = 'UTF-8';
            
        } catch (Exception $e) {
            throw new Exception("Mailer configuration failed: " . $e->getMessage());
        }
    }
    
    public function sendEnrolmentConfirmation($to_email, $data) {
        try {
            $this->mailer->addAddress($to_email);
            $this->mailer->Subject = 'Internship Enrolment Confirmation - ' . SITE_NAME;
            
            $this->mailer->Body = $this->getEnrolmentTemplate($data);
            $this->mailer->AltBody = strip_tags($this->getEnrolmentTemplate($data));
            
            if ($this->mailer->send()) {
                $this->logEmail($to_email, $this->mailer->Subject, 'enrolment_confirmation', 'sent');
                return true;
            }
            
        } catch (Exception $e) {
            $this->logEmail($to_email, $this->mailer->Subject, 'enrolment_confirmation', 'failed', $e->getMessage());
            throw new Exception("Enrolment confirmation email failed: " . $e->getMessage());
        }
        
        return false;
    }
    
    public function sendPaymentConfirmation($to_email, $data) {
        try {
            $this->mailer->clearAllRecipients();
            $this->mailer->clearAttachments();
            $this->mailer->addAddress($to_email);
            $this->mailer->Subject = 'Payment Confirmation - ' . SITE_NAME;
            
            $this->mailer->Body = $this->getPaymentTemplate($data);
            $this->mailer->AltBody = strip_tags($this->getPaymentTemplate($data));
            
            if ($this->mailer->send()) {
                $this->logEmail($to_email, $this->mailer->Subject, 'payment_confirmation', 'sent');
                return true;
            }
            
        } catch (Exception $e) {
            $this->logEmail($to_email, $this->mailer->Subject, 'payment_confirmation', 'failed', $e->getMessage());
            throw new Exception("Payment confirmation email failed: " . $e->getMessage());
        }
        
        return false;
    }
    
    public function sendContactNotification($to_email, $data) {
        try {
            $this->mailer->addAddress($to_email);
            $this->mailer->Subject = 'New Contact Form Submission - ' . SITE_NAME;
            
            $this->mailer->Body = $this->getContactNotificationTemplate($data);
            $this->mailer->AltBody = strip_tags($this->getContactNotificationTemplate($data));
            
            if ($this->mailer->send()) {
                $this->logEmail($to_email, $this->mailer->Subject, 'contact_notification', 'sent');
                return true;
            }
            
        } catch (Exception $e) {
            $this->logEmail($to_email, $this->mailer->Subject, 'contact_notification', 'failed', $e->getMessage());
            return false;
        }
        
        return false;
    }
    
    public function sendEnquiryNotification($to_email, $data) {
        try {
            $this->mailer->addAddress($to_email);
            $this->mailer->Subject = 'New Course Enquiry - ' . SITE_NAME;
            
            $this->mailer->Body = $this->getEnquiryNotificationTemplate($data);
            $this->mailer->AltBody = strip_tags($this->getEnquiryNotificationTemplate($data));
            
            if ($this->mailer->send()) {
                $this->logEmail($to_email, $this->mailer->Subject, 'enquiry_notification', 'sent');
                return true;
            }
            
        } catch (Exception $e) {
            $this->logEmail($to_email, $this->mailer->Subject, 'enquiry_notification', 'failed', $e->getMessage());
            return false;
        }
        
        return false;
    }
    
    public function sendPasswordReset($to_email, $reset_link) {
        try {
            $this->mailer->addAddress($to_email);
            $this->mailer->Subject = 'Password Reset Request - ' . SITE_NAME;
            
            $this->mailer->Body = $this->getPasswordResetTemplate($reset_link);
            $this->mailer->AltBody = strip_tags($this->getPasswordResetTemplate($reset_link));
            
            if ($this->mailer->send()) {
                $this->logEmail($to_email, $this->mailer->Subject, 'password_reset', 'sent');
                return true;
            }
            
        } catch (Exception $e) {
            $this->logEmail($to_email, $this->mailer->Subject, 'password_reset', 'failed', $e->getMessage());
            throw new Exception("Password reset email failed: " . $e->getMessage());
        }
        
        return false;
    }
    
    private function getEnrolmentTemplate($data) {
        return "
        <html>
        <head>
            <title>Internship Enrolment Confirmation</title>
        </head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;'>
                <h2 style='color: #007bff;'>Internship Enrolment Confirmation</h2>
                <p>Dear {$data['first_name']} {$data['last_name']},</p>
                <p>Thank you for enrolling in our internship program. Your enrolment has been received successfully.</p>
                
                <h3>Enrolment Details:</h3>
                <ul>
                    <li><strong>Enrolment ID:</strong> {$data['id']}</li>
                    <li><strong>Email:</strong> {$data['email']}</li>
                    <li><strong>Phone:</strong> {$data['phone']}</li>
                    <li><strong>College:</strong> {$data['college_name']}</li>
                    <li><strong>Degree:</strong> {$data['degree']}</li>
                    <li><strong>Branch:</strong> {$data['branch']}</li>
                    <li><strong>Year of Study:</strong> {$data['year_of_study']}</li>
                    <li><strong>Internship Domain:</strong> {$data['internship_domain']}</li>
                    <li><strong>Status:</strong> {$data['enrolment_status']}</li>
                </ul>
                
                <p><strong>Next Steps:</strong></p>
                <ol>
                    <li>Complete the payment process</li>
                    <li>Wait for enrolment confirmation</li>
                    <li>Receive internship details and schedule</li>
                </ol>
                
                <p>If you have any questions, please contact us at applauseitdev@gmail.com</p>
                
                <hr style='margin: 20px 0; border: none; border-top: 1px solid #ddd;'>
                <p style='font-size: 12px; color: #666;'>This is an automated message. Please do not reply to this email.</p>
                <p style='font-size: 12px; color: #666;'>© " . date('Y') . " " . SITE_NAME . ". All rights reserved.</p>
            </div>
        </body>
        </html>";
    }
    
    private function getPaymentTemplate($data) {
        $payment_amount = isset($data['payment_amount']) ? number_format($data['payment_amount'], 2) : '1805.40';
        $logo_src = $this->getPaymentLogoSrc();
        $logo_markup = $logo_src
            ? "<img src='{$logo_src}' alt='Aspire Knowledge & Skills' class='logo-img' />"
            : "<div style='font-size: 24px; font-weight: bold; color: #EF7F2C;'>ASPIRE</div>";
        
        return "
        <html>
        <head>
            <title>Enrollment & Payment Confirmation</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; background-color: #ffffff; }
                .header { background-color: #EF7F2C; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .logo-container { background-color: white; padding: 15px; border-radius: 8px; display: inline-block; margin-bottom: 10px; }
                .logo-img { max-width: 180px; width: 100%; height: auto; display: block; }
                .success-icon { font-size: 48px; color: #28a745; text-align: center; margin: 20px 0; }
                .section { margin: 20px 0; }
                .section h3 { color: #EF7F2C; border-bottom: 2px solid #EF7F2C; padding-bottom: 5px; }
                .details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; }
                .details ul { list-style: none; padding: 0; }
                .details li { padding: 8px 0; border-bottom: 1px solid #eee; }
                .details li:last-child { border-bottom: none; }
                .details strong { color: #3D1717; min-width: 150px; display: inline-block; }
                .payment-box { background-color: #e8f5e9; border-left: 4px solid #28a745; padding: 15px; margin: 15px 0; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <div class='logo-container'>
                        {$logo_markup}
                    </div>
                </div>
                
                <div class='success-icon'>✓</div>
                <h2 style='text-align: center; color: #28a745;'>Enrollment & Payment Confirmed!</h2>
                
                <p>Dear {$data['first_name']} {$data['last_name']},</p>
                <p>Congratulations! Your internship enrollment and payment have been successfully processed.</p>
                
                <div class='section'>
                    <h3>📋 Enrollment Details</h3>
                    <div class='details'>
                        <ul>
                            <li><strong>Enrollment ID:</strong> {$data['id']}</li>
                            <li><strong>Name:</strong> {$data['first_name']} {$data['last_name']}</li>
                            <li><strong>Email:</strong> {$data['email']}</li>
                            <li><strong>Phone:</strong> {$data['phone']}</li>
                            <li><strong>College:</strong> {$data['college_name']}</li>
                            <li><strong>Internship Domain:</strong> {$data['internship_domain']}</li>
                            <li><strong>Status:</strong> <span style='color: #28a745; font-weight: bold;'>Confirmed</span></li>
                        </ul>
                    </div>
                </div>
                
                <div class='section'>
                    <h3>💳 Payment Details</h3>
                    <div class='payment-box'>
                        <ul style='list-style: none; padding: 0; margin: 0;'>
                            <li style='padding: 5px 0;'><strong>Payment ID:</strong> {$data['razorpay_payment_id']}</li>
                            <li style='padding: 5px 0;'><strong>Order ID:</strong> {$data['razorpay_order_id']}</li>
                            <li style='padding: 5px 0;'><strong>Amount Paid:</strong> ₹{$payment_amount}</li>
                            <li style='padding: 5px 0;'><strong>Payment Status:</strong> <span style='color: #28a745; font-weight: bold;'>Paid ✓</span></li>
                            <li style='padding: 5px 0;'><strong>Payment Date:</strong> " . date('d M Y, h:i A') . "</li>
                        </ul>
                    </div>
                </div>
                
                <div class='section'>
                    <h3>📊 Fee Breakdown</h3>
                    <div class='details'>
                        <ul>
                            <li><strong>Base Amount:</strong> ₹1,500.00</li>
                            <li><strong>CGST (9%):</strong> ₹135.00</li>
                            <li><strong>SGST (9%):</strong> ₹135.00</li>
                            <li><strong>Gateway Charges (2%):</strong> ₹35.40</li>
                            <li style='font-size: 16px; color: #EF7F2C;'><strong>Total Paid:</strong> <strong>₹1,805.40</strong></li>
                        </ul>
                    </div>
                </div>
                
                <div class='section'>
                    <h3>📝 Next Steps</h3>
                    <ol style='padding-left: 20px;'>
                        <li>You will receive internship details and schedule via email within 2-3 business days</li>
                        <li>Keep your Enrollment ID handy for future reference</li>
                        <li>Check your email regularly for updates and announcements</li>
                        <li>Download and save your enrollment confirmation PDF</li>
                    </ol>
                </div>
                
                <div class='section' style='background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px;'>
                    <p style='margin: 0;'><strong>📞 Need Help?</strong></p>
                    <p style='margin: 5px 0 0 0;'>Contact us at: <a href='mailto:info@aspireks.com' style='color: #EF7F2C; text-decoration: none;'>info@aspireks.com</a> | 020-25530291</p>
                </div>
                
                <div class='footer'>
                    <p>This is an automated confirmation email. Please do not reply to this email.</p>
                    <p>© " . date('Y') . " Aspire Knowledge & Skills. All rights reserved.</p>
                    <p><a href='https://www.aspireks.com' style='color: #EF7F2C; text-decoration: none;'>www.aspireks.com</a></p>
                </div>
            </div>
        </body>
        </html>";
    }

    private function getPaymentLogoSrc() {
        $logo_path = __DIR__ . '/../logo-aspire.png';

        if (file_exists($logo_path)) {
            $this->mailer->addEmbeddedImage($logo_path, 'aspire_logo', 'logo-aspire.png', PHPMailer::ENCODING_BASE64, 'image/png');
            return 'cid:aspire_logo';
        }

        return null;
    }
    
    private function getContactNotificationTemplate($data) {
        return "
        <html>
        <head>
            <title>New Contact Form Submission</title>
        </head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;'>
                <h2 style='color: #dc3545;'>New Contact Form Submission</h2>
                <p>A new contact form has been submitted on the website. Please review the details below:</p>
                
                <h3>Contact Details:</h3>
                <ul>
                    <li><strong>Name:</strong> {$data['name']}</li>
                    <li><strong>Email:</strong> {$data['email']}</li>
                    <li><strong>Phone:</strong> {$data['phone']}</li>
                    <li><strong>Subject:</strong> {$data['subject']}</li>
                    <li><strong>Message:</strong> {$data['message']}</li>
                    <li><strong>Submitted:</strong> {$data['created_at']}</li>
                </ul>
                
                <p>Please respond to this inquiry at your earliest convenience.</p>
                
                <hr style='margin: 20px 0; border: none; border-top: 1px solid #ddd;'>
                <p style='font-size: 12px; color: #666;'>This is an automated notification from " . SITE_NAME . ".</p>
            </div>
        </body>
        </html>";
    }
    
    private function getEnquiryNotificationTemplate($data) {
        return "
        <html>
        <head>
            <title>New Course Enquiry</title>
        </head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;'>
                <h2 style='color: #dc3545;'>New Course Enquiry</h2>
                <p>A new course enquiry has been submitted on the website. Please review the details below:</p>
                
                <h3>Enquiry Details:</h3>
                <ul>
                    <li><strong>Name:</strong> {$data['name']}</li>
                    <li><strong>Email:</strong> {$data['email']}</li>
                    <li><strong>Phone:</strong> {$data['phone']}</li>
                    <li><strong>Course Interest:</strong> {$data['course_interest']}</li>
                    <li><strong>Current Status:</strong> {$data['current_status']}</li>
                    <li><strong>Message:</strong> {$data['message']}</li>
                    <li><strong>Submitted:</strong> {$data['created_at']}</li>
                </ul>
                
                <p>Please follow up with this potential student at your earliest convenience.</p>
                
                <hr style='margin: 20px 0; border: none; border-top: 1px solid #ddd;'>
                <p style='font-size: 12px; color: #666;'>This is an automated notification from " . SITE_NAME . ".</p>
            </div>
        </body>
        </html>";
    }
    
    private function getPasswordResetTemplate($reset_link) {
        return "
        <html>
        <head>
            <title>Password Reset Request</title>
        </head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;'>
                <h2 style='color: #ffc107;'>Password Reset Request</h2>
                <p>You requested a password reset for your admin account.</p>
                
                <p>Click the link below to reset your password:</p>
                <p><a href='{$reset_link}' style='background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>Reset Password</a></p>
                
                <p>Or copy and paste this link in your browser:</p>
                <p><small>{$reset_link}</small></p>
                
                <p><strong>Important:</strong></p>
                <ul>
                    <li>This link will expire in 1 hour</li>
                    <li>If you didn't request this reset, please ignore this email</li>
                    <li>For security, never share this link with anyone</li>
                </ul>
                
                <p>If you have any issues, please contact the system administrator.</p>
                
                <hr style='margin: 20px 0; border: none; border-top: 1px solid #ddd;'>
                <p style='font-size: 12px; color: #666;'>This is an automated message. Please do not reply to this email.</p>
                <p style='font-size: 12px; color: #666;'>© " . date('Y') . " " . SITE_NAME . ". All rights reserved.</p>
            </div>
        </body>
        </html>";
    }
    
    private function logEmail($to_email, $subject, $template_name, $status, $error_message = null) {
        try {
            $database = new Database();
            $conn = $database->getConnection();
            
            $sql = "INSERT INTO email_logs (to_email, subject, template_name, status, error_message, sent_at) 
                    VALUES (?, ?, ?, ?, ?, ?)";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindValue(1, $to_email);
            $stmt->bindValue(2, $subject);
            $stmt->bindValue(3, $template_name);
            $stmt->bindValue(4, $status);
            $stmt->bindValue(5, $error_message);
            $stmt->bindValue(6, $status === 'sent' ? date('Y-m-d H:i:s') : null);
            
            $stmt->execute();
            
        } catch (Exception $e) {
            // Log error but don't throw to avoid breaking the main flow
            error_log("Email logging failed: " . $e->getMessage());
        }
    }
}
?>
