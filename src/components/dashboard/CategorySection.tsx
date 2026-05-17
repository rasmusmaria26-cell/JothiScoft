'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ModuleCard, type ModuleCardProps } from './ModuleCard';
import { cn } from '@/components/ui';

export interface CategorySectionProps {
  title: string;
  emoji: string;
  color: string;          // category CSS var
  modules: Omit<ModuleCardProps, 'categoryColor' | 'gradient'>[];
  gradient: string;       // section header gradient
}

export function CategorySection({ title, emoji, color, modules, gradient }: CategorySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "flex flex-col gap-3 transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div 
        className="flex items-center gap-2 p-3 rounded-lg border border-bg-border relative overflow-hidden group"
        style={{ background: 'var(--bg-card)' }}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: gradient }}
        />
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer-sweep pointer-events-none"
          style={{ 
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)`,
            backgroundSize: '200% 100%'
          }}
        />
        <div className="w-1 h-6 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-lg">{emoji}</span>
        <h2 className="text-sm md:text-base font-bold text-text-primary">{title}</h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory hide-scrollbar">
        {modules.map((mod, index) => (
          <div 
            key={mod.label} 
            className="snap-start min-w-[100px]"
            style={{ 
              animation: isVisible ? `fadeUp 400ms ease-out ${index * 50}ms forwards` : 'none',
              opacity: isVisible ? 1 : 0 // Fallback for before animation runs
            }}
          >
            <ModuleCard 
              {...mod} 
              categoryColor={color} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
