import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b231d] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <h2 className="font-serif text-4xl">
          Amini Laws
        </h2>

        <p className="mt-4 max-w-md text-white/70">
          Professional legal guidance for individuals,
          families and businesses.
        </p>

        <div className="mt-10 flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </footer>
  );
}