<?php
/**
 * Admin Dashboard Controller
 */

require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/Auth.php';
require_once __DIR__ . '/../utils/Validator.php';
require_once __DIR__ . '/../models/InternshipEnrolment.php';
require_once __DIR__ . '/../models/ContactSubmission.php';
require_once __DIR__ . '/../models/LandingEnquiry.php';

class AdminController {
    private $enrolment_model;
    private $contact_model;
    private $enquiry_model;
    
    public function __construct() {
        $this->enrolment_model = new InternshipEnrolment();
        $this->contact_model = new ContactSubmission();
        $this->enquiry_model = new LandingEnquiry();
        
        // Check authentication for all admin endpoints
        $this->checkAuth();
    }
    
    private function checkAuth() {
        $user = Auth::getCurrentUser();
        
        if (!$user) {
            Response::unauthorized('Access denied');
        }
    }
    
    public function dashboard() {
        // Get statistics
        $enrolment_stats = $this->enrolment_model->getStats();
        $contact_stats = $this->contact_model->getStats();
        $enquiry_stats = $this->enquiry_model->getStats();
        
        $dashboard_data = [
            'enrolments' => [
                'total' => (int)$enrolment_stats['total'],
                'pending' => (int)$enrolment_stats['pending'],
                'confirmed' => (int)$enrolment_stats['confirmed'],
                'rejected' => (int)$enrolment_stats['rejected'],
                'completed' => (int)$enrolment_stats['completed'],
                'paid' => (int)$enrolment_stats['paid']
            ],
            'contacts' => [
                'total' => (int)$contact_stats['total'],
                'new' => (int)$contact_stats['new'],
                'read' => (int)$contact_stats['read_count'],
                'replied' => (int)$contact_stats['replied']
            ],
            'enquiries' => [
                'total' => (int)$enquiry_stats['total'],
                'new' => (int)$enquiry_stats['new'],
                'contacted' => (int)$enquiry_stats['contacted'],
                'interested' => (int)$enquiry_stats['interested'],
                'converted' => (int)$enquiry_stats['converted'],
                'not_interested' => (int)$enquiry_stats['not_interested']
            ]
        ];
        
        Response::success('Dashboard data retrieved successfully', $dashboard_data);
    }
    
    public function internships($method) {
        switch ($method) {
            case 'GET':
                $this->getInternships();
                break;
            case 'PUT':
                $this->updateInternship();
                break;
            default:
                Response::error('Method not allowed', 405);
                break;
        }
    }
    
    private function getInternships() {
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
        $search = isset($_GET['search']) ? $_GET['search'] : '';
        $status = isset($_GET['status']) ? $_GET['status'] : '';
        
        $offset = ($page - 1) * $limit;
        
        if (!empty($search)) {
            $internships = $this->enrolment_model->search($search, $limit, $offset);
        } elseif (!empty($status)) {
            $internships = $this->enrolment_model->getByStatus($status, $limit, $offset);
        } else {
            $internships = $this->enrolment_model->findAll($limit, $offset);
        }
        
        $total = $this->enrolment_model->count();
        
        Response::success('Internships retrieved successfully', [
            'data' => $internships,
            'pagination' => [
                'page' => $page,
                'limit' => $limit,
                'total' => $total,
                'pages' => ceil($total / $limit)
            ]
        ]);
    }
    
    private function updateInternship() {
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        if (!isset($input['id']) || empty($input['id'])) {
            Response::validation_error(['id' => 'Internship ID is required']);
        }
        
        $id = (int)$input['id'];
        
        // Check if internship exists
        $internship = $this->enrolment_model->findById($id);
        if (!$internship) {
            Response::not_found('Internship not found');
        }
        
        // Prepare update data
        $update_data = [];
        
        if (isset($input['enrolment_status'])) {
            $update_data['enrolment_status'] = $input['enrolment_status'];
        }
        
        if (isset($input['admin_notes'])) {
            $update_data['admin_notes'] = $input['admin_notes'];
        }
        
        if (empty($update_data)) {
            Response::error('No data to update');
        }
        
        // Update internship
        if ($this->enrolment_model->update($id, $update_data)) {
            Response::success('Internship updated successfully');
        } else {
            Response::error('Failed to update internship');
        }
    }
    
