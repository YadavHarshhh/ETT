'use client'

import { AlertTriangle } from 'lucide-react'

export function FDAWarningBanner() {
  return (
    <div className="w-full bg-accent text-accent-foreground py-3 px-4 border-b border-accent/20">
      <div className="max-w-7xl mx-auto flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-semibold">FDA WARNING</p>
          <p className="mt-1">
            This product contains nicotine. Nicotine is an addictive chemical. WARNING: This product is not approved by FDA as a smoking cessation device.
          </p>
        </div>
      </div>
    </div>
  )
}
