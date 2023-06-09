import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Livl Madness',
  description: 'par Livl Corporation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="emerald">
      <body className={inter.className + " bg-slate-100"}>{children}</body>
    </html>
  )
}
