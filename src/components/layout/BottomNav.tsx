import React from 'react';
import { Home, Compass, Calendar, Heart, Hash } from 'lucide-react';
import Link from 'next/link';

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full border-t border-bg-border bg-bg-card flex items-center justify-around h-16 pb-safe z-50">
      <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-text-secondary hover:text-gold-bright transition-colors">
        <Home className="w-6 h-6 mb-1" />
        <span className="text-[10px] leading-none">முகப்பு</span>
      </Link>
      <Link href="/horoscope" className="flex flex-col items-center justify-center w-full h-full text-cat-horoscope hover:text-gold-bright transition-colors">
        <Compass className="w-6 h-6 mb-1" />
        <span className="text-[10px] leading-none">ஜாதகம்</span>
      </Link>
      <Link href="/panchangam" className="flex flex-col items-center justify-center w-full h-full text-cat-panchangam hover:text-gold-bright transition-colors">
        <Calendar className="w-6 h-6 mb-1" />
        <span className="text-[10px] leading-none">பஞ்சாங்கம்</span>
      </Link>
      <Link href="/matching" className="flex flex-col items-center justify-center w-full h-full text-cat-marriage hover:text-gold-bright transition-colors">
        <Heart className="w-6 h-6 mb-1" />
        <span className="text-[10px] leading-none">பொருத்தம்</span>
      </Link>
      <Link href="/numerology" className="flex flex-col items-center justify-center w-full h-full text-cat-numerology hover:text-gold-bright transition-colors">
        <Hash className="w-6 h-6 mb-1" />
        <span className="text-[10px] leading-none">எண்கள்</span>
      </Link>
    </nav>
  );
}

