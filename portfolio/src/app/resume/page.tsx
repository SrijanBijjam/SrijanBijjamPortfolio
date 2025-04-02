'use client'

import Link from 'next/link'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'

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

  return (
    <main className="flex flex-col min-h-screen pt-28 sm:pt-30 md:pt-32 p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="flex-grow w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 flex flex-col">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#CC9528] text-center">
          RESUME
        </h1>
        
        {/* Resume Frame */}
        <div className={`w-full max-w-3xl mx-auto ${isMobile ? 'h-[60vh]' : 'aspect-[8.5/11]'} bg-[#171717] rounded-lg overflow-hidden shadow-xl`}>
          <iframe 
            src="/SrijanBijjamResumeOriginal (25).pdf" 
            className="w-full h-full"
          />
        </div>

        {/* Back to Home Button */}
        <div className="text-center py-6 sm:py-8 mb-4">
          <Link 
            href="/"
            className="inline-block px-8 py-3 text-base sm:text-lg md:text-xl bg-[#171717] hover:bg-[#CC9528] text-[#CC9528] hover:text-white rounded-full transition-all duration-300 font-bold shadow-[0_0_15px_rgba(204,149,40,0.3)] border border-[#CC9528]/30 transform hover:scale-105"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
