import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  linkedin?: string;
}

// Team members data organized by department
const teamMembers: Record<string, TeamMember[]> = {
  "Core Team": [
    {
      name: "Arjun Malhotra",
      role: "Lead Organizer",
      department: "Core Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "arjunmalhotra",
    },
    {
      name: "Sneha Gupta",
      role: "Curation Lead",
      department: "Core Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "snehagupta",
    },
    {
      name: "Vikram Singh",
      role: "Technical Director",
      department: "Core Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "vikramsingh",
    },
  ],
  "Marketing Team": [
    {
      name: "Neha Sharma",
      role: "Marketing Lead",
      department: "Marketing Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "nehasharma",
    },
    {
      name: "Raj Kumar",
      role: "Social Media Manager",
      department: "Marketing Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "rajkumar",
    },
    {
      name: "Priya Mehta",
      role: "Content Creator",
      department: "Marketing Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "priyamehta",
    },
  ],
  "Technical Team": [
    {
      name: "Rahul Dutta",
      role: "Web Developer",
      department: "Technical Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "rahuldutta",
    },
    {
      name: "Ananya Roy",
      role: "AV Specialist",
      department: "Technical Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "ananyaroy",
    },
    {
      name: "Sanjay Patel",
      role: "Stage Manager",
      department: "Technical Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "sanjaypatel",
    },
  ],
  "Logistics Team": [
    {
      name: "Meera Joshi",
      role: "Logistics Coordinator",
      department: "Logistics Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "meerajoshi",
    },
    {
      name: "Aditya Sharma",
      role: "Venue Manager",
      department: "Logistics Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "adityasharma",
    },
    {
      name: "Kavita Singh",
      role: "Hospitality Lead",
      department: "Logistics Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "kavitasingh",
    },
  ],
  "Sponsorship Team": [
    {
      name: "Rohan Kapoor",
      role: "Sponsorship Lead",
      department: "Sponsorship Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "rohankapoor",
    },
    {
      name: "Nisha Verma",
      role: "Partnership Manager",
      department: "Sponsorship Team",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "nishaverma",
    },
  ],
};

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Team Page Hero */}
      <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden bg-black text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="TEDx Team"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Team
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl">
              Meet the passionate individuals bringing TEDx to Heritage
              Institute of Technology
            </p>
          </div>
        </div>
      </section>

      {/* Team Members by Department */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {Object.entries(teamMembers).map(([department, members]) => (
              <div key={department} className="mb-16">
                <h2 className="mb-8 text-2xl font-bold text-white">
                  {department}
                </h2>
                <div className="space-y-4">
                  {members.map((member) => (
                    <div key={member.name} className="team-card">
                      <div className="team-card-image">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="team-card-content">
                        <h3 className="text-xl font-bold text-white">
                          {member.name}
                        </h3>
                        <p className="text-[#E62B1E]">{member.role}</p>
                      </div>
                      <div className="team-card-social">
                        {member.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-800 hover:text-[#E62B1E]"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-16 text-center">
              <Link href="/">
                <Button className="bg-[#E62B1E] hover:bg-[#E62B1E]/90">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
