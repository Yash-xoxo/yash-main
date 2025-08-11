/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

// When building on GitHub Actions for Pages, use the repo name as basePath
let basePath = ''
let assetPrefix = ''
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''

if (isGithubActions && repo) {
  basePath = `/${repo}`
  assetPrefix = `/${repo}/`
} else if (process.env.NODE_ENV === 'production') {
  // For GitHub Pages deployment
  basePath = '/my-portfolio'
  assetPrefix = '/my-portfolio/'
}

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Apply basePath/assetPrefix for production builds
  basePath,
  assetPrefix,
}

export default nextConfig
