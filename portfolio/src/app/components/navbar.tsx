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

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0E0E0E]/90 shadow-md shadow-[#CC9528]/10' : 'bg-[#0E0E0E]/80'
    }`}>
      <div className="w-[80vw] mx-auto">
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

        {/* Mobile Menu */}
        <div 
          className={`md:hidden py-4 space-y-4 flex flex-col items-center bg-[#0E0E0E]/95 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <Link href="/resume" className="text-[#CC9528] hover:text-white transition-all duration-300 p-2 relative group hover:scale-110">
            <FileText className="w-6 h-6" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
              Resume
            </span>
          </Link>
          <Link href="https://github.com/SrijanBijjam" className="text-[#CC9528] hover:text-white transition-all duration-300 p-2 relative group hover:scale-110">
            <Github className="w-6 h-6" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
              GitHub
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/srijan-bijjam/" className="text-[#CC9528] hover:text-white transition-all duration-300 p-2 relative group hover:scale-110">
            <Linkedin className="w-6 h-6" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
              LinkedIn
            </span>
          </Link>
          <Link href="https://www.instagram.com/fiji_sriji/" className="text-[#CC9528] hover:text-white transition-all duration-300 p-2 relative group hover:scale-110">
            <Instagram className="w-6 h-6" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
              Instagram
            </span>
          </Link>
          <Link href="mailto:srijan.bijjam@gmail.com" className="text-[#CC9528] hover:text-white transition-all duration-300 p-2 relative group hover:scale-110">
            <Mail className="w-6 h-6" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1 shadow-lg shadow-black/20">
              Email
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
