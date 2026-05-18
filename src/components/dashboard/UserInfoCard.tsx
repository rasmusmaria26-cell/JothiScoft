import React from 'react';
import { Badge, Card } from '@/components/ui';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/i18n/translations';

export function UserInfoCard() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <Card 
      className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden group"
      style={{
        background: 'linear-gradient(90deg, var(--bg-elevated) 0%, var(--bg-card) 100%)',
      }}
    >
      <div className="flex flex-col z-10">
        <div className="flex items-center gap-4">
          <h2 className={`text-xl md:text-2xl font-bold text-gold-bright flex items-baseline gap-2 ${language === 'ta' ? 'font-kavivanar' : 'font-serif'}`}>
            <span>{t.greeting},</span>
            <span className="text-text-primary font-sans">Maya</span>
          </h2>
        </div>
        <p className="text-sm text-text-muted mt-1 font-sans tracking-wide">
          9345851195
        </p>
      </div>
      
      <div className="flex flex-col items-start md:items-end z-10 gap-2">
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-bg-page border border-bg-border rounded-full p-1 cursor-pointer transition-colors hover:border-gold-deep/50"
            aria-label="Toggle Language"
          >
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${language === 'en' ? 'bg-gold-deep/20 text-gold-bright' : 'text-text-muted'}`}>
              EN
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${language === 'ta' ? 'bg-gold-deep/20 text-gold-bright' : 'text-text-muted'}`}>
              TA
            </span>
          </button>

          <Badge 
            className="bg-gold-deep/20 text-gold-bright border border-gold-deep/30 px-3 py-1 text-xs relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gold-bright/30 to-transparent -translate-x-full animate-[shimmerSweep_2s_infinite]" 
            />
            <span className="relative z-10 font-bold tracking-wide">3 {t.plan}</span>
          </Badge>
        </div>
        <span className="text-[10px] text-text-muted">{t.exp}: 27 Jun 26</span>
      </div>
    </Card>
  );
}
