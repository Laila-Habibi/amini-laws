import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  Gavel,
  HeartHandshake,
  Mail,
  MessageCircleMore,
  Scale,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

const lawyers = [
  {
    name: "Aryan Amini",
    role: "Founder & Principal Lawyer",
    image: "/team/aryan-amini.jpg",
    email: "aryan@aminilaws.com",
    description:
      "Aryan provides strategic legal advice and representation across business law, litigation and complex personal matters.",
    areas: ["Business Law", "Litigation", "Real Estate Law"],
  },
  {
    name: "Sara Rahimi",
    role: "Associate Lawyer",
    image: "/team/sara-rahimi.jpg",
    email: "sara@aminilaws.com",
    description:
      "Sara delivers compassionate and practical legal guidance for clients navigating family and immigration matters.",
    areas: ["Family Law", "Immigration Law", "Wills & Estates"],
  },
  {
    name: "Daniel Morgan",
    role: "Senior Legal Consultant",
    image: "/team/daniel-morgan.jpg",
    email: "daniel@aminilaws.com",
    description:
      "Daniel supports businesses and individuals with contracts, commercial disputes and strategic legal planning.",
    areas: ["Corporate Law", "Contracts", "Commercial Disputes"],
  },
  {
    name: "Leila Karimi",
    role: "Associate Lawyer",
    image: "/team/leila-karimi.jpg",
    email: "leila@aminilaws.com",
    description:
      "Leila focuses on protecting clientsâ€™ rights through careful preparation, negotiation and strong advocacy.",
    areas: ["Civil Litigation", "Employment Law", "Negotiation"],
  },
  {
    name: "Omar Hassan",
    role: "Legal Counsel",
    image: "/team/omar-hassan.jpg",
    email: "omar@aminilaws.com",
    description:
      "Omar helps clients navigate real estate transactions and business agreements with clarity and confidence.",
    areas: ["Real Estate Law", "Business Law", "Transactions"],
  },
  {
    name: "Emily Chen",
    role: "Legal Consultant",
    image: "/team/emily-chen.jpg",
    email: "emily@aminilaws.com",
    description:
      "Emily provides detailed support in estate planning, wills and client-focused legal research.",
    areas: ["Wills & Estates", "Estate Planning", "Legal Research"],
  },
];

const approach = [
  {
    title: "Experienced Counsel",
    description:
      "Our professionals bring legal knowledge, practical insight and focused preparation to every matter.",
    icon: Award,
  },
  {
    title: "Collaborative Strategy",
    description:
      "Our team works together to examine each issue from multiple perspectives and build effective solutions.",
    icon: UsersRound,
  },
  {
    title: "Clear Communication",
    description:
      "We explain your legal options clearly and keep you updated throughout the process.",
    icon: MessageCircleMore,
  },
  {
    title: "Client Commitment",
    description:
      "Your priorities guide our approach, from the first consultation to the final resolution.",
    icon: HeartHandshake,
  },
];

