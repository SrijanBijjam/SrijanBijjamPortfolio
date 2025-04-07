'use client'

import Link from 'next/link'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const resumeFrameVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#CC9528",
      color: "#FFFFFF",
      transition: { duration: 0.3 }
    }
  }

  return (
    <main className="flex flex-col min-h-screen pt-28 sm:pt-30 md:pt-32 p-4 sm:p-8 md:p-12 lg:p-24">
      <motion.div 
        className="flex-grow w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#CC9528] text-center"
          variants={titleVariants}
        >
          RESUME
        </motion.h1>
        
        {/* Resume Frame with animation */}
        <motion.div 
          className={`w-full max-w-3xl mx-auto ${isMobile ? 'h-[60vh]' : 'aspect-[8.5/11]'} bg-[#171717] rounded-lg overflow-hidden shadow-xl`}
          variants={resumeFrameVariants}
        >
          <iframe 
            src="/SrijanBijjamResumeOriginal (25).pdf" 
            className="w-full h-full"
          />
        </motion.div>

        {/* Back to Home Button with hover animation */}
        <motion.div 
          className="text-center py-6 sm:py-8 mb-4"
          variants={buttonVariants}
        >
          <Link href="/">
            <motion.span 
              className="inline-block px-8 py-3 text-base sm:text-lg md:text-xl bg-[#171717] text-[#CC9528] rounded-full font-bold shadow-[0_0_15px_rgba(204,149,40,0.3)] border border-[#CC9528]/30"
              variants={buttonVariants}
              whileHover="hover"
            >
              BACK TO HOME
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </main>
  )
}
