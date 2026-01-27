'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const workItems = [
  {
    id: 'ecommerce-redesign',
    title: 'E-Brokerage Platform Redesign',
    description: 'A new trading platform reimagining what professional trading experience will look like',
    tags: ['Product Design', 'Trading Platform', 'Design Systems'],
    gradient: 'from-[#020c10] via-[#03191f] to-[#020c10]',
  },
  // Temporarily hidden projects
  // {
  //   id: 'work-2',
  //   title: 'Project Title 2',
  //   description: 'Brief description of your second project',
  //   tags: ['Mobile Design', 'User Research'],
  //   gradient: 'from-gray-800 to-gray-600',
  // },
  // {
  //   id: 'work-3',
  //   title: 'Project Title 3',
  //   description: 'Brief description of your third project',
  //   tags: ['Desktop App', 'Strategy'],
  //   gradient: 'from-black to-gray-800',
  // },
]

export default function PastWork() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="w-full mx-auto" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-[#E5E5E5]"
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
            <Link href={`/past-work/${item.id}/`}>
              <div className="group cursor-pointer">
                <div
                  className={`h-64 md:h-80 rounded-lg bg-gradient-to-r ${item.gradient} px-8 py-6 flex items-center justify-between gap-6 relative overflow-hidden transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-xl`}
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                  }}
                >
                  <div className="relative z-10 max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {item.title}
                    </h2>
                    <p className="text-white/90 text-lg">
                      {item.description}
                    </p>
                  </div>
                  {item.id === 'ecommerce-redesign' && (
                    <div className="relative w-1/3 h-full flex items-center justify-end">
                      <div className="relative w-full h-40 md:h-48">
                        <Image
                          src="/qpro-banner.png"
                          alt="Questrade Pro closed beta trading interface"
                          fill
                          className="object-contain object-right drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
                          sizes="(min-width: 1024px) 30vw, 40vw"
                          priority
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-2 flex-wrap" style={{ marginTop: '8px' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 rounded-full text-[#E5E5E5] text-sm"
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
