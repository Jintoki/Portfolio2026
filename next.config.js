/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'Portfolio2026'

const nextConfig = {
 reactStrictMode: true,
 output: 'export',
 trailingSlash: true,
 images: {
 unoptimized: true,
 },
 basePath: isProd ? `/${repoName}` : '',
 assetPrefix: isProd ? `/${repoName}` : '',
}

module.exports = nextConfig
