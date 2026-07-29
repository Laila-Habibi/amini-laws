"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CircleUserRound,
  FilePenLine,
  Globe2,
  Gavel,
  HeartHandshake,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircleMore,
  Phone,
  Scale,
  ShieldCheck,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Our Team", href: "#team" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const practiceAreas = [
  {
    title: "Family Law",
    description:
      "Compassionate guidance for lifeâ€™s most personal legal matters.",
    icon: UsersRound,
  },
  {
    title: "Real Estate Law",
    description:
      "Helping you navigate property transactions with confidence.",
    icon: Home,
  },
  {
    title: "Business Law",
    description:
      "Practical legal support to help your business grow and succeed.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Wills & Estates",
    description: "Plan today for peace of mind tomorrow.",
    icon: FilePenLine,
  },
  {
    title: "Litigation",
    description:
      "Strong advocacy when disputes and legal challenges arise.",
    icon: Gavel,
  },
  {
    title: "Immigration Law",
    description: "Guiding you toward a future in a new country.",
    icon: Globe2,
  },
];

const benefits = [
  {
    title: "Experienced & Dedicated",
    description:
      "Years of combined legal experience focused on delivering results.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Approach",
    description:
      "Tailored strategies designed around your unique legal needs.",
    icon: CircleUserRound,
  },
  {
    title: "Clear Communication",
    description:
      "We keep you informed and involved throughout the legal process.",
    icon: MessageCircleMore,
  },
  {
    title: "Client-Focused",
    description:
      "Your goals are our priority, and your success is our mission.",
    icon: HeartHandshake,
  },
];

const statistics = [
  {
    value: "500+",
    label: "Happy Clients",
    icon: UsersRound,
  },
  {
    value: "10+",
    label: "Years of Experience",
    icon: BriefcaseBusiness,
  },
  {
    value: "6",
    label: "Practice Areas",
    icon: Landmark,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Trophy,
  },
];

