'use client'

import { Phone } from 'lucide-react'

// MOCK — replace with real API later
const MOCK_USER = {
  name: 'Maya',
  phone: '9345851195',
  plan: '3 Months Plan',
  expiry: '27 Jun 26',
}

const MOCK_PANCHANGAM = {
  tithi: 'சஷ்டி',
  nakshatra: 'கார்த்திகை',
  yogam: 'சுபம்',
  karanam: 'பவம்',
  rahuKalam: '10:30 – 12:00',
  date: 'ஞாயிறு · 17 மே 2026',
}

export function TodayHero() {
  return (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border"
      style={{
        background: 'linear-gradient(135deg, rgba(201,146,42,0.15), rgba(123,94,167,0.10))',
        backgroundColor: 'rgba(26, 18, 9, 0.70)',
        backdropFilter: 'blur(16px)',
        borderColor: 'rgba(201,146,42,0.35)',
        padding: '14px',
      }}
    >
      {/* Ambient glow top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle at top right, rgba(201,146,42,0.18), transparent 70%)',
        }}
      />

      {/* Top row — user + live badge */}
      <div className="flex items-start justify-between mb-3 relative z-10">
        <div>
          <p className="text-[10px] text-text-muted mb-[2px]">
            {MOCK_PANCHANGAM.date}
          </p>
          <h1 className="text-[18px] font-bold text-text-primary leading-tight">
            வணக்கம், {MOCK_USER.name} 🙏
          </h1>
          <div className="flex items-center gap-2 mt-[4px] flex-wrap">
            <span className="flex items-center gap-1 text-[10px] text-text-muted">
              <Phone size={9} />
              {MOCK_USER.phone}
            </span>
            <span
              className="text-[9px] px-[8px] py-[2px] rounded-pill"
              style={{
                background: 'rgba(201,146,42,0.15)',
                color: 'var(--gold-bright)',
                border: '1px solid rgba(201,146,42,0.3)',
              }}
            >
              {MOCK_USER.plan}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-[5px] flex-shrink-0">
          {/* LIVE badge */}
          <div
            className="flex items-center gap-[4px] px-[7px] py-[3px] rounded-pill"
            style={{
              background: 'rgba(224,80,80,0.1)',
              border: '1px solid rgba(224,80,80,0.3)',
            }}
          >
            <span
              className="w-[5px] h-[5px] rounded-full"
              style={{ background: '#e05050', animation: 'pulse 1.5s infinite' }}
            />
            <span className="text-[8px] font-bold" style={{ color: '#e05050' }}>
              LIVE
            </span>
          </div>
          <span
            className="text-[9px] px-[6px] py-[2px] rounded-md"
            style={{
              border: '1px solid rgba(93,202,165,0.3)',
              color: '#5dcaa5',
            }}
          >
            Exp: {MOCK_USER.expiry}
          </span>
        </div>
      </div>

      {/* Panchangam data grid */}
      <div className="grid grid-cols-4 gap-[6px] relative z-10">
        {[
          { key: 'திதி',        val: MOCK_PANCHANGAM.tithi },
          { key: 'நட்சத்திரம்', val: MOCK_PANCHANGAM.nakshatra },
          { key: 'யோகம்',      val: MOCK_PANCHANGAM.yogam },
          { key: 'கரணம்',      val: MOCK_PANCHANGAM.karanam },
        ].map(({ key, val }) => (
          <div
            key={key}
            className="rounded-[8px] px-[8px] py-[6px]"
            style={{
              background: 'rgba(0,0,0,0.18)',
              border: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <p className="text-[8px] text-text-muted mb-[2px]">{key}</p>
            <p className="text-[11px] font-semibold text-text-primary">{val}</p>
          </div>
        ))}
      </div>

      {/* Rahu kalam + full link */}
      <div className="flex items-center justify-between mt-[9px] relative z-10">
        <div
          className="flex items-center gap-[5px] px-[8px] py-[3px] rounded-[6px] text-[9px]"
          style={{
            background: 'rgba(224,80,80,0.1)',
            border: '1px solid rgba(224,80,80,0.22)',
            color: '#e08080',
          }}
        >
          <span
            className="w-[4px] h-[4px] rounded-full flex-shrink-0"
            style={{ background: '#e05050' }}
          />
          ராகு காலம்: {MOCK_PANCHANGAM.rahuKalam}
        </div>
        <button
          className="text-[9px] flex items-center gap-[3px]"
          style={{ color: 'var(--text-muted)' }}
        >
          முழு பஞ்சாங்கம்
          <span style={{ color: 'var(--gold-deep)' }}>→</span>
        </button>
      </div>
    </div>
  )
}
