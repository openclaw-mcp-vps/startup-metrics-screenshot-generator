import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MetricShot — Beautiful Investor Update Screenshots',
  description: 'Generate polished, branded metric screenshots for your investor decks. Connect Google Analytics, Mixpanel, and more in minutes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="64f18a6b-fbdc-4b15-aaf5-b70105493401"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
