<?php
/**
 * Main API Entry Point
 * Routes all API requests
 */

require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/utils/Response.php';

// Get the request method and path
$method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Remove query string from path
$path = explode('?', $path)[0];

// Normalize the path relative to this backend directory.
$script_dir = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '')), '/');
if ($script_dir !== '' && strpos($path, $script_dir) === 0) {
    $path = substr($path, strlen($script_dir));
}

$path = '/' . ltrim($path, '/');

// Route the request
switch ($path) {
    // Form endpoints
    case '/api/forms/enrolment':
        require_once __DIR__ . '/controllers/EnrolmentController.php';
        $controller = new EnrolmentController();
        $controller->handleRequest($method);
        break;
        
    case '/api/forms/contact':
        require_once __DIR__ . '/controllers/ContactController.php';
        $controller = new ContactController();
        $controller->handleRequest($method);
        break;
        
    case '/api/forms/enquiry':
        require_once __DIR__ . '/controllers/EnquiryController.php';
        $controller = new EnquiryController();
        $controller->handleRequest($method);
        break;
        
    // Auth endpoints
    case '/api/auth/login':
        require_once __DIR__ . '/controllers/AuthController.php';
        $controller = new AuthController();
        $controller->login();
        break;
        
    case '/api/auth/forgot-password':
        require_once __DIR__ . '/controllers/AuthController.php';
        $controller = new AuthController();
        $controller->forgotPassword();
        break;
        
    case '/api/auth/reset-password':
        require_once __DIR__ . '/controllers/AuthController.php';
        $controller = new AuthController();
        $controller->resetPassword();
        break;
        
    // Admin endpoints
    case '/api/admin/dashboard':
        require_once __DIR__ . '/controllers/AdminController.php';
        $controller = new AdminController();
        $controller->dashboard();
        break;
        
    case '/api/admin/internships':
        require_once __DIR__ . '/controllers/AdminController.php';
        $controller = new AdminController();
        $controller->internships($method);
        break;
        
    case '/api/admin/contacts':
        require_once __DIR__ . '/controllers/AdminController.php';
        $controller = new AdminController();
        $controller->contacts($method);
        break;
        
    case '/api/admin/enquiries':
        require_once __DIR__ . '/controllers/AdminController.php';
        $controller = new AdminController();
        $controller->enquiries($method);
        break;
        
    // Payment endpoints
    case '/api/payment/create-order':
        require_once __DIR__ . '/controllers/PaymentController.php';
        $controller = new PaymentController();
        $controller->createOrder();
        break;
        
    case '/api/payment/verify':
        require_once __DIR__ . '/controllers/PaymentController.php';
        $controller = new PaymentController();
        $controller->verifyPayment();
        break;
        
    default:
        Response::not_found('Endpoint not found');
        break;
}
?>
