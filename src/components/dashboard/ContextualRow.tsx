'use client'

import Link from 'next/link'
import { CalendarDays, Star } from 'lucide-react'

// MOCK — in production, derive from today's panchangam API
const CONTEXTUAL_ITEMS = [
  {
    icon: CalendarDays,
    label: 'மாத பஞ்சாங்கம்',
    reason: 'சஷ்டி இன்று — விரத நாள்',
    href: '/panchangam/monthly',
    colorHex: '#2e7d6b',
  },
  {
    icon: Star,
    label: 'ஜாதகம்',
    reason: 'அதிகம் பயன்படுத்தப்படுகிறது',
    href: '/horoscope',
    colorHex: '#7b5ea7',
  },
]

export function ContextualRow() {
  return (
    <div>
      {/* Section label */}
      <div className="flex items-center gap-[6px] mb-[7px]">
        <div
          className="w-[3px] h-[11px] flex-shrink-0"
          style={{ background: 'var(--gold-deep)', borderRadius: '1px' }}
        />
        <span className="text-[9px] font-semibold tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}>
          இன்று தேவைப்படலாம்
        </span>
      </div>

      <div className="grid grid-cols-2 gap-[6px]">
        {CONTEXTUAL_ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-[9px] rounded-[var(--radius-md)] px-[10px] py-[9px] transition-all duration-150 hover:-translate-y-[1px]"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--bg-border)',
              }}
            >
              <div
                className="w-[28px] h-[28px] rounded-[7px] flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.colorHex}22`, color: item.colorHex }}
              >
                <Icon size={13} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-text-secondary leading-tight">
                  {item.label}
                </p>
                <p className="text-[8px] italic mt-[1px]"
                  style={{ color: 'var(--text-muted)' }}>
                  {item.reason}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
