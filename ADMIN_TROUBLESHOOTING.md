# Admin Panel Login Troubleshooting Guide

## Issue: Login redirects back to /#/login

This happens when the login fails. Here's how to fix it:

## Step 1: Verify Correct Credentials

The default admin credentials are:
- **Email:** `admin@aspire.com` (NOT admin@wl.org)
- **Password:** `admin123`

## Step 2: Test the Backend API

Open this URL in your browser to test the backend:
```
http://localhost/aspire-public/backend/test-api.html
```

This will show you:
- If the backend is accessible
- If the database connection works
- If the admin user exists
- Detailed debug information

## Step 3: Check Database Setup

1. Open phpMyAdmin or MySQL command line
2. Run these commands:

```sql
USE aspire_db;

-- Check if admin user exists
SELECT * FROM admin_users WHERE email = 'admin@aspire.com';

-- If no user exists, create one
INSERT INTO admin_users (name, email, password, role, status) 
VALUES ('Super Admin', 'admin@aspire.com', '$2y$10$82EzdrfA5rP4Mby0QLLePuCuRINJTnxfwjpQDb.BvkrE3zRm0Rb7m', 'super_admin', 'active');
```

## Step 4: Verify Backend Configuration

Check `backend/config/config.php`:

```php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'aspire_db');
define('DB_USER', 'root');
define('DB_PASS', '');

// Security Configuration
define('JWT_SECRET', 'your-super-secret-jwt-key-here');
```

Make sure:
- Database credentials are correct
- JWT_SECRET is set (any random string)
- Database `aspire_db` exists

## Step 5: Test Backend Directly

Run the test script:
```
http://localhost/aspire-public/backend/test-login.php
```

This will show you if:
- Database connection works
- Admin user exists
- Password verification works
- JWT token generation works

## Step 6: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Try to login
4. Look for any error messages

Common errors:
- **CORS error:** Backend CORS headers not set correctly
- **404 error:** Backend API not accessible
- **Network error:** Backend server not running

## Step 7: Check Network Tab

1. Open browser DevTools (F12)
2. Go to Network tab
3. Try to login
4. Look for the `/api/auth/login` request

Check:
- **Request URL:** Should be `http://localhost/aspire-public/backend/api/auth/login`
- **Request Method:** Should be POST
- **Request Payload:** Should contain email and password
- **Response Status:** Should be 200 if successful, 401 if credentials wrong
- **Response Body:** Should contain status, message, and data

## Step 8: Clear Browser Cache

Sometimes old cached files cause issues:

1. Open DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"
4. Or press Ctrl+Shift+Delete and clear cache

## Step 9: Verify .htaccess

Make sure `backend/.htaccess` exists and contains:

```apache
RewriteEngine On

# Route API requests through the PHP front controller.
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^api/(.*)$ index.php [QSA,L]
```

Also verify that Apache `mod_rewrite` is enabled.

## Step 10: Check PHP Error Logs

Look at your PHP error logs:
- XAMPP: `C:\xampp\apache\logs\error.log`
- WAMP: `C:\wamp64\logs\php_error.log`
- Linux: `/var/log/apache2/error.log`

## Common Issues and Solutions

### Issue: "Invalid email or password"

**Cause:** Wrong credentials or user doesn't exist

**Solution:**
1. Use correct email: `admin@aspire.com` (not admin@wl.org)
2. Use correct password: `admin123`
3. Run the SQL INSERT command from Step 3

### Issue: "Network Error" or "Failed to fetch"

**Cause:** Backend not accessible

**Solution:**
1. Make sure Apache/XAMPP is running
2. Verify the URL: `http://localhost/aspire-public/backend/api/auth/login`
3. Check if `backend/index.php` is accessible
4. Verify .htaccess is working

### Issue: "CORS Error"

**Cause:** CORS headers not set

**Solution:**
Check `backend/config/config.php` has:
```php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
```

### Issue: Login succeeds but redirects back

**Cause:** Token not being saved or routing issue

**Solution:**
1. Check browser console for errors
2. Check if localStorage is enabled
3. Clear localStorage: `localStorage.clear()`
4. Rebuild admin frontend: `cd admin-frontend && npm run build`

## Quick Fix Commands

```bash
# Rebuild admin frontend
cd admin-frontend
npm run build

# Check if database exists
mysql -u root -p -e "SHOW DATABASES LIKE 'aspire_db';"

# Create database if missing
mysql -u root -p < database/schema.sql

# Test backend
curl -X POST http://localhost/aspire-public/backend/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@aspire.com","password":"admin123"}'
```

## Still Having Issues?

1. Open `http://localhost/aspire-public/backend/test-api.html`
2. Click "Test Login (Debug API)"
3. Copy the debug output
4. Check what's failing in the debug info

The debug output will tell you exactly what's wrong:
- `database_connected: false` → Database connection issue
- `user_found: false` → Admin user doesn't exist
- `login_verified: false` → Wrong password or password hash issue

## Success Checklist

✅ Database `aspire_db` exists
✅ Table `admin_users` exists with admin user
✅ Backend accessible at `http://localhost/aspire-public/backend/api/auth/login`
✅ Using correct credentials: `admin@aspire.com` / `admin123`
✅ Admin frontend built and deployed to `admin/` folder
✅ Browser console shows no errors
✅ Network tab shows 200 response from login API
✅ localStorage contains `admin_token` and `admin_user` after login

If all checkboxes are checked, login should work!
