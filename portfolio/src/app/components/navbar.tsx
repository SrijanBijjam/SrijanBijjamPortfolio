'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FileText, Github, Linkedin, Instagram, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#0E0E0E]/80 backdrop-blur-sm z-50">
      <div className="w-[80vw] mx-auto">
        <div className="flex items-center justify-between h-[8vh]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/srijanlogoHeader.png"
              alt="Srijan Logo"
              width={100}
              height={100}
              className="w-[8vw] max-w-[150px] min-w-[100px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center gap-[2vw]">
            <Link href="/resume" className="text-[#CC9528] hover:text-white transition-colors relative group">
              <FileText className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Resume
              </span>
            </Link>
            <Link href="https://github.com/SrijanBijjam" className="text-[#CC9528] hover:text-white transition-colors relative group">
              <Github className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                GitHub
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/srijan-bijjam/" className="text-[#CC9528] hover:text-white transition-colors relative group">
              <Linkedin className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                LinkedIn
              </span>
            </Link>
            <Link href="https://www.instagram.com/fiji_sriji/" className="text-[#CC9528] hover:text-white transition-colors relative group">
              <Instagram className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Instagram
              </span>
            </Link>
            <Link href="mailto:srijan.bijjam@gmail.com" className="text-[#CC9528] hover:text-white transition-colors relative group">
              <Mail className="w-[2vw] max-w-[24px] min-w-[20px] h-auto" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Email
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#CC9528] hover:text-white transition-colors p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 flex flex-col items-center bg-[#0E0E0E]/95">
            <Link href="/resume" className="text-[#CC9528] hover:text-white transition-colors p-2 relative group">
              <FileText className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Resume
              </span>
            </Link>
            <Link href="https://github.com/SrijanBijjam" className="text-[#CC9528] hover:text-white transition-colors p-2 relative group">
              <Github className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                GitHub
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/srijan-bijjam/" className="text-[#CC9528] hover:text-white transition-colors p-2 relative group">
              <Linkedin className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                LinkedIn
              </span>
            </Link>
            <Link href="https://www.instagram.com/fiji_sriji/" className="text-[#CC9528] hover:text-white transition-colors p-2 relative group">
              <Instagram className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Instagram
              </span>
            </Link>
            <Link href="mailto:srijan.bijjam@gmail.com" className="text-[#CC9528] hover:text-white transition-colors p-2 relative group">
              <Mail className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Email
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
