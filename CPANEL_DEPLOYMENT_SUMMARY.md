# cPanel Deployment Summary - www.aspireks.com

## What Changed for Production

### Configuration Updates
1. **Removed `/aspire-public` path** - Now works at root domain
2. **Updated API endpoints** - Points to production URLs
3. **Created production config templates** - Easy to update with your credentials
4. **Added root .htaccess** - Handles routing and HTTPS redirect

### Files Created
- `.htaccess` - Root htaccess for domain routing
- `backend/config/config.production.php` - Production config template
- `backend/config/database.production.php` - Database config template
- `database/admin-user-setup.sql` - SQL to create admin user
- `CPANEL_DEPLOYMENT_GUIDE.md` - Complete deployment guide
- `DEPLOYMENT_CHECKLIST.md` - Quick checklist

---

## Quick Start (30 Minutes Total)

### Phase 1: Database (5 min)
1. Create database in cPanel MySQL Databases
2. Import `database/schema.sql` in phpMyAdmin
3. Run `database/admin-user-setup.sql` to create admin user

### Phase 2: Configuration (5 min)
1. Copy `backend/config/config.production.php` → `backend/config/config.php`
2. Copy `backend/config/database.production.php` → `backend/config/database.php`
3. Update both files with your:
   - Database credentials (from cPanel)
   - Email settings (Gmail + App Password)
   - Razorpay keys (test keys first!)

### Phase 3: Build (10 min)
```bash
# Main website
npm install
npm run build

# Admin panel
cd admin-frontend
npm install
npm run build
cd ..
```

### Phase 4: Upload (10 min)
Upload to `public_html/`:
- Everything from `dist/` → root of `public_html/`
- `admin/` folder → `public_html/admin/`
- `backend/` folder → `public_html/backend/`
- `.htaccess` → `public_html/.htaccess`

Create folders:
- `public_html/uploads/` (755 permissions)
- `public_html/backend/logs/` (755 permissions)

Install Composer dependencies:
- SSH: `cd public_html/backend && composer install --no-dev`
- OR upload `vendor/` folder after running locally

---

## File Structure on Server

```
public_html/
├── .htaccess                    ← Routes all requests
├── index.html                   ← Main website entry
├── assets/                      ← CSS, JS, images
├── *.png, *.jpg, *.ico         ← Favicon and images
│
├── admin/                       ← Admin panel
│   ├── index.html
│   └── assets/
│
├── backend/                     ← PHP API
│   ├── .htaccess               ← API routing
│   ├── index.php               ← API entry point
│   ├── composer.json
│   ├── config/
│   │   ├── config.php          ← Main config (UPDATE THIS)
│   │   └── database.php        ← DB config (UPDATE THIS)
│   ├── controllers/
│   ├── models/
│   ├── utils/
│   ├── vendor/                 ← Composer dependencies
│   └── logs/                   ← Error logs (CREATE THIS)
│
└── uploads/                     ← File uploads (CREATE THIS)
```

---

## Critical Configuration Values

### 1. Database Credentials
**Location:** `backend/config/config.php` AND `backend/config/database.php`

```php
// In cPanel, your database name will be prefixed with your username
// Example: If username is "aspireks" and you created "aspire_db"
// The full name will be: aspireks_aspire_db

define('DB_HOST', 'localhost');
define('DB_NAME', 'YOUR_CPANEL_USERNAME_aspire_db');
define('DB_USER', 'YOUR_CPANEL_USERNAME_dbuser');
define('DB_PASS', 'your_database_password');
```

### 2. Email Configuration
**Location:** `backend/config/config.php`

```php
// Use Gmail App Password, not your regular password
// Generate at: https://myaccount.google.com/apppasswords

define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'xxxx xxxx xxxx xxxx'); // 16-char app password
```

### 3. Razorpay Keys
**Location:** `backend/config/config.php`

```php
// Start with TEST keys, switch to LIVE after testing
define('RAZORPAY_KEY_ID', 'rzp_test_YOUR_KEY');
define('RAZORPAY_KEY_SECRET', 'YOUR_SECRET');
```

### 4. Security Settings
**Location:** `backend/config/config.php`

