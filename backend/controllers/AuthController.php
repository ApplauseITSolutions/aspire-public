<?php
/**
 * Authentication Controller
 */

require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/Validator.php';
require_once __DIR__ . '/../utils/Auth.php';
require_once __DIR__ . '/../models/AdminUser.php';

class AuthController {
    private $admin_model;
    
    public function __construct() {
        $this->admin_model = new AdminUser();
    }
    
    public function login() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $required_fields = ['email', 'password'];
        $validation_errors = Validator::required($input, $required_fields);
        
        if (!empty($validation_errors)) {
            Response::validation_error($validation_errors);
        }
        
        // Validate email format
        if (!Validator::email($input['email'])) {
            Response::error('Invalid email format');
        }
        
        // Sanitize input
        $sanitized_data = Validator::sanitize($input);
        
        // Verify login credentials
        $user = $this->admin_model->verifyLogin($sanitized_data['email'], $sanitized_data['password']);
        
        if (!$user) {
            Response::unauthorized('Invalid email or password');
        }
        
        // Generate JWT token
        $payload = [
            'user_id' => $user['id'],
            'email' => $user['email'],
            'name' => $user['name'],
            'role' => $user['role'],
            'exp' => time() + TOKEN_EXPIRY
        ];
        
        $token = Auth::generateToken($payload);
        
        Response::success('Login successful', [
            'user' => $user,
            'token' => $token,
            'expires_in' => TOKEN_EXPIRY
        ]);
    }
    
    public function forgotPassword() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required field
        if (!isset($input['email']) || empty(trim($input['email']))) {
            Response::validation_error(['email' => 'Email is required']);
        }
        
        // Validate email format
        if (!Validator::email($input['email'])) {
            Response::error('Invalid email format');
        }
        
        // Sanitize input
        $email = Validator::sanitize($input['email']);
        
        // Check if user exists
        $user = $this->admin_model->findByEmail($email);
        
        if (!$user) {
            // Don't reveal if email exists or not for security
            Response::success('If the email exists, a reset link has been sent');
        }
        
        // Generate reset token
        $reset_token = bin2hex(random_bytes(32));
        $expires_at = date('Y-m-d H:i:s', strtotime('+1 hour'));
        
        // TODO: Save reset token to database
        // TODO: Send reset email
        
        Response::success('If the email exists, a reset link has been sent');
    }
    
    public function resetPassword() {
        // Get JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $required_fields = ['token', 'password'];
        $validation_errors = Validator::required($input, $required_fields);
        
        if (!empty($validation_errors)) {
            Response::validation_error($validation_errors);
        }
        
        // Validate password strength
        if (!Validator::password($input['password'])) {
            Response::error('Password must be at least 6 characters long');
        }
        
        // Sanitize input
        $sanitized_data = Validator::sanitize($input);
        
        // TODO: Verify reset token and get user ID
        // TODO: Update password
        // TODO: Invalidate reset token
        
        Response::success('Password reset successful');
    }
}
?>
