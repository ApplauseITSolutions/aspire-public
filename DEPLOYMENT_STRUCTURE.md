# Deployment Structure Diagram

## Your Local Machine (Before Deployment)

```
aspire-project/
│
├── src/                          ← Main website source
├── admin-frontend/               ← Admin panel source
├── backend/                      ← PHP API
├── database/                     ← SQL files
│
├── package.json                  ← Main website config
├── vite.config.js               ← Build config
│
└── build-for-production.bat/sh  ← Run this to build
         ↓
         ↓ (builds to)
         ↓
├── dist/                        ← Built main website
├── admin/                       ← Built admin panel
└── deployment-package/          ← Ready to upload
```

---

## cPanel Server (After Deployment)

```
www.aspireks.com
│
public_html/                     ← Your web root
│
├── .htaccess                    ← Routes all requests
│   • Redirects to HTTPS
│   • Routes /admin to admin panel
│   • Routes /backend to API
│   • Everything else → React app
│
├── index.html                   ← Main website entry
├── assets/                      ← CSS, JS, images
│   ├── index-xxxxx.js          ← React app bundle
│   └── index-xxxxx.css         ← Styles
│
├── admin/                       ← Admin Panel (React SPA)
│   ├── index.html              ← Admin entry point
│   └── assets/
│       ├── index-xxxxx.js      ← Admin app bundle
│       └── index-xxxxx.css
│
├── backend/                     ← PHP API
│   ├── .htaccess               ← API routing
│   ├── index.php               ← API entry point
│   │
│   ├── config/
│   │   ├── config.php          ← ⚠️ UPDATE THIS
│   │   └── database.php        ← ⚠️ UPDATE THIS
│   │
│   ├── controllers/            ← Business logic
│   │   ├── AuthController.php
│   │   ├── AdminController.php
│   │   ├── ContactController.php
│   │   ├── EnquiryController.php
│   │   └── EnrolmentController.php
│   │
│   ├── models/                 ← Database models
│   │   ├── AdminUser.php
│   │   ├── ContactSubmission.php
│   │   ├── LandingEnquiry.php
│   │   └── InternshipEnrolment.php
│   │
│   ├── utils/                  ← Helper classes
│   │   ├── Auth.php
│   │   ├── Email.php
│   │   ├── Response.php
│   │   └── Validator.php
│   │
│   ├── vendor/                 ← Composer dependencies
│   │   └── (PHPMailer, JWT, etc.)
│   │
│   └── logs/                   ← ⚠️ CREATE THIS
│       └── php-errors.log
│
└── uploads/                     ← ⚠️ CREATE THIS
    └── (user uploaded files)
```

---

## Database Structure

```
MySQL Database: aspireks_aspire_db
│
├── admin_users                  ← Admin login accounts
│   ├── id
│   ├── username
│   ├── email
│   ├── password (hashed)
│   ├── role
│   └── is_active
│
├── internship_enrolments        ← Internship applications
│   ├── id
│   ├── full_name
│   ├── email
│   ├── phone
│   ├── program_type
│   ├── payment_status
│   └── status
│
├── contact_submissions          ← Contact form entries
│   ├── id
│   ├── name
│   ├── email
│   ├── message
│   └── status
│
└── landing_enquiries            ← Landing page enquiries
    ├── id
    ├── name
    ├── email
    ├── phone
    └── status
```

---

## Request Flow Diagram

### Main Website Request
```
User visits: https://www.aspireks.com/about
         ↓
    .htaccess (root)
         ↓
    Serves: index.html
         ↓
    React Router handles /about
         ↓
    Displays About page
```

### Admin Panel Request
```
User visits: https://www.aspireks.com/admin
         ↓
    .htaccess (root)
         ↓
    Routes to: admin/index.html
         ↓
    React Router handles admin routes
         ↓
    Displays Admin Dashboard
```

