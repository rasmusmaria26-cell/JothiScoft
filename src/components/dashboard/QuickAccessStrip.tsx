'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/i18n/translations'

// Today's tithi — in production pull from panchangam API
const TODAY_TITHI_TA = 'சஷ்டி'
const TODAY_TITHI_EN = 'Sashti'
const TODAY_TITHI_HREF = '/special/sashti'
const TODAY_TITHI_COLOR = '#c9922a'

const QUICK_LINKS = [
  { labelTa: 'விரதங்கள்',       labelEn: 'Fasts',          href: '/special',            colorHex: '#4a7c59' },
  { labelTa: 'பஞ்சாங்கம்',      labelEn: 'Panchangam',     href: '/panchangam',         colorHex: '#2e7d6b' },
  { labelTa: 'KP ஜோதிடம்',     labelEn: 'KP Astro',       href: '/horoscope/antharam', colorHex: '#7b5ea7' },
  { labelTa: 'வாஸ்து',          labelEn: 'Vastu',          href: '/vastu/days',         colorHex: '#1e6fa8' },
  { labelTa: 'பொருத்தம்',       labelEn: 'Matching',       href: '/matching/star',      colorHex: '#b0415e' },
  { labelTa: 'நட்சத்திர பலன்', labelEn: 'Star Reading',   href: '/horoscope/star',     colorHex: '#7b5ea7' },
  { labelTa: 'பிரஸ்னம்',        labelEn: 'Prasnam',        href: '/prasnam',            colorHex: '#a05c1a' },
  { labelTa: 'குழந்தை பெயர்',  labelEn: 'Baby Names',     href: '/baby-names',         colorHex: '#c9922a' },
]

const chipVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const chipItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 300 } },
}

export function QuickAccessStrip() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div
      className="rounded-[var(--radius-md)] py-[10px] relative overflow-hidden"
      style={{
        background: 'rgba(15, 15, 36, 0.75)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(42, 42, 74, 0.6)',
      }}
    >
      {/* Left/Right Fade Masks for the Marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0f0f24] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0f0f24] to-transparent pointer-events-none z-10" />

      <motion.div
        className="flex gap-[10px] w-max animate-marquee pl-[10px]"
        initial="hidden"
        animate="show"
        variants={chipVariants}
      >
        {/* We duplicate the links 2 times to create a seamless infinite scrolling loop */}
        {[...Array(2)].map((_, arrayIndex) => (
          <React.Fragment key={`marquee-set-${arrayIndex}`}>
            {/* TODAY context chip */}
            <motion.div variants={chipItem} whileHover={{ scale: 1.06, y: -1 }} whileTap={{ scale: 0.94 }} className="relative group">
              {/* Hover Glow */}
              <div className="absolute inset-0 z-0 blur-[12px] opacity-0 transition-opacity duration-300 group-hover:opacity-50 pointer-events-none rounded-full" style={{ background: TODAY_TITHI_COLOR }} />
              
              <Link
                href={TODAY_TITHI_HREF}
                className="relative z-10 text-xs px-[14px] py-[7px] sm:py-[6px] rounded-full whitespace-nowrap flex-shrink-0 flex items-center gap-[6px] transition-colors duration-150"
                style={{
                  background: `${TODAY_TITHI_COLOR}22`,
                  border: `1px solid ${TODAY_TITHI_COLOR}60`,
                  color: TODAY_TITHI_COLOR,
                  animation: 'todayPulse 2.5s ease-in-out infinite',
                }}
              >
                <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: TODAY_TITHI_COLOR }} />
                {t.today}: {language === 'ta' ? TODAY_TITHI_TA : TODAY_TITHI_EN}
              </Link>
            </motion.div>

            {/* Static links */}
            {QUICK_LINKS.map((link) => (
              <motion.div key={link.href + arrayIndex} variants={chipItem} whileHover={{ scale: 1.06, y: -1 }} whileTap={{ scale: 0.94 }} className="relative group">
                {/* Hover Glow */}
                <div className="absolute inset-0 z-0 blur-[12px] opacity-0 transition-opacity duration-300 group-hover:opacity-50 pointer-events-none rounded-full" style={{ background: link.colorHex }} />

                <Link
                  href={link.href}
                  className="relative z-10 text-xs px-[14px] py-[7px] sm:py-[6px] rounded-full whitespace-nowrap flex-shrink-0 transition-colors duration-150"
                  style={{
                    background: `${link.colorHex}14`,
                    border: `1px solid ${link.colorHex}30`,
                    color: link.colorHex,
                  }}
                >
                  {language === 'ta' ? link.labelTa : link.labelEn}
                </Link>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
