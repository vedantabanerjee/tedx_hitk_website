import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "TEDxHITKolkata",
  description:
    "Join us for a day of ideas worth spreading at TEDxHITKolkata on April 23, 2025",
  keywords: [
    "TEDx",
    "Heritage Institute of Technology",
    "Kolkata",
    "Ideas",
    "Innovation",
    "Conference",
  ],
  openGraph: {
    title: "TEDx Heritage Institute of Technology, Kolkata",
    description:
      "Join us for a day of ideas worth spreading at TEDxHITKolkata on April 23, 2025",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
