'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/i18n/translations'

const MOCK_USER = {
  name: 'Maya',
  phone: '9345851195',
  plan: '3 Months Plan',
  expiry: '27 Jun 26',
}

const MOCK_PANCHANGAM = {
  tithi: 'சஷ்டி',
  tithiEn: 'Sashti',
  nakshatra: 'கார்த்திகை',
  nakshatraEn: 'Karthigai',
  yogam: 'சுபம்',
  yogamEn: 'Subham',
  karanam: 'பவம்',
  karanamEn: 'Bavam',
  rahuKalam: '10:30 – 12:00',
  dateTa: 'ஞாயிறு · 17 மே 2026',
  dateEn: 'Sun · 17 May 2026',
  luckyColor: '#22c55e',
  luckyColorNameTa: 'பச்சை',
  luckyColorNameEn: 'Green',
  luckyNumber: '6',
  luckyDirectionTa: 'கிழக்கு',
  luckyDirectionEn: 'East',
  isAuspicious: true,
}

export function TodayHero() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <motion.div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border p-3 sm:p-4"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24, delay: 0.05 }}
      style={{
        background: 'linear-gradient(135deg, rgba(123,94,167,0.18), rgba(201,146,42,0.10))',
        backgroundColor: 'rgba(15, 15, 36, 0.80)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(123,94,167,0.40)',
      }}
    >
      {/* Ambient glow top-right — floating */}
      <motion.div
        className="absolute top-0 right-0 pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '160px',
          height: '160px',
          background: 'radial-gradient(circle at top right, rgba(123,94,167,0.22), transparent 70%)',
        }}
      />

      {/* Top row — greeting + badges */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-0 mb-4 relative z-10 hidden">
        {/* We can hide this if UserInfoCard covers it, but we keep the updated code for reference */}
        <div>
          <p className="text-[12px] mb-[3px]" style={{ color: 'var(--text-muted)' }}>
            {language === 'ta' ? MOCK_PANCHANGAM.dateTa : MOCK_PANCHANGAM.dateEn}
          </p>
          <motion.h1
            className="text-[20px] sm:text-[24px] font-bold leading-tight"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
            style={{ color: 'var(--text-primary)' }}
          >
            {t.greeting}, {MOCK_USER.name} 🙏
          </motion.h1>
        </div>
      </div>

      {/* Panchangam data grid — Tithi is hero */}
      <div className="relative z-10 mb-3">
        {/* Tithi hero row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="rounded-[10px] px-[12px] py-[8px] mb-[6px] flex items-center justify-between"
          style={{
            background: 'rgba(201,146,42,0.10)',
            border: '1px solid rgba(201,146,42,0.25)',
          }}
        >
          <div>
            <p className="text-[10px] mb-[2px]" style={{ color: 'var(--text-muted)' }}>{t.tithi}</p>
            <p className="text-[18px] font-bold" style={{ color: 'var(--gold-bright)' }}>
              {language === 'ta' ? MOCK_PANCHANGAM.tithi : MOCK_PANCHANGAM.tithiEn}
            </p>
          </div>
          {MOCK_PANCHANGAM.isAuspicious && (
            <div
              className="flex items-center gap-[5px] px-[8px] py-[3px] rounded-full text-[10px] font-medium"
              style={{
                background: 'rgba(46,125,107,0.15)',
                border: '1px solid rgba(46,125,107,0.3)',
                color: '#5dcaa5',
              }}
            >
              <span className="w-[5px] h-[5px] rounded-full" style={{ background: '#5dcaa5' }} />
              {t.auspiciousDay}
            </div>
          )}
        </motion.div>

        {/* Secondary 3-col grid — staggered */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[5px]">
          {[
            { key: t.nakshatra, val: language === 'ta' ? MOCK_PANCHANGAM.nakshatra : MOCK_PANCHANGAM.nakshatraEn },
            { key: t.yogam,      val: language === 'ta' ? MOCK_PANCHANGAM.yogam : MOCK_PANCHANGAM.yogamEn },
            { key: t.karanam,    val: language === 'ta' ? MOCK_PANCHANGAM.karanam : MOCK_PANCHANGAM.karanamEn },
          ].map(({ key, val }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.06, type: 'spring', stiffness: 300 }}
              className="rounded-[8px] px-[10px] py-[7px]"
              style={{
                background: 'rgba(0,0,0,0.22)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <p className="text-[10px] sm:text-[11px] mb-[2px]" style={{ color: 'var(--text-muted)' }}>{key}</p>
              <p className="text-[13px] sm:text-[14px] font-semibold" style={{ color: 'var(--text-primary)' }}>{val}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lucky strip — slides up */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 280 }}
        className="flex items-center gap-[6px] rounded-[8px] px-[10px] py-[7px] mb-3 relative z-10"
        style={{
          background: 'rgba(0,0,0,0.18)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <span className="text-[9px] font-semibold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
          {t.today}
        </span>
        <div className="flex items-center gap-[5px] flex-1 flex-wrap">
          {/* Lucky color */}
          <div
            className="flex items-center gap-[5px] px-[8px] py-[3px] rounded-full text-[10px]"
            style={{
              background: `${MOCK_PANCHANGAM.luckyColor}18`,
              border: `1px solid ${MOCK_PANCHANGAM.luckyColor}40`,
              color: MOCK_PANCHANGAM.luckyColor,
            }}
          >
            <span
              className="w-[8px] h-[8px] rounded-full flex-shrink-0"
              style={{ background: MOCK_PANCHANGAM.luckyColor }}
            />
            {language === 'ta' ? MOCK_PANCHANGAM.luckyColorNameTa : MOCK_PANCHANGAM.luckyColorNameEn}
          </div>
          {/* Lucky number */}
          <div
            className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[10px]"
            style={{
              background: 'rgba(201,146,42,0.12)',
              border: '1px solid rgba(201,146,42,0.3)',
              color: 'var(--gold-bright)',
            }}
          >
            #{MOCK_PANCHANGAM.luckyNumber}
          </div>
          {/* Lucky direction */}
          <div
            className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[10px]"
            style={{
              background: 'rgba(30,111,168,0.12)',
              border: '1px solid rgba(30,111,168,0.3)',
              color: '#60b4f0',
            }}
          >
            {language === 'ta' ? MOCK_PANCHANGAM.luckyDirectionTa : MOCK_PANCHANGAM.luckyDirectionEn}
          </div>
        </div>
      </motion.div>

      {/* Rahu kalam + full link */}
      <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
        <div
          className="flex items-center gap-[5px] px-[8px] py-[3px] rounded-[6px] text-[10px]"
          style={{
            background: 'rgba(224,80,80,0.10)',
            border: '1px solid rgba(224,80,80,0.22)',
            color: '#e08080',
          }}
        >
          <span className="w-[4px] h-[4px] rounded-full flex-shrink-0" style={{ background: '#e05050' }} />
          {t.rahuKalam}: {MOCK_PANCHANGAM.rahuKalam}
        </div>
        <button className="text-[11px] sm:text-[12px] flex items-center gap-[3px] py-2 px-3 -mr-3 -my-2 transition-colors hover:text-gold-bright" style={{ color: 'var(--text-muted)' }}>
          {t.fullPanchangam}
          <span style={{ color: 'var(--gold-deep)' }}>→</span>
        </button>
      </div>
    </motion.div>
  )
}
