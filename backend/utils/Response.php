<?php
/**
 * Response Utility Class
 * Standardizes API responses
 */

class Response {
    public static function json($status, $message, $data = null, $http_code = 200) {
        http_response_code($http_code);
        header('Content-Type: application/json');
        
        $response = [
            'status' => $status,
            'message' => $message
        ];
        
        if ($data !== null) {
            $response['data'] = $data;
        }
        
        echo json_encode($response);
        exit;
    }
    
    public static function success($message = 'Success', $data = null) {
        self::json(true, $message, $data);
    }
    
    public static function error($message = 'Error', $http_code = 400) {
        self::json(false, $message, null, $http_code);
    }
    
    public static function validation_error($errors) {
        self::json(false, 'Validation failed', $errors, 422);
    }
    
    public static function unauthorized($message = 'Unauthorized') {
        self::json(false, $message, null, 401);
    }
    
    public static function forbidden($message = 'Forbidden') {
        self::json(false, $message, null, 403);
    }
    
    public static function not_found($message = 'Not found') {
        self::json(false, $message, null, 404);
    }
}
?>
