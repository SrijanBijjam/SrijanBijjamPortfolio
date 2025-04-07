'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const routes = ['/', '/work', '/skills']
const routeNames = ['Home', 'Work', 'Skills']

export default function ScrollNav() {
  const pathname = usePathname()
  const currentIndex = routes.indexOf(pathname)
  const [isHovered, setIsHovered] = useState<number | null>(null)

  return (
    <div className="fixed right-4 md:right-[5vw] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
      {routes.map((route, index) => (
        <div key={route} className="relative flex items-center">
          <AnimatePresence>
            {isHovered === index && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: -10 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute right-full mr-2 bg-[#171717] text-white px-2 py-1 rounded text-sm whitespace-nowrap shadow-lg shadow-black/30"
              >
                {routeNames[index]}
              </motion.div>
            )}
          </AnimatePresence>
          
          <Link href={route}>
            <motion.div
              className="w-8 h-8 flex items-center justify-center relative"
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {index === currentIndex ? (
                <motion.div 
                  className="w-4 h-4 rounded-full bg-[#CC9528]"
                  layoutId="activeNav"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : (
                <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-all duration-300" />
              )}
              
              {index === currentIndex && (
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-[#CC9528]/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          </Link>
        </div>
      ))}
    </div>
  )
}
