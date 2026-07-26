"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5dfd3] bg-[#fbf8f2]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8">

        <Link href="/" className="font-serif text-3xl">
          AMINI LAWS
        </Link>

        <nav className="hidden gap-10 lg:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/practice-areas">Practice Areas</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="bg-[#153a2f] px-6 py-3 text-white"
        >
          Book Consultation
        </Link>

      </div>
    </header>
  );
}