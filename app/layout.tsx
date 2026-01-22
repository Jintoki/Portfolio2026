import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Andrew Cen - Product Designer',
  description: 'Product Designer specializing in Web and Desktop applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Andrew Cen - Product Designer</title>
        <meta name="description" content="Product Designer specializing in Web and Desktop applications" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
