/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio2026' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio2026' : '',
}

module.exports = nextConfig
