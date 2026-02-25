"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { NAV_ITEM } from "@/types/header"

const NAV_ITEMS: NAV_ITEM[] = [
  { label: "Anuário", href: "/anuario" },
  { label: "Iniciativas", href: "/iniciativas" },
  { label: "Documentos", href: "/documentos" },
  { label: "Calendário", href: "/calendario" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <header className="bg-white border-b">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-[var(--color-primary)] btn-navbar"
        >
          Turma ADS
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8 text-sm font-semibold text-gray-900">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="btn-navbar">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu principal"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden btn-navbar text-lg"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden px-6 pb-6 space-y-4 text-sm font-semibold text-gray-900"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-navbar block"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
