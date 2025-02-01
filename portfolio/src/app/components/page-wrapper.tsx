'use client'

import { useEffect, useState } from 'react'

export default function PageWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className={`w-full ${className} ${isMobile ? '' : 'h-screen'}`}>
      {children}
    </div>
  )
} 