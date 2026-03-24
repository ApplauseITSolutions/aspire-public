<?php
/**
 * Application Configuration
 */

// Site Configuration
define('SITE_NAME', 'Aspire Internship Portal');
define('SITE_URL', 'http://localhost/aspire-public');
define('ADMIN_URL', SITE_URL . '/admin');

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'aspireks_aspire_db');
define('DB_USER', 'aspireks_aspire_db');
define('DB_PASS', 'Applause@2026');

// Upload Configuration
define('UPLOAD_PATH', dirname(__DIR__, 1) . '/uploads/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_FILE_TYPES', ['pdf', 'doc', 'docx']);

// Email Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'applauseitdev@gmail.com');
define('SMTP_PASSWORD', 'okyc smgd vhdk vyah');
define('FROM_EMAIL', 'applauseitdev@gmail.com');
define('FROM_NAME', 'Aspire Internship Portal');

// Razorpay Configuration
define('RAZORPAY_KEY_ID', 'rzp_test_Rbc2eGp9p2ogLf');
define('RAZORPAY_KEY_SECRET', 'wZkk8Cvkj6ZBCve0iAnPoQPt');

// Security Configuration
define('JWT_SECRET', 'your-super-secret-jwt-key-here');
define('TOKEN_EXPIRY', 24 * 60 * 60); // 24 hours in seconds

// Error Reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>
