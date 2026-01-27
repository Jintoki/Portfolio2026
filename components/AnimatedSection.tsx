'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface AnimatedSectionProps {
 children: ReactNode
 delay?: number
 className?: string
}

export default function AnimatedSection({ 
 children, 
 delay = 0,
 className = '' 
}: AnimatedSectionProps) {
 const [isMounted, setIsMounted] = useState(false)

 useEffect(() => {
 setIsMounted(true)
 }, [])

 // During static generation, render without animation
 if (!isMounted) {
 return <div className={className}>{children}</div>
 }

 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay }}
 className={className}
 >
 {children}
 </motion.div>
 )
}
