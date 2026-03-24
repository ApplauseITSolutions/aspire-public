# Quick Fix Guide - Razorpay Integration

## Issue Identified
The error "Unexpected token '<'" means the backend is returning HTML error instead of JSON. This is typically caused by:
1. Database not created
2. Database tables not created
3. PHP errors being displayed as HTML

## Quick Fix Steps

### Step 1: Test Database Connection
Open in browser: `http://localhost/aspire-public/backend/test-connection.php`

This will show you:
- If MySQL connection works
- If database exists
- Which tables are missing

### Step 2: Create Database (if needed)

**Option A: Using phpMyAdmin**
1. Open phpMyAdmin: `http://localhost/phpmyadmin`
2. Click "New" to create database
3. Database name: `aspire_db`
4. Collation: `utf8mb4_general_ci`
5. Click "Create"

**Option B: Using MySQL Command Line**
```bash
mysql -u root -p
CREATE DATABASE aspire_db;
exit;
```

### Step 3: Import Database Schema

**Option A: Using phpMyAdmin**
1. Select `aspire_db` database
2. Click "Import" tab
3. Choose file: `database/schema.sql`
4. Click "Go"

**Option B: Using MySQL Command Line**
```bash
mysql -u root -p aspire_db < database/schema.sql
```

**Option C: Using Command Line (from project root)**
```bash
cd database
mysql -u root -p aspire_db < schema.sql
```

### Step 4: Verify Setup
1. Refresh: `http://localhost/aspire-public/backend/test-connection.php`
2. Should show: "Database connection successful. All tables exist."

### Step 5: Test Enrollment Form
1. Go to: `http://localhost:5173/programs/guaranteed-internship`
2. Click "Apply Now"
3. Fill the form
4. Submit

## Common Issues & Solutions

### Issue 1: "Access denied for user 'root'@'localhost'"
**Solution:** Update database credentials in `backend/config/database.php`
```php
private $username = 'your_mysql_username';
private $password = 'your_mysql_password';
```

### Issue 2: "Unknown database 'aspire_db'"
**Solution:** Create the database (see Step 2 above)

### Issue 3: "Table 'aspire_db.internship_enrolments' doesn't exist"
**Solution:** Import the schema (see Step 3 above)

### Issue 4: Email not sending
**Solution:** This is optional. The form will work without emails. To enable:
1. Install Composer: `https://getcomposer.org/download/`
2. Run in backend folder:
```bash
cd backend
composer install
```

### Issue 5: CORS errors
**Solution:** Already configured in `backend/config/config.php`. If still having issues:
1. Check if Apache mod_headers is enabled
2. Verify .htaccess is working

## Verify Everything Works

### Test 1: Database Connection
```
URL: http://localhost/aspire-public/backend/test-connection.php
Expected: {"status": true, "message": "Database connection successful..."}
```

### Test 2: API Endpoint
```
URL: http://localhost/aspire-public/backend/api/forms/enrolment
Method: POST
Expected: JSON response (not HTML error)
```

### Test 3: Frontend Form
```
URL: http://localhost:5173/programs/guaranteed-internship
Action: Fill and submit form
Expected: Success message and payment modal
```

## Payment Testing

Once the form works:

1. **Test Card (Success):**
   - Card: 4111 1111 1111 1111
   - CVV: 123
   - Expiry: 12/25

2. **Test Card (Failure):**
   - Card: 4111 1111 1111 1112
   - CVV: 123
   - Expiry: 12/25

## Files Changed

1. ✅ `backend/config/config.php` - Updated credentials
2. ✅ `backend/config/database.php` - Fixed error handling
3. ✅ `backend/controllers/EnrolmentController.php` - Added error handling
4. ✅ `backend/controllers/PaymentController.php` - Added error handling
5. ✅ `backend/utils/Email.php` - Updated templates
6. ✅ `src/pages/GuaranteedInternshipDetails.jsx` - Enhanced payment flow
7. ✅ `backend/test-connection.php` - New test script

## Next Steps After Fix

1. Test the complete flow
2. Check admin panel to see enrollments
3. Test payment with Razorpay test cards
4. Verify email sending (optional)

## Need Help?

If you're still having issues:
1. Check browser console for errors
2. Check PHP error logs
3. Run test-connection.php to diagnose
4. Verify all credentials are correct

## Production Checklist

Before going live:
- [ ] Change Razorpay keys to live keys
- [ ] Update SMTP credentials
- [ ] Enable HTTPS
- [ ] Test complete flow
- [ ] Set up proper error logging
- [ ] Configure backup system
