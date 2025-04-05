"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timeComponents = []

  type TimeLeftType = {
    days?: number
    hours?: number
    minutes?: number
    seconds?: number
  }

  const typedTimeLeft = timeLeft as TimeLeftType

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-4 text-center">
        {["days", "hours", "minutes", "seconds"].map((interval) => (
          <div key={interval} className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
            <div className="relative overflow-hidden rounded bg-gray-100 px-4 py-6 shadow-inner">
              <span className="text-4xl font-bold text-[#E62B1E]">
                {typedTimeLeft[interval as keyof TimeLeftType] || 0}
              </span>
            </div>
            <span className="mt-2 text-sm font-medium uppercase text-gray-600">{interval}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

