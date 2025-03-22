'use client'

import React, { useEffect, useRef } from 'react'

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Create particles
    const particlesArray: Particle[] = []
    const particleCount = Math.min(window.innerWidth / 10, 100) // Responsive particle count
    
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.2 - 0.1
        this.speedY = Math.random() * 0.2 - 0.1
        
        // Gold hues
        const colors = ['rgba(204,149,40,0.5)', 'rgba(233,180,70,0.3)', 'rgba(255,215,0,0.2)']
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }
      
      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle())
    }
    
    // Connect nearby particles with lines
    const connectParticles = () => {
      const maxDistance = 120
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance)
            ctx.strokeStyle = `rgba(204, 149, 40, ${opacity * 0.15})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesArray.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      connectParticles()
      requestAnimationFrame(animate)
    }
    
    animate()
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-70"
    />
  )
}

export default BackgroundAnimation 