'use client'

import { GlobalContextProvider } from '@/context/store'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  
  if (!mounted) return <>{children}</>

  return <ThemeProvider enableSystem enableColorScheme attribute='class'><GlobalContextProvider>{children}</GlobalContextProvider></ThemeProvider>
}
