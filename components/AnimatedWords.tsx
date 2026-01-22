'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  'Interaction',
  'User interface',
  'Strategy',
  'Design Operations',
  'User research',
]

export default function AnimatedWords() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000) // Change word every 2 seconds (200ms fade in + 200ms fade out + 1600ms display)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 mt-4">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-600 text-lg"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
