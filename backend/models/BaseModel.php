<?php
/**
 * Base Model Class
 * Provides common database operations
 */

require_once __DIR__ . '/../config/database.php';

class BaseModel {
    protected $conn;
    protected $table_name;
    
    public function __construct($table_name) {
        $database = new Database();
        $this->conn = $database->getConnection();
        $this->table_name = $table_name;
    }
    
    public function create($data) {
        $columns = implode(', ', array_keys($data));
        $placeholders = implode(', ', array_fill(0, count($data), '?'));
        
        $sql = "INSERT INTO {$this->table_name} ($columns) VALUES ($placeholders)";
        
        $stmt = $this->conn->prepare($sql);
        
        $i = 1;
        foreach ($data as $value) {
            $stmt->bindValue($i++, $value);
        }
        
        if ($stmt->execute()) {
            return $this->conn->lastInsertId();
        }
        
        return false;
    }
    
    public function findById($id) {
        $sql = "SELECT * FROM {$this->table_name} WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(1, $id);
        $stmt->execute();
        
        return $stmt->fetch();
    }
    
    public function findAll($limit = null, $offset = 0) {
        $sql = "SELECT * FROM {$this->table_name}";
        
        if ($limit) {
            $sql .= " LIMIT ? OFFSET ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(1, $limit, PDO::PARAM_INT);
            $stmt->bindValue(2, $offset, PDO::PARAM_INT);
        } else {
            $stmt = $this->conn->prepare($sql);
        }
        
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    public function update($id, $data) {
        $set_clause = [];
        foreach (array_keys($data) as $key) {
            $set_clause[] = "$key = ?";
        }
        $set_clause = implode(', ', $set_clause);
        
        $sql = "UPDATE {$this->table_name} SET $set_clause WHERE id = ?";
        
        $stmt = $this->conn->prepare($sql);
        
        $i = 1;
        foreach ($data as $value) {
            $stmt->bindValue($i++, $value);
        }
        $stmt->bindValue($i, $id);
        
        return $stmt->execute();
    }
    
    public function delete($id) {
        $sql = "DELETE FROM {$this->table_name} WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(1, $id);
        
        return $stmt->execute();
    }
    
    public function count() {
        $sql = "SELECT COUNT(*) as count FROM {$this->table_name}";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        
        $result = $stmt->fetch();
        return $result['count'];
    }
    
    public function query($sql, $params = []) {
        $stmt = $this->conn->prepare($sql);
        
        $i = 1;
        foreach ($params as $param) {
            $stmt->bindValue($i++, $param);
        }
        
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
?>
