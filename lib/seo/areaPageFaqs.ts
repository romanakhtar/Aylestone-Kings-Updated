export type AreaFaq = {
  question: string
  answer: string
}

const WIGSTON_EXTRA_FAQS: AreaFaq[] = [
  {
    question: "Do you provide taxis from Wigston town centre and Bell Street?",
    answer:
      "Yes. Our Wigston taxi service covers the town centre, Bell Street and nearby residential areas. You can book quick local trips, nights out, shopping journeys and more with fixed, competitive prices.",
  },
  {
    question: "Can I get a taxi from South Wigston station?",
    answer:
      "Absolutely. We regularly pick up from South Wigston station. Pre-book your taxi with your train time, or call when you arrive and we will send the nearest available driver.",
  },
  {
    question: "How long does a taxi from Wigston to Leicester city centre usually take?",
    answer:
      "Typical journey times from Wigston to Leicester city centre are around 15–20 minutes in normal traffic. During rush hour it may take a little longer, so we recommend allowing extra time.",
  },
]

const OADBY_EXTRA_FAQS: AreaFaq[] = [
  {
    question: "Do you provide taxis to Leicester Racecourse from Oadby?",
    answer:
      "Yes. Our Oadby taxi service takes you to Leicester Racecourse for race days and events. Pre-book ahead of popular fixtures to ensure your ride.",
  },
  {
    question: "Can I get a taxi from Stoughton Road in Oadby?",
    answer:
      "Absolutely. We cover Stoughton Road and the wider Oadby area. Book online or call for pickups to Leicester, the Racecourse, hospitals and airports.",
  },
  {
    question: "How long does a taxi from Oadby to Leicester city centre usually take?",
    answer:
      "Typical journey times from Oadby to Leicester city centre are around 10–15 minutes in normal traffic. Rush hour or race days may add a few minutes.",
  },
]

const BEAUMONT_LEYS_EXTRA_FAQS: AreaFaq[] = [
  {
    question: "Do you provide taxis from Beaumont Leys Shopping Centre?",
    answer:
      "Yes. We pick up and drop off at Beaumont Leys Shopping Centre and the surrounding area. Book for shopping trips, work or evenings out – we cover Beaumont Leys 24/7.",
  },
  {
    question: "How long does a taxi from Beaumont Leys to Leicester city centre take?",
    answer:
      "Typical journey times from Beaumont Leys to Leicester city centre are around 15–20 minutes in normal traffic. Rush hour can add a few minutes.",
  },
  {
    question: "Can I book an East Midlands Airport taxi from Beaumont Leys?",
    answer:
      "Yes. We offer fixed-fare East Midlands Airport (EMA) transfers from Beaumont Leys with flight tracking and optional meet & greet. Pre-book for the best price.",
  },
]

function genericAreaFaqs(areaPlain: string): AreaFaq[] {
  return [
    {
      question: `Where can I find an affordable taxi in ${areaPlain}?`,
      answer: `Aylestone Kings provides an affordable taxi in ${areaPlain} with fixed fares and no hidden charges. Book online, by phone, or WhatsApp for competitive rates.`,
    },
    {
      question: `Do you offer airport taxi services from ${areaPlain}?`,
      answer: `Yes. Our airport taxi service covers all major UK airports from ${areaPlain}, including Birmingham, East Midlands, Heathrow, and Gatwick with fixed pricing.`,
    },
    {
      question: `How much does an affordable taxi in ${areaPlain} cost?`,
      answer: `Our affordable taxi in ${areaPlain} offers competitive rates with upfront quotes. Local journeys start from competitive prices, and airport transfers have fixed fares.`,
    },
    {
      question: `Is your taxi in ${areaPlain} available 24/7?`,
      answer: `Yes. Our taxi in ${areaPlain} operates 24/7, including weekends and bank holidays. Fast pickups available throughout Leicester.`,
    },
    {
      question: `Can I pre-book an airport taxi from ${areaPlain}?`,
      answer: `Absolutely. Pre-book your airport taxi from ${areaPlain} for peace of mind. We monitor flights and provide meet & greet service on request.`,
    },
    {
      question: `How much is a taxi from ${areaPlain} to Leicester City Centre?`,
      answer:
        "Fares vary with traffic and pickup point, but we offer fixed, competitive pricing. Get an instant quote and book online.",
    },
    {
      question: "What vehicle types are available?",
      answer:
        "Choose from saloons, estates, MPVs and minibuses for larger groups. All vehicles are clean, comfortable and licensed.",
    },
    {
      question: "Do you provide child seats on request?",
      answer: "Yes. Add a note during booking and we'll provide appropriate child seating where available.",
    },
    {
      question: "Can I pay by card?",
      answer:
        "We accept multiple secure payment methods including card and contactless, subject to vehicle availability.",
    },
  ]
}

export function collectAreaPageFaqs(options: {
  resolvedFaqs?: AreaFaq[]
  areaPlain: string
  isWigston: boolean
  isOadby: boolean
  isBeaumontLeys: boolean
  isPrioritySeoArea: boolean
}): AreaFaq[] {
  const { resolvedFaqs, areaPlain, isWigston, isOadby, isBeaumontLeys, isPrioritySeoArea } = options

  const candidates: AreaFaq[] = [...(resolvedFaqs ?? [])]

  if (isWigston) candidates.push(...WIGSTON_EXTRA_FAQS)
  if (isOadby) candidates.push(...OADBY_EXTRA_FAQS)
  if (isBeaumontLeys) candidates.push(...BEAUMONT_LEYS_EXTRA_FAQS)
  if (!isPrioritySeoArea) candidates.push(...genericAreaFaqs(areaPlain))

  const seen = new Set<string>()
  return candidates.filter((faq) => {
    if (seen.has(faq.question)) return false
    seen.add(faq.question)
    return true
  })
}
