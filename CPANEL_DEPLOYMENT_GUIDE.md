# cPanel Deployment Guide for www.aspireks.com

## Prerequisites
- cPanel hosting account with PHP 8.0+ and MySQL
- Database created in cPanel
- Domain pointed to your hosting
- SSH access (optional but recommended)
- Node.js installed locally for building

---

## Step 1: Prepare Your Database

### 1.1 Create Database in cPanel
1. Log into cPanel
2. Go to **MySQL Databases**
3. Create a new database (e.g., `aspireks_db`)
4. Create a database user (e.g., `aspireks_user`)
5. Set a strong password
6. Add user to database with ALL PRIVILEGES
7. Note down:
   - Database name (usually: `cpanelusername_aspireks_db`)
   - Username (usually: `cpanelusername_aspireks_user`)
   - Password

### 1.2 Import Database Schema
1. Go to **phpMyAdmin** in cPanel
2. Select your database
3. Click **Import** tab
4. Upload `database/schema.sql`
5. Click **Go** to execute

### 1.3 Create Admin User
Run this SQL in phpMyAdmin:
```sql
INSERT INTO admin_users (username, email, password, full_name, role, is_active, created_at) 
VALUES (
    'admin',
    'admin@aspireks.com',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- password: password
    'Admin User',
    'super_admin',
    1,
    NOW()
);
```
**Important:** Change the password after first login!

---

## Step 2: Build Your Applications Locally

### 2.1 Build Main Frontend
```bash
npm install
npm run build
```
This creates a `dist` folder with your main website.

### 2.2 Build Admin Frontend
```bash
cd admin-frontend
npm install
npm run build
cd ..
```
This creates an `admin` folder with your admin panel.

---

## Step 3: Update Configuration Files

### 3.1 Update Backend Configuration
Edit `backend/config/config.php`:
```php
// Site Configuration
define('SITE_URL', 'https://www.aspireks.com');

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'cpanelusername_aspireks_db'); // Your actual DB name
define('DB_USER', 'cpanelusername_aspireks_user'); // Your actual username
define('DB_PASS', 'your_actual_password'); // Your actual password

// Email Configuration
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-app-password'); // Gmail App Password

// Razorpay - Use LIVE keys for production
define('RAZORPAY_KEY_ID', 'rzp_live_YOUR_KEY_ID');
define('RAZORPAY_KEY_SECRET', 'YOUR_LIVE_SECRET');

// Security
define('JWT_SECRET', 'GENERATE_A_RANDOM_STRING_HERE');

// Error Reporting - DISABLE for production
error_reporting(0);
ini_set('display_errors', 0);
```

### 3.2 Update Database Configuration
Edit `backend/config/database.php`:
```php
private $host = 'localhost';
private $db_name = 'cpanelusername_aspireks_db';
private $username = 'cpanelusername_aspireks_user';
private $password = 'your_actual_password';
```

---

## Step 4: Upload Files to cPanel

### 4.1 File Structure on Server
Your `public_html` directory should look like:
```
public_html/
├── .htaccess (root htaccess)
├── index.html (from dist folder)
├── assets/ (from dist folder)
├── *.png, *.jpg, *.svg (from dist folder)
├── admin/
│   ├── index.html
│   └── assets/
├── backend/
│   ├── .htaccess
│   ├── index.php
│   ├── composer.json
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── utils/
│   └── vendor/
└── uploads/ (create this folder)
```

### 4.2 Upload via File Manager or FTP

**Option A: Using cPanel File Manager**
1. Go to **File Manager** in cPanel
2. Navigate to `public_html`
3. Upload files:
   - Upload all files from `dist/` to `public_html/`
   - Upload `admin/` folder to `public_html/admin/`
   - Upload `backend/` folder to `public_html/backend/`
   - Upload root `.htaccess` to `public_html/`

**Option B: Using FTP (FileZilla)**
1. Connect to your server via FTP
2. Navigate to `public_html`
3. Upload the same structure as above

