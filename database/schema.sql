-- Database Schema for Aspire Project
-- Created based on requirements.md

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS aspire_db;
USE aspire_db;

-- Admin Users Table for Authentication
CREATE TABLE admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'admin') DEFAULT 'admin',
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Internship Enrolments Table
CREATE TABLE internship_enrolments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    college_name VARCHAR(200) NOT NULL,
    degree VARCHAR(100) NOT NULL,
    branch VARCHAR(100) NOT NULL,
    year_of_study VARCHAR(20) NOT NULL,
    internship_domain VARCHAR(100) NOT NULL,
    start_date DATE,
    resume_path VARCHAR(255),
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    payment_amount DECIMAL(10,2),
    razorpay_order_id VARCHAR(100),
    razorpay_payment_id VARCHAR(100),
    razorpay_signature VARCHAR(255),
    enrolment_status ENUM('pending', 'confirmed', 'rejected', 'completed') DEFAULT 'pending',
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact Form Submissions Table
CREATE TABLE contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Landing Enquiry Form Submissions Table
CREATE TABLE landing_enquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    course_interest VARCHAR(100),
    current_status VARCHAR(100), -- e.g., student, working professional
    message TEXT,
    status ENUM('new', 'contacted', 'interested', 'converted', 'not_interested') DEFAULT 'new',
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Payment Transactions Table (for detailed payment tracking)
CREATE TABLE payment_transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    enrolment_id INT,
    razorpay_order_id VARCHAR(100) NOT NULL,
    razorpay_payment_id VARCHAR(100),
    razorpay_signature VARCHAR(255),
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    status ENUM('created', 'paid', 'failed', 'refunded') DEFAULT 'created',
    payment_date DATETIME,
    refund_date DATETIME,
    refund_amount DECIMAL(10,2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (enrolment_id) REFERENCES internship_enrolments(id) ON DELETE SET NULL
);

-- Email Logs Table (for tracking sent emails)
CREATE TABLE email_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    to_email VARCHAR(100) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    template_name VARCHAR(100), -- e.g., enrolment_confirmation, payment_success
    status ENUM('sent', 'failed', 'pending') DEFAULT 'pending',
    error_message TEXT,
    sent_at DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin Sessions Table (for session-based authentication)
CREATE TABLE admin_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    session_token VARCHAR(255) NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

-- Password Reset Tokens Table
CREATE TABLE password_reset_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    used BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

-- Insert default admin user (password: admin123)
INSERT INTO admin_users (name, email, password, role) VALUES 
('Super Admin', 'admin@aspire.com', '$2y$10$82EzdrfA5rP4Mby0QLLePuCuRINJTnxfwjpQDb.BvkrE3zRm0Rb7m', 'super_admin');

-- Create indexes for better performance
CREATE INDEX idx_internship_email ON internship_enrolments(email);
CREATE INDEX idx_internship_status ON internship_enrolments(enrolment_status);
CREATE INDEX idx_internship_payment ON internship_enrolments(payment_status);
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_enquiry_email ON landing_enquiries(email);
CREATE INDEX idx_enquiry_status ON landing_enquiries(status);
CREATE INDEX idx_payment_order ON payment_transactions(razorpay_order_id);
CREATE INDEX idx_session_token ON admin_sessions(session_token);
CREATE INDEX idx_reset_token ON password_reset_tokens(token);
