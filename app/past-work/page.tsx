'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const workItems = [
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Platform Redesign',
    description: 'Complete redesign of a B2B e-commerce platform, focusing on improving conversion rates and user experience',
    tags: ['Web Design', 'UX Research', 'Prototyping'],
    gradient: 'from-purple-600 to-purple-400',
  },
  {
    id: 'work-2',
    title: 'Project Title 2',
    description: 'Brief description of your second project',
    tags: ['Mobile Design', 'User Research'],
    gradient: 'from-gray-800 to-gray-600',
  },
  {
    id: 'work-3',
    title: 'Project Title 3',
    description: 'Brief description of your third project',
    tags: ['Desktop App', 'Strategy'],
    gradient: 'from-black to-gray-800',
  },
]

export default function PastWork() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="w-full mx-auto" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-black"
        >
          Past Work
        </motion.h1>

        <div className="space-y-8">
        {workItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full"
          >
            <Link href={`/past-work/${item.id}`}>
              <div className="group cursor-pointer">
                <div
                  className={`h-64 md:h-80 rounded-lg bg-gradient-to-br ${item.gradient} p-8 flex flex-col justify-end relative overflow-hidden transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-xl`}
                  style={{ 
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {item.title}
                    </h2>
                    <p className="text-white/90 text-lg mb-4 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mt-2" style={{ marginTop: '8px' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        </div>
      </div>
    </main>
  )
}
