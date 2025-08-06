import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Yash Gupta – DevOps Portfolio',
  description: 'Yash Gupta | DevOps Engineer Portfolio Website - Specializing in CI/CD, Kubernetes, Docker, Jenkins, and Infrastructure Automation',
  keywords: 'DevOps, Linux, CI/CD, Kubernetes, Jenkins, Docker, Terraform, Portfolio, Yash Gupta, Automation',
  authors: [{ name: 'Yash Gupta' }],
  creator: 'Yash Gupta',
  openGraph: {
    title: 'Yash Gupta – DevOps Portfolio',
    description: 'DevOps Engineer specializing in CI/CD, Kubernetes, and Infrastructure Automation',
    url: 'https://yash-gupta.dev',
    siteName: 'Yash Gupta Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yash Gupta – DevOps Portfolio',
    description: 'DevOps Engineer specializing in CI/CD, Kubernetes, and Infrastructure Automation',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
