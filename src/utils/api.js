// API utility functions for frontend

// Auto-detect API base URL based on environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  `${window.location.protocol}//${window.location.hostname}/backend`;

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Form submission functions
export const submitContactForm = async (formData) => {
  return apiRequest('/api/forms/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

export const submitEnquiryForm = async (formData) => {
  return apiRequest('/api/forms/enquiry', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

export const submitInternshipEnrolment = async (formData) => {
  return apiRequest('/api/forms/enrolment', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

// Payment functions
export const createPaymentOrder = async (enrolmentId, amount) => {
  return apiRequest('/api/payment/create-order', {
    method: 'POST',
    body: JSON.stringify({
      enrolment_id: enrolmentId,
      amount: amount,
    }),
  });
};

export const verifyPayment = async (paymentData) => {
  return apiRequest('/api/payment/verify', {
    method: 'POST',
    body: JSON.stringify(paymentData),
  });
};

// Admin authentication functions
export const adminLogin = async (credentials) => {
  return apiRequest('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

export const forgotPassword = async (email) => {
  return apiRequest('/api/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};

// Admin dashboard functions
export const getDashboardStats = async (token) => {
  return apiRequest('/api/admin/dashboard', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const getInternships = async (token, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const endpoint = queryString ? `/api/admin/internships?${queryString}` : '/api/admin/internships';
  
  return apiRequest(endpoint, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const updateInternship = async (token, id, data) => {
  return apiRequest(`/api/admin/internships`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ id, ...data }),
  });
};

export const getContacts = async (token, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const endpoint = queryString ? `/api/admin/contacts?${queryString}` : '/api/admin/contacts';
  
  return apiRequest(endpoint, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const updateContact = async (token, id, data) => {
  return apiRequest(`/api/admin/contacts`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ id, ...data }),
  });
};

export const getEnquiries = async (token, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const endpoint = queryString ? `/api/admin/enquiries?${queryString}` : '/api/admin/enquiries';
  
  return apiRequest(endpoint, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const updateEnquiry = async (token, id, data) => {
  return apiRequest(`/api/admin/enquiries`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ id, ...data }),
  });
};

export default apiRequest;
