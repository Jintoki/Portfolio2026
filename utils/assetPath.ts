// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    const pathname = window.location.pathname
    
    // Always use basePath on GitHub Pages
    if (hostname.includes('github.io')) {
      const normalizedPath = path.startsWith('/') ? path : `/${path}`
      return `/Portfolio2026${normalizedPath}`
    }
    
    // Check pathname as fallback
    if (pathname.startsWith('/Portfolio2026')) {
      const normalizedPath = path.startsWith('/') ? path : `/${path}`
      return `/Portfolio2026${normalizedPath}`
    }
  }
  
  // Development - no basePath
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return normalizedPath
}
