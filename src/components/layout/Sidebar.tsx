import React from 'react';
import { Home, Compass, Calendar, Heart, Hash, Settings } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-bg-border bg-bg-card h-[calc(100vh-4rem)] p-4 sticky top-16">
      <nav className="flex flex-col gap-2 flex-1">
        <Link href="/" className="flex items-center gap-3 p-3 rounded-md hover:bg-bg-active text-text-secondary hover:text-text-primary transition-colors">
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link href="/horoscope" className="flex items-center gap-3 p-3 rounded-md hover:bg-bg-active text-text-secondary hover:text-text-primary transition-colors">
          <Compass className="w-5 h-5 text-cat-horoscope" />
          <span>Horoscope</span>
        </Link>
        <Link href="/panchangam" className="flex items-center gap-3 p-3 rounded-md hover:bg-bg-active text-text-secondary hover:text-text-primary transition-colors">
          <Calendar className="w-5 h-5 text-cat-panchangam" />
          <span>Panchangam</span>
        </Link>
        <Link href="/matching" className="flex items-center gap-3 p-3 rounded-md hover:bg-bg-active text-text-secondary hover:text-text-primary transition-colors">
          <Heart className="w-5 h-5 text-cat-marriage" />
          <span>Matching</span>
        </Link>
        <Link href="/numerology" className="flex items-center gap-3 p-3 rounded-md hover:bg-bg-active text-text-secondary hover:text-text-primary transition-colors">
          <Hash className="w-5 h-5 text-cat-numerology" />
          <span>Numerology</span>
        </Link>
      </nav>
      <div className="mt-auto pt-4 border-t border-bg-border">
        <Link href="/settings" className="flex items-center gap-3 p-3 rounded-md hover:bg-bg-active text-text-secondary hover:text-text-primary transition-colors">
          <Settings className="w-5 h-5 text-text-muted" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
