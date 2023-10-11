import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zachary Callahan',
  description: 'Created by Zachary Callahan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background dark:bg-dark` }>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
