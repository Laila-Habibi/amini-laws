import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  Gavel,
  Globe2,
  Home,
  Mail,
  Newspaper,
  Scale,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const featuredArticles = [
  {
    title: "What to Expect During Your First Legal Consultation",
    description:
      "Learn how to prepare for your first meeting with a lawyer and what information you should bring.",
    category: "Legal Guidance",
    date: "July 14, 2026",
    image: "/consultation-meeting.jpg",
    href: "/resources/first-legal-consultation",
  },
  {
    title: "Understanding Your Rights During a Legal Dispute",
    description:
      "A practical overview of the steps you can take when facing a civil or business-related dispute.",
    category: "Litigation",
    date: "July 3, 2026",
    image: "/legal-client-meeting.jpg",
    href: "/resources/legal-dispute-rights",
  },
  {
    title: "Important Legal Considerations When Starting a Business",
    description:
      "Explore the legal documents, agreements and protections new business owners should consider.",
    category: "Business Law",
    date: "June 22, 2026",
    image: "/law-office-consultation.jpg",
    href: "/resources/business-legal-considerations",
  },
];

const resources = [
  {
    title: "Family Law Guide",
    description:
      "An overview of separation, parenting arrangements and family-related legal concerns.",
    icon: UsersRound,
    type: "PDF Guide",
  },
  {
    title: "Real Estate Closing Checklist",
    description:
      "A practical checklist to help buyers prepare for a residential property closing.",
    icon: Home,
    type: "Checklist",
  },
  {
    title: "Business Contract Essentials",
    description:
      "Key provisions and legal considerations to review before signing a business agreement.",
    icon: BriefcaseBusiness,
    type: "PDF Guide",
  },
  {
    title: "Wills and Estate Planning",
    description:
      "Understand the documents commonly used to protect your family and future wishes.",
    icon: FileText,
    type: "Legal Guide",
  },
  {
    title: "Litigation Process Overview",
    description:
      "A simple explanation of the major stages involved in a civil litigation matter.",
    icon: Gavel,
    type: "Process Guide",
  },
  {
    title: "Immigration Document Checklist",
    description:
      "A general checklist of documents often requested during immigration applications.",
    icon: Globe2,
    type: "Checklist",
  },
];

const categories = [
  {
    title: "Family Law",
    description:
      "Articles and guides about separation, parenting and family legal matters.",
    icon: UsersRound,
  },
  {
    title: "Real Estate Law",
    description:
      "Information for buyers, sellers, landlords and property owners.",
    icon: Home,
  },
  {
    title: "Business Law",
    description:
      "Resources covering contracts, business formation and commercial matters.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Wills & Estates",
    description:
      "Guidance about wills, powers of attorney and estate planning.",
    icon: FileText,
  },
  {
    title: "Litigation",
    description:
      "Helpful information about disputes, claims and court procedures.",
    icon: Gavel,
  },
  {
    title: "Immigration Law",
    description:
      "General resources for immigration applications and legal processes.",
    icon: Globe2,
  },
];

const faqs = [
  {
    question: "When should I speak with a lawyer?",
    answer:
      "You should consider speaking with a lawyer when a legal issue may affect your rights, finances, family, property or business. Early advice can help you understand your options and avoid preventable problems.",
  },
  {
    question: "What should I bring to a consultation?",
    answer:
      "Bring relevant contracts, letters, court documents, identification, timelines and any notes that explain the situation. Organizing your documents before the meeting can make the consultation more productive.",
  },
  {
    question: "Is my consultation confidential?",
    answer:
      "Legal consultations are generally treated as confidential. Your lawyer can explain how confidentiality and solicitor-client privilege apply to your situation.",
  },
  {
    question: "How much will my legal matter cost?",
    answer:
      "Legal fees vary depending on the complexity, urgency and amount of work required. A lawyer should explain the expected billing structure and any anticipated costs before work begins.",
  },
  {
    question: "Can I handle a legal matter without a lawyer?",
    answer:
      "Some simple matters can be handled independently, but legal advice may still help you understand risks, deadlines and possible consequences before making an important decision.",
  },
];

