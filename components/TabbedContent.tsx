'use client'

import { useState } from 'react'
import Tabs from '@/components/Tabs'
import AnimatedSection from '@/components/AnimatedSection'
import AutoPlayVideo from '@/components/AutoPlayVideo'
import ImageModal from '@/components/ImageModal'

// Helper to get the base path for production
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages with basePath
    const pathname = window.location.pathname
    const hostname = window.location.hostname
    
    // Check if we're on GitHub Pages (github.io domain) or if pathname indicates basePath
    if (hostname.includes('github.io') || pathname.startsWith('/Portfolio2026')) {
      return '/Portfolio2026'
    }
  }
  return ''
}

// Helper to get the correct asset path based on environment
const getAssetPath = (path: string) => {
  const basePath = getBasePath()
  // Ensure path starts with / and basePath doesn't end with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

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
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; highResSrc?: string } | null>(null)

  return (
    <>
      <ImageModal
        src={modalImage?.src || ''}
        alt={modalImage?.alt || ''}
        highResSrc={modalImage?.highResSrc}
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
      />
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
            {/* Video for Interaction tab */}
            {activeTab === 'interaction' && (
              <AnimatedSection className="mb-12 flex justify-center">
                <AutoPlayVideo 
                  src={getAssetPath('/Widget_Management1.mp4')} 
                  width="60%"
                  className="rounded-lg"
                />
              </AnimatedSection>
            )}

            {/* Challenge Section */}
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{tabContent.challenge.title}</h2>
              {(() => {
                const paragraphs = tabContent.challenge.content.split('\n\n')
                const firstParagraph = paragraphs[0] || ''
                const secondParagraph = paragraphs.slice(1).join('\n\n') || ''
                
                return (
                  <>
                    {firstParagraph && (
                      <p className="text-lg text-[#E5E5E5] leading-relaxed mb-8">
                        {firstParagraph}
                      </p>
                    )}
                    
                    {/* Video for Interaction tab challenge section */}
                    {activeTab === 'interaction' && (
                      <div className="mb-8 flex justify-center">
                        <div className="w-[50%]">
                          <AutoPlayVideo 
                            src={getAssetPath('/Gridster2.mp4')} 
                            width="100%"
                            className="rounded-lg"
                          />
                          <p className="text-sm text-gray-400 mt-3 text-left">
                            Gridster2 API posed a lot of performance issues across devices
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {secondParagraph && (
                      <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line">
                        {secondParagraph}
                      </p>
                    )}
                  </>
                )
              })()}
            </AnimatedSection>

            {/* Image Section - Special handling for interaction tab widget images */}
            {activeTab === 'interaction' ? (
              <AnimatedSection delay={0.1} className="mb-12">
                <div className="flex gap-4 mb-3">
                  <div 
                    className="w-[50%] h-96 cursor-pointer overflow-hidden rounded-lg"
                    style={{ backgroundColor: '#797979' }}
                    onClick={() => setModalImage({ 
                      src: getAssetPath('/widget-behaviour-template.png'), 
                      alt: 'Widget Behaviour Template',
                      highResSrc: getAssetPath('/widget-behaviour-template-hr.png')
                    })}
                  >
                    <img
                      src={getAssetPath('/widget-behaviour-template.png')}
                      alt="Widget Behaviour Template"
                      className="w-full h-full object-cover object-left transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div 
                    className="w-[50%] h-96 cursor-pointer overflow-hidden rounded-lg"
                    style={{ backgroundColor: '#797979' }}
                    onClick={() => setModalImage({ 
                      src: getAssetPath('/adjusting-a-widget.png'), 
                      alt: 'Adjusting a Widget',
                      highResSrc: getAssetPath('/adjusting-a-widget-hr.png')
                    })}
                  >
                    <img
                      src={getAssetPath('/adjusting-a-widget.png')}
                      alt="Adjusting a Widget"
                      className="w-full h-full object-cover object-left transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-400 text-left">
                  Original behaviours designed within Gridster2 API constraints
                </p>
              </AnimatedSection>
            ) : (
              tabContent.images && tabContent.images.length > 0 && (
                <AnimatedSection delay={0.1} className="mb-12">
                  <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Image: {tabContent.images[0].alt}</span>
                  </div>
                </AnimatedSection>
              )
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
              {(() => {
                if (activeTab === 'interaction' && tabContent.solution.content.includes('Phase 2: Multi-Layer Workspace System')) {
                  const parts = tabContent.solution.content.split('Phase 2: Multi-Layer Workspace System')
                  const beforePhase2 = parts[0]
                  const phase2AndAfter = 'Phase 2: Multi-Layer Workspace System' + (parts[1] || '')
                  
                  return (
                    <>
                      <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                        {beforePhase2}
                      </p>
                      <div className="mb-8">
                        <div
                          className="cursor-pointer"
                          onClick={() => setModalImage({ 
                            src: getAssetPath('/current-widget-management.svg'), 
                            alt: 'Current widget management',
                            highResSrc: getAssetPath('/current-widget-management.svg')
                          })}
                        >
                          <img
                            src={getAssetPath('/current-widget-management.svg')}
                            alt="Current widget management"
                            className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-3 text-left">
                          Current implementation of widget and system behaviours
                        </p>
                      </div>
                      <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                        {phase2AndAfter}
                      </p>
                    </>
                  )
                }
                return (
                  <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                    {tabContent.solution.content}
                  </p>
                )
              })()}
            </AnimatedSection>

            {/* Additional Images - Special handling for interaction tab videos */}
            {activeTab === 'interaction' && tabContent.images && tabContent.images.length > 1 && tabContent.images[1].alt === 'Multi-layer workspace visualization' ? (
              <AnimatedSection delay={0.4} className="mb-12">
                <div className="flex gap-4">
                  <div className="w-[50%]">
                    <AutoPlayVideo 
                      src={getAssetPath('/widget-layers.mp4')}
                      width="100%"
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-400 mt-3 text-left">
                      Multi-layer widget architecture
                    </p>
                  </div>
                  <div className="w-[50%]">
                    <AutoPlayVideo 
                      src={getAssetPath('/infinite-canvas.mp4')}
                      width="100%"
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-400 mt-3 text-left">
                      Infinite canvas
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              tabContent.images && tabContent.images.length > 1 && (
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
              )
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
    </>
  )
}
