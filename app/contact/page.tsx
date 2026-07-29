"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Scale,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FormEvent, useState } from "react";

const contactDetails = [
  {
    title: "Visit Our Office",
    value: (
      <>
        1234 Bay Street, Suite 500
        <br />
        Toronto, ON M5R 2A1
      </>
    ),
    icon: MapPin,
    href: "#office-location",
  },
  {
    title: "Call Our Team",
    value: "(416) 123-4567",
    icon: Phone,
    href: "tel:+14161234567",
  },
  {
    title: "Email Us",
    value: "info@aminilaws.com",
    icon: Mail,
    href: "mailto:info@aminilaws.com",
  },
  {
    title: "Office Hours",
    value: (
      <>
        Mondayâ€“Friday
        <br />
        9:00 AMâ€“5:00 PM
      </>
    ),
    icon: Clock3,
  },
];

const consultationBenefits = [
  "A confidential discussion about your legal concern",
  "Clear information about your possible options",
  "An opportunity to ask questions",
  "An explanation of possible next steps",
];

const faqs = [
  {
    question: "How do I book a consultation?",
    answer:
      "Complete the consultation form, call our office or send us an email. A member of our team will contact you to confirm availability and obtain any necessary information.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Provide a brief description of your legal concern, the people or organizations involved and any important deadlines. Avoid including highly sensitive information until you have spoken directly with our office.",
  },
  {
    question: "How soon will your team respond?",
    answer:
      "We aim to respond to consultation inquiries within one business day. Urgent matters should be identified clearly in your message.",
  },
  {
    question: "Does contacting the firm create a lawyer-client relationship?",
    answer:
      "No. Sending a message or attending an initial consultation does not automatically create a lawyer-client relationship. A relationship begins only after both parties agree to proceed and a formal agreement is completed.",
  },
];

