<?php
/**
 * Contact Form Controller
 */

require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/Validator.php';
require_once __DIR__ . '/../models/ContactSubmission.php';

class ContactController {
    private $contact_model;
    
    public function __construct() {
        $this->contact_model = new ContactSubmission();
    }
    
    public function handleRequest($method) {
        switch ($method) {
            case 'POST':
                $this->createContact();
                break;
            default:
                Response::error('Method not allowed', 405);
                break;
        }
    }
    
    private function createContact() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $required_fields = ['name', 'email', 'subject', 'message'];
        
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
        $contact_data = [
            'name' => $sanitized_data['name'],
            'email' => $sanitized_data['email'],
            'phone' => isset($sanitized_data['phone']) ? $sanitized_data['phone'] : null,
            'subject' => $sanitized_data['subject'],
            'message' => $sanitized_data['message'],
            'status' => 'new'
        ];
        
        // Create contact submission
        $contact_id = $this->contact_model->createSubmission($contact_data);
        
        if ($contact_id) {
            // TODO: Send confirmation email
            // TODO: Send notification email to admin
            
            Response::success('Contact form submitted successfully', [
                'contact_id' => $contact_id
            ]);
        } else {
            Response::error('Failed to submit contact form');
        }
    }
}
?>
