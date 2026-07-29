"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Our Team" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5dfd3] bg-[#fbf8f2]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8">
        <Link href="/" className="font-serif text-3xl">
          AMINI LAWS
        </Link>

        <nav className="hidden gap-10 lg:flex">
          {navigation.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === href : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "border-[#b47e32]"
                    : "border-transparent hover:border-[#b47e32]/40"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact#consultation-form" className="bg-[#153a2f] px-6 py-3 text-white">
          Book Consultation
        </Link>
      </div>
    </header>
  );
}

