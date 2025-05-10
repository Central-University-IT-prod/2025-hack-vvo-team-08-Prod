import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import NextArt from "next/font/local"
import "./globals.css"

// Open Sans font for regular text
const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
})

const nextArtBold = NextArt({
  src: "./fonts/NEXTART_Bold.otf",
  variable: "--font-next-art",
})

const nextArtSemiBold = NextArt({
  src: "./fonts/NEXTART_SemiBold.otf",
  variable: "--font-next-art",
})

export const metadata: Metadata = {
  title: "УЛЕЙ - Платформа для общежитий",
  description: "Создаем жизнь в новом общежитии"
}
//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${openSans.className} ${nextArtBold.variable} ${nextArtSemiBold.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
