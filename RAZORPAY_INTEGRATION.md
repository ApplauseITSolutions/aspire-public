# Razorpay Payment Integration - Complete Setup Guide

## Overview
This document describes the complete Razorpay payment integration for the Aspire Internship Portal's user-side internship enrollment form.

## Features Implemented

### 1. Payment Flow
- User fills internship enrollment form
- Form submission creates enrollment record with "pending" status
- Razorpay payment gateway opens automatically
- After successful payment, enrollment status changes to "confirmed"
- Confirmation emails sent to user

### 2. Email Notifications
Two automated emails are sent:
1. **Enrollment Confirmation** - Sent immediately after form submission
2. **Payment Confirmation** - Sent after successful payment verification

## Configuration

### Backend Configuration (`backend/config/config.php`)

```php
// Email Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'applauseitdev@gmail.com');
define('SMTP_PASSWORD', 'okyc smgd vhdk vyah');
define('FROM_EMAIL', 'applauseitdev@gmail.com');
define('FROM_NAME', 'Aspire Internship Portal');

// Razorpay Configuration
define('RAZORPAY_KEY_ID', 'rzp_test_Rbc2eGp9p2ogLf');
define('RAZORPAY_KEY_SECRET', 'wZkk8Cvkj6ZBCve0iAnPoQPt');
```

### Frontend Configuration
The Razorpay checkout script is loaded in `index.html`:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

## Payment Amount Breakdown

**Total Amount: ₹1805.40**

- Base Amount: ₹1500.00
- CGST (9%): ₹135.00
- SGST (9%): ₹135.00
- Payment Gateway Charges (2%): ₹35.40

## API Endpoints

