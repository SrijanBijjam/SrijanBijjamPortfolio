'use client'

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      
      // Show footer when near bottom of page
      if (pageHeight - scrollPosition < 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`w-full bg-[#0E0E0E]/95 backdrop-blur-sm py-6 mt-auto fixed bottom-0 left-0 border-t border-[#CC9528]/20 shadow-lg shadow-black/30 transition-all duration-500 ${
      visible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="max-w-[80vw] mx-auto flex justify-center items-center">
        <p className="text-[#CC9528] text-sm md:text-base relative group">
          <span className="transition-all duration-300 group-hover:text-white">&copy; 2025 by Srijan Bijjam</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;