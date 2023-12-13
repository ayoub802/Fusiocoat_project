import { Inter } from 'next/font/google'
import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'
import Head from 'next/head'
import SessionProvider from './SessionProvider'
import { Button } from '@/components/ui/button'
import { PreviewModalProvider } from '@/providers/preview-modal-provider'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fusiocoat',
  description: 'fusiocoat E-Commerce',
}
const noAuthRequired = ['/dashboard', '/signin', '/signup']
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  
  
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={inter.className}>
                <ThemeProvider 
                  attribute="class" 
                  defaultTheme="system" 
                  enableSystem
                >
                  <ToastProvider />
                  <ModalProvider />
                  <PreviewModalProvider />
                  {children}
                </ThemeProvider>
          </body>
        </html>
    </ClerkProvider>
  )
}
