import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

export const metadata: Metadata = {
  title: "Turma ADS",
  description: "Site oficial da turma de ADS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 mx-auto max-w-5xl px-4 py-10">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
