'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function PageWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Set loaded after a small delay to ensure smooth animation
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [])

  // Page transition variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <motion.div 
      className={`w-full ${className} ${isMobile ? '' : 'h-screen'} overflow-hidden`}
      initial="hidden"
      animate={isLoaded ? "enter" : "hidden"}
      exit="exit"
      variants={variants}
    >
      {children}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-br from-[#0E0E0E] to-[#121212] opacity-40" />
    </motion.div>
  )
} 