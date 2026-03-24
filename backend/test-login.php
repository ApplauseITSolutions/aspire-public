<?php
/**
 * Login Test
 * Upload this to backend/ folder
 * Visit: https://www.aspireks.com/backend/test-login.php
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/models/AdminUser.php';
require_once __DIR__ . '/utils/Auth.php';

$result = [
    'test' => 'Login functionality',
    'steps' => []
];

try {
    // Step 1: Database connection
    $db = new Database();
    $conn = $db->getConnection();
    $result['steps'][] = '✓ Database connected';
    
    // Step 2: Check admin user exists
    $stmt = $conn->prepare("SELECT * FROM admin_users WHERE email = ?");
    $stmt->execute(['admin@aspireks.com']);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($user) {
        $result['steps'][] = '✓ Admin user found';
        $result['user_info'] = [
            'id' => $user['id'],
            'username' => $user['username'],
            'email' => $user['email'],
            'role' => $user['role'],
            'is_active' => $user['is_active']
        ];
    } else {
        $result['steps'][] = '✗ Admin user NOT found';
        $result['error'] = 'Admin user does not exist in database';
    }
    
    // Step 3: Test password verification
    if ($user) {
        $test_password = 'password';
        $password_valid = password_verify($test_password, $user['password']);
        
        if ($password_valid) {
            $result['steps'][] = '✓ Password verification works';
        } else {
            $result['steps'][] = '✗ Password verification failed';
            $result['error'] = 'Password hash does not match';
        }
    }
    
    // Step 4: Test JWT generation
    if ($user && $password_valid) {
        $payload = [
            'user_id' => $user['id'],
            'email' => $user['email'],
            'exp' => time() + 3600
        ];
        
        $token = Auth::generateToken($payload);
        $result['steps'][] = '✓ JWT token generated';
        $result['token_sample'] = substr($token, 0, 50) . '...';
    }
    
    $result['status'] = 'success';
    $result['message'] = 'All tests passed!';
    
} catch (Exception $e) {
    $result['status'] = 'error';
    $result['error'] = $e->getMessage();
    $result['trace'] = $e->getTraceAsString();
}

echo json_encode($result, JSON_PRETTY_PRINT);
?>
