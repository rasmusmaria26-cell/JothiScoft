'use client'

import { TodayHero }        from '@/components/dashboard/TodayHero'
import { QuickAccessStrip } from '@/components/dashboard/QuickAccessStrip'
import { ContextualRow }    from '@/components/dashboard/ContextualRow'
import { CategorySection }  from '@/components/dashboard/CategorySection'
import { categoryData }     from '@/mock/dashboard'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-[10px] w-full pb-24 md:pb-8">
      <TodayHero />
      <QuickAccessStrip />
      <ContextualRow />
      <div className="flex flex-col gap-[14px]">
        {categoryData.map((cat) => (
          <CategorySection key={cat.titleEn} {...cat} />
        ))}
      </div>
    </div>
  )
}
