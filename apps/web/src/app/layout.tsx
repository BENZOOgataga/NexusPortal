import type { Metadata } from 'next'
import { Exo_2, Orbitron, Share_Tech_Mono } from 'next/font/google'
import TolgeeClientProvider from '@/components/i18n/TolgeeClientProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexus Horizon Trade & Secure - Star Citizen Organization',
  description: 'Multi-vector Star Citizen organization: doctrine, operations, command structure, and recruitment.',
  keywords: ['Star Citizen', 'Nexus Horizon Trade & Secure', 'organization', 'recruitment', 'NHTSC'],
  robots: 'index, follow',
}

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-display-google',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body-google',
})

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ui-google',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${orbitron.variable} ${exo2.variable} ${shareTechMono.variable}`}>
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        <TolgeeClientProvider>{children}</TolgeeClientProvider>
      </body>
    </html>
  )
}
