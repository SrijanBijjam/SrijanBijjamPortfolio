'use client'

import React, { useEffect, useState } from 'react'
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

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        staggerChildren: 0.1 
      }
    }
  }

  // Child element variants for staggered entry
  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  // Skip animations if user prefers reduced motion
  const skipAnimation = prefersReducedMotion || !isLoaded

  return (
    <div className={`w-full ${className} ${isMobile ? '' : 'h-screen'} overflow-hidden`}>
      <motion.div
        className="w-full h-full"
        initial={skipAnimation ? "visible" : "hidden"}
        animate="visible"
        variants={contentVariants}
      >
        {/* Wrap children in motion elements that will stagger in */}
        {React.Children.map(children, (child, i) => (
          <motion.div key={i} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-br from-[#0E0E0E] to-[#121212] opacity-40" />
    </div>
  )
} 