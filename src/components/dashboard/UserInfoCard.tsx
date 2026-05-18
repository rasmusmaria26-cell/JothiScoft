import React from 'react';
import { Badge, Card } from '@/components/ui';

export function UserInfoCard() {
  return (
    <Card 
      className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden group"
      style={{
        background: 'linear-gradient(90deg, var(--bg-elevated) 0%, var(--bg-card) 100%)',
      }}
    >
      <div className="flex flex-col z-10">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-gold-bright flex items-baseline gap-2">
          <span>வணக்கம்,</span>
          <span className="text-text-primary">Maya</span>
        </h2>
        <p className="text-sm text-text-muted mt-1 font-sans tracking-wide">
          9345851195
        </p>
      </div>
      
      <div className="flex flex-col items-start md:items-end z-10 gap-1.5">
        <Badge 
          className="bg-gold-deep/20 text-gold-bright border border-gold-deep/30 px-3 py-1 text-xs relative overflow-hidden"
        >
          {/* Shimmer effect inside badge */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gold-bright/30 to-transparent -translate-x-full animate-[shimmerSweep_2s_infinite]" 
          />
          <span className="relative z-10 font-bold tracking-wide">3 Months Plan</span>
        </Badge>
        <span className="text-[10px] text-text-muted">Exp: 27 Jun 26</span>
      </div>
    </Card>
  );
}
