import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TEDxHITKolkata",
  description: "Join us for a day of ideas worth spreading at TEDxHITKolkata on April 23, 2025",
  keywords: ["TEDx", "Heritage Institute of Technology", "Kolkata", "Ideas", "Innovation", "Conference"],
  openGraph: {
    title: "TEDx Heritage Institute of Technology, Kolkata",
    description: "Join us for a day of ideas worth spreading at TEDxHITKolkata on April 23, 2025",
    url: "https://tedxhitkolkata.org",
    siteName: "TEDxHITKolkata",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TEDx Heritage Institute of Technology, Kolkata",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}



import './globals.css'