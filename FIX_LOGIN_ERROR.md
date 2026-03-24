# Fix Login Error - "Call to undefined function start_session()"

## The Problem

You're seeing this error: **"Uncaught Error: Call to undefined function start_session()"**

This error appears to be coming from an old version of the `index.php` file on your server.

## Quick Fix Steps

### Step 1: Upload Updated index.php

The `backend/index.php` file has been updated to fix PHP compatibility issues.

**Upload this file to your server:**
- Local: `backend/index.php`
- Server: `public_html/backend/index.php`

### Step 2: Test Your Backend

Upload these test files to check everything:

1. **backend/test-api-simple.php** - Tests if PHP is working
2. **backend/test-database.php** - Tests database connection
3. **backend/test-login.php** - Tests login functionality

**Visit these URLs:**
```
https://www.aspireks.com/backend/test-api-simple.php
https://www.aspireks.com/backend/test-database.php
https://www.aspireks.com/backend/test-login.php
```

### Step 3: Check Results

#### test-api-simple.php should show:
```json
{
  "status": "success",
  "message": "Backend is working!",
  "php_version": "8.x.x"
}
```

#### test-database.php should show:
```json
{
  "connection": true,
  "message": "Database connected successfully!",
  "admin_users_count": 1
}
```

#### test-login.php should show:
```json
{
  "status": "success",
  "message": "All tests passed!",
  "steps": [
    "✓ Database connected",
    "✓ Admin user found",
    "✓ Password verification works",
    "✓ JWT token generated"
  ]
}
```

---

## Common Issues & Solutions

### Issue 1: "Call to undefined function str_starts_with"

**Cause:** PHP version < 8.0

**Solution:** I've updated `backend/index.php` to use `strpos()` instead, which works on PHP 7.x

**Action:** Re-upload `backend/index.php`

---

### Issue 2: Database Connection Failed

**Symptoms:**
```json
{
  "connection": false,
  "error": "Access denied for user..."
}
```

**Solution:**

1. Check your database credentials in **both** files:
   - `backend/config/config.php`
   - `backend/config/database.php`

2. Verify database name includes cPanel prefix:
   ```php
   // WRONG:
   define('DB_NAME', 'aspire_db');
   
   // CORRECT:
   define('DB_NAME', 'aspireks_aspire_db');
   ```

3. Test in phpMyAdmin:
   - Can you login with the same credentials?
   - Can you see the database?

---

### Issue 3: Admin User Not Found

**Symptoms:**
```json
{
  "steps": ["✗ Admin user NOT found"]
}
```

**Solution:**

Run this SQL in phpMyAdmin:

```sql
-- Check if admin user exists
SELECT * FROM admin_users WHERE email = 'admin@aspireks.com';

-- If not found, create it:
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
```

---

### Issue 4: Password Verification Failed

**Symptoms:**
```json
{
  "steps": ["✗ Password verification failed"]
}
```

**Solution:**

The password hash in the database doesn't match. Reset it:

```sql
UPDATE admin_users 
SET password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
WHERE email = 'admin@aspireks.com';
```

This sets the password to: `password`

---

### Issue 5: CORS Error

**Symptoms:**
```
Access to fetch at 'https://www.aspireks.com/backend/api/auth/login' 
from origin 'https://www.aspireks.com' has been blocked by CORS policy
```

**Solution:**

Check `backend/config/config.php`:

```php
// Change from:
header("Access-Control-Allow-Origin: *");

// To:
header("Access-Control-Allow-Origin: https://www.aspireks.com");
```

Or for testing, use `*` to allow all origins.

---

## Step-by-Step Debugging

### 1. Check PHP Version
Visit: `https://www.aspireks.com/backend/test-api-simple.php`

Should show PHP 7.4+ or 8.x

### 2. Check Database Connection
Visit: `https://www.aspireks.com/backend/test-database.php`

Should show:
- `"connection": true`
- `"admin_users_count": 1`

### 3. Check Login Functionality
Visit: `https://www.aspireks.com/backend/test-login.php`

Should show all steps with ✓

### 4. Test Login from Admin Panel

1. Clear browser cache (Ctrl + Shift + Delete)
2. Visit: `https://www.aspireks.com/admin`
3. Login with:
   - Email: `admin@aspireks.com`
   - Password: `password`

---

## Files to Upload

Make sure these files are uploaded correctly:

```
public_html/backend/
├── index.php                    ← UPDATED (re-upload this)
├── config/
│   ├── config.php              ← Check database credentials
│   └── database.php            ← Check database credentials
├── test-api-simple.php         ← NEW (for testing)
├── test-database.php           ← NEW (for testing)
└── test-login.php              ← NEW (for testing)
```

---

## Quick Checklist

- [ ] Re-upload `backend/index.php` (updated version)
- [ ] Upload test files (`test-*.php`)
- [ ] Visit `test-api-simple.php` - should work
- [ ] Visit `test-database.php` - should connect
- [ ] Visit `test-login.php` - should pass all tests
- [ ] Check database credentials in config files
- [ ] Verify admin user exists in database
- [ ] Clear browser cache
- [ ] Try login again

---

## Still Not Working?

### Check Error Logs

1. **PHP Error Log:**
   ```
   public_html/backend/logs/php-errors.log
   ```

2. **cPanel Error Log:**
   ```
   cPanel → Errors → View last 300 errors
   ```

3. **Browser Console:**
   ```
   F12 → Console tab
   Look for red errors
   ```

### Check File Permissions

```bash
# Files should be 644
chmod 644 backend/index.php
chmod 644 backend/config/*.php

# Directories should be 755
chmod 755 backend/
chmod 755 backend/config/
```

---

## Contact Information

If you're still stuck after trying all these steps:

1. Take screenshots of:
   - Browser console errors (F12)
   - test-database.php output
   - test-login.php output
   - phpMyAdmin showing admin_users table

2. Check:
   - PHP version (from test-api-simple.php)
   - Database name (from cPanel MySQL Databases)
   - File permissions (from cPanel File Manager)

---

## Summary

The main issue is likely one of these:

1. ✅ **Old index.php file** - Re-upload the updated version
2. ✅ **Wrong database credentials** - Check config.php and database.php
3. ✅ **Admin user doesn't exist** - Run SQL to create it
4. ✅ **PHP version incompatibility** - Updated code works on PHP 7.4+

**Next Step:** Upload the updated `backend/index.php` and test files, then visit the test URLs to diagnose the exact issue.
