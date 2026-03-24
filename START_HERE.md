# 🚀 START HERE - Deploy to www.aspireks.com

Welcome! This guide will help you deploy your Aspire Portal to cPanel hosting.

---

## 📚 Documentation Overview

I've created comprehensive documentation for your deployment:

### 🎯 Quick Start (Read This First!)
- **README_DEPLOYMENT.md** - 4-step quick deployment guide
- **QUICK_REFERENCE.md** - One-page reference card with all essential info

### 📋 Step-by-Step Guides
- **CPANEL_DEPLOYMENT_GUIDE.md** - Complete detailed guide (30+ pages)
- **DEPLOYMENT_CHECKLIST.md** - Simple checklist format
- **DEPLOYMENT_CHECKLIST_VISUAL.md** - Printable checklist with checkboxes

### 📖 Reference Documentation
- **CPANEL_DEPLOYMENT_SUMMARY.md** - Overview and key concepts
- **DEPLOYMENT_STRUCTURE.md** - Visual diagrams and architecture
- **TROUBLESHOOTING_GUIDE.md** - Solutions to common issues

---

## ⚡ Super Quick Start (30 Minutes)

### 1️⃣ Build (5 minutes)
```bash
# Windows:
build-for-production.bat

# Mac/Linux:
chmod +x build-for-production.sh
./build-for-production.sh
```

### 2️⃣ Configure (5 minutes)
Update these files in `deployment-package/backend/config/`:

**config.php:**
- Database credentials (from cPanel)
- Email settings (Gmail App Password)
- Razorpay keys (test mode first)

**database.php:**
- Same database credentials

### 3️⃣ Upload (10 minutes)
- Login to cPanel File Manager
- Go to `public_html/`
- Upload everything from `deployment-package/`

### 4️⃣ Database (5 minutes)
- Go to phpMyAdmin
- Import `database/schema.sql`
- Run `database/admin-user-setup.sql`

### 5️⃣ Test (5 minutes)
- Visit: https://www.aspireks.com
- Visit: https://www.aspireks.com/admin
- Login: username `admin`, password `password`
- **Change password immediately!**

---

## 📁 What Changed for Production?

I've updated your project to work on the root domain (www.aspireks.com) instead of a subdirectory:

### Files Modified:
✅ `vite.config.js` - Changed base path from `/aspire-public` to `/`  
✅ `admin-frontend/vite.config.js` - Changed base path to `/admin/`  
✅ `admin-frontend/src/services/api.js` - Updated API URLs  
✅ `src/App.jsx` - Updated admin redirect path  

### Files Created:
✅ `.htaccess` - Root routing configuration  
✅ `backend/config/config.production.php` - Production config template  
✅ `backend/config/database.production.php` - Database config template  
✅ `database/admin-user-setup.sql` - SQL to create admin user  
✅ `build-for-production.bat/.sh` - Automated build scripts  
✅ Complete documentation suite (10+ files)  

---

## 🎯 Choose Your Path

### Path A: I Want to Deploy Right Now! ⚡
1. Read **README_DEPLOYMENT.md**
2. Run build script
3. Follow 4 steps
4. Done!

### Path B: I Want to Understand Everything 📚
1. Read **CPANEL_DEPLOYMENT_SUMMARY.md** (overview)
2. Read **DEPLOYMENT_STRUCTURE.md** (architecture)
3. Read **CPANEL_DEPLOYMENT_GUIDE.md** (detailed guide)
4. Use **DEPLOYMENT_CHECKLIST.md** while deploying

### Path C: I Just Need a Checklist ✅
1. Print **DEPLOYMENT_CHECKLIST_VISUAL.md**
2. Check off items as you go
3. Refer to **QUICK_REFERENCE.md** for commands

---

## 🔧 What You Need

### From cPanel:
- [ ] Database name (with username prefix)
- [ ] Database username
- [ ] Database password
- [ ] FTP/File Manager access

### From Gmail:
- [ ] Gmail address
- [ ] App Password (16 characters)
  - Generate at: https://myaccount.google.com/apppasswords

### From Razorpay:
- [ ] Test Key ID (starts with `rzp_test_`)
- [ ] Test Secret Key
  - Get from: https://dashboard.razorpay.com/app/keys

---

## 📂 File Structure After Deployment

```
public_html/
├── .htaccess              ← Routes all requests
├── index.html             ← Main website
├── assets/                ← CSS, JS, images
├── admin/                 ← Admin panel
│   ├── index.html
│   └── assets/
├── backend/               ← PHP API
│   ├── config/           ← ⚠️ UPDATE THESE
│   ├── controllers/
│   ├── models/
│   ├── utils/
│   └── vendor/
└── uploads/               ← ⚠️ CREATE THIS
```

---

## ⚙️ Configuration Quick Reference

### Database (config.php & database.php)
```php
define('DB_NAME', 'aspireks_aspire_db');  // With cPanel prefix!
define('DB_USER', 'aspireks_dbuser');
define('DB_PASS', 'your_password');
```

### Email (config.php)
```php
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'xxxx xxxx xxxx xxxx');  // App Password
```

### Razorpay (config.php)
```php
define('RAZORPAY_KEY_ID', 'rzp_test_xxx');  // Test mode first
define('RAZORPAY_KEY_SECRET', 'your_secret');
```

---

## 🧪 Testing Checklist

