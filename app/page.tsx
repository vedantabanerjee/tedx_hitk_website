import Image from "next/image"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import SpeakerCard from "@/components/speaker-card"
import OrganizerCard from "@/components/organizer-card"
import Accordion from "@/components/accordion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-20 text-center text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/CollegeBuilding.png"
            alt="TEDx Heritage Institute of Technology"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ">
              <span className="text-[#E62B1E]">TEDx</span>
              <span className="font-normal">
                HITKolkata
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl">
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
      </section>

      {/* Event Date & Countdown */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center space-y-4 md:items-start">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Mark Your Calendar
                </h2>
                <div className="flex items-center space-x-2 text-lg text-gray-700">
                  <CalendarDays className="h-5 w-5 text-[#E62B1E]" />
                  <span>April 23, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-gray-700">
                  <Clock className="h-5 w-5 text-[#E62B1E]" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-gray-700">
                  <MapPin className="h-5 w-5 text-[#E62B1E]" />
                  <span>Heritage Institute of Technology, Kolkata</span>
                </div>
                <div className="mt-4 flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Add to Google Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Our Speakers
              </h2>
              <p className="mt-4 text-lg text-gray-600">
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
              <SpeakerCard
                name="Dr. Michael Chen"
                role="Neuroscientist"
                bio="Researcher exploring the intersection of technology and human cognition."
                image="/placeholder.svg?height=400&width=400"
                talkTitle="Rewiring the Brain: The Future of Neural Interfaces"
                twitter="michaelchen"
                linkedin="michaelchen"
              />
              <SpeakerCard
                name="Ananya Roy"
                role="Digital Rights Activist"
                bio="Advocate for privacy and digital freedom in the age of surveillance capitalism."
                image="/placeholder.svg?height=400&width=400"
                talkTitle="Reclaiming Our Digital Selves"
                twitter="ananyaroy"
                linkedin="ananyaroy"
              />
              <SpeakerCard
                name="Samuel Okafor"
                role="Renewable Energy Pioneer"
                bio="Developer of innovative solar technologies for resource-constrained environments."
                image="/placeholder.svg?height=400&width=400"
                talkTitle="Democratizing Energy: Power to the People"
                twitter="samokafor"
                linkedin="samokafor"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The dedicated individuals bringing TEDx to Heritage Institute of
                Technology
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <OrganizerCard
                name="Arjun Malhotra"
                role="Lead Organizer"
                bio="Final year Computer Science student passionate about technology and innovation."
                image="/placeholder.svg?height=400&width=400"
                email="arjun@tedxhitkolkata.org"
                linkedin="arjunmalhotra"
              />
              <OrganizerCard
                name="Sneha Gupta"
                role="Curation Lead"
                bio="Biotechnology researcher with a keen interest in interdisciplinary ideas."
                image="/placeholder.svg?height=400&width=400"
                email="sneha@tedxhitkolkata.org"
                linkedin="snehagupta"
              />
              <OrganizerCard
                name="Vikram Singh"
                role="Technical Director"
                bio="Electronics engineer specializing in event production and audiovisual systems."
                image="/placeholder.svg?height=400&width=400"
                email="vikram@tedxhitkolkata.org"
                linkedin="vikramsingh"
              />
              <OrganizerCard
                name="Neha Sharma"
                role="Marketing Lead"
                bio="Digital marketing specialist with experience in brand strategy and social media."
                image="/placeholder.svg?height=400&width=400"
                email="neha@tedxhitkolkata.org"
                linkedin="nehasharma"
              />
              <OrganizerCard
                name="Rahul Dutta"
                role="Sponsorship Coordinator"
                bio="Business administration student with strong networking and partnership skills."
                image="/placeholder.svg?height=400&width=400"
                email="rahul@tedxhitkolkata.org"
                linkedin="rahuldutta"
              />
              <OrganizerCard
                name="Priya Mehta"
                role="Volunteer Coordinator"
                bio="Psychology major dedicated to building and managing effective teams."
                image="/placeholder.svg?height=400&width=400"
                email="priya@tedxhitkolkata.org"
                linkedin="priyamehta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  About TEDx
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
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
                  <p className="font-medium">
                    In the spirit of ideas worth spreading, TEDx is a program of
                    local, self-organized events that bring people together to
                    share a TED-like experience.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  About Heritage Institute
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
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
              <p className="text-gray-600">
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

