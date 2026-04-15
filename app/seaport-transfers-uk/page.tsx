import Link from "next/link"
import {
  Anchor,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Luggage,
  MapPin,
  Phone,
  Shield,
  Ship,
  Users,
} from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import FAQSchema from "@/components/seo/FAQSchema"

const company = siteData.company

export const metadata: Metadata = {
  title:
    "Seaport Taxi Transfer UK | Cruise Port Taxi from Leicester | Southampton Port | Aylestone Kings",
  description:
    "Seaport taxi transfer and cruise port taxi from Leicester to Southampton, Dover, Portsmouth & Harwich. Fixed quotes before you travel, room for cruise luggage, saloons and MPVs. Licensed drivers, 24/7. Call 0116 2338888 or book online.",
  keywords: [
    "seaport taxi transfer",
    "cruise port transfer UK",
    "taxi to Southampton port",
    "Dover cruise taxi",
    "Portsmouth port taxi",
    "Harwich cruise transfer",
  ],
  alternates: {
    canonical: "https://www.aylestone-taxis.co.uk/seaport-transfers-uk",
  },
  openGraph: {
    title:
      "Seaport Taxi Transfer UK | Cruise Port Taxi | Aylestone Kings Leicester",
    description:
      "Pre-booked cruise port transfers from Leicester and the Midlands. Southampton port taxis, Dover, Portsmouth, Harwich — luggage-friendly vehicles, agreed fares.",
    url: "https://www.aylestone-taxis.co.uk/seaport-transfers-uk",
  },
}

const faqs = [
  {
    question: "What is a seaport taxi transfer?",
    answer:
      "It is a pre-booked private hire car or people carrier from your home, hotel, or airport to a UK ferry or cruise terminal (or back again). The driver helps load cases at the kerb and drops you at the terminal or meet point your operator gives you.",
  },
  {
    question: "Do you offer cruise port transfer UK-wide?",
    answer:
      "Yes. Aylestone Kings is based in Leicester and books long-distance seaport runs to Southampton, Dover, Portsmouth, Harwich, and other UK terminals on request. You get a confirmed price before travel where agreed, and we match the vehicle to your head count and bags.",
  },
  {
    question: "How much luggage can I take on a taxi to Southampton port?",
    answer:
      "Saloons and estates usually work for two to four people with normal cruise packing. If each person has a big case plus hand luggage, book an MPV or minibus so nothing blocks mirrors or seatbelts. Give us an honest case count when you quote.",
  },
  {
    question: "Should I book my seaport taxi before embarkation day?",
    answer:
      "Yes. Summer sailings, school holidays, and bank holidays book up fast. Early booking locks in the right car size for groups and avoids scrambling for a ride the night before you sail.",
  },
  {
    question: "Can you pick us up after our cruise returns?",
    answer:
      "Yes. Book the return for disembarkation day with your ship name, mobile number, and a realistic window after the ship docks. We allow time for bags and the walk to the agreed pickup point.",
  },
  {
    question: "Which UK cruise ports do you cover?",
    answer:
      "Most of our cruise work is Southampton, plus Dover, Portsmouth International Port, and Harwich International Port. Ask if your berth is elsewhere — we may still be able to quote.",
  },
  {
    question: "Are your seaport transfer drivers licensed and insured?",
    answer:
      "Yes. Aylestone Kings uses council-licensed private hire drivers (Leicester and Wolverhampton licensing) with DBS checks and hire insurance for pre-booked jobs. Vehicles are kept fit for long motorway runs to the coast.",
  },
]