```php
// Generate random string for JWT
define('JWT_SECRET', 'CHANGE_THIS_TO_RANDOM_STRING');

// Disable errors in production
error_reporting(0);
ini_set('display_errors', 0);
```

---

## Testing Your Deployment

### 1. Main Website
- Visit: `https://www.aspireks.com`
- Check: All pages load correctly
- Test: Contact form submission
- Test: Internship enrollment form
- Verify: Images and assets load

### 2. Admin Panel
- Visit: `https://www.aspireks.com/admin`
- Login: username `admin`, password `password`
- **IMMEDIATELY CHANGE PASSWORD!**
- Check: Dashboard shows stats
- Test: View internships, contacts, enquiries
- Test: Update status of submissions

### 3. API Endpoints
Test these URLs (should return JSON):
- `https://www.aspireks.com/backend/api/admin/dashboard`
- Should show auth error (expected without token)

### 4. Email Notifications
- Submit a contact form
- Check if email arrives
- Verify email formatting and logo

---

## Common cPanel Database Name Patterns

Your database name in cPanel is usually prefixed with your username:

| Your Username | Database Created | Full Database Name |
|--------------|------------------|-------------------|
| aspireks | aspire_db | aspireks_aspire_db |
| aspire | aspire_db | aspire_aspire_db |
| username | aspire_db | username_aspire_db |

**To find your exact database name:**
1. Go to cPanel → MySQL Databases
2. Look under "Current Databases"
3. Copy the full name (including prefix)

---

## Troubleshooting Quick Fixes

### 500 Error
```bash
# Check .htaccess syntax
# Verify file permissions: files=644, folders=755
# Check error logs in cPanel
```

### Database Connection Failed
```php
// Verify in config.php and database.php:
// 1. Database name includes cPanel username prefix
// 2. User has ALL PRIVILEGES on database
// 3. Password is correct (no extra spaces)
```

### Admin Panel Blank
```
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify admin/index.html exists
4. Check Network tab for failed API calls
```

### Forms Not Submitting
```
1. Check browser console for errors
2. Verify backend/.htaccess exists
3. Test API URL directly in browser
4. Check CORS headers in config.php
```

---

## Security Checklist

After deployment:
- [ ] Change default admin password
- [ ] Update JWT_SECRET to random string
- [ ] Disable error display (error_reporting(0))
- [ ] Use HTTPS (SSL certificate installed)
- [ ] Use Gmail App Password (not regular password)
- [ ] Start with Razorpay TEST keys
- [ ] Set proper file permissions (644/755)
- [ ] Secure sensitive files in .htaccess

---

## Post-Deployment Monitoring

### First 24 Hours
- Monitor `backend/logs/php-errors.log`
- Check email notifications work
- Test all forms multiple times
- Verify admin panel functionality
- Test payment flow (test mode)

### Regular Maintenance
- Weekly database backups (cPanel backup)
- Monitor disk space (uploads folder)
- Check error logs monthly
- Update Composer dependencies quarterly
- Review admin user access

---

## Important URLs

| Purpose | URL |
|---------|-----|
| Main Website | https://www.aspireks.com |
| Admin Panel | https://www.aspireks.com/admin |
| API Base | https://www.aspireks.com/backend/api |
| cPanel | https://www.aspireks.com:2083 |
| phpMyAdmin | Via cPanel → Databases |

---

## Default Login Credentials

**Admin Panel:**
- URL: https://www.aspireks.com/admin
- Username: `admin`
- Password: `password`
- **⚠️ CHANGE IMMEDIATELY AFTER FIRST LOGIN!**

---

## Support & Documentation

- Full Guide: `CPANEL_DEPLOYMENT_GUIDE.md`
- Quick Checklist: `DEPLOYMENT_CHECKLIST.md`
- Database Setup: `database/admin-user-setup.sql`
- Schema: `database/schema.sql`

---

## Need Help?

1. Check browser console (F12) for frontend errors
2. Check `backend/logs/php-errors.log` for backend errors
3. Check cPanel error logs
4. Test API endpoints directly in browser
5. Verify database connection in phpMyAdmin

---

**Ready to Deploy?**

Follow the steps in `DEPLOYMENT_CHECKLIST.md` for a guided deployment process.

Good luck! 🚀