**Option C: Using SSH (Fastest)**
```bash
# Zip your files locally
zip -r dist.zip dist/*
zip -r admin.zip admin/*
zip -r backend.zip backend/*

# Upload via SCP
scp dist.zip username@aspireks.com:~/public_html/
scp admin.zip username@aspireks.com:~/public_html/
scp backend.zip username@aspireks.com:~/public_html/

# SSH into server and unzip
ssh username@aspireks.com
cd public_html
unzip dist.zip
unzip admin.zip
unzip backend.zip
```

---

## Step 5: Set Up Backend Dependencies

### 5.1 Install Composer Dependencies
If you have SSH access:
```bash
cd public_html/backend
composer install --no-dev --optimize-autoloader
```

If no SSH access:
1. Run `composer install` locally
2. Upload the entire `backend/vendor` folder via FTP

### 5.2 Create Required Directories
```bash
mkdir -p public_html/backend/logs
mkdir -p public_html/uploads
chmod 755 public_html/backend/logs
chmod 755 public_html/uploads
```

Or via File Manager:
1. Create `logs` folder inside `backend/`
2. Create `uploads` folder in `public_html/`
3. Set permissions to 755

---

## Step 6: Configure .htaccess Files

### 6.1 Root .htaccess (public_html/.htaccess)
Already created in Step 3. Verify it's uploaded.

### 6.2 Backend .htaccess (public_html/backend/.htaccess)
Should already exist. Verify content:
```apache
RewriteEngine On

# Route API requests
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^api/(.*)$ index.php [QSA,L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^index\.php$ index.php [L]
```

---

## Step 7: Update Frontend API Endpoints

### 7.1 Check Admin Frontend API Configuration
The file `admin-frontend/src/services/api.js` should automatically detect production URL.
Verify the built files use correct paths.

### 7.2 Verify Environment Variables
If using environment variables, create `.env.production`:
```
VITE_API_BASE_URL=https://www.aspireks.com/backend/api
```
Then rebuild: `npm run build`

---

## Step 8: Test Your Deployment

### 8.1 Test Main Website
1. Visit: `https://www.aspireks.com`
2. Check all pages load correctly
3. Test contact form submission
4. Test internship enrollment form

### 8.2 Test Admin Panel
1. Visit: `https://www.aspireks.com/admin`
2. Login with credentials:
   - Username: `admin`
   - Password: `password` (change immediately!)
3. Test dashboard loads
4. Test viewing internships, contacts, enquiries

### 8.3 Test API Endpoints
Visit: `https://www.aspireks.com/backend/api/admin/dashboard`
Should return JSON (may show auth error, which is expected)

---

## Step 9: Security Hardening

### 9.1 Change Default Admin Password
1. Login to admin panel
2. Go to profile settings
3. Change password immediately

### 9.2 Update JWT Secret
Generate a random string:
```bash
php -r "echo bin2hex(random_bytes(32));"
```
Update in `backend/config/config.php`

### 9.3 Disable Error Display
Verify in `backend/config/config.php`:
```php
error_reporting(0);
ini_set('display_errors', 0);
```

### 9.4 Secure Sensitive Files
Add to `backend/.htaccess`:
```apache
# Deny access to sensitive files
<FilesMatch "^(composer\.json|composer\.lock|\.env)$">
    Order allow,deny
    Deny from all
</FilesMatch>
```

### 9.5 Set Proper File Permissions
```bash
# Files: 644
find public_html -type f -exec chmod 644 {} \;

# Directories: 755
find public_html -type d -exec chmod 755 {} \;

# Uploads directory: 755
chmod 755 public_html/uploads
```

---

## Step 10: Configure Email (Gmail App Password)

### 10.1 Generate Gmail App Password
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > App Passwords
4. Generate password for "Mail"
5. Copy the 16-character password

### 10.2 Update Config
In `backend/config/config.php`:
```php
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'xxxx xxxx xxxx xxxx'); // App password
```

---

## Step 11: Configure Razorpay for Production

