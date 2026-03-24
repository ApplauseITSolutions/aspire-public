# 🔧 Troubleshooting Guide - Common Issues & Solutions

## 🚨 Critical Issues

### Issue 1: "500 Internal Server Error"

**Symptoms:**
- White page with "500 Internal Server Error"
- Site won't load at all

**Causes & Solutions:**

1. **Incorrect .htaccess syntax**
   ```bash
   # Check .htaccess files exist:
   public_html/.htaccess
   public_html/backend/.htaccess
   
   # Temporarily rename to test:
   mv .htaccess .htaccess.bak
   # If site works, .htaccess has syntax error
   ```

2. **Wrong file permissions**
   ```bash
   # Set correct permissions:
   find public_html -type f -exec chmod 644 {} \;
   find public_html -type d -exec chmod 755 {} \;
   ```

3. **PHP errors**
   ```bash
   # Check error logs:
   cPanel → Errors
   backend/logs/php-errors.log
   ```

4. **Missing PHP extensions**
   ```bash
   # Check PHP version and extensions in cPanel
   # Required: PDO, PDO_MySQL, mbstring, openssl
   ```

---

### Issue 2: "Database Connection Failed"

**Symptoms:**
- Error message about database connection
- API returns database error

**Solutions:**

1. **Check database name prefix**
   ```php
   // WRONG:
   define('DB_NAME', 'aspire_db');
   
   // CORRECT (with cPanel username prefix):
   define('DB_NAME', 'aspireks_aspire_db');
   ```

2. **Verify credentials**
   ```bash
   # Test in phpMyAdmin:
   1. Login to phpMyAdmin
   2. Try to access your database
   3. If you can't, credentials are wrong
   ```

3. **Check user privileges**
   ```sql
   -- In phpMyAdmin, run:
   SHOW GRANTS FOR 'your_db_user'@'localhost';
   
   -- Should show ALL PRIVILEGES
   ```

4. **Update both config files**
   ```bash
   # Must update BOTH:
   backend/config/config.php
   backend/config/database.php
   ```

---

### Issue 3: Admin Panel Shows Blank Page

**Symptoms:**
- Admin panel loads but shows nothing
- White screen or blank page

**Solutions:**

1. **Check browser console**
   ```
   Press F12 → Console tab
   Look for JavaScript errors
   Common errors:
   - Failed to fetch
   - CORS error
   - 404 on API calls
   ```

2. **Verify admin files exist**
   ```bash
   # Check these files exist:
   public_html/admin/index.html
   public_html/admin/assets/index-xxxxx.js
   public_html/admin/assets/index-xxxxx.css
   ```

3. **Check API endpoint**
   ```bash
   # Visit directly in browser:
   https://www.aspireks.com/backend/api/admin/dashboard
   
   # Should return JSON (even if auth error)
   # If 404, backend routing is broken
   ```

4. **Verify base path**
   ```javascript
   // In admin-frontend/vite.config.js:
   base: '/admin/'  // Must match
   ```

---

### Issue 4: Forms Not Submitting

**Symptoms:**
- Contact form doesn't submit
- No success/error message
- Form just reloads

**Solutions:**

1. **Check browser console**
   ```
   F12 → Console
   Look for:
   - Network errors
   - CORS errors
   - 404 errors
   ```

2. **Test API directly**
   ```bash
   # Use browser or Postman:
   POST https://www.aspireks.com/backend/api/forms/contact
   
   Body:
   {
     "name": "Test",
     "email": "test@test.com",
     "message": "Test message"
   }
   ```

3. **Check CORS headers**
   ```php
   // In backend/config/config.php:
   header("Access-Control-Allow-Origin: https://www.aspireks.com");
   // Or use * for testing:
   header("Access-Control-Allow-Origin: *");
   ```

4. **Verify backend routing**
   ```bash
   # Check backend/.htaccess exists
   # Check backend/index.php exists
   # Check controllers exist
   ```

---

### Issue 5: Emails Not Sending

**Symptoms:**
- Forms submit successfully
- But no email received
- No error shown

**Solutions:**

1. **Check Gmail App Password**
   ```php
   // WRONG (regular password):
   define('SMTP_PASSWORD', 'mypassword123');
   
   // CORRECT (16-char app password):
   define('SMTP_PASSWORD', 'abcd efgh ijkl mnop');
   ```

2. **Generate Gmail App Password**
   ```
   1. Go to: https://myaccount.google.com/apppasswords
   2. Enable 2-Factor Authentication first
   3. Generate new app password
   4. Copy 16-character password
   5. Update config.php
   ```

3. **Check SMTP settings**
   ```php
   define('SMTP_HOST', 'smtp.gmail.com');
   define('SMTP_PORT', 587);  // Not 465
   define('SMTP_USERNAME', 'your-email@gmail.com');
   ```

4. **Test email function**
   ```php
   // Create test-email.php in backend:
   <?php
   require_once 'config/config.php';
   require_once 'utils/Email.php';
   
   $email = new Email();
   $result = $email->send(
       'test@test.com',
       'Test Subject',
       'Test message'
   );
   
   echo $result ? 'Success' : 'Failed';
   ?>
   ```

5. **Check spam folder**
   ```
   Emails might be going to spam
   Check spam/junk folder
   ```

---

## ⚠️ Common Issues

### Issue 6: Images Not Loading

**Solutions:**

