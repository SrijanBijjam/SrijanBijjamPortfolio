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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

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

    document.addEventListener('wheel', handleWheel, { passive: false })
    return () => document.removeEventListener('wheel', handleWheel)
  }, [currentIndex, router, isScrolling, isMobile])

  if (isMobile) return null

  return (
    <div className="fixed right-[10vw] top-1/2 -translate-y-1/2 flex flex-col gap-4">
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
