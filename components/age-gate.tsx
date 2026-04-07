'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function AgeGate() {
  const [isVerified, setIsVerified] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const verified = localStorage.getItem('ageVerified')
    if (!verified) {
      setIsVerified(false)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true')
    localStorage.setItem('ageVerifiedDate', new Date().toISOString())
    setIsVerified(true)
  }

  if (!mounted) return null

  if (isVerified) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full shadow-2xl">
        <h1 className="text-2xl font-bold text-foreground mb-2">Age Verification</h1>
        <p className="text-muted-foreground mb-6">
          You must be 21 years or older to enter this website.
        </p>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            By clicking "I'm 21+", you certify that you are at least 21 years of age.
          </p>

          <div className="flex gap-3">
            <Button
              onClick={handleVerify}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              I'm 21+
            </Button>
            <Button
              onClick={() => (window.location.href = 'https://www.google.com')}
              variant="outline"
              className="flex-1"
            >
              Leave
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