const testimonials = [
  {
    text: "Amini Laws provided exceptional service and made a complex situation much easier to handle. Highly professional and reliable.",
    name: "Sarah M.",
  },
  {
    text: "Their attention to detail and commitment to our case was outstanding. I highly recommend Amini Laws.",
    name: "David R.",
  },
  {
    text: "From the first consultation to the final outcome, I felt supported and confident in their expertise.",
    name: "Emily T.",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="#home" className="flex items-center gap-3">
      <div
        className={`flex h-12 w-12 items-center justify-center border ${
          light ? "border-[#c8994d]" : "border-[#b98235]"
        }`}
      >
        <span
          className={`font-serif text-3xl font-semibold ${
            light ? "text-white" : "text-[#152e26]"
          }`}
        >
          A
        </span>
      </div>

      <div>
        <p
          className={`font-serif text-2xl tracking-[0.16em] ${
            light ? "text-white" : "text-[#11221d]"
          }`}
        >
          AMINI
        </p>
        <div className="flex items-center gap-2">
          <span className="h-px w-5 bg-[#b98235]" />
          <p
            className={`text-[10px] font-semibold tracking-[0.42em] ${
              light ? "text-[#e5c38e]" : "text-[#8f652b]"
            }`}
          >
            LAWS
          </p>
          <span className="h-px w-5 bg-[#b98235]" />
        </div>
      </div>
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-[#c79247]" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
          {eyebrow}
        </p>
        <span className="h-px w-10 bg-[#c79247]" />
      </div>

      <h2 className="mt-4 font-serif text-4xl text-[#162b24] sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#5b625f]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#fbf8f2] text-[#17251f]">
     
    
      <section
        id="home"
        className="relative min-h-[760px] border-b border-[#decfb9] pt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.95),transparent_42%)]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] lg:grid-cols-[48%_52%]">
          <div className="relative z-10 flex items-center px-6 py-20 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96662b]">
                Dedicated to justice. Committed to you.
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-[#14251f] sm:text-6xl lg:text-6xl">
                Clear Advice.
                <br />
                Strong Representation.
                <br />
                <span className="italic text-[#b47e32]">Better Outcomes.</span>
              </h1>

              <div className="mt-7 h-px w-14 bg-[#b47e32]" />

              <p className="mt-7 max-w-md text-base leading-8 text-[#434c48]">
                Amini Laws provides strategic legal solutions tailored to your
                unique situation. We stand by your side every step of the way.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-3 bg-[#153a2f] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#b47e32]"
                >
                  Book a Consultation
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="#about"
                  className="flex items-center justify-center gap-3 border border-[#65746e] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition hover:border-[#b47e32] hover:text-[#b47e32]"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden lg:min-h-full">
            <div className="absolute inset-y-0 -left-px z-10 hidden w-32 rounded-r-[100%] bg-[#fbf8f2] lg:block" />

            <Image
              src="/law-hero.jpg"
              alt="Legal scales outside a courthouse"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f2]/30 via-transparent to-[#17251f]/10" />

            <div className="absolute bottom-12 left-8 z-20 flex h-28 w-28 items-center justify-center rounded-full border border-[#c59a5a] bg-[#153a2f] text-center text-white shadow-2xl lg:left-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#e2bc80]">
                  Your Rights
                </p>
                <p className="my-1 font-serif text-4xl">A</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#e2bc80]">
                  Our Priority
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-20 w-full">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0,75 C250,5 470,98 700,48 C955,-8 1160,68 1440,20"
              fill="none"
              stroke="#c9974c"
              strokeWidth="1.3"
            />
          </svg>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1380px]">
          <SectionHeading
            eyebrow="Practice Areas"
            title="How We Can Help You"
            description="Comprehensive legal guidance tailored to your personal, professional and business needs."
          />

          <div className="mt-14 grid gap-px overflow-hidden border border-[#ded4c5] bg-[#ded4c5] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {practiceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group flex min-h-[300px] flex-col items-center bg-[#fffdf9] px-6 py-9 text-center transition hover:-translate-y-1 hover:bg-white"
                >
                  <Icon
                    size={48}
                    strokeWidth={1.4}
                    className="text-[#b47e32]"
                  />

                  <h3 className="mt-6 font-serif text-xl text-[#162b24]">
                    {area.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-[#5f6562]">
                    {area.description}
                  </p>

                  <Link
                    href="#contact"
                    className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#a46e2c]"
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative overflow-hidden bg-[#12372c] px-6 py-20 text-white lg:px-16 xl:px-24">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d9b476]/20" />
            <div className="absolute -right-12 top-12 h-72 w-72 rounded-full border border-[#d9b476]/10" />

            <div className="relative max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d2a660]">
                About Amini Laws
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Your Legal Partner
                <br />
                You Can Rely On
              </h2>

              <p className="mt-7 leading-8 text-white/75">
                We combine years of legal expertise with a client-first
                approach. Our mission is simple: provide thoughtful advice,
                clear communication and effective solutions that protect your
                rights.
              </p>

              <p className="mt-7 font-serif text-3xl italic text-[#d2a660]">
                Amini Laws
              </p>

              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 border border-white/50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition hover:border-[#d2a660] hover:text-[#d2a660]"
              >
                More About Us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[470px]">
            <Image
              src="/amini-office.jpg"
              alt="Modern Amini Laws office reception"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-[52%_48%]">
          <div className="relative min-h-[430px]">
            <Image
              src="/consultation-meeting.jpg"
              alt="Legal consultation meeting"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#fffdf9] px-6 py-16 lg:px-14 xl:px-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a87431]">
              Why Choose Us
            </p>

            <div className="mt-7 divide-y divide-[#ded5c7]">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="flex gap-5 py-5 first:pt-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#153a2f] text-[#d7ad6e]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-[#162b24]">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#626865]">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-[#ded4c5] bg-[#f5efe5] px-5 py-10 lg:px-10">
        <div className="mx-auto grid max-w-[1250px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex items-center justify-center gap-5 ${
                  index > 0 ? "lg:border-l lg:border-[#d4c8b7]" : ""
                }`}
              >
                <Icon
                  size={45}
                  strokeWidth={1.3}
                  className="text-[#173d31]"
                />

                <div>
                  <p className="font-serif text-4xl text-[#153a2f]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[#606562]">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-5 py-24 lg:px-10">
        <div className="absolute right-0 top-16 opacity-10">
          <Scale size={230} strokeWidth={0.7} className="text-[#b47e32]" />
        </div>

        <div className="relative mx-auto max-w-[1260px]">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Trusted by Clients"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="relative border border-[#ded4c5] bg-white p-8 shadow-[0_12px_35px_rgba(38,51,45,0.05)]"
              >
                <span className="font-serif text-5xl leading-none text-[#c9954b]">
                  â€œ
                </span>

                <p className="mt-2 min-h-[105px] text-sm leading-7 text-[#555d59]">
                  {testimonial.text}
                </p>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <p className="font-semibold text-[#173229]">
                    â€” {testimonial.name}
                  </p>

                  <div className="flex text-[#b47e32]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>â˜…</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c89b59] text-[#a87431] transition hover:bg-[#153a2f] hover:text-white"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="flex gap-2 px-5">
              <span className="h-2 w-2 rounded-full bg-[#153a2f]" />
              <span className="h-2 w-2 rounded-full bg-[#d5cfc4]" />
              <span className="h-2 w-2 rounded-full bg-[#d5cfc4]" />
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c89b59] text-[#a87431] transition hover:bg-[#153a2f] hover:text-white"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#12372c] px-6 py-14 text-white"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/law-library-office.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-4xl">Need Legal Advice?</h2>
            <p className="mt-3 max-w-xl leading-7 text-white/75">
              Book a confidential consultation and take the first step toward
              resolving your legal matter.
            </p>
          </div>

          <Link
            href="mailto:info@aminilaws.com"
            className="flex shrink-0 items-center gap-3 bg-[#c38c3f] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition hover:bg-white hover:text-[#153a2f]"
          >
            <CalendarDays size={18} />
            Book a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    
    </main>
  );
}
