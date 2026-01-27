'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function BackButton() {
 const router = useRouter()
 
 return (
 <motion.button
 onClick={() => router.back()}
 className="mb-8 text-gray-400 hover:text-[#E5E5E5] transition-colors"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 >
 ← Back to Past Work
 </motion.button>
 )
}
