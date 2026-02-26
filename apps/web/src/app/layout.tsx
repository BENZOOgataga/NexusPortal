import type { Metadata } from 'next'
import TolgeeClientProvider from '@/components/i18n/TolgeeClientProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexus Horizon Trade & Secure - Star Citizen Organization',
  description: 'Multi-vector Star Citizen organization: doctrine, operations, command structure, and recruitment.',
  keywords: ['Star Citizen', 'Nexus Horizon Trade & Secure', 'organization', 'recruitment', 'NHTSC'],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2-family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        <TolgeeClientProvider>{children}</TolgeeClientProvider>
      </body>
    </html>
  )
}
