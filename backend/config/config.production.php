<?php
/**
 * Production Configuration for cPanel Deployment
 * Copy this to config.php and update with your actual values
 */

// Site Configuration
define('SITE_NAME', 'Aspire Internship Portal');
define('SITE_URL', 'https://www.aspireks.com');
define('ADMIN_URL', SITE_URL . '/admin');

// Database Configuration - UPDATE THESE WITH YOUR CPANEL DATABASE DETAILS
define('DB_HOST', 'localhost'); // Usually 'localhost' on cPanel
define('DB_NAME', 'aspireks_aspire_db'); // Your cPanel database name (usually prefixed with username)
define('DB_USER', 'aspireks_aspire_db'); // Your cPanel database username
define('DB_PASS', 'Applause@2026'); // Your database password

// Upload Configuration
define('UPLOAD_PATH', dirname(__DIR__, 1) . '/uploads/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_FILE_TYPES', ['pdf', 'doc', 'docx']);

// Email Configuration - UPDATE WITH YOUR ACTUAL EMAIL CREDENTIALS
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'applauseitdev@gmail.com'); // Your Gmail address
define('SMTP_PASSWORD', 'okyc smgd vhdk vyah'); // Gmail App Password (not regular password)
define('FROM_EMAIL', 'info@aspireks.com');
define('FROM_NAME', 'Aspire Internship Portal');

// Razorpay Configuration - UPDATE WITH YOUR PRODUCTION KEYS
define('RAZORPAY_KEY_ID', 'rzp_test_Rbc2eGp9p2ogLf'); // Use live keys for production
define('RAZORPAY_KEY_SECRET', 'wZkk8Cvkj6ZBCve0iAnPoQPt');

// Security Configuration
define('JWT_SECRET', 'CHANGE_THIS_TO_A_RANDOM_STRING_' . bin2hex(random_bytes(32)));
define('TOKEN_EXPIRY', 24 * 60 * 60); // 24 hours in seconds

// Error Reporting - DISABLE IN PRODUCTION
error_reporting(0);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', dirname(__DIR__) . '/logs/php-errors.log');

// CORS Headers
header("Access-Control-Allow-Origin: https://www.aspireks.com");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>
