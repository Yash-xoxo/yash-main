'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileSearch } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <FileSearch className="mx-auto h-24 w-24 text-[#00ADB5]" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-[#00ADB5]">Page Not Found</h1>
        <p className="text-xl mb-8 text-[#EEEEEE]/80">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}