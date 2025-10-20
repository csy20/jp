import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sitasoni.in'),
  title: 'Jageshwar Sahu - SITASONI Trend',
  description: 'Professional cloth seller at SITASONI Trend offering quality fashion and textiles in Nawagarh, Chhattisgarh. INTMI TEXTILES PRIVATE LIMITED.',
  keywords: 'Jageshwar Sahu, SITASONI Trend, cloth seller, fashion, textiles, Nawagarh, Chhattisgarh, clothing store',
  authors: [{ name: 'Jageshwar Sahu' }],
  openGraph: {
    title: 'Jageshwar Sahu - SITASONI Trend',
    description: 'Professional cloth seller at SITASONI Trend offering quality fashion and textiles in Nawagarh, Chhattisgarh.',
    url: 'https://sitasoni.in',
    siteName: 'SITASONI Trend',
    images: [
      {
        url: '/jaggu_profile.jpeg',
        width: 800,
        height: 600,
        alt: 'Jageshwar Sahu Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jageshwar Sahu - SITASONI Trend',
    description: 'Professional cloth seller at SITASONI Trend offering quality fashion and textiles in Nawagarh, Chhattisgarh.',
    images: ['/jaggu_profile.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
