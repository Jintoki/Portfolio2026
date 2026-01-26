'use client'

import Tabs from '@/components/Tabs'
import AnimatedSection from '@/components/AnimatedSection'

interface TabContent {
  challenge: {
    title: string
    content: string
  }
  research: {
    title: string
    content: string
  }
  solution: {
    title: string
    content: string
  }
  results: {
    title: string
    content: string
    summary?: string
    metrics?: Array<{ value: string; label: string }>
  }
  images?: Array<{ src: string; alt: string }>
}

interface TabbedContentProps {
  tabs: {
    interaction: TabContent
    interface: TabContent
    features: TabContent
    'design-organization': TabContent
  }
}

export default function TabbedContent({ tabs }: TabbedContentProps) {
  return (
    <Tabs
      tabs={[
        { id: 'interaction', label: 'Interaction' },
        { id: 'interface', label: 'User Interface' },
        { id: 'features', label: 'Features' },
        { id: 'design-organization', label: 'Design Organization' },
      ]}
      defaultTab="interaction"
    >
      {(activeTab) => {
        const tabContent = tabs[activeTab as keyof typeof tabs]
        if (!tabContent) return null

        return (
          <div>
            {/* Challenge Section */}
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{tabContent.challenge.title}</h2>
              <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line">
                {tabContent.challenge.content}
              </p>
            </AnimatedSection>

            {/* Image Section */}
            {tabContent.images && tabContent.images.length > 0 && (
              <AnimatedSection delay={0.1} className="mb-12">
                <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Image: {tabContent.images[0].alt}</span>
                </div>
              </AnimatedSection>
            )}

            {/* Research/Approach/Discovery Section */}
            <AnimatedSection delay={0.2} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{tabContent.research.title}</h2>
              <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line">
                {tabContent.research.content}
              </p>
            </AnimatedSection>

            {/* Solution Section */}
            <AnimatedSection delay={0.3} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{tabContent.solution.title}</h2>
              <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                {tabContent.solution.content}
              </p>
            </AnimatedSection>

            {/* Additional Images */}
            {tabContent.images && tabContent.images.length > 1 && (
              <AnimatedSection delay={0.4} className="mb-12 space-y-8">
                {tabContent.images.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-gray-400">Image: {img.alt}</span>
                  </div>
                ))}
              </AnimatedSection>
            )}

            {/* Results Section */}
            <AnimatedSection delay={0.5} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{tabContent.results.title}</h2>
              
              {/* Summary paragraph if provided */}
              {tabContent.results.summary && (
                <p className="text-lg text-[#E5E5E5] leading-relaxed mb-8">
                  {tabContent.results.summary}
                </p>
              )}
              
              {/* Metrics containers (optional for future use) */}
              {tabContent.results.metrics && tabContent.results.metrics.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {tabContent.results.metrics.map((metric, index) => (
                    <div 
                      key={index}
                      className="bg-[#0f1a1b] rounded-lg p-6 border border-[#1a2a2c] hover:border-[#2a3a3c] transition-all duration-200"
                    >
                      <div className="text-4xl md:text-5xl font-bold mb-3 text-[#E5E5E5] text-left">
                        {metric.value}
                      </div>
                      <div className="text-sm md:text-base text-gray-400 text-left">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Parse content and display bullet points in containers */}
              {(() => {
                const content = tabContent.results.content
                const lines = content.split('\n')
                const bulletPoints: string[] = []
                const otherText: string[] = []
                
                lines.forEach(line => {
                  const trimmed = line.trim()
                  if (trimmed.startsWith('•')) {
                    bulletPoints.push(trimmed.substring(1).trim())
                  } else if (trimmed.length > 0) {
                    otherText.push(trimmed)
                  }
                })
                
                return (
                  <>
                    {/* Bullet points in containers */}
                    {bulletPoints.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {bulletPoints.map((point, index) => (
                          <div 
                            key={index}
                            className="bg-[#0f1a1b] rounded-lg p-6 border border-[#1a2a2c] hover:border-[#2a3a3c] transition-all duration-200"
                          >
                            <p className="text-base text-[#E5E5E5] text-left leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Other text content */}
                    {otherText.length > 0 && (
                      <div className="text-lg text-[#E5E5E5] leading-relaxed">
                        {otherText.map((text, index) => (
                          <p key={index} className="mb-4">{text}</p>
                        ))}
                      </div>
                    )}
                  </>
                )
              })()}
            </AnimatedSection>
          </div>
        )
      }}
    </Tabs>
  )
}
