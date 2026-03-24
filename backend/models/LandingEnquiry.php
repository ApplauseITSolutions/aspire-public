<?php
/**
 * Landing Enquiry Model
 */

require_once __DIR__ . '/BaseModel.php';

class LandingEnquiry extends BaseModel {
    public function __construct() {
        parent::__construct('landing_enquiries');
    }
    
    public function createEnquiry($data) {
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
                course_interest LIKE ? OR 
                current_status LIKE ? OR 
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
            $stmt->bindValue(6, $search_term);
            $stmt->bindValue(7, $limit, PDO::PARAM_INT);
            $stmt->bindValue(8, $offset, PDO::PARAM_INT);
        } else {
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(1, $search_term);
            $stmt->bindValue(2, $search_term);
            $stmt->bindValue(3, $search_term);
            $stmt->bindValue(4, $search_term);
            $stmt->bindValue(5, $search_term);
            $stmt->bindValue(6, $search_term);
        }
        
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    public function getStats() {
        $sql = "SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new,
                    SUM(CASE WHEN status = 'contacted' THEN 1 ELSE 0 END) as contacted,
                    SUM(CASE WHEN status = 'interested' THEN 1 ELSE 0 END) as interested,
                    SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) as converted,
                    SUM(CASE WHEN status = 'not_interested' THEN 1 ELSE 0 END) as not_interested
                FROM {$this->table_name}";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        
        return $stmt->fetch();
    }
}
?>
