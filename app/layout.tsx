import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'ORDERA | Kompletno rešenje za upravljanje restoranima i kafićima',
  description: 'ORDERA je sve-u-jednom softver za ugostiteljstvo - POS sistem, naručivanje putem tableta, upravljanje inventarom, zakazivanje i više. Digitalizujte vaš restoran ili kafić danas.',
  keywords: ['POS sistem', 'restoran softver', 'kafić upravljanje', 'tablet naručivanje', 'inventar', 'ugostiteljstvo', 'konobar aplikacija', 'zakazivanje'],
  authors: [{ name: 'ORDERA' }],
  creator: 'ORDERA',
  publisher: 'ORDERA',
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://ordera.rs',
    siteName: 'ORDERA',
    title: 'ORDERA | Kompletno rešenje za upravljanje restoranima i kafićima',
    description: 'Digitalizujte vaš restoran ili kafić sa ORDERA - POS sistem, tablet naručivanje, inventar i više.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORDERA | Softver za restorane i kafiće',
    description: 'Kompletno rešenje za ugostiteljstvo - POS, naručivanje, inventar, zakazivanje.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#22c55e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
