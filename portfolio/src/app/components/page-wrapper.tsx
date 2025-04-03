'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function PageWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Only run this effect once on mount
    if (!isLoaded) {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkMobile()
      window.addEventListener('resize', checkMobile)
      
      // Set loaded immediately to prevent flicker
      setIsLoaded(true)
      
      return () => {
        window.removeEventListener('resize', checkMobile)
      }
    }
  }, [isLoaded])

  // Page transition variants - simplified for smoother transitions
  const variants = {
    hidden: { opacity: 0 },
    enter: { 
      opacity: 1, 
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren"
      } 
    },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      } 
    }
  }

  // Skip animations if user prefers reduced motion
  const skipAnimation = prefersReducedMotion || !isLoaded

  return (
    <motion.div 
      className={`w-full ${className} ${isMobile ? '' : 'h-screen'} overflow-hidden`}
      initial={skipAnimation ? false : "hidden"}
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-br from-[#0E0E0E] to-[#121212] opacity-40" />
    </motion.div>
  )
} 