import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'Yeswanth Obillaneni — React Developer & Digital Marketer',
  description:
    'React developer, digital marketing specialist, and IT project manager based in Eluru, India. I build websites that win customers and run campaigns that generate leads. Available for freelance.',
  generator: 'v0.app',
  keywords: [
    'React Developer',
    'Digital Marketing',
    'IT Project Manager',
    'Freelance Web Developer',
    'Eluru',
    'Next.js',
  ],
  openGraph: {
    title: 'Yeswanth Obillaneni — React Developer & Digital Marketer',
    description:
      'I build websites that get customers, run ads that get leads, and lead teams that deliver on time.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141a24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
