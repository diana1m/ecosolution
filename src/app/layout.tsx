import type { Metadata } from 'next'
import { Fira_Sans, Oswald } from 'next/font/google'
import '../styles/globals.scss'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const fira = Fira_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--main-font-family',
})
const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
  variable: '--secondary-font-family',
})

export const metadata: Metadata = {
  title: 'Ecosolution',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={fira.className}>
        <div className='container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}