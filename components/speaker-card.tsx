"use client"

import { useState } from "react"
import Image from "next/image"
import { Twitter, Linkedin } from "lucide-react"

interface SpeakerCardProps {
  name: string
  role: string
  bio: string
  image: string
  talkTitle: string
  twitter?: string
  linkedin?: string
}

export default function SpeakerCard({ name, role, bio, image, talkTitle, twitter, linkedin }: SpeakerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-[400px] w-full perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-lg bg-white shadow-lg">
          <div className="relative h-[250px] w-full overflow-hidden rounded-t-lg">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-[#E62B1E]">{role}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rounded-lg bg-white p-6 shadow-lg rotate-y-180">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              <p className="mb-2 text-sm text-[#E62B1E]">{role}</p>
              <h4 className="mb-2 font-medium text-gray-800">"{talkTitle}"</h4>
              <p className="text-sm text-gray-600">{bio}</p>
            </div>
            <div className="flex justify-start space-x-4">
              {twitter && (
                <a
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {linkedin && (
                <a
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#E62B1E]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

