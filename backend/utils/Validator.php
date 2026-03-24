<?php
/**
 * Validation Utility Class
 * Provides common validation functions
 */

class Validator {
    public static function required($data, $fields) {
        $errors = [];
        
        foreach ($fields as $field) {
            if (!isset($data[$field]) || empty(trim($data[$field]))) {
                $errors[$field] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
            }
        }
        
        return $errors;
    }
    
    public static function email($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
    
    public static function phone($phone) {
        return preg_match('/^[0-9]{10,15}$/', $phone);
    }
    
    public static function name($name) {
        return preg_match('/^[a-zA-Z\s]{2,50}$/', $name);
    }
    
    public static function password($password) {
        return strlen($password) >= 6;
    }
    
    public static function file($file, $allowed_types = [], $max_size = 5242880) {
        $errors = [];
        
        if ($file['error'] !== UPLOAD_ERR_OK) {
            $errors[] = 'File upload error';
            return $errors;
        }
        
        // Check file size
        if ($file['size'] > $max_size) {
            $errors[] = 'File size exceeds maximum limit';
        }
        
        // Check file type
        if (!empty($allowed_types)) {
            $file_extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
            if (!in_array($file_extension, $allowed_types)) {
                $errors[] = 'File type not allowed';
            }
        }
        
        return $errors;
    }
    
    public static function sanitize($data) {
        if (is_array($data)) {
            return array_map('self::sanitize', $data);
        }
        return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
    }
}
?>
