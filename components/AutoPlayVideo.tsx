'use client'

import { useEffect, useRef, useState } from 'react'

interface AutoPlayVideoProps {
  src: string
  className?: string
  width?: string
}

export default function AutoPlayVideo({ src, className = '', width = '50%' }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasPlayed, setHasPlayed] = useState(false)
  
  // Get asset path with basePath
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio2026' : ''
    return `${basePath}${path}`
  }
  
  const videoSrc = getAssetPath(src)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            video.play().catch(() => {
              // Auto-play may be blocked by browser, ignore error
            })
            setHasPlayed(true)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [hasPlayed])

  return (
    <div ref={containerRef} className={className} style={{ width }}>
      <video
        ref={videoRef}
        src={videoSrc}
        width="100%"
        playsInline
        muted
        loop={true}
        controls={false}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}
