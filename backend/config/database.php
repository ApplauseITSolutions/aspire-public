<?php
/**
 * Database Configuration
 * Handles PDO database connection
 */

class Database {
    private $host = 'localhost';
    private $db_name = 'aspireks_aspire_db';
    private $username = 'aspireks_aspire_db';
    private $password = 'Applause@2026';
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
            // Return JSON error instead of HTML
            header('Content-Type: application/json');
            http_response_code(500);
            echo json_encode([
                'status' => false,
                'message' => 'Database connection failed: ' . $exception->getMessage()
            ]);
            exit();
        }

        return $this->conn;
    }
}
?>
