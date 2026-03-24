# Aspire Internship Portal

A comprehensive internship management system with dynamic frontend forms and React admin dashboard.

## Project Structure

```
aspire-public/
├── frontend/              # Existing user-facing website (React)
├── admin-frontend/        # New React admin dashboard
├── backend/               # Core PHP API backend
├── database/              # SQL schema and migrations
├── uploads/               # File uploads directory
└── requirements.md        # Project requirements
```

## Features

### Frontend (User-Facing)
- **Dynamic Forms**: Contact form, enquiry modal, internship enrolment
- **Payment Integration**: Razorpay payment processing
- **Real-time Validation**: Client-side form validation
- **Responsive Design**: Mobile-friendly UI

### Admin Dashboard
- **Authentication**: Secure login with JWT tokens
- **Dashboard Analytics**: Real-time statistics and metrics
- **Data Management**: Manage internships, contacts, and enquiries
- **Status Tracking**: Update application statuses
- **Search & Filter**: Advanced data filtering
- **Pagination**: Efficient data navigation

### Backend (Core PHP)
- **RESTful APIs**: Clean JSON endpoints
- **MVC Pattern**: Organized code structure
- **Security**: Input validation and SQL injection prevention
- **Email System**: PHPMailer integration
- **Payment Processing**: Razorpay order creation and verification

## Requirements

### Database Setup
1. Create database `aspire_db`
2. Import schema from `database/schema.sql`
3. Update database credentials in `backend/config/config.php`

### Backend Setup
1. Install PHP dependencies:
   ```bash
   cd backend
   composer install
   ```

2. Configure environment variables in `backend/config/config.php`:
   - Database credentials
   - SMTP settings for emails
   - Razorpay API keys

### Frontend Setup
1. Install user-facing frontend dependencies:
   ```bash
   npm install
   npm run dev
   ```

2. Install admin dashboard dependencies:
   ```bash
   cd admin-frontend
   npm install
   npm run dev
   ```

## Configuration

### Backend Configuration (`backend/config/config.php`)

```php
// Database
define('DB_HOST', 'localhost');
define('DB_NAME', 'aspire_db');
define('DB_USER', 'root');
define('DB_PASS', '');

// Email (PHPMailer)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-app-password');

// Razorpay
define('RAZORPAY_KEY_ID', 'rzp_test_XXXXXXXXXXXXXXXX');
define('RAZORPAY_KEY_SECRET', 'XXXXXXXXXXXXXXXXXXXXXXXX');
```

### Admin Access
- **Default Login**: admin@aspire.com / admin123
- **Access URL**: http://localhost:3001/login

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/forgot-password` - Password reset

### Forms
- `POST /api/forms/contact` - Contact form submission
- `POST /api/forms/enquiry` - Course enquiry submission
- `POST /api/forms/enrolment` - Internship enrolment

### Admin Dashboard
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/internships` - List internship applications
- `PUT /api/admin/internships` - Update internship status
- `GET /api/admin/contacts` - List contact submissions
- `PUT /api/admin/contacts` - Update contact status
- `GET /api/admin/enquiries` - List course enquiries
- `PUT /api/admin/enquiries` - Update enquiry status

### Payment
- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify` - Verify payment signature

## Key Features

### Security
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Prevention**: PDO prepared statements
- **XSS Protection**: Input sanitization
- **Authentication**: JWT-based admin authentication
- **File Upload Security**: Type and size validation

### User Experience
- **Real-time Updates**: Live status changes
- **Responsive Design**: Works on all devices
- **Error Handling**: Comprehensive error messages
- **Loading States**: Visual feedback during operations
- **Search & Filter**: Quick data access

### Admin Features
- **Dashboard Analytics**: Overview statistics
- **Bulk Operations**: Update multiple records
- **Export Data**: Download reports (future feature)
- **Activity Logs**: Track admin actions (future feature)
- **Email Notifications**: Automated email alerts

## Development Workflow

### 1. Database Setup
```bash
# Create database and import schema
mysql -u root -p
CREATE DATABASE aspire_db;
USE aspire_db;
SOURCE database/schema.sql;
```

### 2. Backend Development
```bash
cd backend
composer install
php -S localhost:8000  # Start development server
```

### 3. Frontend Development
```bash
# User-facing frontend
npm run dev  # Runs on http://localhost:5173

# Admin dashboard
cd admin-frontend
npm run dev  # Runs on http://localhost:3001
```

## Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for tablets
- **Desktop Experience**: Full functionality on desktop
- **Touch-Friendly**: Appropriate touch targets

## Security Considerations

- **Environment Variables**: Never commit sensitive data
- **Regular Updates**: Keep dependencies updated
- **Access Control**: Limit admin access
- **Data Validation**: Validate all user inputs
- **HTTPS**: Use SSL in production

## Testing

### Backend Testing
- Test all API endpoints
- Validate input sanitization
- Check error handling
- Verify database queries

### Frontend Testing
- Form validation testing
- Responsive design testing
- Cross-browser compatibility
- User flow testing

## Deployment

### Production Checklist
1. Update environment variables
2. Set proper file permissions
3. Configure HTTPS/SSL
4. Set up production database
5. Configure email services
6. Test all functionality
7. Monitor application logs

## Support

For technical support or questions:
- Check the requirements document for detailed specifications
- Review API documentation in code comments
- Test with provided sample data

## License

This project is proprietary and confidential.

---

**Note**: This system is designed to integrate seamlessly with the existing frontend while maintaining all current UI/UX elements.
