You are a senior full-stack developer and system architect.

Your task is to integrate a Core PHP backend into an EXISTING FRONTEND without breaking or modifying its UI/UX.

====================================================
🚨 CRITICAL RULES (VERY IMPORTANT)
====================================================

1. DO NOT change existing frontend design, structure, styling, or layout.
2. DO NOT modify HTML/CSS/UI of user-facing pages.
3. ONLY make forms dynamic by connecting them to backend APIs.
4. Create a COMPLETELY SEPARATE React-based Admin Dashboard.
5. Maintain backward compatibility with current project.

====================================================
🎯 PROJECT ARCHITECTURE
====================================================

/project-root
  /frontend        → EXISTING USER WEBSITE (DO NOT MODIFY UI)
  /admin-frontend  → NEW React Admin Dashboard
  /backend         → Core PHP API
  /database        → SQL files
  /uploads

====================================================
🧩 USER FRONTEND (EXISTING - STATIC → DYNAMIC)
====================================================

Convert ONLY the following into dynamic (NO UI CHANGE):

1. Internship Enrolment Form
2. Contact Form
3. Landing Enquiry Form

RULES:
- Keep same HTML structure
- Only update form `action` or use AJAX/fetch
- Add JS for API calls if needed
- Do not change styling/classes

====================================================
📨 FORM FUNCTIONALITY
====================================================

1. Internship Enrolment:
   - Save data in database
   - Integrate Razorpay (backend order + verification)
   - Store payment status
   - Send confirmation email

2. Contact Form:
   - Save in DB
   - Show in admin dashboard

3. Landing Enquiry:
   - Save in DB
   - Show in admin dashboard

All forms:
- Client + server validation
- Proper success/error messages (without breaking UI)

====================================================
🧠 BACKEND (CORE PHP - NO FRAMEWORK)
====================================================


Follow MVC pattern manually.

====================================================
📡 API ENDPOINTS
====================================================

/api/forms/enrolment
/api/forms/contact
/api/forms/enquiry
/api/auth/login
/api/auth/forgot-password
/api/admin/dashboard

Return JSON format:
{
  "status": true,
  "message": "Success",
  "data": {}
}

====================================================
🔐 ADMIN AUTHENTICATION
====================================================

- Login system (email + password)
- Forgot password (email reset link or OTP)
- Password hashing (password_hash)
- Session or JWT authentication

====================================================
🖥️ ADMIN FRONTEND (REACT - NEW BUILD)
====================================================

Create a completely separate modern admin panel:

Tech:
- React (Vite)
- Tailwind CSS
- Axios
- React Router


====================================================
📊 ADMIN DASHBOARD MODULES
====================================================

1. Dashboard Overview
   - Total Enrolments
   - Total Contacts
   - Total Enquiries

2. Internship Applications
   - List view
   - View details
   - Status update

3. Contact Enquiries
   - List + view

4. Landing Enquiries
   - List + view

5. Future Ready Modules (IMPORTANT)
   - Use modular structure
   - Easy to add new sections later

Features:
- Pagination
- Search
- Filters
- Clean sidebar UI

====================================================
💳 RAZORPAY INTEGRATION
====================================================

- Create order in backend
- Send order ID to frontend
- Verify payment signature
- Store transaction details

====================================================
📧 EMAIL SYSTEM
====================================================

Use PHPMailer:
- Enrolment confirmation
- Payment success
- Forgot password

====================================================
🛡️ SECURITY
====================================================

- PDO prepared statements
- Input sanitization
- File upload validation
- Auth middleware for admin APIs

====================================================
⚡ PERFORMANCE & SCALABILITY
====================================================

- Modular backend
- Reusable API structure
- Separate admin frontend
- Easily extendable

====================================================
🎯 FINAL OUTPUT
====================================================

- Existing frontend works EXACTLY SAME visually
- Forms become dynamic
- Backend fully functional (PHP)
- Admin dashboard fully functional (React)
- Email + Payment working

DO NOT:
- Change UI
- Break layout
- Remove existing code

ONLY enhance functionality.