export default function SeaportTransfersUkPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-[#06A0A6]/15 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              <Ship className="h-4 w-4" />
              Cruise &amp; ferry terminals nationwide
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              Seaport taxi transfer &amp; cruise port taxi UK
            </h1>
            <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-8 leading-relaxed">
              Book a <strong>seaport taxi transfer</strong> from Leicester and
              the Midlands to <strong>Southampton port</strong>, Dover,
              Portsmouth, or Harwich. We run{" "}
              <strong>cruise port transfer UK</strong> jobs in saloons, estates,
              and MPVs so your cases actually fit. Tell us your sailing time and
              bag count; we suggest when to leave and confirm the fare before you
              go.
            </p>
            <div className="max-w-2xl mx-auto mb-10 rounded-2xl border border-[#06A0A6]/30 bg-white/80 px-5 py-4 text-left text-sm md:text-base text-[#2E3C44] shadow-sm">
              <p className="font-semibold text-[#0F0D3E] mb-2">
                Who you are booking with
              </p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>
                  <span className="font-medium">{company.name}</span> — serving
                  Leicester since {company.founded} ({company.yearsExperience}{" "}
                  years on the road).
                </li>
                <li>{company.licenses[0]}</li>
                <li>{company.licenses[1]}</li>
                <li>Office: {company.address}</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                >
                  <Calendar className="h-6 w-6" />
                  Book online — fixed quote
                </button>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-all duration-200 text-lg flex items-center justify-center gap-3"
                >
                  <Phone className="h-6 w-6" />
                  Call {contactInfo.phone}
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Overview — long-form SEO */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[#2E3C44] leading-relaxed space-y-6 text-base md:text-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E]">
              Why book a private taxi to the port?
            </h2>
            <p>
              A <strong>seaport taxi transfer</strong> is straightforward: one
              car, one driver, your address to the cruise or ferry terminal (or
              back again). You are not dragging cases through stations, splitting
              the family across two rail connections, or paying multi-day cruise
              parking and still walking half a mile in the wind with a trolley
              bag.
            </p>
            <p>
              We are based in Leicester and have run{" "}
              <strong>cruise port transfer UK</strong> jobs for years alongside
              our airport work. Missing a ship is costly; we would rather turn
              down a job than quote a journey time we cannot stand behind. At
              booking we ask for ship name, terminal, passenger numbers, and how
              many cases you really have — then we agree a pickup time that fits
              check-in, traffic, and a coffee stop if you want one.
            </p>
            <p>
              From here to <strong>Southampton</strong> is a long haul. We know
              where the M1, M6, and M25 tend to snag on Friday afternoons and
              bank holidays, and we build that into your plan. Same for Dover,
              Portsmouth, and Harwich: you get a sensible &quot;leave home&quot;
              time, not a best-case scenario from a map app.
            </p>
            <p>
              Cruise packing is heavier than most airport runs: extra shoes,
              formal nights, kids&apos; stuff, maybe golf clubs. We sort{" "}
              <strong>luggage handling</strong> when we quote — saloon, estate,
              MPV, or minibus — so the boot shuts safely and seatbelts still work.
              If you need a hand with bags, say so; the driver will load at your
              speed.
            </p>
            <p>
              Booking stays the same for a <strong>taxi to Southampton port</strong>, a
              Dover ferry, Portsmouth, or Harwich: postcode, sailing or check-in
              time, head count, luggage. You see the price and vehicle type before
              you commit. No meter ticking in a jam on the M25.
            </p>
            <h3 className="text-2xl font-bold text-[#0F0D3E] pt-4">
              Families, groups, and lots of luggage
            </h3>
            <p>
              Two people and four big cases will not squeeze into every saloon. A
              family of four with teenagers can overflow the boot fast. Tell us
              the truth about cases and we send an estate or MPV — better than a
              car that turns up and cannot close the lid.
            </p>
            <p>
              Older passengers often choose a door-to-door{" "}
              <strong>seaport taxi transfer</strong> to skip stairs, gaps, and
              platform changes. We can pull up closer to your door or hotel,
              load slowly, and drop at the terminal side your cruise line
              specifies. Folding wheelchair or walking frame? Mention it when you
              book so we reserve a car with the right boot space.
            </p>
            <p>
              Work trips and big family groups sometimes want one minibus instead
              of three cars following each other down the M1. One booking, one
              invoice, everyone arrives together. Same idea for weddings heading
              to a short cruise — one pickup run, less chance of Uncle Dave getting
              on the wrong train at Rugby.
            </p>
            <p>
              On the way home you are tired, bags are heavier, kids are cranky.
              If you have booked a return, we already have your ship, date, and
              mobile. We allow time for bags and the walk to the meet point — no
              hunting for a free cab in the cruise-terminal scrum.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F0D3E] mb-4">
                Seaport transfer services we provide
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Couples, families, and groups — we match the car to your ship
                time and your <strong>seaport taxi transfer</strong> luggage, not
                the other way round.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: MapPin,
                  title: "Door-to-terminal",
                  text: "Pick up at home, a hotel, or an airport; drop at the cruise or ferry terminal or the meet point on your ticket.",
                },
                {
                  icon: Luggage,
                  title: "Room for cruise luggage",
                  text: "Estates and MPVs when you need them. We decide boot space from your case count, not a guess on the day.",
                },
                {
                  icon: Ship,
                  title: "Out and back",
                  text: "Outbound timed for check-in; return pickups after you are off the ship with your bags.",
                },
                {
                  icon: Users,
                  title: "Groups",
                  text: "One minibus beats three cars tailgating down the motorway — especially with elderly relatives or kids.",
                },
                {
                  icon: Clock,
                  title: "Built around sailings",
                  text: "We allow for M1 / M25 / A34 delays on busy weekends so you are not white-knuckling it to the gangway.",
                },
                {
                  icon: Shield,
                  title: "Licensed hire",
                  text: "Council-licensed private hire, DBS-checked drivers, insurance for pre-booked passenger work — including long runs to the coast.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-[#06A0A6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#2E3C44]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto text-[#2E3C44] space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Cruise lines give arrival windows; motorways have their own
                ideas on a Friday. We have done hundreds of long{" "}
                <strong>seaport taxi transfer</strong> runs — we would rather
                you relax with time in hand than cut it fine because an app said
                &quot;2 hours 10&quot; on a quiet Tuesday.
              </p>
              <p>
                Some people stop overnight near the port; others want one leg
                from Leicestershire after lunch. Explain the full plan and we
                quote it. Same rules: licensed cars, price agreed up front, bags
                looked after from your door to the terminal kerb.
              </p>
              <p>
                Fly-cruise? We often tie an airport pickup to the{" "}
                <strong>cruise port transfer UK</strong> leg in one quote — for
                example after{" "}
                <Link
                  href="/pricing/airports/Heathrow"
                  className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
                >
                  Heathrow
                </Link>
                ,{" "}
                <Link
                  href="/pricing/airports/Gatwick"
                  className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
                >
                  Gatwick
                </Link>
                , or{" "}
                <Link
                  href="/pricing/airports/Birmingham"
                  className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
                >
                  Birmingham
                </Link>
                . Send dates, flight numbers, and ship details; we price the lot
                so you are not stitching rides on embarkation morning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="bg-[#0F0D3E] hover:bg-[#06A0A6] text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2"
                  >
                    Get a quote online
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </a>
                <Link href="/contact">
                  <button
                    type="button"
                    className="border-2 border-[#0F0D3E] text-[#0F0D3E] px-6 py-3 rounded-xl font-semibold hover:bg-[#0F0D3E] hover:text-white transition-colors"
                  >
                    Message us with your dates
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ports covered */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F0D3E] mb-4">
                Major UK ports we cover
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Southampton, Dover, Portsmouth, Harwich — and airport or hotel
                pickups anywhere that fits your route.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 text-[#2E3C44] leading-relaxed">
              <div className="space-y-4 p-6 rounded-2xl border border-gray-200 bg-gray-50/50">
                <div className="flex items-center gap-3 text-[#0F0D3E] font-bold text-xl">
                  <Anchor className="h-7 w-7 text-[#06A0A6]" />
                  Southampton (cruise capital)
                </div>
                <p>
                  Most of our cruise work is a <strong>taxi to Southampton port</strong>.
                  Big ships mean busy mornings around the terminals — City, Ocean,
                  Mayflower, Horizon, QEII. Tell us which one is on your ticket; we
                  plan the last few miles accordingly. From Leicester it is a long
                  day; we stop for the loo or a coffee if you ask, and your bags stay
                  locked in the back the whole way.
                </p>
                <p>
                  When two ships turn around the same morning, Western Avenue and
                  the dock gates clog up fast. Send your terminal name or booking
                  PDF so nobody is guessing at the roundabout. Fly-cruise guests
                  coming from{" "}
                  <Link
                    href="/pricing/airports/Heathrow"
                    className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
                  >
                    Heathrow
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/pricing/airports/Gatwick"
                    className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
                  >
                    Gatwick
                  </Link>
                  , we can book one onward <strong>taxi to Southampton port</strong>{" "}
                  with a sensible gap after landing — or a break before the long
                  run south if you do not want to go straight from the belt to the
                  M3.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl border border-gray-200 bg-gray-50/50">
                <div className="flex items-center gap-3 text-[#0F0D3E] font-bold text-xl">
                  <Anchor className="h-7 w-7 text-[#06A0A6]" />
                  Dover
                </div>
                <p>
                  Dover is still a big ferry hub and sees some cruise calls. The
                  approaches are steep and the docks get snarled on bank holidays.
                  If you have already worked a full week, letting someone else
                  drive the last leg is not lazy — it is sensible.
                </p>
                <p>
                  A <strong>seaport taxi transfer</strong> drops you at the
                  vehicle or passenger zone on your ticket, not a multi-storey
                  ten minutes&apos; walk from check-in. Coming back into Dover,
                  ferries and cruise traffic can overlap; we leave slack in the
                  pickup time so normal delays at the terminal do not turn into
                  an argument over extras.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl border border-gray-200 bg-gray-50/50">
                <div className="flex items-center gap-3 text-[#0F0D3E] font-bold text-xl">
                  <Anchor className="h-7 w-7 text-[#06A0A6]" />
                  Portsmouth International Port
                </div>
                <p>
                  Portsmouth mixes ferries and more cruise traffic now. Families
                  usually want an MPV so nobody sits with a case on their lap.
                  Send the operator name and any port instructions for taxis — we
                  use the same wording the gate staff expect.
                </p>
                <p>
                  Summer weekends on the A3 and M27 can hurt. We time your{" "}
                  <strong>seaport taxi transfer</strong> for the ship, not a
                  best-case sat-nav guess, so you still have time for bag drop.
                  Many customers book a straight run home to Leicestershire the
                  same day they dock rather than paying for an extra hotel night.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl border border-gray-200 bg-gray-50/50">
                <div className="flex items-center gap-3 text-[#0F0D3E] font-bold text-xl">
                  <Anchor className="h-7 w-7 text-[#06A0A6]" />
                  Harwich International Port
                </div>
                <p>
                  Harwich is the main North Sea port for many routes, plus the odd
                  cruise call. From the Midlands it is a long eastward run; we
                  quote drive time plainly and tell you when to leave Leicester
                  (or your pickup) so you are not guessing.
                </p>
                <p>
                  Early ferries mean silly o&apos;clock starts. We run{" "}
                  {company.serviceAvailability.toLowerCase()} — you are not
                  wrestling three cases onto the first train while the kids are
                  still asleep. If the port shifts a temporary pickup zone, we
                  keep the instructions simple: ring or text, meet here.
                </p>
              </div>
            </div>
            <p className="mt-10 max-w-3xl mx-auto text-center text-[#2E3C44] text-lg leading-relaxed">
              Other UK ferry terminals and cruise berths may be available on
              request — ask when you call or use our online booker for a{" "}
              <Link
                href="/long-distance-taxi-leicester"
                className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
              >
                long-distance taxi
              </Link>{" "}
              style quote. Starting from Birmingham, Nottingham, or Derby is
              fine too — we price on miles and time, not a fixed list of
              postcodes.
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-center text-[#2E3C44] text-lg leading-relaxed">
              Six of you in one MPV to Southampton usually beats three cars in
              the queue at the gate. If you are starting from two addresses far
              apart, two smaller cars can still be cheaper on time and miles — we
              will say so; no point selling you something that does not fit.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F0D3E] mb-6 text-center">
              Why people pre-book the port run
            </h2>
            <p className="text-lg text-[#2E3C44] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              Driving yourself, taking the train, or rolling the dice on an app at
              the terminal all work — until they do not. A booked{" "}
              <strong>seaport taxi transfer</strong> gives you a price, a car
              size, and a person expecting you.
            </p>
            <p className="max-w-3xl mx-auto text-[#2E3C44] text-lg leading-relaxed mb-10">
              Add up diesel, wear, and two weeks of cruise parking in an open
              compound, then compare one agreed fare for a{" "}
              <strong>cruise port transfer UK</strong> in a clean hire car. If
              you blow a tyre on the M6 on sail-away morning, the holiday does
              not wait. Here, the driver is on the hook for the running — you
              sit in the back and watch the miles go by.
            </p>
            <p className="max-w-3xl mx-auto text-[#2E3C44] text-lg leading-relaxed mb-10">
              Trains are fine with a rucksack; they are miserable with two big
              cases, a cabin bag, and a toddler. Saturday services sell out, lifts
              break, and the taxi rank at the coast goes mad when a ship docks.
              Your booking keeps the car for your slot, door to door, with{" "}
              <strong>luggage handling</strong> as standard. That matters if you
              are older, unsteady on your feet, or just done with hauling cases
              up station steps.
            </p>
            <ul className="max-w-2xl mx-auto space-y-4">
              {[
                "Price agreed before you travel — easier to budget the holiday",
                "Car matched to people, bags, and any mobility needs",
                "No cruise parking fees or forgetting which deck you parked on after fourteen nights",
                "One phone number if the flight is late — we re-time the pickup",
                "Drivers used to long motorway days and scruffy port ring roads",
                `${company.serviceAvailability} for daft-o-clock ferries and embarkations`,
              ].map((line) => (
                <li key={line} className="flex gap-3 items-start">
                  <Check className="h-6 w-6 text-[#06A0A6] shrink-0 mt-0.5" />
                  <span className="text-[#2E3C44] text-lg">{line}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-12">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg transition-colors inline-flex items-center gap-2"
                >
                  Book your cruise transfer
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Booking process */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F0D3E] mb-4 text-center">
              How to book your seaport transfer
            </h2>
            <p className="text-lg text-[#2E3C44] max-w-3xl mx-auto text-center mb-14">
              Four steps — then you know who is collecting you, in what, and when
              you are leaving for your <strong>cruise port transfer UK</strong>{" "}
              run.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Share your journey",
                  body: "Pickup postcode, port (e.g. taxi to Southampton port), date, and ship or ferry name. List adults, children, and approximate luggage.",
                },
                {
                  step: "2",
                  title: "Receive your quote",
                  body: "We recommend saloon, estate, MPV, or minibus and confirm price, meet point, and suggested leave-home time.",
                },
                {
                  step: "3",
                  title: "Confirm",
                  body: "Book online or pay as we agree on the phone. We send driver and car details when they are fixed.",
                },
                {
                  step: "4",
                  title: "Go",
                  body: "We load the bags, watch the traffic, and drop you at the ship. Add the return now if you want the same on the way home.",
                },
              ].map((b) => (
                <div
                  key={b.step}
                  className="relative bg-gray-50 p-6 rounded-2xl border border-gray-200"
                >
                  <span className="absolute -top-3 left-6 bg-[#06A0A6] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {b.step}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F0D3E] mt-4 mb-3">
                    {b.title}
                  </h3>
                  <p className="text-[#2E3C44] leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
            <p className="max-w-3xl mx-auto mt-12 text-[#2E3C44] text-center text-lg leading-relaxed">
              Tight flight onto the ship? Book{" "}
              <Link
                href="/airport-transfers-leicester"
                className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
              >
                airport
              </Link>{" "}
              and <strong>seaport taxi transfer</strong> together so one office
              holds the whole timeline.
            </p>
            <p className="max-w-3xl mx-auto mt-6 text-[#2E3C44] text-center text-lg leading-relaxed">
              From{" "}
              <Link
                href="/leicester-airport-taxi"
                className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
              >
                Leicester
              </Link>{" "}
              or anywhere in Leicestershire, have postcode, mobile, and cruise
              booking reference ready. For the return, we want ship name and
              disembarkation date on file. If you are a group, pick one person to
              book — stops two minibuses turning up. We can split costs on
              invoices if you ask before travel.
            </p>
            <p className="max-w-3xl mx-auto mt-6 text-[#2E3C44] text-center text-lg leading-relaxed">
              May–September and Christmas sailings book out MPVs fast. Bank
              holidays on the M1 southbound are not pretty. Sort your{" "}
              <strong>taxi to Southampton port</strong> or Dover crossing early
              so the right car is yours, not whoever is left in the diary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                <button
                  type="button"
                  className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Phone className="h-5 w-5" />
                  Speak to us: {contactInfo.phone}
                </button>
              </a>
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] transition-colors text-lg"
                >
                  Open the booker
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          className="py-20 bg-gray-50"
          aria-labelledby="seaport-faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="seaport-faq-heading"
              className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-10 text-center"
            >
              Frequently asked questions
            </h2>
            <p className="text-[#2E3C44] text-lg leading-relaxed mb-10 text-center">
              Quick answers on luggage, pricing, Southampton, Dover, Portsmouth,
              and Harwich. Not here? Ring {contactInfo.phone} or use the booker —
              we would rather talk it through than guess wrong on sail-away day.
            </p>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white rounded-xl border border-gray-200 shadow-sm open:shadow-md transition-shadow"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[#0F0D3E] flex justify-between items-center gap-4">
                    {item.question}
                    <span className="text-[#06A0A6] text-xl shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 pt-0 text-[#2E3C44] leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get a price for your port run
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Tell us ship, date, postcode, and how many cases. We quote a{" "}
              <strong>cruise port transfer UK</strong> or{" "}
              <strong>taxi to Southampton port</strong> (or Dover, Portsmouth,
              Harwich) with the right car and no meter running in a jam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  Book now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <Link href="/pricing">
                <button
                  type="button"
                  className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#06A0A6] transition-colors text-lg"
                >
                  View airport pricing
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
