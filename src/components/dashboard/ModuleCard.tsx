'use client'

import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface ModuleCardProps {
  icon: LucideIcon
  label: string
  sublabel?: string
  badge?: 'NEW' | 'PRO' | 'PREMIUM' | 'FREE' | 'TOP'
  colorHex: string
  href: string
}

const BADGE_STYLES: Record<string, string> = {
  NEW:     'bg-[rgba(46,125,107,0.2)] text-[#5dcaa5]',
  TOP:     'bg-[rgba(46,125,107,0.2)] text-[#5dcaa5]',
  PRO:     'bg-[rgba(123,94,167,0.2)] text-[#afa9ec]',
  PREMIUM: 'bg-[rgba(201,146,42,0.2)] text-[#f2c96a]',
  FREE:    'bg-[rgba(74,56,40,0.4)] text-[#8a7060]',
}

export function ModuleCard({
  icon: Icon,
  label,
  sublabel,
  badge,
  colorHex,
  href,
}: ModuleCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center gap-[5px] rounded-[var(--radius-md)] py-[10px] px-[5px] transition-all duration-200 hover:-translate-y-[2px] active:scale-[0.97]"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--bg-border)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-[var(--radius-md)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ boxShadow: `0 6px 20px ${colorHex}18` }}
      />

      {badge && (
        <span
          className={clsx(
            'absolute top-[4px] right-[4px] text-[8px] font-bold px-[5px] py-[1px] rounded-pill',
            BADGE_STYLES[badge]
          )}
        >
          {badge}
        </span>
      )}

      <div
        className="w-[34px] h-[34px] rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.08]"
        style={{
          background: `${colorHex}22`,
          color: colorHex,
        }}
      >
        <Icon size={15} />
      </div>

      <p className="text-[10px] font-medium text-center leading-tight"
        style={{ color: 'var(--text-secondary)' }}>
        {label}
      </p>
      {sublabel && (
        <p className="text-[8px] text-center"
          style={{ color: 'var(--text-disabled)' }}>
          {sublabel}
        </p>
      )}
    </Link>
  )
}
