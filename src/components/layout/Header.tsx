import React from 'react';

export function Header() {
  return (
    <header className="h-16 border-b border-bg-border bg-bg-page flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="text-gold-bright font-serif text-xl font-bold">JothiSoft</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-bg-elevated border border-bg-border"></div>
      </div>
    </header>
  );
}
