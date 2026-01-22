'use client'

import { motion } from 'framer-motion'
import AnimatedWords from '@/components/AnimatedWords'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold mb-4 text-black"
        >
          Andrew Cen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-2"
        >
          Product Designer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatedWords />
        </motion.div>
      </div>
    </main>
  )
}
