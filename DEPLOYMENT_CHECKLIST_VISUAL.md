# 📋 Visual Deployment Checklist

Print this page and check off items as you complete them!

---

## ✅ PRE-DEPLOYMENT (On Your Computer)

### Database Information
```
┌─────────────────────────────────────────┐
│ cPanel Database Details                 │
├─────────────────────────────────────────┤
│ Database Name: ___________________      │
│ Database User: ___________________      │
│ Database Pass: ___________________      │
│                                         │
│ Email (Gmail): ___________________      │
│ App Password:  ___________________      │
│                                         │
│ Razorpay Test Key: _______________      │
│ Razorpay Secret:   _______________      │
└─────────────────────────────────────────┘
```

### Build Process
- [ ] ✅ Run `build-for-production.bat` (Windows) or `.sh` (Mac/Linux)
- [ ] ✅ Build completed without errors
- [ ] ✅ `deployment-package/` folder created
- [ ] ✅ `dist/` folder exists
- [ ] ✅ `admin/` folder exists
- [ ] ✅ `backend/vendor/` folder exists

### Configuration Files
- [ ] ✅ Copy `backend/config/config.production.php` → `config.php`
- [ ] ✅ Update `config.php` with database credentials
- [ ] ✅ Update `config.php` with email settings
- [ ] ✅ Update `config.php` with Razorpay keys
- [ ] ✅ Generate random JWT_SECRET
- [ ] ✅ Set `error_reporting(0)` in config.php
- [ ] ✅ Copy `backend/config/database.production.php` → `database.php`
- [ ] ✅ Update `database.php` with database credentials

---

## ✅ DATABASE SETUP (In cPanel)

### Create Database
- [ ] ✅ Login to cPanel
- [ ] ✅ Go to MySQL Databases
- [ ] ✅ Create new database
- [ ] ✅ Create database user
- [ ] ✅ Set strong password
- [ ] ✅ Add user to database (ALL PRIVILEGES)
- [ ] ✅ Note full database name (with prefix)

### Import Schema
- [ ] ✅ Go to phpMyAdmin
- [ ] ✅ Select your database
- [ ] ✅ Click Import tab
- [ ] ✅ Upload `database/schema.sql`
- [ ] ✅ Click Go to execute
- [ ] ✅ Verify tables created (4 tables)

### Create Admin User
- [ ] ✅ Open SQL tab in phpMyAdmin
- [ ] ✅ Paste SQL from `database/admin-user-setup.sql`
- [ ] ✅ Execute query
- [ ] ✅ Verify admin user created

---

## ✅ FILE UPLOAD (To cPanel)

### Upload Files
- [ ] ✅ Login to cPanel File Manager
- [ ] ✅ Navigate to `public_html/`
- [ ] ✅ Delete default index.html (if exists)
- [ ] ✅ Upload all files from `deployment-package/`
- [ ] ✅ Verify `.htaccess` uploaded to root
- [ ] ✅ Verify `index.html` in root
- [ ] ✅ Verify `assets/` folder exists
- [ ] ✅ Verify `admin/` folder exists
- [ ] ✅ Verify `backend/` folder exists

### Create Required Folders
- [ ] ✅ Create `uploads/` folder in `public_html/`
- [ ] ✅ Set permissions to 755
- [ ] ✅ Create `logs/` folder in `backend/`
- [ ] ✅ Set permissions to 755

### Verify File Structure
```
public_html/
├── ✅ .htaccess
├── ✅ index.html
├── ✅ assets/
├── ✅ admin/
│   ├── ✅ index.html
│   └── ✅ assets/
├── ✅ backend/
│   ├── ✅ .htaccess
│   ├── ✅ index.php
│   ├── ✅ config/
│   ├── ✅ controllers/
│   ├── ✅ models/
│   ├── ✅ utils/
│   ├── ✅ vendor/
│   └── ✅ logs/
└── ✅ uploads/
```

---

## ✅ TESTING (Verify Everything Works)

### Main Website
- [ ] ✅ Visit `https://www.aspireks.com`
- [ ] ✅ Home page loads correctly
- [ ] ✅ Navigate to About page
- [ ] ✅ Navigate to Programs page
- [ ] ✅ Navigate to Contact page
- [ ] ✅ Images load correctly
- [ ] ✅ No console errors (F12)

### Contact Form
- [ ] ✅ Fill out contact form
- [ ] ✅ Submit form
- [ ] ✅ See success message
- [ ] ✅ Check email received
- [ ] ✅ Verify email formatting

### Internship Enrollment
- [ ] ✅ Navigate to internship program
- [ ] ✅ Click "Enroll Now"
- [ ] ✅ Fill out enrollment form
- [ ] ✅ Test payment flow (test mode)
- [ ] ✅ Verify confirmation

### Admin Panel
- [ ] ✅ Visit `https://www.aspireks.com/admin`
- [ ] ✅ Login page loads
- [ ] ✅ Login with username: `admin`, password: `password`
- [ ] ✅ Dashboard loads with stats
- [ ] ✅ View Internships page
- [ ] ✅ View Contacts page
- [ ] ✅ View Enquiries page
- [ ] ✅ Test status update
- [ ] ✅ No console errors