    public function contacts($method) {
        switch ($method) {
            case 'GET':
                $this->getContacts();
                break;
            case 'PUT':
                $this->updateContact();
                break;
            default:
                Response::error('Method not allowed', 405);
                break;
        }
    }
    
    private function getContacts() {
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
        $search = isset($_GET['search']) ? $_GET['search'] : '';
        $status = isset($_GET['status']) ? $_GET['status'] : '';
        
        $offset = ($page - 1) * $limit;
        
        if (!empty($search)) {
            $contacts = $this->contact_model->search($search, $limit, $offset);
        } elseif (!empty($status)) {
            $contacts = $this->contact_model->getByStatus($status, $limit, $offset);
        } else {
            $contacts = $this->contact_model->findAll($limit, $offset);
        }
        
        $total = $this->contact_model->count();
        
        Response::success('Contacts retrieved successfully', [
            'data' => $contacts,
            'pagination' => [
                'page' => $page,
                'limit' => $limit,
                'total' => $total,
                'pages' => ceil($total / $limit)
            ]
        ]);
    }
    
    private function updateContact() {
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        if (!isset($input['id']) || empty($input['id'])) {
            Response::validation_error(['id' => 'Contact ID is required']);
        }
        
        $id = (int)$input['id'];
        
        // Check if contact exists
        $contact = $this->contact_model->findById($id);
        if (!$contact) {
            Response::not_found('Contact not found');
        }
        
        // Prepare update data
        $update_data = [];
        
        if (isset($input['status'])) {
            $update_data['status'] = $input['status'];
        }
        
        if (isset($input['admin_notes'])) {
            $update_data['admin_notes'] = $input['admin_notes'];
        }
        
        if (empty($update_data)) {
            Response::error('No data to update');
        }
        
        // Update contact
        if ($this->contact_model->update($id, $update_data)) {
            Response::success('Contact updated successfully');
        } else {
            Response::error('Failed to update contact');
        }
    }
    
    public function enquiries($method) {
        switch ($method) {
            case 'GET':
                $this->getEnquiries();
                break;
            case 'PUT':
                $this->updateEnquiry();
                break;
            default:
                Response::error('Method not allowed', 405);
                break;
        }
    }
    
    private function getEnquiries() {
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
        $search = isset($_GET['search']) ? $_GET['search'] : '';
        $status = isset($_GET['status']) ? $_GET['status'] : '';
        
        $offset = ($page - 1) * $limit;
        
        if (!empty($search)) {
            $enquiries = $this->enquiry_model->search($search, $limit, $offset);
        } elseif (!empty($status)) {
            $enquiries = $this->enquiry_model->getByStatus($status, $limit, $offset);
        } else {
            $enquiries = $this->enquiry_model->findAll($limit, $offset);
        }
        
        $total = $this->enquiry_model->count();
        
        Response::success('Enquiries retrieved successfully', [
            'data' => $enquiries,
            'pagination' => [
                'page' => $page,
                'limit' => $limit,
                'total' => $total,
                'pages' => ceil($total / $limit)
            ]
        ]);
    }
    
    private function updateEnquiry() {
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        if (!isset($input['id']) || empty($input['id'])) {
            Response::validation_error(['id' => 'Enquiry ID is required']);
        }
        
        $id = (int)$input['id'];
        
        // Check if enquiry exists
        $enquiry = $this->enquiry_model->findById($id);
        if (!$enquiry) {
            Response::not_found('Enquiry not found');
        }
        
        // Prepare update data
        $update_data = [];
        
        if (isset($input['status'])) {
            $update_data['status'] = $input['status'];
        }
        
        if (isset($input['admin_notes'])) {
            $update_data['admin_notes'] = $input['admin_notes'];
        }
        
        if (empty($update_data)) {
            Response::error('No data to update');
        }
        
        // Update enquiry
        if ($this->enquiry_model->update($id, $update_data)) {
            Response::success('Enquiry updated successfully');
        } else {
            Response::error('Failed to update enquiry');
        }
    }
}
?>
