'use client'

import { LucideIcon } from 'lucide-react'
import { ModuleCard } from './ModuleCard'

interface Module {
  icon: LucideIcon
  label: string
  sublabel?: string
  badge?: 'NEW' | 'PRO' | 'PREMIUM' | 'FREE' | 'TOP'
  href: string
}

interface CategorySectionProps {
  title: string
  titleEn: string
  colorHex: string
  modules: Module[]
}

export function CategorySection({
  title,
  titleEn,
  colorHex,
  modules,
}: CategorySectionProps) {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center gap-[6px] mb-[8px]">
        <div
          className="w-[3px] h-[14px] flex-shrink-0"
          style={{ background: colorHex, borderRadius: '1px' }}
        />
        <span className="text-[11px] font-semibold" style={{ color: colorHex }}>
          {title}
        </span>
        <span className="text-[9px]" style={{ color: 'var(--text-disabled)' }}>
          {titleEn}
        </span>
        <span className="ml-auto text-[9px]" style={{ color: 'var(--text-disabled)' }}>
          {modules.length}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-[6px] sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {modules.map((mod) => (
          <ModuleCard
            key={mod.href}
            {...mod}
            colorHex={colorHex}
          />
        ))}
      </div>
    </section>
  )
}
