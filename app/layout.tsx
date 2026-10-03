import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/inter-latin.woff2',
  variable: '--font-sans',
  weight: '100 900',
  display: 'swap'
})
const playfair = localFont({
  src: '../public/fonts/playfair-display-latin.woff2',
  variable: '--font-display',
  weight: '400 900',
  display: 'swap'
})

// Use the portfolio's own origin, rather than the separate online store.
const portfolioOrigin = process.env.NEXT_PUBLIC_PORTFOLIO_URL
const title = 'Jageshwar Sahu — Founder of SITASONI trend'
const description =
  'Meet Jageshwar Sahu, founder of SITASONI trend. Quality fashion, honest service, and a personal touch from Nawagarh, Chhattisgarh.'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(portfolioOrigin || 'http://localhost:3000'),
  ...(portfolioOrigin ? { alternates: { canonical: '/' } } : {}),
  keywords: [
    'Jageshwar Sahu',
    'SITASONI trend',
    'Nawagarh',
    'Chhattisgarh',
    'fashion',
    'founder'
  ],
  authors: [{ name: 'Jageshwar Sahu' }],
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
  openGraph: {
    title,
    description,
    siteName: 'Jageshwar Sahu · SITASONI trend',
    locale: 'en_IN',
    type: 'website',
    ...(portfolioOrigin
      ? {
          url: '/',
          images: [
            {
              url: '/jaggu_profile.jpeg',
              width: 903,
              height: 818,
              alt: 'Jageshwar Sahu, founder of SITASONI trend'
            }
          ]
        }
      : {})
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    ...(portfolioOrigin ? { images: ['/jaggu_profile.jpeg'] } : {})
  }
}

export const viewport: Viewport = {
  themeColor: '#f7f5ef',
  colorScheme: 'light'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
