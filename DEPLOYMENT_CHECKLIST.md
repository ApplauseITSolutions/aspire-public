# Quick Deployment Checklist for www.aspireks.com

## Before You Start
- [ ] cPanel login credentials ready
- [ ] Database created in cPanel (note the full name with prefix)
- [ ] Database user created with password
- [ ] Node.js installed on your local machine

---

## Step-by-Step Deployment

### 1. Database Setup (5 minutes)
- [ ] Login to cPanel
- [ ] Go to MySQL Databases
- [ ] Note your database name: `_________________`
- [ ] Note your database user: `_________________`
- [ ] Note your database password: `_________________`
- [ ] Go to phpMyAdmin
- [ ] Select your database
- [ ] Import `database/schema.sql`
- [ ] Run this SQL to create admin user:
```sql
INSERT INTO admin_users (username, email, password, full_name, role, is_active, created_at) 
VALUES ('admin', 'admin@aspireks.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin User', 'super_admin', 1, NOW());
```

### 2. Update Configuration Files (5 minutes)
- [ ] Copy `backend/config/config.production.php` to `backend/config/config.php`
- [ ] Update database credentials in `backend/config/config.php`
- [ ] Update email settings (Gmail + App Password)
- [ ] Update Razorpay keys (use test keys first!)
- [ ] Copy `backend/config/database.production.php` to `backend/config/database.php`
- [ ] Update database credentials in `backend/config/database.php`

### 3. Build Applications (10 minutes)
```bash
# Build main website
npm install
npm run build

# Build admin panel
cd admin-frontend
npm install
npm run build
cd ..
```

### 4. Upload Files to cPanel (15 minutes)
Upload to `public_html/`:
- [ ] All files from `dist/` folder → `public_html/`
- [ ] `admin/` folder → `public_html/admin/`
- [ ] `backend/` folder → `public_html/backend/`
- [ ] `.htaccess` (root) → `public_html/.htaccess`

### 5. Install Backend Dependencies (5 minutes)
**Option A - SSH:**
```bash
cd public_html/backend
composer install --no-dev
```

**Option B - No SSH:**
- [ ] Run `composer install` locally in backend folder
- [ ] Upload entire `backend/vendor/` folder via FTP

### 6. Create Required Folders (2 minutes)
In cPanel File Manager, create:
- [ ] `public_html/uploads/` (permissions: 755)
- [ ] `public_html/backend/logs/` (permissions: 755)

### 7. Test Everything (10 minutes)
- [ ] Visit `https://www.aspireks.com` - main site loads
- [ ] Test navigation between pages
- [ ] Visit `https://www.aspireks.com/admin` - admin panel loads
- [ ] Login with username: `admin`, password: `password`
- [ ] Change admin password immediately!
- [ ] Test contact form submission
- [ ] Check if email arrives
- [ ] Test internship enrollment form

### 8. Security (5 minutes)
- [ ] Change default admin password
- [ ] Verify error display is OFF in config.php
- [ ] Generate new JWT secret
- [ ] Test SSL certificate (https://)

---

## Quick File Locations

### On Your Computer (After Build):
```
dist/                    → Upload to public_html/
admin/                   → Upload to public_html/admin/
backend/                 → Upload to public_html/backend/
.htaccess               → Upload to public_html/.htaccess
```

### On cPanel Server:
```
public_html/
├── .htaccess
├── index.html
├── assets/
├── admin/
├── backend/
└── uploads/
```

---

## Important Credentials to Update

### Database (in config.php and database.php):
```php
DB_NAME: ___________________
DB_USER: ___________________
DB_PASS: ___________________
```

### Email (in config.php):
```php
SMTP_USERNAME: ___________________
SMTP_PASSWORD: ___________________ (Gmail App Password)
```

### Razorpay (in config.php):
```php
RAZORPAY_KEY_ID: ___________________
RAZORPAY_KEY_SECRET: ___________________
```

---

## Common Issues & Quick Fixes

### "500 Internal Server Error"
- Check `.htaccess` files are uploaded
- Check file permissions (files: 644, folders: 755)
- Check PHP error logs in cPanel

### "Database Connection Failed"
- Verify database name includes cPanel username prefix
- Check credentials in both config.php and database.php
- Test connection in phpMyAdmin

### "Admin Panel Blank Page"
- Check browser console (F12)
- Verify `admin/index.html` exists
- Check if API URL is correct

### "Forms Not Working"
- Check browser console for errors
- Verify backend/api endpoints are accessible
- Check CORS settings in config.php

---

## Support URLs

- Main Site: https://www.aspireks.com
- Admin Panel: https://www.aspireks.com/admin
- API Test: https://www.aspireks.com/backend/api/admin/dashboard
- cPanel: https://www.aspireks.com:2083

---

## Post-Deployment

After successful deployment:
1. Test all forms thoroughly
2. Send test emails
3. Test payment flow (use test mode first!)
4. Monitor error logs for first 24 hours
5. Set up regular database backups in cPanel

---

**Deployment Date:** _____________
**Time Taken:** _____________
**Issues Encountered:** _____________
**Notes:** _____________
