'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder image data - replace with your actual images
const images = [
  { id: 1, src: '/photo1.jpg', alt: 'Photography 1' },
  { id: 2, src: '/photo2.jpg', alt: 'Photography 2' },
  { id: 3, src: '/photo3.jpg', alt: 'Photography 3' },
  { id: 4, src: '/photo4.jpg', alt: 'Photography 4' },
  { id: 5, src: '/photo5.jpg', alt: 'Photography 5' },
  { id: 6, src: '/photo6.jpg', alt: 'Photography 6' },
  { id: 7, src: '/photo7.jpg', alt: 'Photography 7' },
  { id: 8, src: '/photo8.jpg', alt: 'Photography 8' },
  { id: 9, src: '/photo9.jpg', alt: 'Photography 9' },
  { id: 10, src: '/photo10.jpg', alt: 'Photography 10' },
  { id: 11, src: '/photo11.jpg', alt: 'Photography 11' },
  { id: 12, src: '/photo12.jpg', alt: 'Photography 12' },
]

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (id: number) => {
    setSelectedImage(id)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <main className="min-h-screen pt-24 px-8 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold mb-16 text-black"
      >
        Photography
      </motion.h1>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`relative overflow-hidden rounded-lg bg-gray-200 cursor-pointer group ${
              index === 0
                ? 'md:col-span-2 md:row-span-2'
                : index === 3
                ? 'md:col-span-2'
                : ''
            }`}
            style={{
              aspectRatio:
                index === 0 ? '1' : index === 3 ? '2/1' : '1',
            }}
            onClick={() => openModal(img.id)}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-gray-600 text-sm">{img.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            onClick={closeModal}
          >
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80"
            />

            {/* Image container - 80% of screen */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative z-10 w-[80vw] h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">
                  {images.find((img) => img.id === selectedImage)?.alt}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
