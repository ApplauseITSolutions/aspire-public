<?php
/**
 * Simple API Test - Upload this to backend/ folder
 * Visit: https://www.aspireks.com/backend/test-api-simple.php
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'status' => 'success',
    'message' => 'Backend is working!',
    'php_version' => phpversion(),
    'timestamp' => date('Y-m-d H:i:s'),
    'server' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'
]);
?>
