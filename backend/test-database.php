<?php
/**
 * Database Connection Test
 * Upload this to backend/ folder
 * Visit: https://www.aspireks.com/backend/test-database.php
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/config/config.php';

$result = [
    'php_version' => phpversion(),
    'config_loaded' => defined('DB_NAME'),
    'db_host' => DB_HOST ?? 'Not defined',
    'db_name' => DB_NAME ?? 'Not defined',
    'db_user' => DB_USER ?? 'Not defined',
    'connection' => false,
    'error' => null
];

try {
    require_once __DIR__ . '/config/database.php';
    $db = new Database();
    $conn = $db->getConnection();
    
    if ($conn) {
        $result['connection'] = true;
        $result['message'] = 'Database connected successfully!';
        
        // Test query
        $stmt = $conn->query("SELECT COUNT(*) as count FROM admin_users");
        $count = $stmt->fetch(PDO::FETCH_ASSOC);
        $result['admin_users_count'] = $count['count'];
    }
} catch (Exception $e) {
    $result['error'] = $e->getMessage();
    $result['message'] = 'Database connection failed';
}

echo json_encode($result, JSON_PRETTY_PRINT);
?>