const latestArticles = [
  {
    title: "Five Questions to Ask Before Signing a Contract",
    category: "Business Law",
    date: "June 18, 2026",
  },
  {
    title: "Why Every Adult Should Consider Having a Will",
    category: "Wills & Estates",
    date: "June 8, 2026",
  },
  {
    title: "Common Issues Found in Residential Purchase Agreements",
    category: "Real Estate Law",
    date: "May 27, 2026",
  },
  {
    title: "How Legal Negotiation Can Help Resolve a Dispute",
    category: "Litigation",
    date: "May 15, 2026",
  },
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

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f2] text-[#17251f] pt-20">
      {/* Hero */}
      <section className="relative min-h-[570px] overflow-hidden bg-[#102f26]">
        <Image
          src="/law-library-office.jpg"
          alt="Legal books and scales"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#09251e]/95 via-[#0d3026]/82 to-[#0d2e25]/25" />

        <div className="absolute -right-20 -top-24 h-[430px] w-[430px] rounded-full border border-[#d2a660]/20" />
        <div className="absolute right-28 top-20 h-[230px] w-[230px] rounded-full border border-[#d2a660]/10" />

        <div className="relative mx-auto flex min-h-[570px] max-w-[1380px] items-center px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d2a660]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfb673]">
                Legal Resources
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-6xl">
              Information That Helps
              <br />
              You Make <span className="italic text-[#d6a65e]">Decisions</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore practical legal articles, downloadable guides and answers
              to common questions from Amini Laws.
            </p>

            <div className="mt-9 flex max-w-xl items-center bg-white p-2 shadow-xl">
              <Search className="ml-4 shrink-0 text-[#8d6a3a]" size={20} />

              <input
                type="search"
                placeholder="Search legal resources"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#173229] outline-none placeholder:text-[#8b918e]"
              />

              <button
                type="button"
                className="bg-[#c18a3d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#153a2f]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-[#e2d9cc] bg-white px-6 py-14 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-px overflow-hidden border border-[#ded4c5] bg-[#ded4c5] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href="#articles"
                className="group flex min-h-[210px] flex-col items-center bg-[#fffdf9] px-5 py-7 text-center transition hover:bg-[#153a2f]"
              >
                <Icon
                  size={36}
                  strokeWidth={1.4}
                  className="text-[#b98235] transition group-hover:text-[#d9b06f]"
                />

                <h2 className="mt-5 font-serif text-xl text-[#153a2f] transition group-hover:text-white">
                  {category.title}
                </h2>

                <p className="mt-3 text-xs leading-6 text-[#676d6a] transition group-hover:text-white/65">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured articles */}
      <section id="articles" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Featured Articles"
              title="Helpful Legal Insights"
              description="Clear explanations and practical information to help you better understand common legal issues."
              align="left"
            />

            <Link
              href="/resources/articles"
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#9b692d]"
            >
              View All Articles
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden border border-[#ded4c5] bg-white"
              >
                <Link
                  href={article.href}
                  className="relative block h-[280px] overflow-hidden bg-[#dfd7ca]"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f26]/40 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 bg-[#c18a3d] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                    {article.category}
                  </span>
                </Link>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-[#858b88]">
                    <CalendarDays size={14} className="text-[#b98235]" />
                    {article.date}
                  </div>

                  <h3 className="mt-4 font-serif text-2xl leading-snug text-[#153a2f]">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#626865]">
                    {article.description}
                  </p>

                  <Link
                    href={article.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#9b692d]"
                  >
                    Read Article
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable resources */}
      <section className="bg-[#153a2f] px-6 py-24 text-white lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#d2a660]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a660]">
                Downloadable Guides
              </p>

              <span className="h-px w-10 bg-[#d2a660]" />
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Practical Resources for Common Legal Matters
            </h2>

            <p className="mt-5 leading-8 text-white/65">
              Download our general legal guides and checklists to help organize
              your questions and prepare for your consultation.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="group bg-[#12342a] p-8 transition hover:bg-[#1a4538]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#d2a660]/45 text-[#d2a660]">
                      <Icon size={26} strokeWidth={1.4} />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d2a660]">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="mt-7 font-serif text-2xl">
                    {resource.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-white/65">
                    {resource.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#d2a660]"
                  >
                    Download Guide
                    <Download
                      size={15}
                      className="transition group-hover:translate-y-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-white/45">
            These resources provide general legal information and do not
            replace advice from a qualified lawyer.
          </p>
        </div>
      </section>

      {/* Latest articles */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Latest Updates"
              title="More From Our Legal Library"
              description="Read recent articles from our team on frequently encountered legal questions."
              align="left"
            />

            <div className="mt-10 divide-y divide-[#ddd3c5] border-y border-[#ddd3c5]">
              {latestArticles.map((article) => (
                <article
                  key={article.title}
                  className="group flex flex-col justify-between gap-5 py-7 sm:flex-row sm:items-center"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.12em]">
                      <span className="text-[#a87431]">
                        {article.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#b7aea0]" />
                      <span className="text-[#8a8f8c]">{article.date}</span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl text-[#153a2f]">
                      {article.title}
                    </h3>
                  </div>

                  <Link
                    href="/resources/articles"
                    aria-label={`Read ${article.title}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c9b99f] text-[#9b692d] transition group-hover:border-[#153a2f] group-hover:bg-[#153a2f] group-hover:text-white"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[570px] overflow-hidden">
            <Image
              src="/law-library-office.jpg"
              alt="Legal library"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102f26]/75 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 max-w-md p-8 text-white sm:p-10">
              <BookOpen
                size={39}
                strokeWidth={1.3}
                className="text-[#d2a660]"
              />

              <h2 className="mt-5 font-serif text-3xl leading-tight">
                Knowledge Helps You Take the Next Step
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Our resources are designed to help you prepare questions,
                understand legal processes and recognize when professional
                advice may be helpful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-[#e0d7c9] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading
              eyebrow="Common Questions"
              title="Legal Resource FAQs"
              description="General answers to some common questions about obtaining legal advice."
              align="left"
            />

            <div className="mt-8 border-l-2 border-[#b98235] bg-[#f7f1e7] p-7">
              <ShieldCheck
                size={34}
                strokeWidth={1.4}
                className="text-[#b98235]"
              />

              <p className="mt-5 font-serif text-2xl leading-snug text-[#153a2f]">
                Need advice for your specific situation?
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#9b692d]"
              >
                Contact Our Team
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="divide-y divide-[#ded4c5] border-y border-[#ded4c5]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                  <div className="flex items-center gap-5">
                    <span className="font-serif text-xl text-[#b98235]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-serif text-xl text-[#153a2f] sm:text-2xl">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-[#a87431] transition group-open:rotate-180"
                  />
                </summary>

                <p className="max-w-3xl pb-2 pl-12 pr-8 pt-5 text-sm leading-7 text-[#626865]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1180px] overflow-hidden bg-[#efe6d8] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[360px]">
            <Image
              src="/Why the Right Attorney is Irreplaceable in a___.jpg"
              alt="Legal notes and books"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#153a2f]/25" />
          </div>

          <div className="flex items-center px-7 py-14 sm:px-12 lg:px-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#b98235]" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
                  Legal Updates
                </p>
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f]">
                Receive New Legal Resources
              </h2>

              <p className="mt-5 leading-7 text-[#626865]">
                Subscribe to receive occasional legal articles, firm updates
                and practical information from Amini Laws.
              </p>

              <form className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex min-w-0 flex-1 items-center border border-[#cfc0a9] bg-white px-4">
                  <Mail size={18} className="shrink-0 text-[#b98235]" />

                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="min-w-0 flex-1 bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#153a2f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#b98235]"
                >
                  Subscribe
                  <ArrowRight size={15} />
                </button>
              </form>

              <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#777d7a]">
                <CheckCircle2
                  size={14}
                  className="mt-0.5 shrink-0 text-[#b98235]"
                />
                You may unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#ded4c5] bg-white px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-[1180px] items-start gap-5">
          <Newspaper
            size={28}
            strokeWidth={1.4}
            className="mt-1 shrink-0 text-[#b98235]"
          />

          <div>
            <h2 className="font-serif text-xl text-[#153a2f]">
              General Information Disclaimer
            </h2>

            <p className="mt-2 text-xs leading-6 text-[#707673]">
              The information provided on this page is for general educational
              purposes only. It is not legal advice and does not create a
              lawyer-client relationship. Laws and procedures may change, and
              your circumstances may require specific professional guidance.
            </p>
          </div>
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
            Need Advice Beyond Our Resources?
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Speak with a member of the Amini Laws team about your specific
            concerns, legal options and next steps.
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
