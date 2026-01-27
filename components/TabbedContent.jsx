'use client';

import { useState } from 'react';
import Tabs from '@/components/Tabs';
import AnimatedSection from '@/components/AnimatedSection';
import AutoPlayVideo from '@/components/AutoPlayVideo';
import ImageModal from '@/components/ImageModal';
import { getAssetPath } from '@/utils/assetPath';

export default function TabbedContent({ tabs }) {
  const [modalImage, setModalImage] = useState(null);

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
          { id: 'design-organization', label: 'Design Organization' },
        ]}
        defaultTab="interaction"
      >
        {(activeTab) => {
          const tabContent = tabs[activeTab];
          if (!tabContent) return null;

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

              {/* Image for Interface tab */}
              {activeTab === 'interface' && (
                <AnimatedSection className="mb-12 flex justify-center">
                  <div className="w-full">
                    <img
                      src={getAssetPath('/time-and-sales-widget.png')}
                      alt="Time and sales widget in Questrade Pro"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-400 mt-3 text-left">
                      Time and sales widget in Questrade Pro
                    </p>
                  </div>
                </AnimatedSection>
              )}

              {/* Challenge Section */}
              <AnimatedSection className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">
                  {tabContent.challenge.title}
                </h2>
                {(() => {
                  const paragraphs = tabContent.challenge.content.split('\n\n');
                  const firstParagraph = paragraphs[0] || '';
                  const secondParagraph = paragraphs.slice(1).join('\n\n') || '';

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
                  );
                })()}
              </AnimatedSection>

              {/* Image Section - Special handling for interaction tab widget images */}
              {activeTab === 'interaction' && (
                <AnimatedSection delay={0.1} className="mb-12">
                  <div className="flex gap-4 mb-3">
                    <div
                      className="w-[50%] h-96 cursor-pointer overflow-hidden rounded-lg"
                      style={{ backgroundColor: '#797979' }}
                      onClick={() =>
                        setModalImage({
                          src: getAssetPath('/widget-behaviour-template.png'),
                          alt: 'Widget Behaviour Template',
                          highResSrc: getAssetPath('/widget-behaviour-template-hr.png'),
                        })
                      }
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
                      onClick={() =>
                        setModalImage({
                          src: getAssetPath('/adjusting-a-widget.png'),
                          alt: 'Adjusting a Widget',
                          highResSrc: getAssetPath('/adjusting-a-widget-hr.png'),
                        })
                      }
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
              )}

              {/* Research/Approach/Discovery Section */}
              <AnimatedSection delay={0.2} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">
                  {tabContent.research.title}
                </h2>
                {activeTab === 'interface' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line">
                        {tabContent.research.content}
                      </p>
                    </div>
                    <div>
                      <img
                        src={getAssetPath('/research-competitive-analysis.png')}
                        alt="Research competitive analysis"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line">
                    {tabContent.research.content}
                  </p>
                )}
              </AnimatedSection>

              {/* Solution Section */}
              <AnimatedSection delay={0.3} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">
                  {tabContent.solution.title}
                </h2>
                {(() => {
                  if (
                    activeTab === 'interaction' &&
                    tabContent.solution.content.includes('Phase 2: Multi-Layer Workspace System')
                  ) {
                    const parts = tabContent.solution.content.split(
                      'Phase 2: Multi-Layer Workspace System',
                    );
                    const beforePhase2 = parts[0];
                    const phase2AndAfter =
                      'Phase 2: Multi-Layer Workspace System' + (parts[1] || '');

                    return (
                      <>
                        <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                          {beforePhase2}
                        </p>
                        <div className="mb-8">
                          <div
                            className="cursor-pointer"
                            onClick={() =>
                              setModalImage({
                                src: getAssetPath('/current-widget-management.svg'),
                                alt: 'Current widget management',
                                highResSrc: getAssetPath('/current-widget-management.svg'),
                              })
                            }
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
                    );
                  }

                  if (activeTab === 'interface') {
                    const updatedContent = tabContent.solution.content.replace(
                      'The feature has been shipped publicly in closed beta, with an open beta planned for Q1.',
                      'The feature has being developed in closed beta, the open beta launch will be in Q1.',
                    );

                    const paragraphs = updatedContent.split('\n\n');
                    const firstParagraph = paragraphs[0] || '';
                    const remainingContent = paragraphs.slice(1).join('\n\n');

                    return (
                      <>
                        <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                          {firstParagraph}
                        </p>
                        <div className="mb-8">
                          <div
                            className="cursor-pointer"
                            onClick={() =>
                              setModalImage({
                                src: getAssetPath('/ui-library-contributions.png'),
                                alt: 'Design system documentation for custom table',
                                highResSrc: getAssetPath('/ui-library-contributions.png'),
                              })
                            }
                          >
                            <img
                              src={getAssetPath('/ui-library-contributions.png')}
                              alt="Design system documentation for custom table"
                              className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
                            />
                          </div>
                          <p className="text-sm text-gray-400 mt-3 text-left">
                            Design system documentation for custom table
                          </p>
                        </div>
                        {remainingContent && (
                          <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                            {remainingContent}
                          </p>
                        )}
                      </>
                    );
                  }

                  return (
                    <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line mb-8">
                      {tabContent.solution.content}
                    </p>
                  );
                })()}
              </AnimatedSection>

              {/* Additional Images - Special handling for interaction tab videos */}
              {activeTab === 'interaction' &&
                tabContent.images &&
                tabContent.images.length > 1 &&
                tabContent.images[1].alt === 'Multi-layer workspace visualization' && (
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
                )}

              {/* Trade flow widget for Interface tab - above Results */}
              {activeTab === 'interface' && (
                <AnimatedSection delay={0.4} className="mb-12">
                  <div className="w-full">
                    <img
                      src={getAssetPath('/trade-flow-widget.png')}
                      alt="Trade flow widget designed to analyze aggregate time and sales data"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-400 mt-3 text-left">
                      Trade flow widget designed to analyze aggregate time and sales data
                    </p>
                  </div>
                </AnimatedSection>
              )}

              {/* Results Section */}
              <AnimatedSection delay={0.5} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">
                  {tabContent.results.title}
                </h2>

                {tabContent.results.summary && (
                  <p className="text-lg text-[#E5E5E5] leading-relaxed mb-8">
                    {tabContent.results.summary}
                  </p>
                )}

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

                {(() => {
                  const content = tabContent.results.content;
                  const lines = content.split('\n');
                  const bulletPoints = [];
                  const otherText = [];

                  lines.forEach((line) => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('•')) {
                      bulletPoints.push(trimmed.substring(1).trim());
                    } else if (trimmed.length > 0) {
                      otherText.push(trimmed);
                    }
                  });

                  return (
                    <>
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

                      {otherText.length > 0 && (
                        <div className="text-lg text-[#E5E5E5] leading-relaxed">
                          {otherText.map((text, index) => (
                            <p key={index} className="mb-4">
                              {text}
                            </p>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </AnimatedSection>
            </div>
          );
        }}
      </Tabs>
    </>
  );
}

