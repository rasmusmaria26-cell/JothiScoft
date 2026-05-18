'use client'

import { AstroBackground } from '@/components/layout/AstroBackground'
import { Header } from '@/components/layout/Header'
import { LanguageProvider } from '@/context/LanguageContext'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg-page">
        <AstroBackground />
        <Header />
        <div className="flex pt-[52px]">
          <main className="
            flex-1
            min-w-0
            min-h-[calc(100vh-52px)]
            px-3 sm:px-5 md:px-8
            py-4 sm:py-6
            pb-8
            relative z-10
            max-w-none
          ">
            {children}
          </main>
        </div>
      </div>
    </LanguageProvider>
  )
}