### 1. Submit Enrollment
**Endpoint:** `POST /api/forms/enrolment`

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "college_name": "ABC College",
  "degree": "B.Tech",
  "branch": "Computer Science",
  "year_of_study": "3rd Year",
  "internship_domain": "Guaranteed Internship"
}
```

**Response:**
```json
{
  "status": true,
  "message": "Enrolment submitted successfully",
  "data": {
    "enrolment_id": 123,
    "next_step": "payment"
  }
}
```

### 2. Create Payment Order
**Endpoint:** `POST /api/payment/create-order`

**Request Body:**
```json
{
  "enrolment_id": 123,
  "amount": 1805.40
}
```

**Response:**
```json
{
  "status": true,
  "message": "Order created successfully",
  "data": {
    "order_id": "order_xxxxxxxxxxxxx",
    "amount": 1805.40,
    "currency": "INR",
    "key_id": "rzp_test_Rbc2eGp9p2ogLf"
  }
}
```

### 3. Verify Payment
**Endpoint:** `POST /api/payment/verify`

**Request Body:**
```json
{
  "razorpay_order_id": "order_xxxxxxxxxxxxx",
  "razorpay_payment_id": "pay_xxxxxxxxxxxxx",
  "razorpay_signature": "signature_string"
}
```

**Response:**
```json
{
  "status": true,
  "message": "Payment verified successfully",
  "data": {
    "enrolment_id": 123,
    "payment_status": "paid",
    "enrolment_status": "confirmed"
  }
}
```

## Database Schema

### Internship Enrolments Table
```sql
CREATE TABLE internship_enrolments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    college_name VARCHAR(200) NOT NULL,
    degree VARCHAR(100) NOT NULL,
    branch VARCHAR(100) NOT NULL,
    year_of_study VARCHAR(20) NOT NULL,
    internship_domain VARCHAR(100) NOT NULL,
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    payment_amount DECIMAL(10,2),
    razorpay_order_id VARCHAR(100),
    razorpay_payment_id VARCHAR(100),
    razorpay_signature VARCHAR(255),
    enrolment_status ENUM('pending', 'confirmed', 'rejected', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Frontend Implementation

### Location
`src/pages/GuaranteedInternshipDetails.jsx`

### Key Functions

#### 1. Form Submission
```javascript
const handleEnrollSubmit = async (e) => {
  e.preventDefault();
  const response = await submitInternshipEnrolment(enrollForm);
  if (response.status) {
    setEnrolmentId(response.data.enrolment_id);
    setEnrollSubmitted(true);
    // Auto-proceed to payment after 2 seconds
    setTimeout(() => setShowPayment(true), 2000);
  }
};
```

#### 2. Payment Processing
```javascript
const handlePayment = async () => {
  const orderResponse = await createPaymentOrder(enrolmentId, 1805.40);
  
  const options = {
    key: orderResponse.data.key_id,
    amount: orderResponse.data.amount * 100,
    currency: orderResponse.data.currency,
    name: 'Aspire Internship',
    description: 'Guaranteed Internship Program',
    order_id: orderResponse.data.order_id,
    handler: async function (response) {
      const verifyResponse = await verifyPayment({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature
      });
      
      if (verifyResponse.status) {
        alert('Payment successful! Confirmation email sent.');
      }
    },
    prefill: {
      name: enrollForm.first_name + ' ' + enrollForm.last_name,
      email: enrollForm.email,
      contact: enrollForm.phone
    },
    theme: {
      color: '#EF7F2C'
    }
  };
  
  const rzp = new window.Razorpay(options);
  rzp.open();
};
```

## Email Templates

### 1. Enrollment Confirmation Email
Sent immediately after form submission with:
- Enrollment ID
- Student details
- College information
- Next steps (payment)

### 2. Payment Confirmation Email
Sent after successful payment with:
- Payment ID and Order ID
- Amount paid
- Enrollment confirmation
- Internship details

## Testing

### Test Mode
Currently configured with Razorpay test credentials:
- Key ID: `rzp_test_Rbc2eGp9p2ogLf`
- Key Secret: `wZkk8Cvkj6ZBCve0iAnPoQPt`

### Test Cards
Use Razorpay test cards for testing:
- **Success:** 4111 1111 1111 1111
- **Failure:** 4111 1111 1111 1112
- CVV: Any 3 digits
- Expiry: Any future date

## Security Features

1. **Signature Verification**: All payments are verified using HMAC SHA256 signature
2. **Server-side Validation**: Payment verification happens on the backend
3. **Secure Credentials**: API keys stored in config file (not in frontend)
4. **HTTPS Required**: Razorpay requires HTTPS in production

## Production Checklist

Before going live:

1. ✅ Replace test Razorpay keys with live keys
2. ✅ Verify SMTP credentials are correct
3. ✅ Test email delivery
4. ✅ Enable HTTPS on the server
5. ✅ Test complete payment flow
6. ✅ Set up webhook for payment notifications (optional)
7. ✅ Configure proper error logging
8. ✅ Set up payment reconciliation process

## Error Handling

### Frontend
- Form validation before submission
- Payment failure alerts with payment ID
- Network error handling

### Backend
- Email sending failures are logged but don't block the flow
- Payment verification failures return appropriate error messages
- Database transaction failures are caught and reported

## Support Contact

For payment-related issues:
- Email: applauseitdev@gmail.com
- Users are provided with payment ID for reference

## Files Modified

1. `backend/config/config.php` - Updated credentials
2. `backend/controllers/EnrolmentController.php` - Added email sending
3. `backend/controllers/PaymentController.php` - Added payment confirmation email
4. `backend/utils/Email.php` - Updated email templates
5. `src/pages/GuaranteedInternshipDetails.jsx` - Enhanced payment flow
6. `index.html` - Razorpay script (already present)

## Additional Notes

- The payment gateway charges (2%) are included in the total amount
- GST (18% total: 9% CGST + 9% SGST) is calculated on the base amount
- All amounts are in INR (Indian Rupees)
- Payment status is tracked in the database for admin review
- Email logs are maintained for audit purposes
