import React, { useEffect, useState } from 'react'
import { getDashboardStats } from '../services/api'
import {
  Users,
  MessageSquare,
  HelpCircle,
  TrendingUp,
  Calendar,
  IndianRupee,
} from 'lucide-react'

const cardStyles = {
  blue: {
    icon: 'text-blue-600',
    chip: 'bg-blue-50 text-blue-700',
  },
  green: {
    icon: 'text-emerald-600',
    chip: 'bg-emerald-50 text-emerald-700',
  },
  purple: {
    icon: 'text-violet-600',
    chip: 'bg-violet-50 text-violet-700',
  },
  amber: {
    icon: 'text-amber-600',
    chip: 'bg-amber-50 text-amber-700',
  },
}

const Dashboard = () => {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getDashboardStats()
        setStats(response.data)
      } catch (err) {
        setError('Failed to load dashboard stats')
        console.error('Dashboard stats error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      title: 'Total Enrolments',
      value: stats?.enrolments?.total ?? 0,
      meta: `${stats?.enrolments?.pending ?? 0} pending`,
      icon: Users,
      tone: 'blue',
    },
    {
      title: 'Total Contacts',
      value: stats?.contacts?.total ?? 0,
      meta: `${stats?.contacts?.new ?? 0} new`,
      icon: MessageSquare,
      tone: 'green',
    },
    {
      title: 'Total Enquiries',
      value: stats?.enquiries?.total ?? 0,
      meta: `${stats?.enquiries?.new ?? 0} new`,
      icon: HelpCircle,
      tone: 'purple',
    },
    {
      title: 'Total Revenue',
      value: `Rs.${((stats?.enrolments?.paid ?? 0) * 1805.4).toFixed(2)}`,
      meta: `${stats?.enrolments?.paid ?? 0} paid`,
      icon: IndianRupee,
      tone: 'amber',
    },
  ]

  const detailSections = [
    {
      title: 'Internship Enrolments',
      icon: Users,
      iconClass: 'text-blue-600',
      rows: [
        { label: 'Pending', value: stats?.enrolments?.pending ?? 0, valueClass: 'text-slate-900' },
        { label: 'Confirmed', value: stats?.enrolments?.confirmed ?? 0, valueClass: 'text-emerald-600' },
        { label: 'Rejected', value: stats?.enrolments?.rejected ?? 0, valueClass: 'text-rose-600' },
        { label: 'Completed', value: stats?.enrolments?.completed ?? 0, valueClass: 'text-blue-600' },
      ],
    },
    {
      title: 'Contact Submissions',
      icon: MessageSquare,
      iconClass: 'text-emerald-600',
      rows: [
        { label: 'New', value: stats?.contacts?.new ?? 0, valueClass: 'text-slate-900' },
        { label: 'Read', value: stats?.contacts?.read ?? 0, valueClass: 'text-amber-600' },
        { label: 'Replied', value: stats?.contacts?.replied ?? 0, valueClass: 'text-emerald-600' },
      ],
    },
    {
      title: 'Course Enquiries',
      icon: HelpCircle,
      iconClass: 'text-violet-600',
      rows: [
        { label: 'New', value: stats?.enquiries?.new ?? 0, valueClass: 'text-slate-900' },
        { label: 'Contacted', value: stats?.enquiries?.contacted ?? 0, valueClass: 'text-amber-600' },
        { label: 'Interested', value: stats?.enquiries?.interested ?? 0, valueClass: 'text-blue-600' },
        { label: 'Converted', value: stats?.enquiries?.converted ?? 0, valueClass: 'text-emerald-600' },
      ],
    },
  ]

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-100 border-t-primary-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-5 text-center">
          <p className="text-lg font-semibold text-rose-700">Error loading dashboard</p>
          <p className="mt-1 text-sm text-rose-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-primary-700 px-6 py-8 text-white shadow-sm sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-100">Overview</p>
          <h1 className="mt-3 text-3xl font-semibold">Dashboard Overview</h1>
          <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">
            Track internship enrolments, contact activity, and course enquiries from one place.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon
          const tone = cardStyles[card.tone]

          return (
            <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{card.title}</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">{card.value}</p>
                </div>
                <div className={`rounded-2xl p-3 ${tone.chip}`}>
                  <Icon className={`h-6 w-6 ${tone.icon}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span>{card.meta}</span>
              </div>
            </div>
          )
        })}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {detailSections.map((section) => {
          const Icon = section.icon

          return (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-slate-100 p-2.5">
                  <Icon className={`h-5 w-5 ${section.iconClass}`} />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm text-slate-600">{row.label}</span>
                    <span className={`text-sm font-semibold ${row.valueClass}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-slate-100 p-2.5">
            <Calendar className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
            <p className="text-sm text-slate-500">Latest platform activity will appear here.</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
          <Calendar className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-4 text-sm font-medium text-slate-600">No recent activity to display</p>
          <p className="mt-1 text-sm text-slate-400">
            Activity will appear once users start submitting forms and enquiries.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
