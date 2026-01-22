'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Past Work', path: '/past-work' },
  { name: 'Photography', path: '/photography' },
  { name: 'About Me', path: '/about-me' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 right-0 z-50 p-8">
      <div className="flex gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={isActive ? '#' : item.path}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? 'text-black cursor-default'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              onClick={(e) => isActive && e.preventDefault()}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
