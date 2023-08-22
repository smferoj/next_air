
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'


const font = Nunito({
  subsets:["latin"],
})

export const metadata = {
  title: 'air_app',
  description: 'air app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title="Hello" isOpen />
        <Navbar/>
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
