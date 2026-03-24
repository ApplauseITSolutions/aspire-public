<?php
/**
 * Authentication Utility Class
 * Handles JWT token creation and validation
 */

class Auth {
    public static function generateToken($payload) {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = json_encode($payload);
        
        $header_encoded = self::base64url_encode($header);
        $payload_encoded = self::base64url_encode($payload);
        
        $signature = hash_hmac('sha256', $header_encoded . "." . $payload_encoded, JWT_SECRET, true);
        $signature_encoded = self::base64url_encode($signature);
        
        return $header_encoded . "." . $payload_encoded . "." . $signature_encoded;
    }
    
    public static function validateToken($token) {
        if (empty($token)) {
            return false;
        }
        
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return false;
        }
        
        $header = base64_decode($parts[0]);
        $payload = base64_decode($parts[1]);
        $signature = $parts[2];
        
        // Verify signature
        $valid_signature = hash_hmac('sha256', $parts[0] . "." . $parts[1], JWT_SECRET, true);
        $valid_signature_encoded = self::base64url_encode($valid_signature);
        
        if ($signature !== $valid_signature_encoded) {
            return false;
        }
        
        // Check expiration
        $payload_data = json_decode($payload, true);
        if (isset($payload_data['exp']) && $payload_data['exp'] < time()) {
            return false;
        }
        
        return $payload_data;
    }
    
    public static function getCurrentUser() {
        $headers = getallheaders();
        $token = null;
        
        if (isset($headers['Authorization'])) {
            $auth_header = $headers['Authorization'];
            $token = str_replace('Bearer ', '', $auth_header);
        }
        
        if (!$token) {
            return null;
        }
        
        $payload = self::validateToken($token);
        return $payload ? $payload : null;
    }
    
    private static function base64url_encode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
    
    public static function hashPassword($password) {
        return password_hash($password, PASSWORD_DEFAULT);
    }
    
    public static function verifyPassword($password, $hash) {
        return password_verify($password, $hash);
    }
}
?>
