// Base path configuration - matches next.config.js
// Next.js basePath is set to '/Portfolio2026' in production
// This utility ensures public folder assets also respect the basePath
const REPO_NAME = 'Portfolio2026'

// Utility function to get the correct asset path for GitHub Pages
// Respects Next.js basePath configuration (set in next.config.js)
export const getAssetPath = (path: string): string => {
  // Normalize the path (ensure it starts with /)
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Runtime detection: check if we're on GitHub Pages
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    const pathname = window.location.pathname
    
    // If on GitHub Pages, prepend basePath
    if (hostname.includes('github.io') || pathname.startsWith(`/${REPO_NAME}`)) {
      return `/${REPO_NAME}${normalizedPath}`
    }
  }
  
  // During build/SSR: use basePath for production builds
  // This matches next.config.js: basePath is '/Portfolio2026' in production
  const isProd = process.env.NODE_ENV === 'production'
  return isProd ? `/${REPO_NAME}${normalizedPath}` : normalizedPath
}
