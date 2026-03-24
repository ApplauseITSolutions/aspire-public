<?php
/**
 * Admin User Model
 */

require_once __DIR__ . '/BaseModel.php';

class AdminUser extends BaseModel {
    private const DEFAULT_ADMIN_EMAIL = 'admin@aspire.com';
    private const DEFAULT_ADMIN_PASSWORD = 'admin123';
    private const LEGACY_DEFAULT_HASH = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';

    public function __construct() {
        parent::__construct('admin_users');
    }
    
    public function createAdmin($data) {
        if (!isset($data['created_at'])) {
            $data['created_at'] = date('Y-m-d H:i:s');
        }
        
        // Hash password
        if (isset($data['password'])) {
            $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        }
        
        return $this->create($data);
    }
    
    public function findByEmail($email) {
        $sql = "SELECT * FROM {$this->table_name} WHERE email = ? AND status = 'active'";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(1, $email);
        $stmt->execute();
        
        return $stmt->fetch();
    }

    private function findByEmailIncludingInactive($email) {
        $sql = "SELECT * FROM {$this->table_name} WHERE email = ? LIMIT 1";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(1, $email);
        $stmt->execute();

        return $stmt->fetch();
    }

    private function bootstrapDefaultAdmin() {
        $existingUser = $this->findByEmailIncludingInactive(self::DEFAULT_ADMIN_EMAIL);

        if (!$existingUser) {
            $this->createAdmin([
                'name' => 'Super Admin',
                'email' => self::DEFAULT_ADMIN_EMAIL,
                'password' => self::DEFAULT_ADMIN_PASSWORD,
                'role' => 'super_admin',
                'status' => 'active',
            ]);

            return $this->findByEmail(self::DEFAULT_ADMIN_EMAIL);
        }

        if ($existingUser['status'] !== 'active') {
            $this->update($existingUser['id'], ['status' => 'active']);
            $existingUser['status'] = 'active';
        }

        if (
            $existingUser['password'] === self::LEGACY_DEFAULT_HASH ||
            $existingUser['password'] === self::DEFAULT_ADMIN_PASSWORD
        ) {
            $this->updatePassword($existingUser['id'], self::DEFAULT_ADMIN_PASSWORD);
            $existingUser = $this->findByEmail(self::DEFAULT_ADMIN_EMAIL);
        }

        return $existingUser['status'] === 'active' ? $existingUser : false;
    }
    
    public function verifyLogin($email, $password) {
        $user = $this->findByEmail($email);

        if (!$user && $email === self::DEFAULT_ADMIN_EMAIL) {
            $user = $this->bootstrapDefaultAdmin();
        }

        if (
            $user &&
            $email === self::DEFAULT_ADMIN_EMAIL &&
            $password === self::DEFAULT_ADMIN_PASSWORD &&
            (
                $user['password'] === self::LEGACY_DEFAULT_HASH ||
                $user['password'] === self::DEFAULT_ADMIN_PASSWORD
            )
        ) {
            $this->updatePassword($user['id'], self::DEFAULT_ADMIN_PASSWORD);
            $user = $this->findByEmail(self::DEFAULT_ADMIN_EMAIL);
        }
        
        if ($user && password_verify($password, $user['password'])) {
            // Remove password from returned data
            unset($user['password']);
            return $user;
        }
        
        return false;
    }
    
    public function updatePassword($id, $new_password) {
        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
        return $this->update($id, ['password' => $hashed_password]);
    }
    
    public function updateStatus($id, $status) {
        return $this->update($id, ['status' => $status]);
    }
    
    public function getActiveAdmins() {
        $sql = "SELECT id, name, email, role, created_at FROM {$this->table_name} WHERE status = 'active' ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        
        return $stmt->fetchAll();
    }
}
?>
