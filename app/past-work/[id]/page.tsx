'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

// This would typically come from a CMS or database
const workData: Record<string, any> = {
  'ecommerce-redesign': {
    title: 'E-Commerce Platform Redesign',
    subtitle: 'B2B E-Commerce Platform',
    overview: 'Complete redesign of a B2B e-commerce platform, focusing on improving conversion rates and user experience.',
    role: 'Lead Product Designer',
    duration: '6 months',
    team: '3 designers, 5 engineers, 2 product managers',
    challenge: {
      title: 'The Challenge',
      content: 'The existing platform had low conversion rates and poor user satisfaction scores. Users struggled with the checkout process and product discovery, leading to abandoned carts and decreased revenue.',
    },
    research: {
      title: 'Research & Discovery',
      content: 'We conducted extensive user interviews with 20+ B2B buyers, analyzed user behavior data, and performed competitive analysis. Key findings included: navigation complexity, unclear pricing information, and a cumbersome checkout process.',
    },
    solution: {
      title: 'Solution',
      content: 'We redesigned the platform with a focus on clarity, efficiency, and trust. The new design features simplified navigation, transparent pricing, and a streamlined checkout process.',
    },
    process: [
      {
        title: 'User Research',
        description: 'Conducted interviews and surveys to understand user pain points',
      },
      {
        title: 'Wireframing',
        description: 'Created low-fidelity wireframes to explore different layout options',
      },
      {
        title: 'Prototyping',
        description: 'Built interactive prototypes for user testing',
      },
      {
        title: 'Visual Design',
        description: 'Developed a cohesive design system and high-fidelity designs',
      },
      {
        title: 'Testing & Iteration',
        description: 'Conducted usability testing and iterated based on feedback',
      },
    ],
    results: {
      title: 'Results',
      content: 'The redesign resulted in a 35% increase in conversion rates, 40% reduction in checkout abandonment, and significantly improved user satisfaction scores.',
      metrics: [
        { label: 'Conversion Rate', value: '+35%' },
        { label: 'Checkout Abandonment', value: '-40%' },
        { label: 'User Satisfaction', value: '+28%' },
      ],
    },
    images: [
      { src: '/placeholder-hero.jpg', alt: 'Hero image of the redesigned platform' },
      { src: '/placeholder-detail.jpg', alt: 'Detail view of key features' },
      { src: '/placeholder-mobile.jpg', alt: 'Mobile responsive design' },
    ],
  },
  'work-2': {
    title: 'Project Title 2',
    subtitle: 'Project Subtitle',
    overview: 'Brief description of your second project.',
    role: 'Product Designer',
    duration: '4 months',
    team: '2 designers, 3 engineers',
    challenge: {
      title: 'The Challenge',
      content: 'Describe the challenge here.',
    },
    research: {
      title: 'Research & Discovery',
      content: 'Describe your research process here.',
    },
    solution: {
      title: 'Solution',
      content: 'Describe your solution here.',
    },
    process: [],
    results: {
      title: 'Results',
      content: 'Describe the results here.',
      metrics: [],
    },
    images: [],
  },
  'work-3': {
    title: 'Project Title 3',
    subtitle: 'Project Subtitle',
    overview: 'Brief description of your third project.',
    role: 'Product Designer',
    duration: '3 months',
    team: '1 designer, 2 engineers',
    challenge: {
      title: 'The Challenge',
      content: 'Describe the challenge here.',
    },
    research: {
      title: 'Research & Discovery',
      content: 'Describe your research process here.',
    },
    solution: {
      title: 'Solution',
      content: 'Describe your solution here.',
    },
    process: [],
    results: {
      title: 'Results',
      content: 'Describe the results here.',
      metrics: [],
    },
    images: [],
  },
}

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { id: 'ecommerce-redesign' },
    { id: 'work-2' },
    { id: 'work-3' },
  ]
}

export default function WorkDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const work = workData[id]

  if (!work) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Work not found</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 px-8 pb-16 max-w-5xl mx-auto">
      <motion.button
        onClick={() => router.back()}
        className="mb-8 text-gray-600 hover:text-black transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ← Back to Past Work
      </motion.button>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
          {work.title}
        </h1>
        <p className="text-2xl text-gray-600 mb-8">{work.subtitle}</p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          {work.overview}
        </p>
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-200"
      >
        <div>
          <h3 className="font-semibold text-gray-500 mb-2">Role</h3>
          <p className="text-black">{work.role}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500 mb-2">Duration</h3>
          <p className="text-black">{work.duration}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500 mb-2">Team</h3>
          <p className="text-black">{work.team}</p>
        </div>
      </motion.div>

      {/* Challenge Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-black">{work.challenge.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {work.challenge.content}
        </p>
      </motion.section>

      {/* Image Section */}
      {work.images && work.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image: {work.images[0].alt}</span>
          </div>
        </motion.div>
      )}

      {/* Research Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-black">{work.research.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {work.research.content}
        </p>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-black">{work.solution.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {work.solution.content}
        </p>

        {/* Process Steps */}
        {work.process && work.process.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {work.process.map((step: any, index: number) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        )}
      </motion.section>

      {/* Additional Images */}
      {work.images && work.images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16 space-y-8"
        >
          {work.images.slice(1).map((img: any, index: number) => (
            <div
              key={index}
              className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-500">Image: {img.alt}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-black">{work.results.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {work.results.content}
        </p>

        {work.results.metrics && work.results.metrics.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {work.results.metrics.map((metric: any, index: number) => (
              <div key={index} className="p-6 bg-black text-white rounded-lg">
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </motion.section>
    </main>
  )
}
