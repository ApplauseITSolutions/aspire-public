<?php
/**
 * Internship Enrolment Controller
 */

require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/Validator.php';
require_once __DIR__ . '/../models/InternshipEnrolment.php';

class EnrolmentController {
    private $enrolment_model;
    
    public function __construct() {
        $this->enrolment_model = new InternshipEnrolment();
    }
    
    public function handleRequest($method) {
        switch ($method) {
            case 'POST':
                $this->createEnrolment();
                break;
            default:
                Response::error('Method not allowed', 405);
                break;
        }
    }
    
    private function createEnrolment() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $required_fields = [
            'email', 'phone', 'college_name', 'internship_domain'
        ];
        
        // Check for either 'name' or 'first_name' + 'last_name'
        if (!isset($input['name']) && (!isset($input['first_name']) || !isset($input['last_name']))) {
            Response::validation_error(['name' => 'Name is required']);
        }
        
        $validation_errors = Validator::required($input, $required_fields);
        
        if (!empty($validation_errors)) {
            Response::validation_error($validation_errors);
        }
        
        // Validate email format
        if (!Validator::email($input['email'])) {
            Response::error('Invalid email format');
        }
        
        // Validate phone format
        if (!Validator::phone($input['phone'])) {
            Response::error('Invalid phone number format');
        }
        
        // Validate name formats
        if (isset($input['first_name']) && !Validator::name($input['first_name'])) {
            Response::error('Invalid first name format');
        }
        
        if (isset($input['last_name']) && !Validator::name($input['last_name'])) {
            Response::error('Invalid last name format');
        }
        
        if (isset($input['name']) && empty(trim($input['name']))) {
            Response::error('Invalid name format');
        }
        
        // Sanitize input
        $sanitized_data = Validator::sanitize($input);
        
        // Handle name field - split if single name field provided
        if (isset($sanitized_data['name'])) {
            $name_parts = explode(' ', trim($sanitized_data['name']), 2);
            $first_name = $name_parts[0];
            $last_name = isset($name_parts[1]) ? $name_parts[1] : '';
        } else {
            $first_name = $sanitized_data['first_name'];
            $last_name = $sanitized_data['last_name'];
        }
        
        // Prepare data for insertion
        $enrolment_data = [
            'first_name' => $first_name,
            'last_name' => $last_name,
            'email' => $sanitized_data['email'],
            'phone' => $sanitized_data['phone'],
            'college_name' => $sanitized_data['college_name'],
            'degree' => isset($sanitized_data['degree']) ? $sanitized_data['degree'] : 'N/A',
            'branch' => isset($sanitized_data['branch']) ? $sanitized_data['branch'] : 'N/A',
            'year_of_study' => isset($sanitized_data['year_of_study']) ? $sanitized_data['year_of_study'] : 'N/A',
            'internship_domain' => $sanitized_data['internship_domain'],
            'start_date' => isset($sanitized_data['start_date']) ? $sanitized_data['start_date'] : null,
            'payment_status' => 'pending',
            'enrolment_status' => 'pending'
        ];
        
        // Handle file upload if present
        if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
            $file_validation = Validator::file($_FILES['resume'], ALLOWED_FILE_TYPES, MAX_FILE_SIZE);
            
            if (!empty($file_validation)) {
                Response::error('Resume upload failed: ' . implode(', ', $file_validation));
            }
            
            // Generate unique filename
            $file_extension = strtolower(pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION));
            $filename = 'resume_' . time() . '_' . uniqid() . '.' . $file_extension;
            $upload_path = UPLOAD_PATH . $filename;
            
            if (move_uploaded_file($_FILES['resume']['tmp_name'], $upload_path)) {
                $enrolment_data['resume_path'] = $filename;
            } else {
                Response::error('Failed to upload resume');
            }
        }
        
        // Create enrolment
        try {
            $enrolment_id = $this->enrolment_model->createEnrolment($enrolment_data);
            
            if ($enrolment_id) {
                // Don't send email here - will send after payment
                Response::success('Enrolment submitted successfully', [
                    'enrolment_id' => $enrolment_id,
                    'next_step' => 'payment'
                ]);
            } else {
                Response::error('Failed to submit enrolment');
            }
        } catch (Exception $e) {
            error_log('Enrolment creation error: ' . $e->getMessage());
            Response::error('Failed to create enrolment: ' . $e->getMessage());
        }
    }
}
?>
