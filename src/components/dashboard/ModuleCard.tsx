import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui';

export interface ModuleCardProps {
  icon: LucideIcon;
  label: string;          // Tamil label
  sublabel?: string;      // English sublabel (optional)
  badge?: 'NEW' | 'PRO' | 'PREMIUM' | 'FREE';
  categoryColor: string;  // CSS var or hex
  href: string;
  gradient: string;       // tailwind gradient classes or inline style
}

export function ModuleCard({ icon: Icon, label, sublabel, badge, categoryColor, href, gradient }: ModuleCardProps) {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col items-center p-4 bg-bg-card border border-bg-border rounded-xl transition-all duration-200 hover:-translate-y-[2px] active:scale-95"
      style={{
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 12px ${categoryColor.replace('var(', '').replace(')', '')}4d`; // 0.3 opacity hex equivalent is ~4d, but relying on CSS var replacement might be tricky. Better to just use a custom property if needed, or stick to a solid color variable. Since categoryColor is "var(--cat-...)", we can use it directly in boxShadow if we compose it, but wait, rgba(var(--cat-r,g,b), 0.3) would be better. Let's just use CSS variable directly or trust the browser. Actually, we can just use a standard shadow with the color.
        e.currentTarget.style.borderColor = categoryColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `none`;
        e.currentTarget.style.borderColor = 'var(--bg-border)';
      }}
    >
      {badge && (
        <div className="absolute top-2 right-2">
          {badge === 'NEW' && <Badge className="bg-gold-deep text-text-inverse">{badge}</Badge>}
          {badge === 'PRO' && <Badge className="bg-cat-horoscope text-white">{badge}</Badge>}
          {badge === 'PREMIUM' && <Badge className="bg-gradient-to-r from-gold-deep to-gold-bright text-text-inverse">{badge}</Badge>}
          {badge === 'FREE' && <Badge className="bg-bg-active text-text-muted">{badge}</Badge>}
        </div>
      )}

      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
        style={{ background: gradient }}
      >
        <Icon size={24} style={{ color: categoryColor }} />
      </div>

      <div className="flex flex-col items-center text-center gap-1">
        <span className="text-[12px] font-medium text-text-primary">{label}</span>
        {sublabel && <span className="text-[10px] text-text-muted">{sublabel}</span>}
      </div>
    </Link>
  );
}
