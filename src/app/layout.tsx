import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anonymous Job Board Feedback',
  description: 'A platform for job board owners to anonymously provide and view feedback on other job boards and traffic buyers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  Anonymous JB Feedback
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/directory" className="text-gray-700 hover:text-gray-900">
                  Directory
                </Link>
                <Link href="/feedback/submit" className="text-gray-700 hover:text-gray-900">
                  Submit Feedback
                </Link>
                <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}