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
    <nav className="fixed top-0 right-0 left-0 z-50 p-8 bg-[#091112]">
      <div className="flex gap-8 justify-end">
        {navItems.map((item) => {
          // For home, use exact match. For other routes, check if pathname starts with the item path
          const isActive = item.path === '/' 
            ? pathname === item.path 
            : pathname === item.path || pathname.startsWith(`${item.path}/`)
          return (
            <Link
              key={item.path}
              href={isActive ? '#' : item.path}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? 'text-[#E5E5E5] cursor-default'
                  : 'text-gray-500 hover:text-[#E5E5E5]'
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
