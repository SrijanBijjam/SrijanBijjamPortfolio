'use client'

import Link from 'next/link'
import Footer from '../components/footer'

export default function Resume() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 p-6 sm:p-12 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#CC9528] text-center">
          RESUME
        </h1>
        
        {/* Resume Frame */}
        <div className="w-full max-w-3xl mx-auto aspect-[8.5/11] bg-[#171717] rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="/SrijanBijjamResumeOriginal (25).pdf" 
            className="w-full h-full"
          />
        </div>

        {/* Back to Home Button */}
        <div className="text-center pt-6">
          <Link 
            href="/"
            className="inline-block px-8 py-3 text-lg sm:text-xl bg-[#171717] hover:bg-[#CC9528] text-[#CC9528] hover:text-white rounded-full transition-colors duration-300 font-bold"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
