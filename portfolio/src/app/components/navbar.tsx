'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FileText, Github, Linkedin, Instagram, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 ml-[50px] md:ml-0">
            <Image
              src="/srijanlogoHeader.png"
              alt="Srijan Logo"
              width={150}
              height={150}
              priority
            />
          </Link>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/resume" className="text-[#CC9528] hover:text-white transition-colors">
              <FileText size={24} />
            </Link>
            <Link href="https://github.com/SrijanBijjam" className="text-[#CC9528] hover:text-white transition-colors">
              <Github size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/srijan-bijjam/" className="text-[#CC9528] hover:text-white transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="https://www.instagram.com/fiji_sriji/" className="text-[#CC9528] hover:text-white transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="mailto:srijan.bijjam@gmail.com" className="text-[#CC9528] hover:text-white transition-colors">
              <Mail size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#CC9528] hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 flex flex-col items-center">
            <Link href="/resume" className="text-[#CC9528] hover:text-white transition-colors">
              <FileText size={24} />
            </Link>
            <Link href="https://github.com/SrijanBijjam" className="text-[#CC9528] hover:text-white transition-colors">
              <Github size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/srijan-bijjam/" className="text-[#CC9528] hover:text-white transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="https://www.instagram.com/fiji_sriji/" className="text-[#CC9528] hover:text-white transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="mailto:srijan.bijjam@gmail.com" className="text-[#CC9528] hover:text-white transition-colors">
              <Mail size={24} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