### 11.1 Get Live API Keys
1. Login to Razorpay Dashboard
2. Switch to "Live Mode"
3. Go to Settings > API Keys
4. Generate Live Keys

### 11.2 Update Config
In `backend/config/config.php`:
```php
define('RAZORPAY_KEY_ID', 'rzp_live_YOUR_KEY_ID');
define('RAZORPAY_KEY_SECRET', 'YOUR_LIVE_SECRET');
```

### 11.3 Update Frontend
If Razorpay key is hardcoded in frontend, update and rebuild.

---

## Step 12: Set Up SSL Certificate

### 12.1 Install SSL in cPanel
1. Go to **SSL/TLS Status** in cPanel
2. Click **Run AutoSSL** (if available)
3. Or install Let's Encrypt certificate

### 12.2 Force HTTPS
Already configured in root `.htaccess`

---

## Troubleshooting

### Issue: 500 Internal Server Error
**Solution:**
- Check `.htaccess` syntax
- Check PHP error logs in cPanel
- Verify file permissions
- Check `backend/logs/php-errors.log`

### Issue: Database Connection Failed
**Solution:**
- Verify database credentials in `config.php` and `database.php`
- Check database exists in cPanel
- Verify user has privileges
- Test connection in phpMyAdmin

### Issue: API Returns 404
**Solution:**
- Verify `backend/.htaccess` exists
- Check mod_rewrite is enabled (ask hosting support)
- Verify backend files uploaded correctly

### Issue: Admin Panel Shows Blank Page
**Solution:**
- Check browser console for errors
- Verify `admin/index.html` exists
- Check API endpoint URLs in browser network tab
- Verify CORS headers in backend config

### Issue: Forms Not Submitting
**Solution:**
- Check browser console for errors
- Verify API endpoints in network tab
- Check backend error logs
- Test API directly with Postman

### Issue: Emails Not Sending
**Solution:**
- Verify Gmail App Password (not regular password)
- Check SMTP settings in config
- Enable "Less secure app access" if needed
- Check PHP mail() function is enabled

---

## Post-Deployment Checklist

- [ ] Database imported successfully
- [ ] Admin user created and password changed
- [ ] All files uploaded to correct locations
- [ ] Backend configuration updated with production values
- [ ] Composer dependencies installed
- [ ] Required directories created (uploads, logs)
- [ ] File permissions set correctly
- [ ] SSL certificate installed and HTTPS working
- [ ] Main website loads and all pages work
- [ ] Admin panel accessible and functional
- [ ] Contact form submits successfully
- [ ] Internship enrollment works
- [ ] Email notifications working
- [ ] Razorpay payment integration working (test mode first!)
- [ ] Error reporting disabled in production
- [ ] JWT secret changed from default
- [ ] Default admin password changed

---

## Quick Commands Reference

### Build Commands (Run Locally)
```bash
# Build main frontend
npm run build

# Build admin frontend
cd admin-frontend && npm run build && cd ..
```

### File Permissions (SSH)
```bash
# Set directory permissions
find public_html -type d -exec chmod 755 {} \;

# Set file permissions
find public_html -type f -exec chmod 644 {} \;
```

### Composer (SSH)
```bash
cd public_html/backend
composer install --no-dev --optimize-autoloader
```

### View Logs (SSH)
```bash
tail -f public_html/backend/logs/php-errors.log
```

---

## Support

If you encounter issues:
1. Check browser console for frontend errors
2. Check `backend/logs/php-errors.log` for backend errors
3. Check cPanel error logs
4. Test API endpoints directly
5. Verify database connection in phpMyAdmin

---

## Important URLs

- Main Website: `https://www.aspireks.com`
- Admin Panel: `https://www.aspireks.com/admin`
- API Base: `https://www.aspireks.com/backend/api`
- phpMyAdmin: `https://www.aspireks.com:2083/cpsess.../phpMyAdmin`

---

**Deployment Date:** _____________
**Deployed By:** _____________
**Notes:** _____________
