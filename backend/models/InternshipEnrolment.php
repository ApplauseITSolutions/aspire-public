<?php
/**
 * Internship Enrolment Model
 */

require_once __DIR__ . '/BaseModel.php';

class InternshipEnrolment extends BaseModel {
    public function __construct() {
        parent::__construct('internship_enrolments');
    }
    
    public function createEnrolment($data) {
        // Add created_at if not provided
        if (!isset($data['created_at'])) {
            $data['created_at'] = date('Y-m-d H:i:s');
        }
        
        return $this->create($data);
    }
    
    public function updateStatus($id, $status) {
        return $this->update($id, ['enrolment_status' => $status]);
    }
    
    public function updatePaymentStatus($id, $payment_status, $payment_data = []) {
        $update_data = ['payment_status' => $payment_status];
        
        if (!empty($payment_data)) {
            $update_data = array_merge($update_data, $payment_data);
        }
        
        return $this->update($id, $update_data);
    }
    
    public function getByEmail($email) {
        $sql = "SELECT * FROM {$this->table_name} WHERE email = ? ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(1, $email);
        $stmt->execute();
        
        return $stmt->fetchAll();
    }
    
    public function getByStatus($status, $limit = null, $offset = 0) {
        $sql = "SELECT * FROM {$this->table_name} WHERE enrolment_status = ? ORDER BY created_at DESC";
        
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
                first_name LIKE ? OR 
                last_name LIKE ? OR 
                email LIKE ? OR 
                college_name LIKE ? OR 
                phone LIKE ? 
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
                    SUM(CASE WHEN enrolment_status = 'pending' THEN 1 ELSE 0 END) as pending,
                    SUM(CASE WHEN enrolment_status = 'confirmed' THEN 1 ELSE 0 END) as confirmed,
                    SUM(CASE WHEN enrolment_status = 'rejected' THEN 1 ELSE 0 END) as rejected,
                    SUM(CASE WHEN enrolment_status = 'completed' THEN 1 ELSE 0 END) as completed,
                    SUM(CASE WHEN payment_status = 'paid' THEN 1 ELSE 0 END) as paid
                FROM {$this->table_name}";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        
        return $stmt->fetch();
    }
}
?>
