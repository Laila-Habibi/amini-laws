import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  Gavel,
  HeartHandshake,
  MessageCircleMore,
  Scale,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We provide honest, ethical and transparent legal guidance at every stage of your matter.",
    icon: ShieldCheck,
  },
  {
    title: "Client Commitment",
    description:
      "We take the time to understand your concerns, priorities and desired outcomes.",
    icon: HeartHandshake,
  },
  {
    title: "Clear Communication",
    description:
      "We explain complex legal issues in clear language and keep you informed throughout the process.",
    icon: MessageCircleMore,
  },
  {
    title: "Strategic Advocacy",
    description:
      "We develop practical legal strategies designed to protect your rights and interests.",
    icon: Target,
  },
];

const statistics = [
  {
    value: "500+",
    label: "Clients Assisted",
    icon: UsersRound,
  },
  {
    value: "10+",
    label: "Years of Experience",
    icon: BriefcaseBusiness,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Award,
  },
  {
    value: "6",
    label: "Practice Areas",
    icon: Scale,
  },
];

const commitments = [
  "Personalized legal strategies",
  "Confidential and respectful service",
  "Clear and practical legal advice",
  "Responsive client communication",
  "Strong negotiation and representation",
  "A commitment to achieving positive outcomes",
];

const team = [
  {
    name: "Aryan Amini",
    role: "Founder & Principal Lawyer",
    image: "/lawyer-1.jpg",
    description:
      "Aryan provides strategic advice and representation across complex personal and business legal matters.",
  },
  {
    name: "Sara Rahimi",
    role: "Associate Lawyer",
    image: "/lawyer-2.jpg",
    description:
      "Sara focuses on client-centred advocacy and practical solutions for family and immigration matters.",
  },
  {
    name: "Daniel Morgan",
    role: "Legal Consultant",
    image: "/lawyer-3.jpg",
    description:
      "Daniel supports clients with commercial agreements, disputes and business-related legal concerns.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#b98235]" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
        {children}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f2] text-[#17251f] pt-20">
      {/* Hero */}
      <section className="relative min-h-[570px] overflow-hidden bg-[#102f26]">
        <Image
          src="/about-law-hero.jpg"
          alt="A professional law office"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a241d]/95 via-[#0f3027]/80 to-[#0f3027]/25" />

        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border border-[#d4a357]/20" />
        <div className="absolute -right-8 -top-14 h-[290px] w-[290px] rounded-full border border-[#d4a357]/15" />

        <div className="relative mx-auto flex min-h-[570px] max-w-[1380px] items-center px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d0a15d]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e1b875]">
                About Amini Laws
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-6xl">
              Legal Guidance Built
              <br />
              Around <span className="italic text-[#d6a65e]">Your Needs</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              We combine legal knowledge, strategic thinking and personalized
              service to help our clients move forward with confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#c18a3d] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#153a2f]"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-3 border border-white/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#d6a65e] hover:text-[#d6a65e]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="relative min-h-[600px] overflow-hidden">
              <Image
                src="/amini-law-office.jpg"
                alt="Amini Laws office interior"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-5 hidden w-[260px] border border-[#d8c5a7] bg-[#f7f1e7] p-7 shadow-xl sm:block lg:-right-10">
              <Scale
                size={40}
                strokeWidth={1.3}
                className="text-[#b98235]"
              />

              <p className="mt-5 font-serif text-2xl leading-snug text-[#153a2f]">
                Legal experience with a personal approach.
              </p>

              <div className="mt-5 h-px w-12 bg-[#b98235]" />
            </div>

            <div className="absolute -left-5 -top-5 -z-10 h-full w-full border border-[#c99a56] sm:-left-8 sm:-top-8" />
          </div>

          <div className="lg:pl-8">
            <SectionEyebrow>Who We Are</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f] sm:text-5xl">
              A Modern Law Firm Focused on People
            </h2>

            <p className="mt-7 text-base leading-8 text-[#59605d]">
              Amini Laws was established with a clear purpose: to make legal
              services more understandable, accessible and personal. We believe
              clients deserve more than legal answers. They deserve a trusted
              advisor who listens carefully and provides practical direction.
            </p>

            <p className="mt-5 text-base leading-8 text-[#59605d]">
              Whether you are facing a personal legal challenge, protecting
              your family, purchasing property or growing a business, our team
              approaches every matter with care, professionalism and attention
              to detail.
            </p>

            <div className="mt-9 border-l-2 border-[#b98235] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(27,50,41,0.05)]">
              <p className="font-serif text-2xl italic leading-9 text-[#153a2f]">
                “Our role is not only to represent our clients, but to help them
                understand their options and make informed decisions.”
              </p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#a87431]">
                Amini Laws
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[520px]">
            <Image
              src="/legal-consultation.jpg"
              alt="Lawyer meeting with a client"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#132f27]/15" />
          </div>

          <div className="flex items-center bg-[#153a2f] px-6 py-20 text-white sm:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d2a660]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a660]">
                  Our Mission
                </p>
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Helping You Move Forward With Confidence
              </h2>

              <p className="mt-7 leading-8 text-white/70">
                Our mission is to provide reliable legal guidance that empowers
                clients to make informed decisions. We aim to simplify complex
                legal processes while delivering strategic and effective
                representation.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div className="border border-white/15 p-6">
                  <Gavel
                    size={34}
                    strokeWidth={1.4}
                    className="text-[#d2a660]"
                  />
                  <h3 className="mt-5 font-serif text-2xl">
                    Strong Representation
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    We advocate confidently for your rights and interests.
                  </p>
                </div>

                <div className="border border-white/15 p-6">
                  <HeartHandshake
                    size={34}
                    strokeWidth={1.4}
                    className="text-[#d2a660]"
                  />
                  <h3 className="mt-5 font-serif text-2xl">
                    Genuine Support
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    We provide guidance with understanding, respect and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#b98235]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
                Our Values
              </p>
              <span className="h-px w-10 bg-[#b98235]" />
            </div>

            <h2 className="mt-5 font-serif text-4xl text-[#153a2f] sm:text-5xl">
              The Principles That Guide Our Work
            </h2>

            <p className="mt-5 leading-7 text-[#626865]">
              Every client relationship and legal strategy is shaped by our
              commitment to professionalism, integrity and service.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#ded4c5] bg-[#ded4c5] md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group bg-[#fffdf9] px-8 py-10 transition hover:bg-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#153a2f] text-[#d1a35f] transition group-hover:bg-[#b98235] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 font-serif text-2xl text-[#153a2f]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#626865]">
                    {value.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#b98235] transition-all group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-[#ded4c5] bg-[#f3ecdf] px-6 py-12 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex items-center justify-center gap-5 ${
                  index !== 0 ? "lg:border-l lg:border-[#d5c9b8]" : ""
                }`}
              >
                <Icon
                  size={43}
                  strokeWidth={1.3}
                  className="text-[#153a2f]"
                />

                <div>
                  <p className="font-serif text-4xl text-[#153a2f]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#6b6e6c]">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Commitment */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Our Commitment</SectionEyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f] sm:text-5xl">
              What You Can Expect From Amini Laws
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[#606663]">
              We understand that contacting a lawyer can feel overwhelming. Our
              goal is to create a professional, respectful and supportive
              experience from your first consultation to the completion of your
              legal matter.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {commitments.map((commitment) => (
                <div key={commitment} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b98235] text-white">
                    <Check size={12} strokeWidth={3} />
                  </div>

                  <p className="text-sm leading-6 text-[#4f5753]">
                    {commitment}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-[#153a2f] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#b98235]"
            >
              Speak With Our Team
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative min-h-[540px]">
            <Image
              src="/law-library-office.jpg"
              alt="Elegant legal office and law library"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 max-w-[330px] bg-[#153a2f] p-8 text-white">
              <p className="font-serif text-3xl leading-tight">
                Your rights.
                <br />
                Your goals.
                <br />
                Our priority.
              </p>

              <div className="mt-5 h-px w-12 bg-[#d1a35f]" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionEyebrow>Meet Our Team</SectionEyebrow>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f] sm:text-5xl">
                Experienced Professionals on Your Side
              </h2>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#a87431]"
            >
              View the Full Team
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="group">
                <div className="relative h-[420px] overflow-hidden bg-[#e8e1d5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#112e25]/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="relative mx-5 -mt-10 bg-[#fbf8f2] p-6 shadow-[0_12px_35px_rgba(30,49,42,0.08)]">
                  <h3 className="font-serif text-2xl text-[#153a2f]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#a87431]">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#636966]">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#12372c] px-6 py-20 text-white lg:px-12">
        <div className="absolute -bottom-36 -left-20 h-96 w-96 rounded-full border border-[#d2a660]/15" />
        <div className="absolute -right-20 -top-36 h-96 w-96 rounded-full border border-[#d2a660]/15" />

        <div className="relative mx-auto flex max-w-[1150px] flex-col items-center text-center">
          <Scale
            size={48}
            strokeWidth={1.2}
            className="text-[#d2a660]"
          />

          <h2 className="mt-7 font-serif text-4xl sm:text-5xl">
            Let’s Discuss Your Legal Needs
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Schedule a confidential consultation with Amini Laws and receive
            clear guidance about your options and next steps.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#c18a3d] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#153a2f]"
          >
            Book a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}