"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

interface OrganizerCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
}

export default function OrganizerCard({
  name,
  role,
  bio,
  image,
  email,
  linkedin,
}: OrganizerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[350px] w-full perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative h-full w-full duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-lg bg-white shadow-lg">
          <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rounded-lg bg-white p-6 shadow-lg rotate-y-180">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              <p className="mb-2 text-sm text-gray-600">{role}</p>
              <p className="text-sm text-gray-600">{bio}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#E62B1E]"
              >
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </a>
              {linkedin && (
                <a
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#E62B1E]"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
