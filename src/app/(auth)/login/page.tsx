'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Format as E.164 for India (+91)
    const formatted = '+91' + phone.replace(/\D/g, '').slice(-10)

    const { error } = await supabase.auth.signInWithOtp({
      phone: formatted,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Pass phone to OTP screen via sessionStorage
    sessionStorage.setItem('otp_phone', formatted)
    router.push('/otp')
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-page)' }}>
      <div
        className="w-full max-w-sm mx-4 rounded-[var(--radius-lg)] p-8 border"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--bg-border)' }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--gold-bright)', fontFamily: "'Anek Tamil', sans-serif" }}>
            ஜோதிசாஃப்ட்
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>JothiSoft · Tamil Astrology</p>
        </div>

        <form onSubmit={handleSendOTP} className="space-y-4">
          <div>
            <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              கைபேசி எண் · Phone Number
            </label>
            <div className="flex rounded-[var(--radius-md)] overflow-hidden border" style={{ borderColor: 'var(--bg-border)' }}>
              {/* India prefix — hardcoded */}
              <span
                className="flex items-center px-3 text-sm font-medium select-none"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', borderRight: '1px solid var(--bg-border)' }}
              >
                🇮🇳 +91
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="98765 43210"
                maxLength={10}
                required
                className="flex-1 bg-transparent px-3 py-3 text-base outline-none"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || phone.replace(/\D/g, '').length !== 10}
            className="w-full py-3 rounded-[var(--radius-md)] font-semibold text-base transition-all duration-150 disabled:opacity-50"
            style={{ background: 'var(--gold-deep)', color: '#1a1209' }}
          >
            {loading ? 'அனுப்புகிறோம்...' : 'OTP அனுப்பு · Send OTP'}
          </button>
        </form>
      </div>
    </div>
  )
}