const benefits = [
  "Personal attention from experienced legal professionals",
  "Practical strategies tailored to your circumstances",
  "Clear explanations without unnecessary legal language",
  "Consistent updates throughout your legal matter",
  "Confidential, respectful and professional service",
  "Strong preparation for negotiation or litigation",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-[#b98235]" />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
          {eyebrow}
        </p>

        {centered && <span className="h-px w-10 bg-[#b98235]" />}
      </div>

      <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f] sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-[#616865]">{description}</p>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f2] text-[#17251f] pt-20">
      {/* Hero */}
      <section className="relative min-h-[570px] overflow-hidden bg-[#102f26]">
        <Image
          src="/team/team-hero.jpg"
          alt="Amini Laws legal team"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a241d]/95 via-[#0d2d24]/80 to-[#0c251e]/30" />

        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-[#d2a660]/20" />
        <div className="absolute right-20 top-20 h-[230px] w-[230px] rounded-full border border-[#d2a660]/10" />

        <div className="relative mx-auto flex min-h-[570px] max-w-[1380px] items-center px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d2a660]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfb673]">
                Our Team
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-6xl">
              Experienced Professionals
              <br />
              <span className="italic text-[#d6a65e]">On Your Side</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Meet the legal professionals committed to providing thoughtful
              advice, strong representation and personalized service.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#team-members"
                className="inline-flex items-center gap-3 bg-[#c18a3d] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#153a2f]"
              >
                Meet Our Lawyers
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#d6a65e] hover:text-[#d6a65e]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="A Collaborative Legal Team"
              title="Knowledge, Strategy and Genuine Client Care"
              description="At Amini Laws, our team combines professional experience with a personal approach. We work collaboratively to understand each clientâ€™s concerns, evaluate the available options and develop practical strategies."
              align="left"
            />

            <p className="mt-6 max-w-2xl leading-8 text-[#616865]">
              Every legal matter is different. That is why our lawyers take the
              time to listen, ask the right questions and explain the legal
              process clearly. Our goal is to help you make informed decisions
              with confidence.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Client-centred legal guidance",
                "Strong research and preparation",
                "Clear and responsive communication",
                "Collaborative legal strategies",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b98235] text-white">
                    <Check size={12} strokeWidth={3} />
                  </div>

                  <p className="text-sm leading-6 text-[#4f5753]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[550px]">
            <Image
              src="/team/team-meeting.jpg"
              alt="Amini Laws team meeting"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 max-w-[290px] bg-[#153a2f] p-8 text-white">
              <Scale
                size={34}
                strokeWidth={1.3}
                className="text-[#d1a35f]"
              />

              <p className="mt-5 font-serif text-2xl leading-snug">
                Working together to protect what matters most.
              </p>
            </div>

            <div className="absolute -right-6 -top-6 -z-10 h-full w-full border border-[#c99a56]" />
          </div>
        </div>
      </section>

      {/* Lawyers */}
      <section
        id="team-members"
        className="border-y border-[#e0d7c9] bg-white px-6 py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Meet Our Professionals"
            title="The People Behind Amini Laws"
            description="Our professionals bring experience, attention to detail and a shared commitment to serving every client with integrity."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {lawyers.map((lawyer) => (
              <article
                key={lawyer.name}
                className="group border border-[#dfd5c6] bg-[#fbf8f2]"
              >
                <div className="relative h-[430px] overflow-hidden bg-[#e6ded2]">
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3027]/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <Link
                    href={`mailto:${lawyer.email}`}
                    aria-label={`Email ${lawyer.name}`}
                    className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-[#c18a3d] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Mail size={18} />
                  </Link>
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a87431]">
                    {lawyer.role}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl text-[#153a2f]">
                    {lawyer.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#626865]">
                    {lawyer.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {lawyer.areas.map((area) => (
                      <span
                        key={area}
                        className="border border-[#d8c9b3] bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#77654f]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#ded4c5] pt-5">
                    <Link
                      href={`/team/${lawyer.name
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#9b692d]"
                    >
                      View Profile
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      href={`mailto:${lawyer.email}`}
                      className="text-[#153a2f] transition hover:text-[#b98235]"
                    >
                      <Mail size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team approach */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="How We Work"
            title="A Team Approach to Legal Service"
            description="Our lawyers combine their knowledge and perspectives to provide comprehensive guidance for complex legal matters."
          />

          <div className="mt-14 grid gap-px overflow-hidden border border-[#ded4c5] bg-[#ded4c5] sm:grid-cols-2 xl:grid-cols-4">
            {approach.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group bg-[#fffdf9] px-8 py-10 transition hover:bg-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#153a2f] text-[#d1a35f] transition group-hover:bg-[#b98235] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 font-serif text-2xl text-[#153a2f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#626865]">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#b98235] transition-all group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#153a2f] text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[600px]">
            <Image
              src="/team/aryan-amini.jpg"
              alt="Aryan Amini, founder of Amini Laws"
              fill
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#153a2f]/30" />
          </div>

          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d2a660]" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a660]">
                  Leadership
                </p>
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Led by Experience and Purpose
              </h2>

              <p className="mt-7 leading-8 text-white/70">
                Amini Laws was founded on the belief that clients deserve legal
                guidance that is both highly professional and genuinely
                personal. Our leadership sets the standard for integrity,
                preparation and client service across the firm.
              </p>

              <blockquote className="mt-8 border-l-2 border-[#d2a660] pl-6">
                <p className="font-serif text-2xl italic leading-9 text-white/90">
                  â€œWe approach every case with the same commitment: listen
                  carefully, prepare thoroughly and advocate with purpose.â€
                </p>

                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#d2a660]">
                  Aryan Amini
                </footer>
              </blockquote>

              <Link
                href="/team/aryan-amini"
                className="mt-9 inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition hover:border-[#d2a660] hover:text-[#d2a660]"
              >
                Read Founder Profile
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose team */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Choose Our Team"
              title="Professional Guidance You Can Depend On"
              description="We understand that legal matters can involve uncertainty, stress and important decisions. Our role is to provide clarity, direction and strong support."
              align="left"
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b98235] text-white">
                    <Check size={12} strokeWidth={3} />
                  </div>

                  <p className="text-sm leading-6 text-[#505854]">{benefit}</p>
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

          <div className="relative min-h-[550px]">
            <Image
              src="/team/team-meeting.jpg"
              alt="Lawyers discussing a legal case"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 right-0 max-w-[300px] bg-[#f5eee2] p-8 shadow-xl">
              <Gavel
                size={34}
                strokeWidth={1.3}
                className="text-[#b98235]"
              />

              <p className="mt-5 font-serif text-2xl leading-snug text-[#153a2f]">
                Prepared carefully. Represented confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="border-y border-[#e0d7c9] bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto flex max-w-[1150px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#b98235]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
                Careers
              </p>
            </div>

            <h2 className="mt-4 font-serif text-4xl text-[#153a2f]">
              Interested in Joining Amini Laws?
            </h2>

            <p className="mt-4 leading-7 text-[#626865]">
              We welcome inquiries from legal professionals who share our
              commitment to integrity, collaboration and excellent client
              service.
            </p>
          </div>

          <Link
            href="mailto:careers@aminilaws.com"
            className="inline-flex shrink-0 items-center gap-3 border border-[#153a2f] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#153a2f] transition hover:bg-[#153a2f] hover:text-white"
          >
            View Opportunities
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#102f26] px-6 py-20 text-white lg:px-12">
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#d2a660]/15" />
        <div className="absolute -right-16 -top-40 h-96 w-96 rounded-full border border-[#d2a660]/15" />

        <div className="relative mx-auto flex max-w-[1150px] flex-col items-center text-center">
          <Scale
            size={48}
            strokeWidth={1.2}
            className="text-[#d2a660]"
          />

          <h2 className="mt-7 font-serif text-4xl sm:text-5xl">
            Meet the Team That Will Stand With You
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Schedule a confidential consultation and speak with a member of our
            legal team about your concerns, options and next steps.
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
