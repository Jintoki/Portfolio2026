'use client'

import { motion } from 'framer-motion'
import { getAssetPath } from '@/utils/assetPath'

export default function AboutMe() {
  return (
    <main className="min-h-screen pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold mb-16 text-[#E5E5E5]"
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
          <div className="w-full h-[600px] rounded-lg overflow-hidden">
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/Portfolio2026' : ''}/profile-picture.png`}
              alt="Andrew Cen"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-lg text-[#E5E5E5] leading-relaxed">
            <p>
              I'm a product designer based in the Toronto area. I focus on UX/UI and spend most of my time thinking about how systems work, how people use them under real constraints, and how to make complex things feel approachable.
            </p>
            <p>
              Outside of work, I love to cook. I tend to apply design thinking to just about everything I do—recipes, tools, workflows—constantly tweaking and iterating until things make sense. That mindset carries into most areas of my life.
            </p>
            <p>
              I have a lot of hobbies and would probably be considered a serial hobbyist. I'm into cars, photography, and I'm just starting to get into trading card games and vibe coding. I really enjoy the spirit of creating and maker culture in general. Lately, I've been interested in getting into 3D printing and designing some slightly whacky products, mostly because I like the process of turning ideas into real things.
            </p>
            <p>
              At the end of the day, I enjoy building things with intention—whether that's a production product, a design system, or a side project that teaches me something new.
            </p>
          </div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-6"
          >
            <a
              href={getAssetPath('/resume.pdf')}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5E5E5] text-[#091112] rounded-lg hover:bg-gray-300 transition-colors"
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
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
