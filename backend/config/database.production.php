<?php
/**
 * Production Database Configuration
 * Copy this to database.php and update with your cPanel database details
 */

class Database {
    // UPDATE THESE WITH YOUR CPANEL DATABASE CREDENTIALS
    private $host = 'localhost';
    private $db_name = 'aspireks_aspire_db'; // Your cPanel database name
    private $username = 'aspireks_aspire_db'; // Your cPanel database username
    private $password = 'Applause@2026'; // Your database password
    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch(PDOException $exception) {
            // Log error instead of displaying in production
            error_log('Database connection failed: ' . $exception->getMessage());
            
            header('Content-Type: application/json');
            http_response_code(500);
            echo json_encode([
                'status' => false,
                'message' => 'Database connection failed. Please contact support.'
            ]);
            exit();
        }

        return $this->conn;
    }
}
?>
