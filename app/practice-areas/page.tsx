import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  FilePenLine,
  Gavel,
  Globe2,
  HeartHandshake,
  Home,
  Landmark,
  MessageCircleMore,
  Scale,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const practiceAreas = [
  {
    number: "01",
    title: "Family Law",
    description:
      "Compassionate legal guidance for family-related matters, including separation, divorce, parenting arrangements and support.",
    icon: UsersRound,
    href: "/practice-areas/family-law",
    services: [
      "Divorce and separation",
      "Child custody and parenting time",
      "Child and spousal support",
      "Marriage and separation agreements",
    ],
  },
  {
    number: "02",
    title: "Real Estate Law",
    description:
      "Clear legal support for residential and commercial property transactions, refinancing and ownership matters.",
    icon: Home,
    href: "/practice-areas/real-estate-law",
    services: [
      "Residential purchases and sales",
      "Commercial real estate",
      "Mortgage refinancing",
      "Title and ownership matters",
    ],
  },
  {
    number: "03",
    title: "Business Law",
    description:
      "Practical legal solutions that help entrepreneurs and organizations establish, operate and grow their businesses.",
    icon: BriefcaseBusiness,
    href: "/practice-areas/business-law",
    services: [
      "Business incorporation",
      "Commercial contracts",
      "Partnership and shareholder agreements",
      "Business purchases and sales",
    ],
  },
  {
    number: "04",
    title: "Wills & Estates",
    description:
      "Thoughtful estate planning services designed to protect your wishes, your assets and the people who matter most.",
    icon: FilePenLine,
    href: "/practice-areas/wills-estates",
    services: [
      "Wills and estate plans",
      "Powers of attorney",
      "Estate administration",
      "Probate applications",
    ],
  },
  {
    number: "05",
    title: "Litigation",
    description:
      "Strategic representation for individuals and businesses involved in disputes, negotiations and court proceedings.",
    icon: Gavel,
    href: "/practice-areas/litigation",
    services: [
      "Civil and commercial disputes",
      "Contract disputes",
      "Negotiation and mediation",
      "Court representation",
    ],
  },
  {
    number: "06",
    title: "Immigration Law",
    description:
      "Professional support for individuals, families and businesses navigating Canadian immigration processes.",
    icon: Globe2,
    href: "/practice-areas/immigration-law",
    services: [
      "Permanent residence applications",
      "Work and study permits",
      "Family sponsorship",
      "Citizenship applications",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We listen to your concerns, review your situation and identify the legal issues involved.",
    icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "Case Assessment",
    description:
      "We explain your rights, available options, potential risks and recommended next steps.",
    icon: Search,
  },
  {
    number: "03",
    title: "Legal Strategy",
    description:
      "We develop a practical strategy tailored to your priorities and desired outcome.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Resolution",
    description:
      "We represent your interests through negotiation, documentation or court proceedings.",
    icon: Landmark,
  },
];

const benefits = [
  {
    title: "Personalized Advice",
    description:
      "Every legal matter receives a strategy tailored to the client’s unique circumstances.",
    icon: HeartHandshake,
  },
  {
    title: "Clear Communication",
    description:
      "We explain complex legal information clearly and keep you informed throughout your matter.",
    icon: MessageCircleMore,
  },
  {
    title: "Strategic Representation",
    description:
      "We combine careful preparation with confident advocacy to protect your interests.",
    icon: Gavel,
  },
  {
    title: "Confidential Service",
    description:
      "Your information and legal concerns are handled with professionalism, care and discretion.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "How do I know which practice area applies to my situation?",
    answer:
      "You do not need to determine this before contacting us. During your initial consultation, we will review your circumstances, identify the legal issues involved and direct your matter to the appropriate legal service.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any documents that may be relevant, including agreements, court documents, letters, identification, timelines or correspondence. It is also helpful to prepare a brief list of questions and important dates.",
  },
  {
    question: "How much will legal services cost?",
    answer:
      "Legal fees depend on the complexity of the matter, the amount of work required and the billing arrangement. We discuss expected fees and available options with you before beginning substantive work.",
  },
  {
    question: "Will my information remain confidential?",
    answer:
      "Yes. Information shared during a legal consultation is treated as confidential, subject to applicable professional and legal obligations.",
  },
  {
    question: "Can Amini Laws represent both individuals and businesses?",
    answer:
      "Yes. Our practice areas are designed to support individuals, families, entrepreneurs and established businesses across a range of legal matters.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
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
        <p className="mt-5 leading-8 text-[#606663]">{description}</p>
      )}
    </div>
  );
}

