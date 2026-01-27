'use client'

import { useEffect, useState, useRef } from 'react'

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
  highResSrc?: string
}

export default function ImageModal({ src, alt, isOpen, onClose, highResSrc }: ImageModalProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [hasDragged, setHasDragged] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset zoom and position when modal opens
      setScale(1)
      setPosition({ x: 0, y: 0 })
      setHasDragged(false)
      setIsDragging(false)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault()
        setScale((prev) => Math.min(prev + 0.25, 5))
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault()
        setScale((prev) => Math.max(prev - 0.25, 0.5))
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setHasDragged(false)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setHasDragged(true)
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    // Small delay to prevent immediate backdrop click after drag
    if (hasDragged) {
      setTimeout(() => {
        setHasDragged(false)
      }, 100)
    }
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      setScale((prev) => Math.max(0.5, Math.min(5, prev + delta)))
    }
  }

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop (not the image) and not dragging
    if (e.target === e.currentTarget && !hasDragged && !isDragging) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={handleBackdropClick}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
        onClick={onClose}
        aria-label="Close modal"
      >
        ×
      </button>
      <div
        ref={containerRef}
        className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
          onMouseDown={handleMouseDown}
          onClick={(e) => {
            // Always stop propagation to prevent backdrop click
            e.stopPropagation()
          }}
        >
          <img
            ref={imageRef}
            src={highResSrc || src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain select-none"
            draggable={false}
          />
        </div>
      </div>
      {scale > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded">
          Zoom: {Math.round(scale * 100)}% | Use + / - to zoom | Drag to pan | ESC to close
        </div>
      )}
    </div>
  )
}