After deployment, test:
- [ ] Main website loads
- [ ] All pages accessible
- [ ] Contact form works
- [ ] Email received
- [ ] Admin panel loads
- [ ] Admin login works
- [ ] Dashboard shows data
- [ ] Internship enrollment works
- [ ] Payment flow works (test mode)

---

## 🔒 Security Checklist

Before going live:
- [ ] Change admin password
- [ ] Update JWT_SECRET
- [ ] Disable error display
- [ ] SSL certificate active
- [ ] Using Gmail App Password
- [ ] Test Razorpay keys first
- [ ] File permissions correct (644/755)

---

## 🆘 Need Help?

### Common Issues:
1. **500 Error** → Check `.htaccess` and file permissions
2. **Database Error** → Verify database name has cPanel prefix
3. **Blank Admin** → Check browser console (F12)
4. **Forms Not Working** → Test API endpoints directly
5. **No Emails** → Use Gmail App Password, not regular password

See **TROUBLESHOOTING_GUIDE.md** for detailed solutions.

---

## 📞 Support Resources

| Issue | Document |
|-------|----------|
| Quick deployment | README_DEPLOYMENT.md |
| Detailed guide | CPANEL_DEPLOYMENT_GUIDE.md |
| Commands reference | QUICK_REFERENCE.md |
| Troubleshooting | TROUBLESHOOTING_GUIDE.md |
| Architecture | DEPLOYMENT_STRUCTURE.md |
| Checklist | DEPLOYMENT_CHECKLIST.md |

---

## 🎯 Recommended Workflow

### First Time Deploying?
```
1. Read: README_DEPLOYMENT.md (5 min)
2. Read: QUICK_REFERENCE.md (3 min)
3. Print: DEPLOYMENT_CHECKLIST_VISUAL.md
4. Run: build-for-production script
5. Follow: Checklist step-by-step
6. If stuck: Check TROUBLESHOOTING_GUIDE.md
```

### Experienced with cPanel?
```
1. Run: build-for-production script
2. Update: config.php and database.php
3. Upload: deployment-package/ to public_html/
4. Import: database/schema.sql
5. Test: All functionality
```

---

## 🚀 Ready to Deploy?

### Next Steps:
1. Choose your path (A, B, or C above)
2. Gather required credentials
3. Run build script
4. Follow your chosen guide
5. Test thoroughly
6. Go live!

---

## 📊 Deployment Timeline

| Phase | Time | Activity |
|-------|------|----------|
| Preparation | 10 min | Gather credentials, read docs |
| Build | 10 min | Run build script |
| Configuration | 5 min | Update config files |
| Upload | 10 min | Upload to cPanel |
| Database | 5 min | Import schema, create admin |
| Testing | 10 min | Test all functionality |
| Security | 5 min | Change passwords, verify SSL |
| **Total** | **55 min** | **Complete deployment** |

---

## ✅ Pre-Deployment Checklist

Before you start:
- [ ] Node.js installed on your computer
- [ ] Composer installed (for backend)
- [ ] cPanel login credentials ready
- [ ] Database created in cPanel
- [ ] Gmail App Password generated
- [ ] Razorpay test keys ready
- [ ] 1 hour of uninterrupted time
- [ ] Documentation downloaded/printed

---

## 🎉 After Successful Deployment

1. **Test Everything**
   - All pages load
   - Forms submit
   - Emails arrive
   - Admin panel works
   - Payments process

2. **Secure Everything**
   - Change admin password
   - Update JWT secret
   - Verify SSL active
   - Check file permissions

3. **Monitor**
   - Check error logs
   - Test email delivery
   - Monitor performance
   - Set up backups

4. **Go Live**
   - Switch Razorpay to live mode
   - Announce to stakeholders
   - Monitor for 24 hours
   - Celebrate! 🎊

---

## 💡 Pro Tips

1. **Test locally first** - Make sure everything works before deploying
2. **Keep backups** - Download backup before making changes
3. **Use test mode** - Start with Razorpay test keys
4. **Monitor logs** - Check error logs regularly
5. **Document changes** - Keep notes of what you modify
6. **Test on mobile** - Verify mobile responsiveness
7. **Check email spam** - Test emails might go to spam
8. **Use strong passwords** - Especially for admin and database

---

## 🔗 Important URLs

After deployment:
- Main Site: https://www.aspireks.com
- Admin Panel: https://www.aspireks.com/admin
- API Base: https://www.aspireks.com/backend/api
- cPanel: https://www.aspireks.com:2083

---

## 📝 Notes

**Default Admin Credentials:**
- Username: `admin`
- Password: `password`
- ⚠️ **CHANGE IMMEDIATELY AFTER FIRST LOGIN!**

**Database Tables:**
- `admin_users` - Admin accounts
- `internship_enrolments` - Internship applications
- `contact_submissions` - Contact form entries
- `landing_enquiries` - Landing page enquiries

---

## 🎯 Success Criteria

Your deployment is successful when:
✅ Main website loads at https://www.aspireks.com  
✅ All pages are accessible  
✅ Contact form submits and sends email  
✅ Admin panel loads at /admin  
✅ Admin can login and view data  
✅ Internship enrollment works  
✅ Payment flow works (test mode)  
✅ No errors in logs  
✅ SSL certificate active  
✅ Mobile responsive  

---

**Ready? Let's deploy! Start with README_DEPLOYMENT.md** 🚀

Good luck! You've got this! 💪
