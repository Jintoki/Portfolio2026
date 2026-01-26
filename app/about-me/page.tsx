'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <main className="min-h-screen pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold mb-16 text-black"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Portrait Image</span>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Workspace Image</span>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              I'm a product designer with over 8 years of experience crafting
              intuitive digital experiences for web and desktop applications. My
              work focuses on solving complex problems through user-centered
              design, balancing business goals with user needs.
            </p>
            <p>
              Based in San Francisco, I specialize in enterprise software and
              B2B platforms. I've worked with both startups and Fortune 500
              companies, leading design initiatives that have improved user
              satisfaction and driven measurable business results.
            </p>
            <p>
              My design approach combines thorough research, iterative design,
              and close collaboration with engineering and product teams. I
              believe the best designs emerge from a deep understanding of user
              problems and continuous validation through testing.
            </p>
            <p>
              When I'm not designing, I enjoy exploring the Bay Area with my
              camera, capturing moments in street photography and landscapes.
              This practice helps me see the world with fresh eyes and brings
              new perspectives to my design work.
            </p>
          </div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-6"
          >
            <Link
              href={`${process.env.NODE_ENV === 'production' ? '/Portfolio2026' : ''}/resume.pdf`}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
