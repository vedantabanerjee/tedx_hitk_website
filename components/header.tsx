"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background opacity
      setScrolled(window.scrollY > 50);

      // Only track sections on homepage
      if (!isHomePage) return;

      // Get all sections for intersection detection
      const sections = ["home", "speakers", "schedule", "about", "faq"];

      // Find the current active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { href: isHomePage ? "#home" : "/", label: "Home" },
    { href: isHomePage ? "#speakers" : "/#speakers", label: "Speakers" },
    { href: isHomePage ? "#schedule" : "/#schedule", label: "Schedule" },
    { href: isHomePage ? "#about" : "/#about", label: "About" },
    { href: isHomePage ? "#faq" : "/#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/90" : "bg-black/50"
      } backdrop-blur-xl`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.png"
            alt="TEDxHITKolkata Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#E62B1E] ${
                activeSection === link.href.replace("#", "") ||
                (link.href === "/" && activeSection === "home")
                  ? "text-[#E62B1E]"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="ml-4 bg-[#E62B1E] hover:bg-[#E62B1E]/90">
            Register Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 hover:text-[#E62B1E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E62B1E] md:hidden"
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
          <div className="space-y-1 px-2 pb-3 pt-2 bg-black">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-800 hover:text-[#E62B1E] ${
                  activeSection === link.href.replace("#", "") ||
                  (link.href === "/" && activeSection === "home")
                    ? "text-[#E62B1E]"
                    : "text-white"
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button
                className="w-full bg-[#E62B1E] hover:bg-[#E62B1E]/90"
                onClick={toggleMenu}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
