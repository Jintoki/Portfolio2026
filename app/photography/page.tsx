'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
  { id: 1, src: '/36496796_1917532515211119_4492353268390821888_n-28b39790-363b-405c-a66d-576faaa87cee.png', alt: 'Street view with historic tower' },
  { id: 2, src: '/49210703_2038950786402624_7854437978184089600_n-2243cb6e-7cef-4fe1-b73a-168fc3ebbf54.png', alt: 'Golden Gate Bridge' },
  { id: 3, src: '/492970411_3736899836607702_4575065765304841364_n-6f49f11b-672e-46ca-aaf4-771ecaa04553.png', alt: 'Children at event' },
  { id: 4, src: '/50082612_2043431262621243_64074705828577280_n-6bc1fc85-b253-4b73-8d83-9c04dbd7bd13.png', alt: 'Urban street scene' },
  { id: 5, src: '/494107304_3736615139969505_5638542819027576242_n-6d42293a-a1bc-48f1-b8ff-5d3b638a6f76.png', alt: 'Cherry blossoms' },
  { id: 6, src: '/495641185_3752237898407229_8805968404399799061_n-34ede2a1-c4ed-4188-9138-993a8a30f3f9.png', alt: 'Traditional Japanese ceremony' },
  { id: 7, src: '/48369079_2030708753893494_2252396723945078784_n-bb8b7e00-e450-4d82-bb76-286081c65a84.png', alt: 'Subway station' },
  { id: 8, src: '/493320674_3736542133310139_6417207234942249777_n-524f12cc-0e5f-41a5-8e97-2b40a507cde9.png', alt: 'Cherry blossoms against sky' },
  { id: 9, src: '/498660216_3756494147981604_2414467669655725046_n-263c9412-ca7e-4077-9ed7-3b86c22c9137.png', alt: 'Ferris wheel' },
  { id: 10, src: '/495991419_3752237925073893_4865279785435158375_n-d31d448c-6443-4578-a3bb-473bc0e6decf.png', alt: 'Cityscape with Mount Fuji' },
  { id: 11, src: '/494147849_3736289833335369_8501977206967955575_n-f2500b4b-0a05-4370-96e1-4284594b324e.png', alt: 'Golden temple' },
  { id: 12, src: '/493140590_3735757440055275_169724924240303190_n-a1c5f7a2-33f8-48a6-a7cf-54a422db52b2.png', alt: 'Japanese macaque' },
  { id: 13, src: '/499426382_3756280441336308_1592675815489106497_n-70a3c9d3-1acc-4d95-a575-c642cf4ef344.png', alt: 'Architectural dome' },
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
            <div className="w-full h-full relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
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
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <Image
                  src={images.find((img) => img.id === selectedImage)?.src || ''}
                  alt={images.find((img) => img.id === selectedImage)?.alt || ''}
                  fill
                  className="object-contain"
                  sizes="80vw"
                />
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
