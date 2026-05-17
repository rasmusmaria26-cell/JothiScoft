'use client'

import { AstroBackground } from '@/components/layout/AstroBackground'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { BottomNav } from '@/components/layout/BottomNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-bg-page">
      <AstroBackground />
      <Header />
      <div className="flex pt-[52px]">
        <Sidebar />
        <main className="
          flex-1
          min-h-[calc(100vh-52px)]
          md:pl-[80px]
          px-5 md:px-8
          py-6
          pb-24 md:pb-8
          relative z-10
          max-w-none
        ">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