1. **Check file paths**
   ```javascript
   // Use absolute paths:
   /assets/images/logo.png
   
   // Not relative:
   ../assets/images/logo.png
   ```

2. **Check file names (case-sensitive)**
   ```bash
   # Linux is case-sensitive:
   logo.PNG ≠ logo.png
   ```

3. **Verify files uploaded**
   ```bash
   # Check in File Manager:
   public_html/assets/images/
   ```

---

### Issue 7: Payment Not Working

**Solutions:**

1. **Check Razorpay keys**
   ```php
   // Test mode:
   define('RAZORPAY_KEY_ID', 'rzp_test_xxx');
   
   // Live mode:
   define('RAZORPAY_KEY_ID', 'rzp_live_xxx');
   ```

2. **Verify key in frontend**
   ```javascript
   // Check if key matches backend
   const options = {
     key: 'rzp_test_xxx',  // Must match config.php
   };
   ```

3. **Check Razorpay dashboard**
   ```
   Login to Razorpay
   Check test payments
   Verify webhook settings
   ```

---

### Issue 8: Admin Can't Login

**Solutions:**

1. **Verify admin user exists**
   ```sql
   -- In phpMyAdmin:
   SELECT * FROM admin_users WHERE username = 'admin';
   ```

2. **Reset admin password**
   ```sql
   -- In phpMyAdmin:
   UPDATE admin_users 
   SET password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
   WHERE username = 'admin';
   -- Password is now: password
   ```

3. **Check JWT secret**
   ```php
   // In config.php:
   define('JWT_SECRET', 'some-random-string');
   // Must not be empty
   ```

4. **Clear browser cache**
   ```
   Ctrl + Shift + Delete
   Clear cookies and cache
   Try again
   ```

---

### Issue 9: Slow Loading

**Solutions:**

1. **Enable caching**
   ```apache
   # Add to .htaccess:
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

2. **Optimize images**
   ```bash
   # Use tools like:
   - TinyPNG.com
   - ImageOptim
   - Squoosh.app
   ```

3. **Enable compression**
   ```apache
   # Add to .htaccess:
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/css application/javascript
   </IfModule>
   ```

---

### Issue 10: Mobile Not Working

**Solutions:**

1. **Check viewport meta tag**
   ```html
   <!-- In index.html: -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Test responsive design**
   ```
   F12 → Toggle device toolbar
   Test different screen sizes
   ```

3. **Check touch events**
   ```javascript
   // Ensure buttons work on touch
   // Test on actual mobile device
   ```

---

## 🔍 Debugging Tools

### 1. Browser Console
```
F12 → Console tab
Shows JavaScript errors
```

### 2. Network Tab
```
F12 → Network tab
Shows all API calls
Check status codes:
- 200: Success
- 404: Not found
- 500: Server error
```

### 3. PHP Error Log
```bash
# Check:
backend/logs/php-errors.log
cPanel → Errors
```

### 4. Database Queries
```sql
-- In phpMyAdmin:
-- Check data exists:
SELECT * FROM contact_submissions;
SELECT * FROM internship_enrolments;
SELECT * FROM admin_users;
```

### 5. API Testing
```bash
# Use Postman or curl:
curl -X POST https://www.aspireks.com/backend/api/forms/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'
```

---

## 📞 Getting Help

### Before Asking for Help

Gather this information:

1. **Error message** (exact text)
2. **Browser console** (screenshot)
3. **Network tab** (failed requests)
4. **PHP error log** (last 20 lines)
5. **What you tried** (steps taken)

### Useful Commands

```bash
# Check PHP version
php -v

# Check file permissions
ls -la public_html/

# View error log
tail -50 backend/logs/php-errors.log

# Test database connection
mysql -u username -p database_name
```

---

## ✅ Prevention Checklist

To avoid issues:

- [ ] Always test locally first
- [ ] Keep backups before changes
- [ ] Update one thing at a time
- [ ] Check error logs regularly
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Monitor performance
- [ ] Keep dependencies updated

---

## 🆘 Emergency Rollback

If everything breaks:

1. **Restore from backup**
   ```bash
   cPanel → Backup → Restore
   ```

2. **Revert database**
   ```bash
   phpMyAdmin → Import → Previous backup
   ```

3. **Clear cache**
   ```bash
   Browser: Ctrl + Shift + Delete
   Server: Delete cache files
   ```

4. **Start fresh**
   ```bash
   Delete all files
   Re-upload from deployment-package
   ```

---

## 📊 Health Check Script

Create `health-check.php` in backend:

```php
<?php
header('Content-Type: application/json');

$checks = [
    'php_version' => phpversion(),
    'database' => false,
    'email' => false,
    'uploads' => is_writable('../uploads'),
    'logs' => is_writable('logs'),
];

// Test database
try {
    require_once 'config/database.php';
    $db = new Database();
    $conn = $db->getConnection();
    $checks['database'] = true;
} catch (Exception $e) {
    $checks['database_error'] = $e->getMessage();
}

// Test email
try {
    require_once 'utils/Email.php';
    $checks['email'] = class_exists('Email');
} catch (Exception $e) {
    $checks['email_error'] = $e->getMessage();
}

echo json_encode($checks, JSON_PRETTY_PRINT);
?>
```

Visit: `https://www.aspireks.com/backend/health-check.php`

---

**Still stuck? Check the full deployment guide or contact support!**
