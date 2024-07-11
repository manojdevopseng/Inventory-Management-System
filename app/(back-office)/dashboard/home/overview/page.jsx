import DashboardBanner from '@/components/dashboard/DashboardBanner'
import ProductOverview from '@/components/dashboard/ProductOverview'
import SalesOverview from '@/components/dashboard/SalesOverview'
import SalesSummary from '@/components/dashboard/SalesSummary'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <DashboardBanner />
      <SalesOverview />
      <ProductOverview />
      <SalesSummary />
        <h2>Dashboard</h2>
    </div>
  )
}
