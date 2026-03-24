import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Internships', href: '/internships', icon: Users },
  { name: 'Contacts', href: '/contacts', icon: MessageSquare },
  { name: 'Enquiries', href: '/enquiries', icon: HelpCircle },
]

const Layout = () => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:shadow-none lg:h-screen lg:sticky lg:top-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <img 
              src="/aspire-public/src/assets/images/logo-aspire.png" 
              alt="Aspire Logo" 
              className="h-8 w-auto"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Admin Panel
              </p>
              <h1 className="mt-1 text-lg font-semibold text-slate-900">Aspire Admin</h1>
            </div>
          </div>
          <button
            type="button"
            className="rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <nav className="flex-1 overflow-y-auto px-3 py-6">
            <div className="space-y-1.5">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="border-t border-slate-200 p-4 bg-white flex-shrink-0">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white">
                {user?.name?.charAt(0)?.toUpperCase() || 'A'}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">{user?.name}</p>
                <p className="truncate text-xs text-slate-500">{user?.email}</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-md p-2 text-slate-400 transition-colors hover:bg-white hover:text-slate-700"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col lg:h-screen lg:overflow-hidden">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur lg:flex-shrink-0">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <p className="text-sm font-semibold text-slate-900">Admin Dashboard</p>
                <p className="text-xs text-slate-500">Manage forms, enrolments and enquiries</p>
              </div>
            </div>

            <p className="hidden text-sm text-slate-500 sm:block">
              Welcome back, <span className="font-medium text-slate-700">{user?.name}</span>
            </p>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
