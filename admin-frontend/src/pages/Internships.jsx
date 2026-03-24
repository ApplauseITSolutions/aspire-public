import React, { useState, useEffect } from 'react'
import { getInternships, updateInternship } from '../services/api'
import { Search, Filter, Eye, Edit, Check, X, Clock, IndianRupee } from 'lucide-react'

const Internships = () => {
  const [internships, setInternships] = useState([])
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
  const [selectedInternship, setSelectedInternship] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    fetchInternships()
  }, [pagination.page, filters])

  const fetchInternships = async () => {
    setLoading(true)
    try {
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        search: filters.search,
        status: filters.status
      }
      
      const response = await getInternships(params)
      setInternships(response.data.data)
      setPagination(prev => ({
        ...prev,
        total: response.data.pagination.total,
        pages: response.data.pagination.pages
      }))
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch internships')
      setLoading(false)
      console.error('Internships fetch error:', err)
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

  const handleStatusUpdate = async (internshipId, newStatus) => {
    try {
      await updateInternship(internshipId, { enrolment_status: newStatus })
      fetchInternships() // Refresh list
      setShowDetails(false)
    } catch (err) {
      setError('Failed to update internship status')
      console.error('Update error:', err)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'yellow'
      case 'confirmed': return 'green'
      case 'rejected': return 'red'
      case 'completed': return 'blue'
      default: return 'gray'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />
      case 'confirmed': return <Check className="h-4 w-4" />
      case 'rejected': return <X className="h-4 w-4" />
      case 'completed': return <Check className="h-4 w-4" />
      default: return null
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
        <h1 className="text-2xl font-semibold text-gray-900">Internship Applications</h1>
        <p className="text-gray-600">Manage and review internship enrolment applications.</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, college..."
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
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="rejected">Rejected</option>
              <option value="completed">Completed</option>
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

      {/* Internships Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  College
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Domain
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {internships.map((internship) => (
                <tr key={internship.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {internship.first_name} {internship.last_name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {internship.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{internship.college_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{internship.internship_domain}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${getStatusColor(internship.enrolment_status)}-100 text-${getStatusColor(internship.enrolment_status)}-800`}>
                      {getStatusIcon(internship.enrolment_status)}
                      <span className="ml-2">{internship.enrolment_status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      internship.payment_status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {internship.payment_status === 'paid' ? (
                        <>
                          <IndianRupee className="h-3 w-3 mr-1" />
                          Paid
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3 mr-1" />
                          Pending
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedInternship(internship)
                          setShowDetails(true)
                        }}
                        className="text-primary-600 hover:text-primary-900"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      
                      {internship.enrolment_status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate(internship.id, 'confirmed')}
                            className="text-green-600 hover:text-green-900"
                            title="Confirm"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(internship.id, 'rejected')}
                            className="text-red-600 hover:text-red-900"
                            title="Reject"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      
                      {internship.enrolment_status === 'confirmed' && (
                        <button
                          onClick={() => handleStatusUpdate(internship.id, 'completed')}
                          className="text-blue-600 hover:text-blue-900"
                          title="Mark Complete"
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
      {showDetails && selectedInternship && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-lg max-w-2xl w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Internship Details</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Personal Information</h4>
                  <div className="space-y-2">
                    <div><span className="text-sm text-gray-500">Name:</span> <span className="text-sm text-gray-900">{selectedInternship.first_name} {selectedInternship.last_name}</span></div>
                    <div><span className="text-sm text-gray-500">Email:</span> <span className="text-sm text-gray-900">{selectedInternship.email}</span></div>
                    <div><span className="text-sm text-gray-500">Phone:</span> <span className="text-sm text-gray-900">{selectedInternship.phone}</span></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Academic Information</h4>
                  <div className="space-y-2">
                    <div><span className="text-sm text-gray-500">College:</span> <span className="text-sm text-gray-900">{selectedInternship.college_name}</span></div>
                    <div><span className="text-sm text-gray-500">Domain:</span> <span className="text-sm text-gray-900">{selectedInternship.internship_domain}</span></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Status & Payment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">Enrolment Status:</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${getStatusColor(selectedInternship.enrolment_status)}-100 text-${getStatusColor(selectedInternship.enrolment_status)}-800 ml-2`}>
                      {selectedInternship.enrolment_status}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Payment Status:</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedInternship.payment_status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    } ml-2`}>
                      {selectedInternship.payment_status}
                    </span>
                  </div>
                </div>
                
                {selectedInternship.admin_notes && (
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">Admin Notes:</span>
                    <p className="text-sm text-gray-900 mt-1">{selectedInternship.admin_notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Internships
