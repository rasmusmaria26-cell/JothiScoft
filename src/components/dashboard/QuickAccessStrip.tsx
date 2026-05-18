'use client'

import Link from 'next/link'

const QUICK_LINKS = [
  { label: 'விரதங்கள்',       href: '/special',            colorHex: '#4a7c59' },
  { label: 'பஞ்சாங்கம்',      href: '/panchangam/daily',   colorHex: '#2e7d6b' },
  { label: 'KP ஜோதிடம்',     href: '/horoscope/antharam', colorHex: '#7b5ea7' },
  { label: 'வாஸ்து',          href: '/vastu/days',         colorHex: '#1e6fa8' },
  { label: 'பொருத்தம்',       href: '/matching/star',      colorHex: '#b0415e' },
  { label: 'நட்சத்திர பலன்', href: '/horoscope/star',     colorHex: '#7b5ea7' },
  { label: 'பிரஸ்னம்',        href: '/prasnam',            colorHex: '#a05c1a' },
  { label: 'குழந்தை பெயர்',  href: '/baby-names',         colorHex: '#c9922a' },
]

export function QuickAccessStrip() {
  return (
    <div
      className="rounded-[var(--radius-md)] px-[10px] py-[7px]"
      style={{
        background: 'rgba(36, 26, 15, 0.75)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(74, 56, 40, 0.5)',
      }}
    >
      <div
        className="flex gap-[6px] overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[10px] px-[10px] py-[4px] rounded-pill whitespace-nowrap flex-shrink-0 transition-all duration-150"
            style={{
              background: `${link.colorHex}14`,
              border: `1px solid ${link.colorHex}30`,
              color: link.colorHex,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
