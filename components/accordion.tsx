"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y rounded-lg border">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:bg-gray-50 focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-semibold">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

