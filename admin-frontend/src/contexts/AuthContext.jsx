import React, { createContext, useContext, useState } from 'react'
import { adminLogin } from '../services/api'

const AuthContext = createContext()

const readStoredAuth = () => {
  const storedToken = localStorage.getItem('admin_token')
  const storedUser = localStorage.getItem('admin_user')

  if (!storedToken || !storedUser) {
    return { token: null, user: null }
  }

  try {
    return {
      token: storedToken,
      user: JSON.parse(storedUser),
    }
  } catch {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    return { token: null, user: null }
  }
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const initialAuth = readStoredAuth()
  const [user, setUser] = useState(initialAuth.user)
  const [token, setToken] = useState(initialAuth.token)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [initialized] = useState(true)

  const login = async (credentials) => {
    setLoading(true)
    setError('')

    try {
      const response = await adminLogin(credentials)
      console.log('Login response:', response)

      if (response.status) {
        const { user: userData, token: userToken } = response.data

        localStorage.setItem('admin_token', userToken)
        localStorage.setItem('admin_user', JSON.stringify(userData))
        setUser(userData)
        setToken(userToken)

        return { success: true }
      }

      const errorMsg = response.message || 'Login failed'
      console.error('Login failed:', errorMsg)
      setError(errorMsg)
      return { success: false }
    } catch (err) {
      console.error('Login error:', err)
      // Handle different error formats
      let errorMessage = 'An error occurred during login'
      
      if (typeof err === 'string') {
        errorMessage = err
      } else if (err?.message) {
        errorMessage = err.message
      } else if (err?.error) {
        errorMessage = err.error
      } else if (err?.data?.message) {
        errorMessage = err.data.message
      }
      
      setError(errorMessage)
      return { success: false }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    setError('')
  }

  const isAuthenticated = () => {
    const storedAuth = readStoredAuth()
    return !!(token || storedAuth.token) && !!(user || storedAuth.user)
  }

  const value = {
    user,
    token,
    loading,
    error,
    initialized,
    login,
    logout,
    isAuthenticated,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
