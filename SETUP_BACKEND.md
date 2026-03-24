# Backend Setup Guide - Fix Email & PDF Issues

## Issues You're Experiencing

1. ❌ **Email not sending** - PHPMailer not installed
2. ❌ **PDF not downloading** - jsPDF autoTable import issue
3. ❌ **Payment verification failed** - Backend error

## Quick Fix Steps

### Step 1: Install Backend Dependencies (For Email)

The email functionality requires PHPMailer which needs to be installed via Composer.

#### Option A: If you have Composer installed
```bash
cd backend
composer install
```

#### Option B: If you don't have Composer
1. Download Composer: https://getcomposer.org/download/
2. Install it
3. Then run:
```bash
cd backend
composer install
```

#### Option C: Skip Email for Now
The system will work without emails. Emails are optional and won't block the payment flow.

### Step 2: Fix Frontend Dependencies (For PDF)

The PDF library needs to be reinstalled:

```bash
# In the project root (not in backend folder)
npm install jspdf jspdf-autotable --save
```

### Step 3: Restart Development Server

After installing dependencies:

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

### Step 4: Clear Browser Cache

1. Open browser DevTools (F12)
2. Right-click on refresh button
3. Select "Empty Cache and Hard Reload"

## Testing After Setup

### Test 1: Check Backend Dependencies
```bash
cd backend
ls vendor/phpmailer
```
Should show PHPMailer folder if installed correctly.

### Test 2: Check Frontend Dependencies
```bash
npm list jspdf jspdf-autotable
```
Should show both packages installed.

### Test 3: Test Enrollment Flow
1. Go to: http://localhost:5173/programs/guaranteed-internship
2. Click "Apply Now"
3. Fill form:
   - Name: Test User
   - Email: your-email@example.com
   - Phone: 9876543210
   - College: Test College
4. Submit
5. Use test card: 4111 1111 1111 1111
6. CVV: 123, Expiry: 12/25
7. Complete payment

### Expected Results
✅ Payment should complete
✅ PDF should download automatically
✅ Success screen should appear
✅ Email should be sent (if PHPMailer installed)

## If Email Still Doesn't Work

### Check SMTP Settings

Edit `backend/config/config.php`:

```php
// Email Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'applauseitdev@gmail.com');
define('SMTP_PASSWORD', 'okyc smgd vhdk vyah');
```

### Test Email Manually

Create `backend/test-email.php`:

```php
<?php
require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/utils/Email.php';

try {
    $email = new Email();
    $result = $email->sendEnrolmentConfirmation('your-email@example.com', [
        'id' => 'TEST123',
        'first_name' => 'Test',
        'last_name' => 'User',
        'email' => 'your-email@example.com',
        'phone' => '9876543210',
        'college_name' => 'Test College',
        'degree' => 'N/A',
        'branch' => 'N/A',
        'year_of_study' => 'N/A',
        'internship_domain' => 'Test',
        'enrolment_status' => 'pending'
    ]);
    
    if ($result) {
        echo "Email sent successfully!";
    } else {
        echo "Email failed to send.";
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

Run: `http://localhost/aspire-public/backend/test-email.php`

## If PDF Still Doesn't Download

### Check Browser Console

1. Open DevTools (F12)
2. Go to Console tab
3. Look for errors related to jsPDF or autoTable

### Common PDF Errors

**Error: "doc.autoTable is not a function"**
- Solution: Reinstall jspdf-autotable
```bash
npm uninstall jspdf jspdf-autotable
npm install jspdf jspdf-autotable --save
```

**Error: "Cannot read property 'autoTable' of undefined"**
- Solution: Clear node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Manual PDF Download

If automatic download fails, the success screen has a "Download PDF Again" button. Click it to manually download.

## If Payment Verification Fails

### Check Backend Logs

Look at the browser Network tab:
1. Open DevTools (F12)
2. Go to Network tab
3. Find the `/api/payment/verify` request
4. Check the Response

### Common Payment Errors

**Error: "Payment verification failed"**

Possible causes:
1. Database not set up
2. Backend not running
3. Razorpay credentials incorrect

**Solution:**
1. Check database: http://localhost/aspire-public/backend/test-connection.php
2. Verify backend is accessible: http://localhost/aspire-public/backend/
3. Check Razorpay keys in `backend/config/config.php`

## Database Setup (If Not Done)

### Create Database
```sql
CREATE DATABASE aspire_db;
```

### Import Schema
```bash
mysql -u root -p aspire_db < database/schema.sql
```

Or use phpMyAdmin:
1. Open: http://localhost/phpmyadmin
2. Select `aspire_db`
3. Click Import
4. Choose `database/schema.sql`
5. Click Go

## Complete Setup Checklist

- [ ] Composer installed
- [ ] Backend dependencies installed (`composer install`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Database created and schema imported
- [ ] SMTP credentials configured
- [ ] Razorpay credentials configured
- [ ] Development server running
- [ ] Browser cache cleared

## Still Having Issues?

### Check These Files

1. **Backend Config**
   - File: `backend/config/config.php`
   - Check: Razorpay keys, SMTP settings

2. **Database Connection**
   - Test: http://localhost/aspire-public/backend/test-connection.php
   - Should show: "Database connection successful"

3. **Frontend Dependencies**
   - Check: `package.json` has jspdf and jspdf-autotable
   - Check: `node_modules/jspdf` folder exists

4. **Backend Dependencies**
   - Check: `backend/vendor/phpmailer` folder exists
   - Check: `backend/vendor/autoload.php` exists

## Error Messages Explained

### "doc.autoTable is not a function"
- **Cause:** jspdf-autotable not properly imported
- **Fix:** Updated import in `src/utils/pdfGenerator.js`
- **Action:** Restart dev server

### "Payment verification failed"
- **Cause:** Backend error or database issue
- **Fix:** Check backend logs and database
- **Action:** Run test-connection.php

### "Email failed to send"
- **Cause:** PHPMailer not installed or SMTP error
- **Fix:** Run `composer install` in backend folder
- **Action:** Test with test-email.php

## Quick Test Commands

```bash
# Test backend is running
curl http://localhost/aspire-public/backend/

# Test database connection
curl http://localhost/aspire-public/backend/test-connection.php

# Check if composer dependencies installed
ls backend/vendor/phpmailer

# Check if npm dependencies installed
ls node_modules/jspdf
ls node_modules/jspdf-autotable
```

## Summary

The main issues are:
1. **Email:** Need to run `composer install` in backend folder
2. **PDF:** Fixed import statement, need to restart dev server
3. **Payment:** Check database setup and backend configuration

After following these steps, everything should work!
