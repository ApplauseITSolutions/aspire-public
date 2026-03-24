# Quick Troubleshooting Guide

## Current Errors & Fixes

### 1. PDF Download Error ✅ FIXED
**Error:** `doc.autoTable is not a function`

**What was wrong:** Incorrect import of jspdf-autotable

**Fixed in:** `src/utils/pdfGenerator.js`

**What to do:**
```bash
# Restart your development server
# Press Ctrl+C to stop
npm run dev
```

### 2. Email Not Sending ⚠️ NEEDS SETUP
**Error:** PHPMailer not installed

**What's wrong:** Backend dependencies not installed

**How to fix:**
```bash
cd backend
composer install
cd ..
```

**If you don't have Composer:**
- Download from: https://getcomposer.org/download/
- Install it
- Then run the command above

**Note:** Email is optional. The system works without it!

### 3. Payment Verification Failed ⚠️ CHECK DATABASE
**Error:** Payment verification failed

**Possible causes:**
1. Database not set up
2. Backend not running properly

**How to fix:**

**Step 1: Check Database**
Open in browser: `http://localhost/aspire-public/backend/test-connection.php`

Should show: "Database connection successful"

If not:
```sql
-- Create database
CREATE DATABASE aspire_db;

-- Import schema
USE aspire_db;
SOURCE database/schema.sql;
```

**Step 2: Check Backend**
Open in browser: `http://localhost/aspire-public/backend/`

Should show JSON response (not 404 error)

## Quick Test After Fixes

### Test 1: PDF Download
1. Go to: http://localhost:5173/programs/guaranteed-internship
2. Click "Apply Now"
3. Fill form with any data
4. Submit
5. Click "Pay Now"
6. Use test card: `4111 1111 1111 1111`
7. CVV: `123`, Expiry: `12/25`
8. Complete payment

**Expected:** PDF should download automatically

**If PDF doesn't download:**
- Check browser console (F12) for errors
- Click "Download PDF Again" button on success screen
- Check if popup blocker is blocking download

### Test 2: Email (Optional)
After payment completes, check your email inbox.

**If no email:**
- Check spam folder
- Run: `cd backend && composer install`
- Email is optional, system works without it

### Test 3: Payment
After completing test payment:

**Expected:**
- ✅ Success screen appears
- ✅ Shows "Payment successful"
- ✅ Shows email sent notification
- ✅ Shows PDF downloaded notification
- ✅ "Download PDF Again" button works

## Common Issues

### Issue: "Cannot find module 'jspdf-autotable'"
**Fix:**
```bash
npm install jspdf jspdf-autotable --save
npm run dev
```

### Issue: "Class 'PHPMailer' not found"
**Fix:**
```bash
cd backend
composer install
```

### Issue: "Database connection failed"
**Fix:**
1. Start MySQL/XAMPP
2. Create database: `aspire_db`
3. Import: `database/schema.sql`
4. Test: http://localhost/aspire-public/backend/test-connection.php

### Issue: "Payment verification failed"
**Fix:**
1. Check database is set up
2. Check backend is running
3. Check Razorpay credentials in `backend/config/config.php`
4. Check browser console for actual error message

### Issue: PDF downloads but is blank/corrupted
**Fix:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: "Download PDF Again" button doesn't work
**Fix:**
- Check browser console for errors
- Try different browser
- Check if popup blocker is enabled

## Step-by-Step Setup (If Starting Fresh)

### 1. Backend Setup
```bash
cd backend
composer install
cd ..
```

### 2. Frontend Setup
```bash
npm install
```

### 3. Database Setup
```sql
CREATE DATABASE aspire_db;
```
Then import `database/schema.sql` via phpMyAdmin or command line.

### 4. Start Development Server
```bash
npm run dev
```

### 5. Test
Go to: http://localhost:5173/programs/guaranteed-internship

## What Works Without Setup

✅ **Form submission** - Works
✅ **Payment flow** - Works (if database set up)
✅ **PDF download** - Works (after restart)
✅ **Success screen** - Works

⚠️ **Email sending** - Needs composer install (optional)

## Files That Were Fixed

1. ✅ `src/utils/pdfGenerator.js` - Fixed autoTable import
2. ✅ `src/pages/GuaranteedInternshipDetails.jsx` - Added error handling
3. ✅ `src/pages/CampusToCorporateDetails.jsx` - Added error handling

## Next Steps

1. **Restart dev server** (most important!)
   ```bash
   # Press Ctrl+C
   npm run dev
   ```

2. **Install backend dependencies** (for email)
   ```bash
   cd backend
   composer install
   ```

3. **Test the flow**
   - Fill form
   - Complete payment
   - Check PDF downloads
   - Check email (if composer installed)

## Still Not Working?

### Check Browser Console
1. Press F12
2. Go to Console tab
3. Look for red errors
4. Share the error message

### Check Network Tab
1. Press F12
2. Go to Network tab
3. Submit form
4. Look for failed requests (red)
5. Click on failed request
6. Check Response tab

### Check Backend
Open: http://localhost/aspire-public/backend/test-connection.php

Should show database status.

## Contact for Help

If still having issues, provide:
1. Error message from browser console
2. Response from test-connection.php
3. Which step is failing (form/payment/pdf/email)

---

**TL;DR:**
1. Restart dev server: `npm run dev`
2. Install backend deps: `cd backend && composer install`
3. Check database: http://localhost/aspire-public/backend/test-connection.php
4. Test enrollment flow
