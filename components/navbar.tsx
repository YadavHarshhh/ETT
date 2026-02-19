'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-foreground hidden sm:inline">Red Apple</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-1 max-w-xs mx-8">
            <div className="flex items-center bg-muted rounded px-3 py-2 w-full">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent text-foreground placeholder-muted-foreground outline-none flex-1 ml-2 text-sm"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4 animate-in fade-in duration-200">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <div className="flex items-center bg-muted rounded px-3 py-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent text-foreground placeholder-muted-foreground outline-none flex-1 ml-2 text-sm"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
