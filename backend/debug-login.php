<?php
/**
 * Debug Login Endpoint
 * This helps identify login issues
 * Access via: POST http://localhost/aspire-public/backend/debug-login.php
 */

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/models/AdminUser.php';
require_once __DIR__ . '/utils/Auth.php';

$debug_info = [];

// Get input
$input = json_decode(file_get_contents('php://input'), true);
$debug_info['received_input'] = $input;

if (!$input || !isset($input['email']) || !isset($input['password'])) {
    echo json_encode([
        'status' => false,
        'message' => 'Email and password are required',
        'debug' => $debug_info
    ]);
    exit;
}

// Test database connection
try {
    $db = new Database();
    $conn = $db->getConnection();
    $debug_info['database_connected'] = $conn ? true : false;
} catch (Exception $e) {
    $debug_info['database_error'] = $e->getMessage();
    echo json_encode([
        'status' => false,
        'message' => 'Database connection failed',
        'debug' => $debug_info
    ]);
    exit;
}

// Check if user exists
$admin_model = new AdminUser();
$user = $admin_model->findByEmail($input['email']);
$debug_info['user_found'] = $user ? true : false;

if ($user) {
    $debug_info['user_info'] = [
        'id' => $user['id'],
        'name' => $user['name'],
        'email' => $user['email'],
        'role' => $user['role'],
        'status' => $user['status'],
        'password_hash_length' => strlen($user['password'])
    ];
}

// Try to verify login
$verified_user = $admin_model->verifyLogin($input['email'], $input['password']);
$debug_info['login_verified'] = $verified_user ? true : false;

if ($verified_user) {
    // Generate token
    $payload = [
        'user_id' => $verified_user['id'],
        'email' => $verified_user['email'],
        'name' => $verified_user['name'],
        'role' => $verified_user['role'],
        'exp' => time() + TOKEN_EXPIRY
    ];
    
    $token = Auth::generateToken($payload);
    
    echo json_encode([
        'status' => true,
        'message' => 'Login successful',
        'data' => [
            'user' => $verified_user,
            'token' => $token,
            'expires_in' => TOKEN_EXPIRY
        ],
        'debug' => $debug_info
    ]);
} else {
    echo json_encode([
        'status' => false,
        'message' => 'Invalid email or password',
        'debug' => $debug_info,
        'hint' => 'Default credentials: admin@aspire.com / admin123'
    ]);
}
?>
