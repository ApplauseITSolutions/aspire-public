-- Admin User Setup for Aspire Portal
-- Run this in phpMyAdmin after importing schema.sql

-- Create default admin user
-- Username: admin
-- Password: password (CHANGE THIS AFTER FIRST LOGIN!)
INSERT INTO admin_users (username, email, password, full_name, role, is_active, created_at) 
VALUES (
    'admin',
    'admin@aspireks.com',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'Admin User',
    'super_admin',
    1,
    NOW()
);

-- Verify the user was created
SELECT id, username, email, full_name, role, is_active, created_at 
FROM admin_users 
WHERE username = 'admin';

-- Optional: Create additional admin users
-- Uncomment and modify as needed

-- INSERT INTO admin_users (username, email, password, full_name, role, is_active, created_at) 
-- VALUES (
--     'manager',
--     'manager@aspireks.com',
--     '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
--     'Manager User',
--     'admin',
--     1,
--     NOW()
-- );

-- To change password later, use this query:
-- UPDATE admin_users 
-- SET password = '$2y$10$NEW_HASHED_PASSWORD_HERE'
-- WHERE username = 'admin';

-- Note: To generate a new password hash, use PHP:
-- php -r "echo password_hash('your_new_password', PASSWORD_BCRYPT);"
