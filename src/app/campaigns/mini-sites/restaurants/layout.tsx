import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Ресторант Българска Къща - Автентична българска кухня',
  description: 'Ресторант с традиции от 1995 година в сърцето на София',
}

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}