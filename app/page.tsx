import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import CountdownTimer from "@/components/countdown-timer";
import SpeakerCard from "@/components/speaker-card";
import Accordion from "@/components/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Full Screen */}
      <section
        id="home"
        className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black text-center text-white"
      >
        {/* Background Image - Desktop (hidden on mobile) */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="TEDx Heritage Institute of Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Background Image - Mobile (hidden on desktop) */}
        <div className="absolute inset-0 z-0 block md:hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="TEDx Heritage Institute of Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-[#E62B1E]">TEDx</span>
              <span className="font-normal">HITKolkata</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl md:text-2xl">
              Ideas Worth Spreading: Innovating Tomorrow, Today
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="h-12 bg-[#E62B1E] px-8 text-base hover:bg-[#E62B1E]/90">
                Register Now
              </Button>
              <Button
                variant="outline"
                className="h-12 border-white bg-transparent px-8 text-base text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Event Date & Countdown */}
      <section id="schedule" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center space-y-4 md:items-start">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Mark Your Calendar
                </h2>
                <div className="flex items-center space-x-2 text-lg text-gray-300">
                  <CalendarDays className="h-5 w-5 text-[#E62B1E]" />
                  <span>April 23, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-gray-300">
                  <Clock className="h-5 w-5 text-[#E62B1E]" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-gray-300">
                  <MapPin className="h-5 w-5 text-[#E62B1E]" />
                  <span>Heritage Institute of Technology, Kolkata</span>
                </div>
                <div className="mt-4 flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Add to Google Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Add to iCal
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CountdownTimer targetDate="2025-04-23T09:00:00" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="bg-black py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Speakers
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Meet the innovative minds who will share their ideas worth
                spreading
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <SpeakerCard
                name="Dr. Aisha Patel"
                role="AI Researcher & Entrepreneur"
                bio="Leading expert in ethical AI development with over 15 years of experience in the field."
                image="/placeholder.svg?height=400&width=400"
                talkTitle="The Ethical Frontiers of Artificial Intelligence"
                twitter="aishapatel"
                linkedin="aishapatel"
              />
              <SpeakerCard
                name="Rajiv Mehta"
                role="Climate Scientist"
                bio="Pioneering researcher focused on sustainable solutions for urban environments in South Asia."
                image="/placeholder.svg?height=400&width=400"
                talkTitle="Reimagining Cities: The Path to Carbon Neutrality"
                twitter="rajivmehta"
                linkedin="rajivmehta"
              />
              <SpeakerCard
                name="Priya Sharma"
                role="Social Entrepreneur"
                bio="Founder of three successful social enterprises empowering rural communities across India."
                image="/placeholder.svg?height=400&width=400"
                talkTitle="The Business of Social Change"
                twitter="priyasharma"
                linkedin="priyasharma"
              />
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-transparent text-[#E62B1E] hover:bg-gray-900 border border-[#E62B1E]">
                View All Speakers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Only 3 Featured Members */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                The dedicated individuals bringing TEDx to Heritage Institute of
                Technology
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-800 p-6 text-center transition-all duration-300 hover:bg-gray-700">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-[#E62B1E]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Arjun Malhotra"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Arjun Malhotra</h3>
                <p className="text-[#E62B1E]">Lead Organizer</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a
                    href="https://linkedin.com/in/arjunmalhotra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:arjun@tedxhitkolkata.org"
                    className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="rounded-lg bg-gray-800 p-6 text-center transition-all duration-300 hover:bg-gray-700">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-[#E62B1E]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sneha Gupta"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Sneha Gupta</h3>
                <p className="text-[#E62B1E]">Curation Lead</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a
                    href="https://linkedin.com/in/snehagupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:sneha@tedxhitkolkata.org"
                    className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="rounded-lg bg-gray-800 p-6 text-center transition-all duration-300 hover:bg-gray-700">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-[#E62B1E]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Vikram Singh"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Vikram Singh</h3>
                <p className="text-[#E62B1E]">Technical Director</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a
                    href="https://linkedin.com/in/vikramsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:vikram@tedxhitkolkata.org"
                    className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/team">
                <Button className="bg-transparent text-[#E62B1E] hover:bg-gray-800 border border-[#E62B1E]">
                  View All Team Members <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  About TEDx
                </h2>
                <div className="mt-6 space-y-4 text-gray-400">
                  <p>
                    TEDx is a program of local, self-organized events that bring
                    people together to share a TED-like experience. At a TEDx
                    event, TED Talks video and live speakers combine to spark
                    deep discussion and connection.
                  </p>
                  <p>
                    These local, self-organized events are branded TEDx, where x
                    = independently organized TED event. The TED Conference
                    provides general guidance for the TEDx program, but
                    individual TEDx events are self-organized.
                  </p>
                  <p className="font-medium text-white">
                    In the spirit of ideas worth spreading, TEDx is a program of
                    local, self-organized events that bring people together to
                    share a TED-like experience.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  About Heritage Institute
                </h2>
                <div className="mt-6 space-y-4 text-gray-400">
                  <p>
                    Heritage Institute of Technology, Kolkata (HITK) is one of
                    the premier engineering colleges in Eastern India,
                    established in 2001 by the Kalyan Bharti Trust.
                  </p>
                  <p>
                    The institute is known for its academic excellence,
                    state-of-the-art infrastructure, and vibrant campus life.
                    HITK has consistently ranked among the top engineering
                    colleges in India.
                  </p>
                  <p>
                    With a strong focus on innovation and research, HITK
                    provides the perfect platform for hosting TEDx, bringing
                    together diverse perspectives and ideas worth spreading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Everything you need to know about the event
              </p>
            </div>
            <div className="space-y-4">
              <Accordion
                items={[
                  {
                    question: "What is TEDx?",
                    answer:
                      "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group.",
                  },
                  {
                    question: "How can I register for the event?",
                    answer:
                      "Registration is available through our website. Click on the 'Register Now' button at the top of the page and follow the instructions. Early bird tickets are available until March 1, 2025.",
                  },
                  {
                    question: "Is there a fee to attend?",
                    answer:
                      "Yes, there is a nominal fee to cover event costs. Student tickets are available at a discounted rate with valid ID. Some scholarships are also available - please contact us for details.",
                  },
                  {
                    question: "Where exactly will the event be held?",
                    answer:
                      "The event will be held at the Main Auditorium, Heritage Institute of Technology, Chowbaga Road, Anandapur, Kolkata, West Bengal 700107.",
                  },
                  {
                    question: "Will food be provided?",
                    answer:
                      "Yes, lunch and refreshments will be provided for all attendees. Please indicate any dietary restrictions during registration.",
                  },
                  {
                    question: "How can I become a sponsor?",
                    answer:
                      "We offer various sponsorship packages for organizations interested in supporting TEDxHITKolkata. Please contact our sponsorship team at sponsors@tedxhitkolkata.org for more information.",
                  },
                  {
                    question: "Will the talks be recorded?",
                    answer:
                      "Yes, all talks will be professionally recorded and made available on the TEDx YouTube channel approximately 4-6 weeks after the event.",
                  },
                ]}
              />
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Still have questions? Contact us at{" "}
                <a
                  href="mailto:info@tedxhitkolkata.org"
                  className="text-[#E62B1E] hover:underline"
                >
                  info@tedxhitkolkata.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#E62B1E] py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg">
              Subscribe to our newsletter for the latest updates about speakers,
              schedule, and more.
            </p>
            <form className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white bg-white/10 px-5 py-3 placeholder-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E62B1E]"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-[#E62B1E] hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E62B1E]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
