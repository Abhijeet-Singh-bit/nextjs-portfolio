"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          My<span className="text-blue-600">Website</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
             href="/contact"
             className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
             >
             Contact
          </Link>

          <Link
            href="/projects"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Projects
          </Link>

          

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-xl text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              About
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-slate-900 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-600"
            >
              Projects
            </Link>

            <Link
             href="/contact"
             className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
             >
             Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}  