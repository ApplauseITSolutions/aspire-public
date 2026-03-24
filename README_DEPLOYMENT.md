# 🚀 Deploy to www.aspireks.com - Quick Start

## Prerequisites
✅ cPanel account with PHP 8.0+ and MySQL  
✅ Database created in cPanel  
✅ Node.js installed on your computer  
✅ Composer installed (for backend dependencies)

---

## 🎯 Quick Deployment (4 Steps)

### Step 1: Build Everything (10 minutes)

**Windows:**
```bash
build-for-production.bat
```

**Mac/Linux:**
```bash
chmod +x build-for-production.sh
./build-for-production.sh
```

This creates a `deployment-package/` folder with everything ready to upload.

---

### Step 2: Update Configuration (5 minutes)

Edit these files in `deployment-package/backend/config/`:

**config.php:**
```php
define('SITE_URL', 'https://www.aspireks.com');
define('DB_NAME', 'YOUR_CPANEL_DB_NAME');
define('DB_USER', 'YOUR_CPANEL_DB_USER');
define('DB_PASS', 'YOUR_DB_PASSWORD');
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-gmail-app-password');
define('RAZORPAY_KEY_ID', 'rzp_test_YOUR_KEY');
define('RAZORPAY_KEY_SECRET', 'YOUR_SECRET');
```

**database.php:**
```php
private $db_name = 'YOUR_CPANEL_DB_NAME';
private $username = 'YOUR_CPANEL_DB_USER';
private $password = 'YOUR_DB_PASSWORD';
```

---

### Step 3: Upload to cPanel (10 minutes)

1. Login to cPanel File Manager
2. Go to `public_html/`
3. Upload everything from `deployment-package/` folder
4. Your structure should be:
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

### Step 4: Setup Database (5 minutes)

1. Go to phpMyAdmin in cPanel
2. Select your database
3. Import `database/schema.sql`
4. Run `database/admin-user-setup.sql`

**Done!** 🎉

---

## 🧪 Test Your Deployment

1. **Main Website:** https://www.aspireks.com
2. **Admin Panel:** https://www.aspireks.com/admin
   - Username: `admin`
   - Password: `password`
   - **⚠️ Change password immediately!**

---

## 📚 Documentation

- **Complete Guide:** `CPANEL_DEPLOYMENT_GUIDE.md` (detailed instructions)
- **Quick Checklist:** `DEPLOYMENT_CHECKLIST.md` (step-by-step)
- **Summary:** `CPANEL_DEPLOYMENT_SUMMARY.md` (overview)

---

## 🆘 Common Issues

### "Database Connection Failed"
- Check database name includes cPanel username prefix
- Example: `aspireks_aspire_db` not just `aspire_db`

### "500 Internal Server Error"
- Verify `.htaccess` files are uploaded
- Check file permissions (files: 644, folders: 755)

### "Admin Panel Blank"
- Open browser console (F12)
- Check for JavaScript errors
- Verify API endpoints are accessible

---

## 🔐 Security Checklist

After deployment:
- [ ] Change admin password
- [ ] Update JWT_SECRET in config.php
- [ ] Verify error display is OFF
- [ ] SSL certificate installed (HTTPS)
- [ ] Using Gmail App Password (not regular password)
- [ ] Start with Razorpay TEST keys

---

## 📞 Need Help?

1. Check browser console (F12)
2. Check `backend/logs/php-errors.log`
3. Check cPanel error logs
4. Review documentation files

---

**Ready? Run the build script and follow the 4 steps above!** 🚀
