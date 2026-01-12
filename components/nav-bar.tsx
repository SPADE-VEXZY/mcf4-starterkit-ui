"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "./container"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b">
      <Container className="flex items-center justify-between py-3">
        {/* Logo */}
        <h1 className="text-xl font-semibold">LaraPOS</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-primary">About</a>
          <a href="#" className="hover:text-primary">Features</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3">
          <Button variant="outline" className="px-8">
            Register
          </Button>
          <Link href="/login">
            <Button className="px-8">Login</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <Container className="flex flex-col gap-4 py-4">
            <a href="#" onClick={() => setOpen(false)}>About</a>
            <a href="#" onClick={() => setOpen(false)}>Features</a>
            <a href="#" onClick={() => setOpen(false)}>Contact</a>

            <div className="flex flex-col gap-3 pt-2">
              <Button variant="outline">Register</Button>
              <Link href="/login">
                <Button className="w-full">Login</Button>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </nav>
  )
}
