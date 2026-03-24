import axios from 'axios'

// Production-ready API configuration
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  `${window.location.protocol}//${window.location.hostname}/backend/api`
const ADMIN_BASE_PATH = `/admin`

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('admin_token')
      localStorage.removeItem('admin_user')
      window.location.href = `${window.location.origin}${ADMIN_BASE_PATH}/#/login`
    }
    return Promise.reject(error.response?.data || error.message)
  }
)

// Auth API
export const adminLogin = async (credentials) => {
  return api.post('/auth/login', credentials)
}

export const forgotPassword = async (email) => {
  return api.post('/auth/forgot-password', { email })
}

// Dashboard API
export const getDashboardStats = async () => {
  return api.get('/admin/dashboard')
}

// Internships API
export const getInternships = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString()
  return api.get(`/admin/internships${queryString ? `?${queryString}` : ''}`)
}

export const updateInternship = async (id, data) => {
  return api.put('/admin/internships', { id, ...data })
}

// Contacts API
export const getContacts = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString()
  return api.get(`/admin/contacts${queryString ? `?${queryString}` : ''}`)
}

export const updateContact = async (id, data) => {
  return api.put('/admin/contacts', { id, ...data })
}

// Enquiries API
export const getEnquiries = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString()
  return api.get(`/admin/enquiries${queryString ? `?${queryString}` : ''}`)
}

export const updateEnquiry = async (id, data) => {
  return api.put('/admin/enquiries', { id, ...data })
}

export default api