export default function PracticeAreasPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f2] text-[#17251f] pt-20">
      {/* Hero */}
      <section className="relative min-h-[590px] overflow-hidden bg-[#0d2d24]">
        <Image
          src="/practice-areas-hero.jpg"
          alt="Legal books, courthouse columns and scales of justice"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#09231c]/95 via-[#0d2d24]/80 to-[#0d2d24]/25" />

        <div className="absolute -left-40 -top-48 h-[520px] w-[520px] rounded-full border border-[#d3a45f]/10" />
        <div className="absolute -left-20 -top-28 h-[380px] w-[380px] rounded-full border border-[#d3a45f]/10" />

        <Scale
          size={330}
          strokeWidth={0.5}
          className="absolute -bottom-20 right-5 hidden text-[#d3a45f]/10 lg:block"
        />

        <div className="relative mx-auto flex min-h-[590px] max-w-[1380px] items-center px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d1a35f]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfb675]">
                Our Practice Areas
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-6xl">
              Legal Solutions for
              <br />
              Life, Family and
              <br />
              <span className="italic text-[#d6a65e]">Business</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Amini Laws provides clear, strategic and personalized legal
              guidance across a range of personal and business matters.
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
                href="#services"
                className="inline-flex items-center gap-3 border border-white/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#d6a65e] hover:text-[#d6a65e]"
              >
                View Our Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-[#ded4c5] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="How We Can Help"
            title="Legal Guidance Designed Around You"
          />

          <div className="border-l border-[#cdb995] pl-0 lg:pl-12">
            <p className="text-lg leading-8 text-[#4f5753]">
              Legal challenges can affect your family, finances, property or
              business. Our role is to make the process easier to understand
              while helping you make confident and informed decisions.
            </p>

            <p className="mt-5 leading-8 text-[#676d6a]">
              We take the time to understand your circumstances before
              recommending a course of action. Whether you need preventive
              advice, legal documents, negotiation support or courtroom
              representation, our team is prepared to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section id="services" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <SectionHeading
            eyebrow="Legal Services"
            title="Explore Our Areas of Practice"
            description="Our services support individuals, families, property owners, entrepreneurs and organizations through important legal decisions."
            centered
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {practiceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group relative overflow-hidden border border-[#ddd2c2] bg-[#fffdf9] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#bd8a43] hover:shadow-[0_20px_50px_rgba(28,52,43,0.08)] sm:p-9"
                >
                  <p className="absolute right-7 top-5 font-serif text-6xl text-[#b98235]/10 sm:text-7xl">
                    {area.number}
                  </p>

                  <div className="relative grid gap-7 sm:grid-cols-[70px_1fr]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#153a2f] text-[#d1a35f] transition group-hover:bg-[#b98235] group-hover:text-white">
                      <Icon size={29} strokeWidth={1.4} />
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl text-[#153a2f]">
                        {area.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-[#636966]">
                        {area.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {area.services.map((service) => (
                          <div
                            key={service}
                            className="flex items-start gap-3"
                          >
                            <Check
                              size={16}
                              strokeWidth={2.5}
                              className="mt-1 shrink-0 text-[#b98235]"
                            />
                            <p className="text-sm leading-6 text-[#4f5753]">
                              {service}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={area.href}
                        className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#a87431]"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[530px]">
            <Image
              src="/legal-client-meeting.jpg"
              alt="Lawyer discussing legal options with clients"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#102f26]/15" />

            <div className="absolute bottom-0 right-0 max-w-[300px] bg-[#c18a3d] p-8 text-white">
              <Scale size={39} strokeWidth={1.3} />

              <p className="mt-5 font-serif text-3xl leading-tight">
                Clear advice at every step.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-[#153a2f] px-6 py-20 text-white sm:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d2a660]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a660]">
                  Client-Focused Service
                </p>
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Your Legal Matter Deserves Individual Attention
              </h2>

              <p className="mt-7 leading-8 text-white/70">
                No two legal matters are exactly the same. We consider your
                circumstances, priorities, timeline and concerns before
                developing a legal strategy.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "A confidential discussion about your situation",
                  "A clear explanation of your legal rights",
                  "Practical options and recommended next steps",
                  "Transparent communication throughout your matter",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d1a35f] text-[#153a2f]">
                      <Check size={12} strokeWidth={3} />
                    </div>

                    <p className="leading-7 text-white/75">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition hover:border-[#d1a35f] hover:text-[#d1a35f]"
              >
                Discuss Your Legal Matter
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Why Amini Laws"
            title="Professional Guidance You Can Rely On"
            description="Our approach combines legal knowledge with attentive, responsive and personalized client service."
            centered
          />

          <div className="mt-14 grid gap-px overflow-hidden border border-[#ded4c5] bg-[#ded4c5] md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group bg-[#fffdf9] px-8 py-10 text-center transition hover:bg-white"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#153a2f] text-[#d1a35f] transition group-hover:bg-[#b98235] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#153a2f]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#626865]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f2ebdf] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Our Process"
            title="What Happens When You Contact Us"
            description="We guide you through a clear and organized process from your initial consultation to the resolution of your legal matter."
            centered
          />

          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden border-t border-dashed border-[#b99a6d] lg:block" />

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-[#f2ebdf] bg-[#153a2f] text-[#d1a35f] shadow-md">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a87431]">
                    Step {step.number}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#153a2f]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#626865]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Not Sure Where to Begin?"
              title="Start With a Confidential Consultation"
              description="You do not need to know which legal service you require before contacting us. Tell us what happened, and we will help you understand the nature of your matter."
            />

            <div className="mt-8 space-y-5">
              {[
                "Discuss the facts and important dates",
                "Identify the legal issues involved",
                "Understand your rights and obligations",
                "Review possible strategies and outcomes",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#ded4c5] pb-5"
                >
                  <ChevronRight
                    size={20}
                    className="shrink-0 text-[#b98235]"
                  />
                  <p className="text-[#4f5753]">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-[#153a2f] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#b98235]"
            >
              Schedule a Consultation
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative min-h-[560px]">
            <div className="absolute -left-5 -top-5 h-full w-full border border-[#c99a56] sm:-left-8 sm:-top-8" />

            <Image
              src="/law-office-consultation.jpg"
              alt="Professional law office consultation room"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 max-w-[290px] bg-[#fbf8f2] p-7 shadow-xl">
              <Building2
                size={38}
                strokeWidth={1.3}
                className="text-[#b98235]"
              />

              <p className="mt-5 font-serif text-2xl leading-tight text-[#153a2f]">
                Practical legal solutions for important decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Questions About Our Legal Services"
            />

            <p className="mt-6 leading-8 text-[#626865]">
              These answers provide general information. Your legal situation
              may require advice based on its specific facts and circumstances.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#a87431]"
            >
              Ask Us a Question
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="divide-y divide-[#ded4c5] border-y border-[#ded4c5]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                  <div className="flex items-center gap-5">
                    <span className="font-serif text-xl text-[#b98235]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-serif text-xl text-[#153a2f] sm:text-2xl">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ccb995] text-[#a87431] transition group-open:rotate-90 group-open:bg-[#153a2f] group-open:text-white">
                    <ChevronRight size={17} />
                  </span>
                </summary>

                <p className="max-w-3xl pb-7 pl-12 leading-8 text-[#626865]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#12372c] px-6 py-20 text-white lg:px-12">
        <Scale
          size={300}
          strokeWidth={0.5}
          className="absolute -bottom-24 left-10 text-[#d2a660]/10"
        />

        <div className="absolute -right-32 -top-40 h-[430px] w-[430px] rounded-full border border-[#d2a660]/10" />

        <div className="relative mx-auto flex max-w-[1160px] flex-col items-center justify-between gap-9 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a660]">
              Legal Guidance Starts Here
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Let’s Discuss Your Legal Matter
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Schedule a confidential consultation with Amini Laws and receive
              clear guidance about your options and next steps.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#c18a3d] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#153a2f]"
          >
            Book a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}