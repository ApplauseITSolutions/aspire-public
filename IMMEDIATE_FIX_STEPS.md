# 🚨 IMMEDIATE FIX - Login Error

## What's Wrong?

Your admin login is failing because of an outdated `index.php` file on the server.

---

## ⚡ Quick Fix (5 Minutes)

### Step 1: Upload Updated Files (2 min)

Upload these files to your server:

| Local File | Upload To |
|------------|-----------|
| `backend/index.php` | `public_html/backend/index.php` |
| `backend/test-api-simple.php` | `public_html/backend/test-api-simple.php` |
| `backend/test-database.php` | `public_html/backend/test-database.php` |
| `backend/test-login.php` | `public_html/backend/test-login.php` |

### Step 2: Test Backend (1 min)

Visit this URL in your browser:
```
https://www.aspireks.com/backend/test-api-simple.php
```

**Expected Result:**
```json
{
  "status": "success",
  "message": "Backend is working!"
}
```

### Step 3: Test Database (1 min)

Visit:
```
https://www.aspireks.com/backend/test-database.php
```

**Expected Result:**
```json
{
  "connection": true,
  "message": "Database connected successfully!",
  "admin_users_count": 1
}
```

**If connection fails:**
- Check `backend/config/config.php`
- Check `backend/config/database.php`
- Verify database name has cPanel username prefix

### Step 4: Test Login (1 min)

Visit:
```
https://www.aspireks.com/backend/test-login.php
```

**Expected Result:**
```json
{
  "status": "success",
  "message": "All tests passed!",
  "steps": [
    "✓ Database connected",
    "✓ Admin user found",
    "✓ Password verification works",
    "✓ JWT token generated"
  ]
}
```

**If admin user not found:**
Run this SQL in phpMyAdmin:
```sql
INSERT INTO admin_users (username, email, password, full_name, role, is_active, created_at) 
VALUES ('admin', 'admin@aspireks.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin User', 'super_admin', 1, NOW());
```

### Step 5: Try Login Again (1 min)

1. Clear browser cache: `Ctrl + Shift + Delete`
2. Visit: `https://www.aspireks.com/admin`
3. Login:
   - Email: `admin@aspireks.com`
   - Password: `password`

---

## 🔍 If Still Not Working

### Check Database Credentials

Open `backend/config/config.php` and verify:

```php
// Database name MUST include cPanel username prefix
define('DB_NAME', 'aspireks_aspire_db');  // NOT just 'aspire_db'
define('DB_USER', 'aspireks_dbuser');
define('DB_PASS', 'your_actual_password');
```

Also check `backend/config/database.php`:

```php
private $db_name = 'aspireks_aspire_db';  // Same as above
private $username = 'aspireks_dbuser';
private $password = 'your_actual_password';
```

### Find Your Actual Database Name

1. Login to cPanel
2. Go to **MySQL Databases**
3. Look under "Current Databases"
4. Copy the FULL name (includes prefix)

Example:
- If you see: `aspireks_aspire_db`
- Use exactly: `aspireks_aspire_db`

---

## 📊 Troubleshooting Matrix

| Test Result | Issue | Solution |
|-------------|-------|----------|
| test-api-simple fails | PHP not working | Check .htaccess, file permissions |
| test-database fails | DB connection | Fix credentials in config files |
| test-login: user not found | No admin user | Run SQL to create admin user |
| test-login: password fails | Wrong password hash | Run SQL to reset password |
| All tests pass, login fails | Frontend issue | Clear browser cache, check console |

---

## 🎯 Most Common Issues

### 1. Database Name Missing Prefix ⚠️

```php
// WRONG:
define('DB_NAME', 'aspire_db');

// CORRECT (with your cPanel username):
define('DB_NAME', 'aspireks_aspire_db');
```

### 2. Credentials in Wrong File ⚠️

You need to update BOTH files:
- `backend/config/config.php`
- `backend/config/database.php`

### 3. Admin User Doesn't Exist ⚠️

Check in phpMyAdmin:
```sql
SELECT * FROM admin_users;
```

If empty, run:
```sql
INSERT INTO admin_users (username, email, password, full_name, role, is_active, created_at) 
VALUES ('admin', 'admin@aspireks.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin User', 'super_admin', 1, NOW());
```

---

## 📞 Need More Help?

See detailed guide: **FIX_LOGIN_ERROR.md**

---

## ✅ Success Checklist

- [ ] Uploaded updated `backend/index.php`
- [ ] Uploaded test files
- [ ] test-api-simple.php shows success
- [ ] test-database.php shows connection: true
- [ ] test-login.php shows all tests passed
- [ ] Cleared browser cache
- [ ] Login works!

---

**Time to fix: 5-10 minutes**

**Start with Step 1 above!** 🚀
