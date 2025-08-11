/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

// When building on GitHub Actions for Pages, use the repo name as basePath
let basePath = ''
let assetPrefix = ''
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
  if (repo) {
    basePath = `/${repo}`
    assetPrefix = `/${repo}/`
  }
}

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Only apply basePath/assetPrefix in CI Pages builds
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
}

export default nextConfig
