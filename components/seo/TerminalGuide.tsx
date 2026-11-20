import Link from "next/link"

/**
 * "Terminal at a glance" — the terminal-specific information that the Heathrow/Gatwick terminal
 * pages were missing (they shared ~45–50% of their text and named no airlines).
 *
 * Sources (checked Nov 2026): Heathrow "which terminal" guide + Heathrow spring-2026 route update
 * (British Airways moved some routes between T5 and T3 from 29 March 2026); JAL's Heathrow
 * terminal list; Gatwick's own "which terminal" page (easyJet uses both terminals) and 2026 press
 * coverage of the Gatwick terminal moves. Airline lists are deliberately described as typical, and
 * every block tells the passenger to check their booking — airlines do change terminals.
 */
type TerminalKey = "heathrow-t2" | "heathrow-t3" | "heathrow-t4" | "heathrow-t5" | "gatwick-north" | "gatwick-south"

const HEATHROW_FINDER = "https://www.heathrow.com/airport-guide/which-terminal"
// Gatwick's deep "which terminal" URL could not be verified from here, so link the airport's home page.
const GATWICK_FINDER = "https://www.gatwickairport.com/"

const DATA: Record<TerminalKey, { name: string; airlines: string; note?: string; finder: string; airport: "Heathrow" | "Gatwick" }> = {
  "heathrow-t2": {
    name: "Heathrow Terminal 2",
    airport: "Heathrow",
    airlines:
      "Terminal 2 (The Queen's Terminal) is mainly used by Star Alliance airlines, such as Lufthansa, United, Air Canada and Singapore Airlines, along with carriers including Aer Lingus and Icelandair.",
    finder: HEATHROW_FINDER,
  },
  "heathrow-t3": {
    name: "Heathrow Terminal 3",
    airport: "Heathrow",
    airlines:
      "Terminal 3 is home to most oneworld airlines, such as American Airlines, Cathay Pacific, Qantas and Japan Airlines, as well as Virgin Atlantic and Delta.",
    note: "From spring 2026 some British Airways routes moved from Terminal 5 to Terminal 3, so BA passengers should check which terminal their flight uses.",
    finder: HEATHROW_FINDER,
  },
  "heathrow-t4": {
    name: "Heathrow Terminal 4",
    airport: "Heathrow",
    airlines:
      "Terminal 4 is mainly used by SkyTeam airlines, such as Air France, KLM and Korean Air, along with carriers including Qatar Airways, Malaysia Airlines and Royal Air Maroc.",
    finder: HEATHROW_FINDER,
  },
  "heathrow-t5": {
    name: "Heathrow Terminal 5",
    airport: "Heathrow",
    airlines: "Terminal 5 is the base for British Airways, and is also used by Iberia.",
    note: "From spring 2026 some British Airways routes moved from Terminal 5 to Terminal 3 — check the terminal on your booking before you travel.",
    finder: HEATHROW_FINDER,
  },
  "gatwick-north": {
    name: "Gatwick North Terminal",
    airport: "Gatwick",
    airlines:
      "The North Terminal is used by easyJet as well as long-haul airlines including Emirates and Qatar Airways.",
    note: "easyJet flies from both Gatwick terminals, so easyJet passengers should check which terminal their flight uses.",
    finder: GATWICK_FINDER,
  },
  "gatwick-south": {
    name: "Gatwick South Terminal",
    airport: "Gatwick",
    airlines:
      "The South Terminal is used by British Airways short-haul flights and airlines including Vueling, Wizz Air, Ryanair, TAP Air Portugal and Turkish Airlines.",
    note: "easyJet also uses the South Terminal for some flights — check which terminal is on your booking.",
    finder: GATWICK_FINDER,
  },
}

export default function TerminalGuide({ terminal }: { terminal: TerminalKey }) {
  const t = DATA[terminal]
  return (
    <section className="py-16 bg-white border-t border-gray-100" aria-labelledby="terminal-guide-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="terminal-guide-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-6">
          {t.name} at a glance
        </h2>
        <div className="space-y-4 text-lg text-[#2E3C44] leading-relaxed">
          <p>
            <strong>Which airlines use it?</strong> {t.airlines}
          </p>
          {t.note ? <p>{t.note}</p> : null}
          <p>
            <strong>Drop-off:</strong> for departures we take you to the {t.name} drop-off area. Tell us your flight
            time when you book and we will plan the pickup from Leicester around it.
          </p>
          <p>
            <strong>Pick-up:</strong> give us your flight number and we monitor your arrival, then confirm where to
            meet. If you would like the driver to meet you inside the terminal, ask for{" "}
            <Link href="/meet-and-greet-taxi-leicester" className="text-[#06A0A6] underline underline-offset-2">
              meet and greet
            </Link>
            .
          </p>
          <p className="text-base text-gray-600">
            Airlines sometimes change terminals. Always check the terminal on your booking confirmation or on{" "}
            <a href={t.finder} target="_blank" rel="noopener noreferrer" className="text-[#06A0A6] underline underline-offset-2">
              {t.airport === "Heathrow" ? <>Heathrow&apos;s &ldquo;which terminal&rdquo; page</> : <>the Gatwick Airport website</>}
            </a>{" "}
            before you travel{t.airport === "Gatwick" ? " — if you need to switch, a free shuttle links the North and South terminals" : ""}.
          </p>
        </div>
      </div>
    </section>
  )
}
