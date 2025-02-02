'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const routes = ['/', '/work', '/skills']

export default function ScrollNav() {
  const router = useRouter()
  const pathname = usePathname()
  const currentIndex = routes.indexOf(pathname)
  const [isScrolling, setIsScrolling] = useState(false)

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
    <div className="fixed right-4 md:right-[10vw] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
      {routes.map((route, index) => (
        <motion.button
          key={route}
          onClick={() => router.push(route)}
          className="w-6 h-6 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          {index === currentIndex ? (
            <div className="w-4 h-4 border-2 border-[#CC9528]" />
          ) : (
            <div className="w-4 h-4 bg-[#CC9528] rotate-45" />
          )}
        </motion.button>
      ))}
    </div>
  )
}
