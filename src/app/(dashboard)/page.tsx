'use client'

import React from 'react';
import { categoryData } from '@/mock/dashboard'
import { UserInfoCard } from '@/components/dashboard/UserInfoCard'
import { LivePanchangamBanner } from '@/components/dashboard/LivePanchangamBanner'
import { CategorySection } from '@/components/dashboard/CategorySection'

export default function DashboardPage() {
  return (
    <main className="px-4 py-4 space-y-5 pb-24">
      <UserInfoCard />
      <LivePanchangamBanner />
      {categoryData.map((cat) => (
        <CategorySection key={cat.title} {...cat} />
      ))}
    </main>
  )
}


