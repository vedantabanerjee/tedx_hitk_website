"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="TEDx Heritage Institute of Technology"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-900 hover:text-[#E62B1E]">
            Home
          </Link>
          <Link href="#speakers" className="text-sm font-medium text-gray-900 hover:text-[#E62B1E]">
            Speakers
          </Link>
          <Link href="#schedule" className="text-sm font-medium text-gray-900 hover:text-[#E62B1E]">
            Schedule
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-900 hover:text-[#E62B1E]">
            About
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-900 hover:text-[#E62B1E]">
            FAQ
          </Link>
          <Button className="ml-4 bg-[#E62B1E] hover:bg-[#E62B1E]/90">Register Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E62B1E] md:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#E62B1E]"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#speakers"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#E62B1E]"
              onClick={toggleMenu}
            >
              Speakers
            </Link>
            <Link
              href="#schedule"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#E62B1E]"
              onClick={toggleMenu}
            >
              Schedule
            </Link>
            <Link
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#E62B1E]"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#faq"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#E62B1E]"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <div className="mt-4 px-3">
              <Button className="w-full bg-[#E62B1E] hover:bg-[#E62B1E]/90" onClick={toggleMenu}>
                Register Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

