<?php
/**
 * Contact Submission Model
 */

require_once __DIR__ . '/BaseModel.php';

class ContactSubmission extends BaseModel {
    public function __construct() {
        parent::__construct('contact_submissions');
    }
    
    public function createSubmission($data) {
        if (!isset($data['created_at'])) {
            $data['created_at'] = date('Y-m-d H:i:s');
        }
        
        return $this->create($data);
    }
    
    public function updateStatus($id, $status) {
        return $this->update($id, ['status' => $status]);
    }
    
    public function getByStatus($status, $limit = null, $offset = 0) {
        $sql = "SELECT * FROM {$this->table_name} WHERE status = ? ORDER BY created_at DESC";
        
        if ($limit) {
            $sql .= " LIMIT ? OFFSET ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(1, $status);
            $stmt->bindValue(2, $limit, PDO::PARAM_INT);
            $stmt->bindValue(3, $offset, PDO::PARAM_INT);
        } else {
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(1, $status);
        }
        
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    public function search($keyword, $limit = null, $offset = 0) {
        $sql = "SELECT * FROM {$this->table_name} WHERE 
                name LIKE ? OR 
                email LIKE ? OR 
                phone LIKE ? OR 
                subject LIKE ? OR 
                message LIKE ? 
                ORDER BY created_at DESC";
        
        $search_term = "%$keyword%";
        
        if ($limit) {
            $sql .= " LIMIT ? OFFSET ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(1, $search_term);
            $stmt->bindValue(2, $search_term);
            $stmt->bindValue(3, $search_term);
            $stmt->bindValue(4, $search_term);
            $stmt->bindValue(5, $search_term);
            $stmt->bindValue(6, $limit, PDO::PARAM_INT);
            $stmt->bindValue(7, $offset, PDO::PARAM_INT);
        } else {
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(1, $search_term);
            $stmt->bindValue(2, $search_term);
            $stmt->bindValue(3, $search_term);
            $stmt->bindValue(4, $search_term);
            $stmt->bindValue(5, $search_term);
        }
        
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    public function getStats() {
        $sql = "SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new,
                    SUM(CASE WHEN status = 'read' THEN 1 ELSE 0 END) as read_count,
                    SUM(CASE WHEN status = 'replied' THEN 1 ELSE 0 END) as replied
                FROM {$this->table_name}";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        
        return $stmt->fetch();
    }
}
?>
