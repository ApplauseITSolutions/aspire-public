<?php
/**
 * Database Connection Test Script
 * Run this to verify database connection
 */

header('Content-Type: application/json');

// Database credentials
$host = 'localhost';
$db_name = 'aspire_db';
$username = 'root';
$password = '';

$response = [
    'status' => false,
    'message' => '',
    'details' => []
];

try {
    // Test connection
    $conn = new PDO(
        "mysql:host=" . $host,
        $username,
        $password
    );
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $response['details']['mysql_connection'] = 'Success';
    
    // Check if database exists
    $stmt = $conn->query("SHOW DATABASES LIKE '$db_name'");
    $db_exists = $stmt->rowCount() > 0;
    
    if ($db_exists) {
        $response['details']['database_exists'] = 'Yes';
        
        // Connect to the database
        $conn = new PDO(
            "mysql:host=" . $host . ";dbname=" . $db_name,
            $username,
            $password
        );
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Check if tables exist
        $tables = ['internship_enrolments', 'admin_users', 'contact_submissions', 'landing_enquiries'];
        $existing_tables = [];
        
        foreach ($tables as $table) {
            $stmt = $conn->query("SHOW TABLES LIKE '$table'");
            if ($stmt->rowCount() > 0) {
                $existing_tables[] = $table;
            }
        }
        
        $response['details']['existing_tables'] = $existing_tables;
        $response['details']['missing_tables'] = array_diff($tables, $existing_tables);
        
        if (count($existing_tables) === count($tables)) {
            $response['status'] = true;
            $response['message'] = 'Database connection successful. All tables exist.';
        } else {
            $response['status'] = false;
            $response['message'] = 'Database exists but some tables are missing. Please run schema.sql';
        }
        
    } else {
        $response['status'] = false;
        $response['message'] = 'Database does not exist. Please create it and run schema.sql';
        $response['details']['database_exists'] = 'No';
        $response['details']['solution'] = 'Run: CREATE DATABASE aspire_db; then import database/schema.sql';
    }
    
} catch(PDOException $e) {
    $response['status'] = false;
    $response['message'] = 'Connection failed: ' . $e->getMessage();
    $response['details']['error'] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>