### API Request
```
Frontend calls: https://www.aspireks.com/backend/api/forms/contact
         ↓
    .htaccess (root) → routes to backend/
         ↓
    backend/.htaccess → routes to index.php
         ↓
    backend/index.php → routes to ContactController
         ↓
    ContactController → processes request
         ↓
    Returns JSON response
```

---

## Data Flow: Contact Form Submission

```
1. User fills form on website
         ↓
2. React app sends POST to:
   /backend/api/forms/contact
         ↓
3. backend/index.php receives request
         ↓
4. Routes to ContactController
         ↓
5. ContactController validates data
         ↓
6. Saves to database (contact_submissions)
         ↓
7. Sends email notification (via PHPMailer)
         ↓
8. Returns success JSON
         ↓
9. React shows success message
```

---

## Authentication Flow

```
1. Admin visits /admin
         ↓
2. Sees login page
         ↓
3. Enters username/password
         ↓
4. POST to /backend/api/auth/login
         ↓
5. AuthController verifies credentials
         ↓
6. Generates JWT token
         ↓
7. Returns token to frontend
         ↓
8. Frontend stores token in localStorage
         ↓
9. All subsequent API calls include token
         ↓
10. Backend validates token on each request
```

---

## File Permissions

```
public_html/
│
├── Files (644)                  ← Read/write for owner
│   ├── .htaccess
│   ├── index.html
│   └── *.php
│
├── Directories (755)            ← Execute permission for browsing
│   ├── assets/
│   ├── admin/
│   └── backend/
│
└── Writable Directories (755)   ← Web server can write
    ├── uploads/
    └── backend/logs/
```

---

## Environment Variables

### Development (Local)
```
VITE_API_BASE_URL=http://localhost/aspire-public/backend/api
```

### Production (cPanel)
```
VITE_API_BASE_URL=https://www.aspireks.com/backend/api
(Auto-detected from window.location)
```

---

## Build Process

```
Source Code
    ↓
npm run build (Vite)
    ↓
Bundles & Optimizes
    ↓
dist/ folder
    ↓
Upload to cPanel
    ↓
Production Website
```

### What Vite Does:
- Bundles all React components into single JS file
- Minifies JavaScript (removes whitespace, shortens names)
- Optimizes CSS (combines, minifies)
- Processes images and assets
- Generates index.html with correct script tags
- Creates hash-based filenames for caching

---

## URL Routing

| URL | Serves | Handled By |
|-----|--------|-----------|
| `/` | Main website | React Router |
| `/about` | About page | React Router |
| `/programs` | Programs page | React Router |
| `/contact` | Contact page | React Router |
| `/admin` | Admin panel | React Router (admin) |
| `/admin/login` | Admin login | React Router (admin) |
| `/backend/api/*` | API endpoints | PHP backend |

---

## Security Layers

```
1. HTTPS (SSL Certificate)
   ↓
2. CORS Headers (backend/config/config.php)
   ↓
3. JWT Authentication (for admin)
   ↓
4. Input Validation (Validator.php)
   ↓
5. SQL Injection Prevention (PDO prepared statements)
   ↓
6. XSS Prevention (htmlspecialchars)
   ↓
7. File Upload Validation (type, size checks)
```

---

## Monitoring & Logs

```
Error Logs:
├── backend/logs/php-errors.log  ← PHP errors
├── cPanel Error Log              ← Server errors
└── Browser Console               ← Frontend errors

Access Logs:
└── cPanel Access Log             ← All requests

Database:
└── phpMyAdmin                    ← View/edit data
```

---

## Backup Strategy

```
Regular Backups:
├── Database (weekly)             ← Export via phpMyAdmin
├── Uploads folder (weekly)       ← Download via FTP
└── Full cPanel backup (monthly)  ← cPanel backup tool
```

---

This structure ensures:
✅ Clean separation of concerns  
✅ Easy to maintain and update  
✅ Secure and scalable  
✅ SEO-friendly URLs  
✅ Fast loading times  
