import React from 'react';

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="text-3xl font-serif font-bold text-gold-bright">Welcome to JothiSoft</h1>
        <h2 className="text-xl font-serif text-text-secondary">ஜோதிசாஃப்ட் வரவேற்கிறது</h2>
      </div>
      <p className="text-text-muted">This is a temporary placeholder to test our new layout shell.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Placeholder cards to show the background colors */}
        <div className="bg-bg-card p-6 rounded-lg border border-bg-border">
          <h2 className="text-xl font-bold text-text-primary mb-2">Card 1 (கார்டு 1)</h2>
          <p className="text-text-muted">bg-bg-card with border-bg-border</p>
        </div>
        <div className="bg-bg-elevated p-6 rounded-lg border border-bg-border">
          <h2 className="text-xl font-bold text-text-primary mb-2">Card 2 (கார்டு 2)</h2>
          <p className="text-text-muted">bg-bg-elevated</p>
        </div>
      </div>
      
      <button className="bg-gold-deep text-text-inverse font-bold py-3 px-6 rounded-pill hover:bg-gold-mid w-fit transition-colors flex flex-col items-center">
        <span>Test Button</span>
        <span className="text-[10px] font-normal">சோதனை பொத்தான்</span>
      </button>
    </div>
  );
}

