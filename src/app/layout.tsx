import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nooon',
  description: 'Fashion engineering.',
  metadataBase: new URL('https://nooon.online'),
  openGraph: {
    title: 'Nooon',
    description: 'Fashion engineering.',
    url: 'https://nooon.online',
    siteName: 'Nooon',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
