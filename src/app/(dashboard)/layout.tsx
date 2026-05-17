import React from 'react';
import { Header, Sidebar, BottomNav } from '@/components/layout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-page flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row relative">
        <Sidebar />
        <main className="flex-1 pb-16 md:pb-0 px-4 py-6 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
