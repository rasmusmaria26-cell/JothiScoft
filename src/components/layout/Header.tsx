'use client'

import { Bell } from 'lucide-react'

export function Header() {
  return (
    <header className="
      fixed top-0 left-0 right-0 z-50
      h-[52px]
      flex items-center justify-between
      px-5 md:px-8
      bg-[rgba(26,18,9,0.85)]
      backdrop-blur-md
      border-b border-bg-border
    ">
      <div className="flex flex-col leading-none">
        <span className="
          font-display text-[15px] font-bold
          text-gold-bright tracking-wide
        ">
          JothiSoft
        </span>
        <span className="text-[10px] text-text-muted tracking-wider">
          ஜோதிஷ் சாஃப்ட்வேர்
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button className="
          w-8 h-8 rounded-full
          flex items-center justify-center
          text-text-muted hover:text-text-secondary
          hover:bg-bg-active
          transition-colors
        ">
          <Bell size={16} />
        </button>
        <div className="
          w-8 h-8 rounded-full
          bg-gradient-to-br from-gold-deep to-[#7a4e10]
          flex items-center justify-center
          text-[12px] font-bold text-white
          cursor-pointer
        ">
          M
        </div>
      </div>
    </header>
  )
}