### API Endpoints
- [ ] ✅ Test: `https://www.aspireks.com/backend/api/admin/dashboard`
- [ ] ✅ Returns JSON (auth error expected)
- [ ] ✅ No 404 errors

---

## ✅ SECURITY (Lock It Down)

### Admin Security
- [ ] ✅ Login to admin panel
- [ ] ✅ Change admin password immediately
- [ ] ✅ Use strong password (12+ chars)
- [ ] ✅ Logout and login with new password

### Configuration Security
- [ ] ✅ Verify `error_reporting(0)` in config.php
- [ ] ✅ Verify `display_errors` is OFF
- [ ] ✅ JWT_SECRET is random string (not default)
- [ ] ✅ Database password is strong
- [ ] ✅ Using Gmail App Password (not regular password)

### SSL/HTTPS
- [ ] ✅ SSL certificate installed
- [ ] ✅ Site loads with https://
- [ ] ✅ No mixed content warnings
- [ ] ✅ HTTP redirects to HTTPS

### File Permissions
- [ ] ✅ Files set to 644
- [ ] ✅ Directories set to 755
- [ ] ✅ uploads/ is 755
- [ ] ✅ backend/logs/ is 755

---

## ✅ POST-DEPLOYMENT (Final Steps)

### Email Configuration
- [ ] ✅ Gmail App Password generated
- [ ] ✅ Updated in config.php
- [ ] ✅ Test email sent successfully
- [ ] ✅ Email received in inbox
- [ ] ✅ Logo displays in email

### Payment Configuration
- [ ] ✅ Razorpay test keys configured
- [ ] ✅ Test payment successful
- [ ] ✅ Payment confirmation received
- [ ] ✅ Database updated with payment status
- [ ] ✅ Ready to switch to live keys (when ready)

### Monitoring Setup
- [ ] ✅ Check `backend/logs/php-errors.log`
- [ ] ✅ Check cPanel error logs
- [ ] ✅ Set up log monitoring
- [ ] ✅ Test error logging works

### Backup Setup
- [ ] ✅ Enable cPanel automatic backups
- [ ] ✅ Download initial backup
- [ ] ✅ Schedule weekly database exports
- [ ] ✅ Document backup procedure

---

## ✅ DOCUMENTATION

### Record Information
```
┌─────────────────────────────────────────┐
│ Deployment Information                  │
├─────────────────────────────────────────┤
│ Deployment Date: ___/___/______         │
│ Deployed By: ___________________        │
│                                         │
│ Site URL: https://www.aspireks.com      │
│ Admin URL: /admin                       │
│ API URL: /backend/api                   │
│                                         │
│ Admin Username: admin                   │
│ Admin Email: ___________________        │
│                                         │
│ Database Name: _________________        │
│ Database Host: localhost                │
│                                         │
│ Email: _________________________        │
│ Razorpay Mode: [ ] Test [ ] Live        │
└─────────────────────────────────────────┘
```

### Share with Team
- [ ] ✅ Document admin credentials (securely)
- [ ] ✅ Share deployment guide with team
- [ ] ✅ Document any custom configurations
- [ ] ✅ Create maintenance schedule

---

## ✅ FINAL VERIFICATION

### Functionality Check
- [ ] ✅ All pages accessible
- [ ] ✅ All forms working
- [ ] ✅ Emails sending
- [ ] ✅ Admin panel functional
- [ ] ✅ Payments processing (test mode)
- [ ] ✅ No errors in logs
- [ ] ✅ Mobile responsive
- [ ] ✅ Fast loading times

### Performance Check
- [ ] ✅ Page load time < 3 seconds
- [ ] ✅ Images optimized
- [ ] ✅ No console errors
- [ ] ✅ No 404 errors
- [ ] ✅ HTTPS working
- [ ] ✅ Redirects working

---

## 🎉 DEPLOYMENT COMPLETE!

```
┌─────────────────────────────────────────┐
│         CONGRATULATIONS!                │
│                                         │
│  Your site is now live at:              │
│  https://www.aspireks.com               │
│                                         │
│  Admin Panel:                           │
│  https://www.aspireks.com/admin         │
│                                         │
│  Next Steps:                            │
│  • Monitor logs for 24 hours            │
│  • Test all features thoroughly         │
│  • Switch Razorpay to live mode         │
│  • Set up regular backups               │
│  • Share with stakeholders              │
└─────────────────────────────────────────┘
```

### Post-Launch Monitoring (First 24 Hours)
- [ ] ✅ Hour 1: Check error logs
- [ ] ✅ Hour 4: Verify forms working
- [ ] ✅ Hour 8: Check email delivery
- [ ] ✅ Hour 24: Full functionality test

### Week 1 Tasks
- [ ] ✅ Day 1: Monitor closely
- [ ] ✅ Day 3: Check database growth
- [ ] ✅ Day 7: First backup
- [ ] ✅ Day 7: Performance review

---

**Deployment Status:** [ ] In Progress [ ] Complete [ ] Issues Found

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________
_____________________________________________

**Issues Encountered:**
_____________________________________________
_____________________________________________
_____________________________________________
_____________________________________________

**Resolution:**
_____________________________________________
_____________________________________________
_____________________________________________
_____________________________________________

---

**Signed Off By:** ___________________  **Date:** ___/___/______
