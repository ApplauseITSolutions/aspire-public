import React, { useState, useEffect } from 'react'
import { getEnquiries, updateEnquiry } from '../services/api'
import { Search, Filter, Eye, Edit, Check, X, User, BookOpen } from 'lucide-react'

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  })
  const [filters, setFilters] = useState({
    search: '',
    status: ''
  })
  const [selectedEnquiry, setSelectedEnquiry] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    fetchEnquiries()
  }, [pagination.page, filters])

  const fetchEnquiries = async () => {
    setLoading(true)
    try {
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        search: filters.search,
        status: filters.status
      }
      
      const response = await getEnquiries(params)
      setEnquiries(response.data.data)
      setPagination(prev => ({
        ...prev,
        total: response.data.pagination.total,
        pages: response.data.pagination.pages
      }))
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch enquiries')
      setLoading(false)
      console.error('Enquiries fetch error:', err)
    }
  }

  const handleSearch = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }))
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handleStatusFilter = (status) => {
    setFilters(prev => ({ ...prev, status }))
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }))
  }

  const handleStatusUpdate = async (enquiryId, newStatus) => {
    try {
      await updateEnquiry(enquiryId, { status: newStatus })
      fetchEnquiries() // Refresh list
      setShowDetails(false)
    } catch (err) {
      setError('Failed to update enquiry status')
      console.error('Update error:', err)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'blue'
      case 'contacted': return 'yellow'
      case 'interested': return 'purple'
      case 'converted': return 'green'
      case 'not_interested': return 'red'
      default: return 'gray'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Course Enquiries</h1>
        <p className="text-gray-600">Manage and track course interest enquiries.</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, course..."
                value={filters.search}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 w-full"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <select
              value={filters.status}
              onChange={(e) => handleStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="interested">Interested</option>
              <option value="converted">Converted</option>
              <option value="not_interested">Not Interested</option>
            </select>
            
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <X className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      )}

      {/* Enquiries Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Interest
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{enquiry.name}</div>
                      <div className="text-sm text-gray-500">{enquiry.email}</div>
                      {enquiry.phone && (
                        <div className="text-sm text-gray-500">{enquiry.phone}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{enquiry.course_interest || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${getStatusColor(enquiry.status)}-100 text-${getStatusColor(enquiry.status)}-800`}>
                      {enquiry.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(enquiry.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedEnquiry(enquiry)
                          setShowDetails(true)
                        }}
                        className="text-primary-600 hover:text-primary-900"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      
                      {enquiry.status === 'new' && (
                        <button
                          onClick={() => handleStatusUpdate(enquiry.id, 'contacted')}
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Mark as Contacted"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                      )}
                      
                      {enquiry.status === 'contacted' && (
                        <button
                          onClick={() => handleStatusUpdate(enquiry.id, 'interested')}
                          className="text-purple-600 hover:text-purple-900"
                          title="Mark as Interested"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                      )}
                      
                      {enquiry.status === 'interested' && (
                        <button
                          onClick={() => handleStatusUpdate(enquiry.id, 'converted')}
                          className="text-green-600 hover:text-green-900"
                          title="Mark as Converted"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page === pagination.pages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing page <span className="font-medium">{pagination.page}</span> of{' '}
                  <span className="font-medium">{pagination.pages}</span>
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  
                  {/* Page numbers */}
                  {Array.from({ length: Math.min(5, pagination.pages) }, (_, i) => {
                    const pageNum = Math.max(1, pagination.page - 2) + i
                    if (pageNum <= pagination.pages) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                            pageNum === pagination.page
                              ? 'z-10 bg-primary-50 border-primary-500 text-primary-600'
                              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    }
                    return null
                  })}
                  
                  <button
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={pagination.page === pagination.pages}
                    className="relative ml-3 inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {showDetails && selectedEnquiry && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-lg max-w-2xl w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Enquiry Details</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Personal Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{selectedEnquiry.name}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{selectedEnquiry.email}</span>
                      </div>
                      {selectedEnquiry.phone && (
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-900">{selectedEnquiry.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Academic Information</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-500">Course Interest:</span>
                        <p className="text-sm text-gray-900 mt-1">{selectedEnquiry.course_interest || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Current Status:</span>
                        <p className="text-sm text-gray-900 mt-1">{selectedEnquiry.current_status || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Enquiry Details</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-500">Message:</span>
                      <p className="text-sm text-gray-900 mt-1">{selectedEnquiry.message || 'No message provided'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Status:</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${getStatusColor(selectedEnquiry.status)}-100 text-${getStatusColor(selectedEnquiry.status)}-800 ml-2`}>
                        {selectedEnquiry.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Submitted:</span>
                      <p className="text-sm text-gray-900 mt-1">{new Date(selectedEnquiry.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                {selectedEnquiry.admin_notes && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Admin Notes</h4>
                    <p className="text-sm text-gray-900">{selectedEnquiry.admin_notes}</p>
                  </div>
                )}
                
                <div className="flex justify-end space-x-3">
                  {selectedEnquiry.status === 'new' && (
                    <button
                      onClick={() => handleStatusUpdate(selectedEnquiry.id, 'contacted')}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      Mark as Contacted
                    </button>
                  )}
                  
                  {selectedEnquiry.status === 'contacted' && (
                    <button
                      onClick={() => handleStatusUpdate(selectedEnquiry.id, 'interested')}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Mark as Interested
                    </button>
                  )}
                  
                  {selectedEnquiry.status === 'interested' && (
                    <button
                      onClick={() => handleStatusUpdate(selectedEnquiry.id, 'converted')}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Mark as Converted
                    </button>
                  )}
                  
                  {selectedEnquiry.status === 'interested' && (
                    <button
                      onClick={() => handleStatusUpdate(selectedEnquiry.id, 'not_interested')}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Mark as Not Interested
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Enquiries