const practiceAreas = [
  "Family Law",
  "Real Estate Law",
  "Business Law",
  "Wills & Estates",
  "Litigation",
  "Immigration Law",
  "Other Legal Matter",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-[#fbf8f2] text-[#17251f] pt-20">
      {/* Hero */}
      <section className="relative min-h-[540px] overflow-hidden bg-[#102f26]">
        <Image
          src="/legal-consultation.jpg"
          alt="Professional legal consultation office"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#09251e]/95 via-[#0d3026]/82 to-[#0d2e25]/25" />

        <div className="absolute -right-24 -top-24 h-[430px] w-[430px] rounded-full border border-[#d2a660]/20" />
        <div className="absolute right-20 top-20 h-[240px] w-[240px] rounded-full border border-[#d2a660]/10" />

        <div className="relative mx-auto flex min-h-[540px] max-w-[1380px] items-center px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d2a660]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dfb673]">
                Contact Amini Laws
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-6xl">
              Let&apos;s Discuss Your
              <br />
              <span className="italic text-[#d6a65e]">Legal Needs</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Contact our team to schedule a confidential consultation and
              receive clear guidance about your options and next steps.
            </p>

            <Link
              href="#consultation-form"
              className="mt-9 inline-flex items-center gap-3 bg-[#c18a3d] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#153a2f]"
            >
              Request a Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="relative z-10 -mt-12 px-6 lg:px-12">
        <div className="mx-auto grid max-w-[1260px] gap-px overflow-hidden border border-[#ded4c5] bg-[#ded4c5] shadow-[0_20px_50px_rgba(23,50,41,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;

            const content = (
              <div className="group flex min-h-[210px] flex-col items-center justify-center bg-white px-6 py-8 text-center transition hover:bg-[#153a2f]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4ecdf] text-[#b98235] transition group-hover:bg-white/10 group-hover:text-[#d8ad6d]">
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <h2 className="mt-5 font-serif text-xl text-[#153a2f] transition group-hover:text-white">
                  {detail.title}
                </h2>

                <div className="mt-3 text-sm leading-6 text-[#666d69] transition group-hover:text-white/65">
                  {detail.value}
                </div>
              </div>
            );

            return detail.href ? (
              <Link key={detail.title} href={detail.href}>
                {content}
              </Link>
            ) : (
              <div key={detail.title}>{content}</div>
            );
          })}
        </div>
      </section>

      {/* Form and consultation details */}
      <section
        id="consultation-form"
        className="px-6 py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#b98235]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
                Consultation Request
              </p>
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f] sm:text-5xl">
              Tell Us How We Can Help
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-[#616865]">
              Complete the form below and a member of our team will contact you
              to discuss your inquiry and consultation availability.
            </p>

            {submitted ? (
              <div className="mt-10 border border-[#cdbb9f] bg-white p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#153a2f] text-[#d2a660]">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="mt-6 font-serif text-3xl text-[#153a2f]">
                  Your Request Has Been Received
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-[#626865]">
                  Thank you for contacting Amini Laws. A member of our team will
                  review your inquiry and respond as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 inline-flex items-center gap-3 bg-[#153a2f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#b98235]"
                >
                  Submit Another Request
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 grid gap-6 border border-[#ded4c5] bg-white p-6 shadow-[0_15px_45px_rgba(29,48,41,0.05)] sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[#273b34]">
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                      className="mt-2 w-full border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm outline-none transition placeholder:text-[#a1a5a2] focus:border-[#b98235]"
                    />
                  </label>

                  <label className="text-sm font-medium text-[#273b34]">
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                      className="mt-2 w-full border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm outline-none transition placeholder:text-[#a1a5a2] focus:border-[#b98235]"
                    />
                  </label>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[#273b34]">
                    Email Address
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="mt-2 w-full border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm outline-none transition placeholder:text-[#a1a5a2] focus:border-[#b98235]"
                    />
                  </label>

                  <label className="text-sm font-medium text-[#273b34]">
                    Phone Number
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(416) 123-4567"
                      className="mt-2 w-full border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm outline-none transition placeholder:text-[#a1a5a2] focus:border-[#b98235]"
                    />
                  </label>
                </div>

                <label className="text-sm font-medium text-[#273b34]">
                  Practice Area
                  <select
                    name="practiceArea"
                    required
                    defaultValue=""
                    className="mt-2 w-full border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm outline-none transition focus:border-[#b98235]"
                  >
                    <option value="" disabled>
                      Select a practice area
                    </option>

                    {practiceAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[#273b34]">
                    Preferred Contact Method
                    <select
                      name="contactMethod"
                      className="mt-2 w-full border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm outline-none transition focus:border-[#b98235]"
                    >
                      <option>Email</option>
                      <option>Phone</option>
                      <option>Either email or phone</option>
                    </select>
                  </label>

                  <label className="text-sm font-medium text-[#273b34]">
                    Preferred Consultation
                    <select
                      name="consultationType"
                      className="mt-2 w-full border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm outline-none transition focus:border-[#b98235]"
                    >
                      <option>In person</option>
                      <option>Phone consultation</option>
                      <option>Video consultation</option>
                    </select>
                  </label>
                </div>

                <label className="text-sm font-medium text-[#273b34]">
                  Briefly Describe Your Legal Matter
                  <textarea
                    name="message"
                    required
                    rows={7}
                    placeholder="Provide a short summary of your concern and include any important deadlines."
                    className="mt-2 w-full resize-none border border-[#d7cdbc] bg-[#fffdf9] px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-[#a1a5a2] focus:border-[#b98235]"
                  />
                </label>

                <label className="flex items-start gap-3 text-xs leading-6 text-[#6a716d]">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-[#153a2f]"
                  />

                  <span>
                    I understand that submitting this form does not create a
                    lawyer-client relationship and that I should not include
                    confidential or highly sensitive information.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-[#153a2f] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#b98235]"
                >
                  Submit Consultation Request
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="sticky top-28">
              <div className="relative min-h-[420px] overflow-hidden">
                <Image
                  src="/consultation-meeting.jpg"
                  alt="Lawyer speaking with a client"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f26]/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 max-w-md p-8 text-white">
                  <Scale
                    size={38}
                    strokeWidth={1.3}
                    className="text-[#d2a660]"
                  />

                  <h3 className="mt-5 font-serif text-3xl leading-tight">
                    Clear Advice Begins With a Conversation
                  </h3>
                </div>
              </div>

              <div className="bg-[#153a2f] p-8 text-white sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d2a660]">
                  What to Expect
                </p>

                <h3 className="mt-4 font-serif text-3xl">
                  Your Initial Consultation
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  Your consultation gives you an opportunity to explain your
                  situation and receive preliminary guidance about your legal
                  options.
                </p>

                <div className="mt-7 space-y-4">
                  {consultationBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#d2a660]"
                      />

                      <p className="text-sm leading-6 text-white/75">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/15 pt-7">
                  <div className="flex items-start gap-4">
                    <ShieldCheck
                      size={24}
                      className="shrink-0 text-[#d2a660]"
                    />

                    <p className="text-xs leading-6 text-white/55">
                      Information shared during a consultation is handled with
                      care. A lawyer can explain how confidentiality applies to
                      your specific circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office location */}
      <section
        id="office-location"
        className="border-y border-[#e0d7c9] bg-white"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[500px] bg-[#e6ded2]">
            <Image
              src="/amini-law-office.jpg"
              alt="Amini Laws office"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-white/60 bg-[#b98235] text-white shadow-2xl">
                <MapPin size={31} />
              </div>
            </div>
          </div>

          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#b98235]" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
                  Office Location
                </p>
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f] sm:text-5xl">
                Visit Amini Laws in Toronto
              </h2>

              <p className="mt-6 leading-8 text-[#616865]">
                Our office is conveniently located in downtown Toronto and is
                accessible by public transit. In-person appointments should be
                scheduled in advance.
              </p>

              <div className="mt-8 space-y-6 border-y border-[#ded4c5] py-7">
                <div className="flex gap-4">
                  <MapPin
                    size={21}
                    className="mt-1 shrink-0 text-[#b98235]"
                  />

                  <div>
                    <p className="font-semibold text-[#153a2f]">
                      Office Address
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#656c68]">
                      1234 Bay Street, Suite 500
                      <br />
                      Toronto, Ontario M5R 2A1
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3
                    size={21}
                    className="mt-1 shrink-0 text-[#b98235]"
                  />

                  <div>
                    <p className="font-semibold text-[#153a2f]">
                      Business Hours
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#656c68]">
                      Monday to Friday: 9:00 AMâ€“5:00 PM
                      <br />
                      Saturday and Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-[#153a2f] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#b98235]"
              >
                Get Directions
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#b98235]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87431]">
                Contact FAQs
              </p>
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153a2f] sm:text-5xl">
              Before You Contact Us
            </h2>

            <p className="mt-5 leading-8 text-[#616865]">
              Review answers to common questions about consultation requests
              and contacting our office.
            </p>

            <div className="mt-8 border-l-2 border-[#b98235] bg-[#f3ecdf] p-7">
              <MessageSquareText
                size={34}
                strokeWidth={1.4}
                className="text-[#b98235]"
              />

              <p className="mt-5 font-serif text-2xl leading-snug text-[#153a2f]">
                Have an urgent deadline?
              </p>

              <p className="mt-3 text-sm leading-6 text-[#686f6b]">
                Clearly identify any court dates, filing deadlines or urgent
                concerns in your message.
              </p>

              <Link
                href="tel:+14161234567"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#9b692d]"
              >
                Call Our Office
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#102f26] px-6 py-20 text-white lg:px-12">
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#d2a660]/15" />
        <div className="absolute -right-16 -top-40 h-96 w-96 rounded-full border border-[#d2a660]/15" />

        <div className="relative mx-auto flex max-w-[1150px] flex-col items-center text-center">
          <CalendarDays
            size={48}
            strokeWidth={1.2}
            className="text-[#d2a660]"
          />

          <h2 className="mt-7 font-serif text-4xl sm:text-5xl">
            Take the First Step Today
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Speak with Amini Laws about your legal concern and receive guidance
            tailored to your circumstances.
          </p>

          <Link
            href="#consultation-form"
            className="mt-8 inline-flex items-center gap-3 bg-[#c18a3d] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#153a2f]"
          >
            Request a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

