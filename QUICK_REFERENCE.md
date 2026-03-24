# Quick Reference Card - Aspire Portal Deployment

## 🎯 Essential Commands

### Build for Production
```bash
# Windows
build-for-production.bat

# Mac/Linux
./build-for-production.sh
```

### Install Dependencies
```bash
# Main frontend
npm install

# Admin frontend
cd admin-frontend && npm install && cd ..

# Backend
cd backend && composer install --no-dev && cd ..
```

---

## 📁 Critical Files to Update

### 1. backend/config/config.php
```php
define('SITE_URL', 'https://www.aspireks.com');
define('DB_NAME', 'YOUR_DB_NAME');
define('DB_USER', 'YOUR_DB_USER');
define('DB_PASS', 'YOUR_DB_PASS');
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'app-password-here');
define('RAZORPAY_KEY_ID', 'rzp_test_xxx');
define('RAZORPAY_KEY_SECRET', 'secret_xxx');
define('JWT_SECRET', 'random-string-here');
error_reporting(0);
ini_set('display_errors', 0);
```

### 2. backend/config/database.php
```php
private $db_name = 'YOUR_DB_NAME';
private $username = 'YOUR_DB_USER';
private $password = 'YOUR_DB_PASS';
```

---

## 🗄️ Database Setup

### Import Schema
```sql
-- In phpMyAdmin, import:
database/schema.sql
```

### Create Admin User
```sql
-- Run in phpMyAdmin:
INSERT INTO admin_users (username, email, password, full_name, role, is_active, created_at) 
VALUES ('admin', 'admin@aspireks.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin User', 'super_admin', 1, NOW());
```

---

## 📤 Upload Structure

```
public_html/
├── .htaccess
├── index.html
├── assets/
├── admin/
├── backend/
└── uploads/ (create this)
```

---

## 🔐 Default Credentials

**Admin Panel:**
- URL: https://www.aspireks.com/admin
- Username: `admin`
- Password: `password`
- ⚠️ CHANGE IMMEDIATELY!

---

## 🧪 Test URLs

| Test | URL |
|------|-----|
| Main Site | https://www.aspireks.com |
| Admin Panel | https://www.aspireks.com/admin |
| API Test | https://www.aspireks.com/backend/api/admin/dashboard |

---

## 🔧 File Permissions

```bash
# Files
chmod 644 *.php *.html *.css *.js

# Directories
chmod 755 assets/ admin/ backend/ uploads/

# Writable
chmod 755 uploads/
chmod 755 backend/logs/
```

---

## 📧 Gmail App Password

1. Google Account → Security
2. Enable 2FA
3. App Passwords → Generate
4. Copy 16-char password
5. Use in config.php

---

## 💳 Razorpay Keys

**Test Mode (Start Here):**
```php
define('RAZORPAY_KEY_ID', 'rzp_test_xxx');
define('RAZORPAY_KEY_SECRET', 'test_secret_xxx');
```

**Live Mode (After Testing):**
```php
define('RAZORPAY_KEY_ID', 'rzp_live_xxx');
define('RAZORPAY_KEY_SECRET', 'live_secret_xxx');
```

---

## 🐛 Troubleshooting

### 500 Error
- Check .htaccess syntax
- Verify file permissions
- Check error logs

### Database Error
- Verify DB name has cPanel prefix
- Check credentials
- Test in phpMyAdmin

### Blank Admin Panel
- Open browser console (F12)
- Check for JS errors
- Verify API endpoints

### Forms Not Working
- Check browser console
- Test API directly
- Verify CORS headers

---

## 📊 Monitoring

### Error Logs
```
backend/logs/php-errors.log
cPanel → Error Log
Browser Console (F12)
```

### Database
```
cPanel → phpMyAdmin
View submissions in tables
```

---

## 🔒 Security Checklist

- [ ] Change admin password
- [ ] Update JWT_SECRET
- [ ] Disable error display
- [ ] SSL certificate active
- [ ] Gmail App Password set
- [ ] Test mode Razorpay first
- [ ] File permissions correct

---

## 📞 Support Resources

| Resource | File |
|----------|------|
| Full Guide | CPANEL_DEPLOYMENT_GUIDE.md |
| Quick Steps | DEPLOYMENT_CHECKLIST.md |
| Overview | CPANEL_DEPLOYMENT_SUMMARY.md |
| Structure | DEPLOYMENT_STRUCTURE.md |
| This Card | QUICK_REFERENCE.md |

---

## ⚡ Quick Deploy Steps

1. **Build:** Run `build-for-production.bat`
2. **Config:** Update config.php & database.php
3. **Upload:** Copy deployment-package/ to public_html/
4. **Database:** Import schema.sql, run admin-user-setup.sql
5. **Test:** Visit site and admin panel
6. **Secure:** Change admin password

---

## 🎯 Common cPanel Locations

| Feature | Location |
|---------|----------|
| File Manager | cPanel → Files → File Manager |
| MySQL Databases | cPanel → Databases → MySQL Databases |
| phpMyAdmin | cPanel → Databases → phpMyAdmin |
| Error Log | cPanel → Metrics → Errors |
| SSL/TLS | cPanel → Security → SSL/TLS Status |
| Backup | cPanel → Files → Backup |

---

## 📝 Post-Deployment

- [ ] Test all pages
- [ ] Submit test forms
- [ ] Check email delivery
- [ ] Test admin login
- [ ] Test payment (test mode)
- [ ] Monitor logs for 24h
- [ ] Set up regular backups

---

**Need detailed help? See CPANEL_DEPLOYMENT_GUIDE.md**
