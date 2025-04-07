'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FileText, Github, Linkedin, Instagram, Mail, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0E0E0E]/90 shadow-md shadow-[#CC9528]/10' : 'bg-[#0E0E0E]/80'
    }`}>
      <div className="w-[90vw] sm:w-[85vw] md:w-[80vw] mx-auto">
        <div className="flex items-center justify-between h-[8vh]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/srijanlogoHeader.PNG"
              alt="Srijan Logo"
              width={100}
              height={100}
              className="w-[8vw] max-w-[150px] min-w-[100px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center gap-[2vw]">
            <Link href="/resume" className="text-[#CC9528] hover:text-white transition-all duration-300 relative group hover:scale-110">
              <FileText className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
                Resume
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="https://github.com/SrijanBijjam" className="text-[#CC9528] hover:text-white transition-all duration-300 relative group hover:scale-110">
              <Github className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
                GitHub
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="https://www.linkedin.com/in/srijan-bijjam/" className="text-[#CC9528] hover:text-white transition-all duration-300 relative group hover:scale-110">
              <Linkedin className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
                LinkedIn
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="https://www.instagram.com/fiji_sriji/" className="text-[#CC9528] hover:text-white transition-all duration-300 relative group hover:scale-110">
              <Instagram className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
                Instagram
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="mailto:srijan.bijjam@gmail.com" className="text-[#CC9528] hover:text-white transition-all duration-300 relative group hover:scale-110">
              <Mail className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
                Email
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#CC9528] hover:text-white transition-all duration-300 p-2 hover:scale-110 active:scale-95"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu */}
        <div 
          className={`fixed left-0 top-[8vh] w-full h-auto max-h-[calc(100vh-8vh)] md:hidden bg-[#0E0E0E]/95 border-t border-[#CC9528]/20 shadow-lg shadow-black/50 z-50 transition-all duration-300 ease-in-out overflow-auto ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {/* Navigation Links */}
            <div className="pb-4 border-b border-[#CC9528]/20">
              <h3 className="text-[#CC9528] font-semibold mb-3 text-sm uppercase tracking-wider">Navigation</h3>
              <div className="space-y-3">
                <Link 
                  href="/resume" 
                  className="flex items-center gap-3 text-white hover:text-[#CC9528] transition-all duration-300 p-2 rounded-md hover:bg-white/5"
                  onClick={closeMenu}
                >
                  <FileText className="w-5 h-5" />
                  <span>Resume</span>
                </Link>
                <Link 
                  href="/work" 
                  className="flex items-center gap-3 text-white hover:text-[#CC9528] transition-all duration-300 p-2 rounded-md hover:bg-white/5"
                  onClick={closeMenu}
                >
                  <FileText className="w-5 h-5" />
                  <span>Work</span>
                </Link>
                <Link 
                  href="/skills" 
                  className="flex items-center gap-3 text-white hover:text-[#CC9528] transition-all duration-300 p-2 rounded-md hover:bg-white/5"
                  onClick={closeMenu}
                >
                  <FileText className="w-5 h-5" />
                  <span>Skills</span>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-[#CC9528] font-semibold mb-3 text-sm uppercase tracking-wider">Connect</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="https://github.com/SrijanBijjam" 
                  className="flex items-center gap-3 text-white hover:text-[#CC9528] transition-all duration-300 p-2 rounded-md hover:bg-white/5"
                  onClick={closeMenu}
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/srijan-bijjam/" 
                  className="flex items-center gap-3 text-white hover:text-[#CC9528] transition-all duration-300 p-2 rounded-md hover:bg-white/5"
                  onClick={closeMenu}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </Link>
                <Link 
                  href="https://www.instagram.com/fiji_sriji/" 
                  className="flex items-center gap-3 text-white hover:text-[#CC9528] transition-all duration-300 p-2 rounded-md hover:bg-white/5"
                  onClick={closeMenu}
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
                <Link 
                  href="mailto:srijan.bijjam@gmail.com" 
                  className="flex items-center gap-3 text-white hover:text-[#CC9528] transition-all duration-300 p-2 rounded-md hover:bg-white/5"
                  onClick={closeMenu}
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
