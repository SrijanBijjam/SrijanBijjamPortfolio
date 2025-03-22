'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const routes = ['/', '/work', '/skills']
const routeNames = ['Home', 'Work', 'Skills']

export default function ScrollNav() {
  const router = useRouter()
  const pathname = usePathname()
  const currentIndex = routes.indexOf(pathname)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isHovered, setIsHovered] = useState<number | null>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isScrolling) return

      if (e.deltaY > 0 && currentIndex < routes.length - 1) {
        setIsScrolling(true)
        router.push(routes[currentIndex + 1])
        setTimeout(() => setIsScrolling(false), 1000)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setIsScrolling(true)
        router.push(routes[currentIndex - 1])
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return
      const touchEndY = e.touches[0].clientY
      const deltaY = touchStartY - touchEndY

      if (Math.abs(deltaY) > 50) { // Threshold for swipe
        if (deltaY > 0 && currentIndex < routes.length - 1) {
          setIsScrolling(true)
          router.push(routes[currentIndex + 1])
          setTimeout(() => setIsScrolling(false), 1000)
        } else if (deltaY < 0 && currentIndex > 0) {
          setIsScrolling(true)
          router.push(routes[currentIndex - 1])
          setTimeout(() => setIsScrolling(false), 1000)
        }
      }
    }

    let touchStartY = 0

    document.addEventListener('wheel', handleWheel, { passive: false })
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)

    return () => {
      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [currentIndex, router, isScrolling])

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
          
          <motion.button
            onClick={() => router.push(route)}
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
          </motion.button>
        </div>
      ))}
    </div>
  )
}
