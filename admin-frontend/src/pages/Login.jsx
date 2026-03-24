import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Eye, EyeOff, Mail, Lock, X } from 'lucide-react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const { login, loading, error, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    
    const result = await login(formData)
    
    if (result.success) {
      navigate('/dashboard')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '28rem', margin: '0 auto', width: '100%' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <img 
                src="/aspire-public/src/assets/images/logo-aspire.png" 
                alt="Aspire Logo" 
                style={{ height: '3rem', width: 'auto', margin: '0 auto' }}
              />
            </div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>
              Aspire Admin
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Sign in to your admin dashboard
            </p>
            <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#dbeafe', borderRadius: '0.375rem', border: '1px solid #3b82f6' }}>
              <p style={{ fontSize: '0.75rem', color: '#1e40af', margin: 0 }}>
                <strong>Default:</strong> admin@aspire.com / admin123
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>
                Email address
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                  <Mail size={16} color="#9ca3af" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    paddingLeft: '2.5rem',
                    paddingRight: '0.75rem',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                    border: errors.email ? '1px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#ef4444' }}>{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                  <Lock size={16} color="#9ca3af" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    paddingLeft: '2.5rem',
                    paddingRight: '2.5rem',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                    border: errors.password ? '1px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {showPassword ? (
                    <EyeOff size={16} color="#9ca3af" />
                  ) : (
                    <Eye size={16} color="#9ca3af" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#ef4444' }}>{errors.password}</p>
              )}
            </div>

            {error && (
              <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '0.375rem', padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ flexShrink: 0, marginRight: '0.75rem' }}>
                    <X size={20} color="#ef4444" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#991b1b', marginBottom: '0.25rem' }}>
                      Sign in failed
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: '#b91c1c' }}>
                      {error}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'white',
                  backgroundColor: loading ? '#92400e' : '#ea580c',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.5 : 1
                }}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
