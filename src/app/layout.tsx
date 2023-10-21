import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navigation'
import AuthProvider from './context/AuthProvider'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orchard Beach Community Group',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar  />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
