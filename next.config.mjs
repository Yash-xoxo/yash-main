import packageJson from './package.json' with { type: 'json' }

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || process.env.PAGES_REPO_NAME || ''
const homepagePath = packageJson.homepage ? new URL(packageJson.homepage).pathname.replace(/\/$/, '') : ''
const isUserSiteRepo = repo.endsWith('.github.io')

const basePath =
  isGithubActions && repo
    ? isUserSiteRepo
      ? ''
      : `/${repo}`
    : process.env.NODE_ENV === 'production'
      ? homepagePath
      : ''

const assetPrefix = basePath ? `${basePath}/` : ''

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix,
}

export default nextConfig
