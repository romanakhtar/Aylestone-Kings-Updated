"use client"

import React, { useState } from "react"

type Airport = {
  code: string
  name: string
  car: number
  minibus: number
}

type DistanceMap = Record<string, Record<string, number>>

const DIST: DistanceMap = {
  city: { city: 0.5, railway: 0.7, lri: 1.0, dmu: 0.8, uol: 1.0, fosse: 3.2, highcross: 0.5, kingpower: 1.0, ema: 14.0 },
  aylestone: { city: 2.5, railway: 2.3, lri: 2.0, dmu: 1.8, uol: 2.2, fosse: 2.8, highcross: 2.6, kingpower: 1.8 },
  eyres_monsell: { city: 3.0, railway: 2.8, lri: 2.5, dmu: 2.3, uol: 2.8, fosse: 3.2, highcross: 3.0, kingpower: 2.2 },
  glen_parva: { city: 4.0, railway: 3.8, lri: 3.5, dmu: 3.2, uol: 3.8, fosse: 3.5, highcross: 4.0, kingpower: 3.2 },
  saffron_lane: { city: 2.0, railway: 1.8, lri: 1.5, dmu: 1.3, uol: 1.8, fosse: 3.2, highcross: 2.2, kingpower: 1.5 },
  clarendon: { city: 1.8, railway: 1.6, lri: 1.3, dmu: 1.0, uol: 0.9, fosse: 3.8, highcross: 2.0, kingpower: 1.5, ema: 13.5 },
  knighton: { city: 2.6, railway: 2.4, lri: 2.1, dmu: 1.9, uol: 1.5, fosse: 4.2, highcross: 2.8, kingpower: 2.2, ema: 13.0 },
  highfields: { city: 1.2, railway: 1.0, lri: 0.7, dmu: 0.7, uol: 1.0, fosse: 3.8, highcross: 1.5, kingpower: 1.2, ema: 13.5 },
  belgrave: { city: 1.8, railway: 2.0, lri: 2.2, dmu: 2.0, uol: 2.2, fosse: 4.2, highcross: 1.8, kingpower: 2.5, ema: 14.5 },
  hamilton: { city: 4.0, railway: 4.2, lri: 4.5, dmu: 4.2, uol: 4.5, fosse: 6.0, highcross: 4.0, kingpower: 5.0, ema: 16.5 },
  beaumont: { city: 3.5, railway: 3.8, lri: 4.0, dmu: 3.8, uol: 4.0, fosse: 2.8, highcross: 3.2, kingpower: 4.5, ema: 15.5 },
  oadby: { city: 4.2, railway: 4.0, lri: 3.8, dmu: 3.5, uol: 3.2, fosse: 5.5, highcross: 4.5, kingpower: 3.8, ema: 11.5 },
  wigston: { city: 4.8, railway: 4.5, lri: 4.2, dmu: 4.0, uol: 3.8, fosse: 5.2, highcross: 4.8, kingpower: 4.2, ema: 11.0 },
  birstall: { city: 4.0, railway: 4.2, lri: 4.5, dmu: 4.2, uol: 4.5, fosse: 4.5, highcross: 3.8, kingpower: 5.0, ema: 15.5 },
  syston: { city: 5.0, railway: 5.2, lri: 5.5, dmu: 5.2, uol: 5.5, fosse: 6.5, highcross: 5.0, kingpower: 6.0, ema: 17.0 },
  thurmaston: { city: 3.5, railway: 3.8, lri: 4.0, dmu: 3.8, uol: 4.0, fosse: 5.0, highcross: 3.5, kingpower: 4.5, ema: 15.5 },
  glenfield: { city: 4.0, railway: 4.2, lri: 4.5, dmu: 4.2, uol: 4.5, fosse: 3.0, highcross: 3.8, kingpower: 5.0, ema: 15.5 },
  narborough: { city: 6.5, railway: 6.8, lri: 7.0, dmu: 6.8, uol: 7.0, fosse: 5.0, highcross: 6.2, kingpower: 7.5, ema: 10.0 },
  blaby: { city: 5.5, railway: 5.8, lri: 6.0, dmu: 5.8, uol: 6.0, fosse: 4.5, highcross: 5.2, kingpower: 6.5, ema: 10.5 },
  enderby: { city: 6.0, railway: 6.2, lri: 6.5, dmu: 6.2, uol: 6.5, fosse: 4.0, highcross: 5.8, kingpower: 7.0, ema: 9.5 },
  loughborough: { city: 11.5, railway: 11.8, lri: 12.0, dmu: 11.8, uol: 12.0, fosse: 13.5, highcross: 11.5, kingpower: 12.5, ema: 17.5 },
  hinckley: { city: 12.5, railway: 12.8, lri: 13.0, dmu: 12.8, uol: 13.0, fosse: 10.5, highcross: 12.2, kingpower: 13.5, ema: 21.5 },
}

function calcMileageFare(miles: number): number {
  let fare = 0
  if (miles <= 1) {
    fare = 4.0
  } else if (miles <= 4) {
    fare = 4.0 + (miles - 1) * 1.6
  } else if (miles <= 10) {
    fare = 4.0 + (4 - 1) * 1.6 + (miles - 4) * 2.1
  } else {
    fare = 4.0 + (4 - 1) * 1.6 + (10 - 4) * 2.1 + (miles - 10) * 1.6
  }
  fare = Math.round(fare * 10) / 10
  return Math.max(5.0, fare)
}

const fmt = (n: number) => `£${Math.round(n)}`

type TabId = "local" | "airport" | "longdist"

const FareEstimator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("local")
  const [localPrice, setLocalPrice] = useState<string>("£0")
  const [localDetails, setLocalDetails] = useState<[string, string][]>([])
  const [showLocalResult, setShowLocalResult] = useState(false)

  const [apPrice, setApPrice] = useState<string>("£0")
  const [apDetails, setApDetails] = useState<[string, string][]>([])
  const [showApResult, setShowApResult] = useState(false)

  const [ldPrice, setLdPrice] = useState<string>("£0")
  const [ldDetails, setLdDetails] = useState<[string, string][]>([])
  const [showLdResult, setShowLdResult] = useState(false)

  const [selectedAirport, setSelectedAirport] = useState<Airport>({
    code: "EMA",
    name: "East Midlands",
    car: 40,
    minibus: 60,
  })

  const handleCalcLocal = (form: HTMLFormElement) => {
    const from = (form.elements.namedItem("local-from") as HTMLSelectElement).value
    const to = (form.elements.namedItem("local-to") as HTMLSelectElement).value
    const night = (form.elements.namedItem("local-night") as HTMLInputElement).checked

    const fromSelect = form.elements.namedItem("local-from") as HTMLSelectElement
    const toSelect = form.elements.namedItem("local-to") as HTMLSelectElement

    if (!from || !to) {
      alert("Please select pickup and destination")
      return
    }

    if (to === "ema") {
      setLocalPrice("£40")
      setLocalDetails([
        ["From", fromSelect.selectedOptions[0].text],
        ["To", "East Midlands Airport"],
        ["Vehicle", "Standard saloon (up to 4 passengers)"],
        ["Price type", "Fixed airport tariff"],
        ["Parking charges", "Not included"],
      ])
      setShowLocalResult(true)
      return
    }

    const miles = DIST[from]?.[to]
    if (!miles) {
      alert("Distance not available for this combination")
      return
    }

    let price = calcMileageFare(miles)
    if (night) price *= 1.15
    price = Math.max(5.0, price)
    const low = Math.round(price)
    const high = Math.round(price * 1.08)

    setLocalPrice(low === high ? `£${low}` : `£${low}–£${high}`)
    setLocalDetails([
      ["From", fromSelect.selectedOptions[0].text],
      ["To", toSelect.selectedOptions[0].text],
      ["Approx distance", `~${miles} miles`],
      ["Vehicle", "Standard saloon (up to 4 passengers)"],
      ["Time", night ? "Late night rate applied (+15%)" : "Standard rate"],
    ])
    setShowLocalResult(true)
  }

  const handleCalcAirport = (form: HTMLFormElement) => {
    const fromSelect = form.elements.namedItem("ap-from") as HTMLSelectElement
    const paxType = (form.elements.namedItem("ap-pax") as HTMLSelectElement).value as "car" | "minibus"

    const distAdj = parseFloat(fromSelect.selectedOptions[0].dataset.dist || "0") * 0.3
    const basePrice = paxType === "minibus" ? selectedAirport.minibus : selectedAirport.car
    const price = basePrice + distAdj
    const vehicleLabel = paxType === "minibus" ? "6/8-seater Minibus" : "Standard Saloon (1–4 seats)"

    setApPrice(fmt(price))
    setApDetails([
      ["Airport", `${selectedAirport.name} (${selectedAirport.code})`],
      ["From", fromSelect.selectedOptions[0].text],
      ["Vehicle", vehicleLabel],
      ["Parking charges", "Not included"],
      ["Includes", "Flight monitoring · meet & greet available"],
      ["Return trip", "Book together for best price"],
    ])
    setShowApResult(true)
  }

  const handleCalcLongDist = (form: HTMLFormElement) => {
    const toSelect = form.elements.namedItem("ld-to") as HTMLSelectElement
    const miles = parseFloat(toSelect.selectedOptions[0].dataset.miles || "0")
    const price = calcMileageFare(miles)
    const low = Math.round(price * 0.97)
    const high = Math.round(price * 1.03)

    setLdPrice(`£${low}–£${high}`)
    setLdDetails([
      ["Destination", toSelect.selectedOptions[0].text],
      ["Approx distance", `~${miles} miles`],
      ["Vehicle", "Standard saloon (up to 4 passengers)"],
      ["Pricing", "Estimate — fixed price confirmed at booking"],
      ["Larger vehicle?", "Call or use booking form for quote"],
    ])
    setShowLdResult(true)
  }

  return (
    <section className="py-16 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
              Fare Estimator – Leicester & UK
            </h2>
            <p className="text-lg text-[#2E3C44] mb-4">
              Get an instant estimate for your local journey, airport transfer or long-distance trip.
            </p>
            <p className="text-sm text-[#4B5563] mb-4">
              These are guide prices based on our tariff and typical routing. The exact fare will be confirmed when you book.
            </p>
          </div>
          <div>
            <div className="widget">
              <div className="widget-head">
                <div className="widget-icon">£</div>
                <div>
                  <h2>Fare Estimator</h2>
                  <p>Aylestone Taxis · Leicester</p>
                </div>
              </div>
              <div className="widget-body">
                <div className="tabs">
                  <button
                    className={`tab-btn ${activeTab === "local" ? "active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab("local")}
                  >
                    Local Journey
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "airport" ? "active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab("airport")}
                  >
                    Airport Transfer
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "longdist" ? "active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab("longdist")}
                  >
                    Long Distance
                  </button>
                </div>

                {activeTab === "local" && (
                  <form
                    id="tab-local"
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleCalcLocal(e.currentTarget)
                    }}
                  >
                    <div className="parking-note">
                      🚗 <strong>Standard saloon car (up to 4 passengers).</strong> Need a larger vehicle?{" "}
                      <a
                        href="https://aylestonekings.webbooker.icabbi.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#0F0D3E", fontWeight: 700 }}
                      >
                        Use our booking form
                      </a>{" "}
                      for 6 &amp; 8-seater quotes.
                    </div>
                    <div className="form-group">
                      <label>Pickup Area</label>
                      <select name="local-from" defaultValue="">
                        <option value="">Select area...</option>
                        <optgroup label="Leicester City">
                          <option value="city">City Centre</option>
                          <option value="aylestone">Aylestone</option>
                          <option value="eyres_monsell">Eyres Monsell</option>
                          <option value="glen_parva">Glen Parva</option>
                          <option value="saffron_lane">Saffron Lane</option>
                          <option value="clarendon">Clarendon Park</option>
                          <option value="knighton">Knighton</option>
                          <option value="highfields">Highfields</option>
                          <option value="belgrave">Belgrave</option>
                          <option value="hamilton">Hamilton</option>
                          <option value="beaumont">Beaumont Leys</option>
                        </optgroup>
                        <optgroup label="Leicester Suburbs">
                          <option value="oadby">Oadby</option>
                          <option value="wigston">Wigston</option>
                          <option value="birstall">Birstall</option>
                          <option value="syston">Syston</option>
                          <option value="thurmaston">Thurmaston</option>
                          <option value="glenfield">Glenfield</option>
                        </optgroup>
                        <optgroup label="Outer Areas">
                          <option value="narborough">Narborough</option>
                          <option value="blaby">Blaby</option>
                          <option value="enderby">Enderby</option>
                          <option value="loughborough">Loughborough</option>
                          <option value="hinckley">Hinckley</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Destination</label>
                      <select name="local-to" defaultValue="">
                        <option value="">Select destination...</option>
                        <option value="city">Leicester City Centre</option>
                        <option value="railway">Leicester Railway Station</option>
                        <option value="lri">Leicester Royal Infirmary</option>
                        <option value="dmu">De Montfort University</option>
                        <option value="uol">University of Leicester</option>
                        <option value="fosse">Fosse Park</option>
                        <option value="highcross">Highcross Shopping Centre</option>
                        <option value="kingpower">King Power Stadium</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="checkbox-group">
                        <input type="checkbox" id="local-night" name="local-night" />
                        <label htmlFor="local-night">Late night / early morning (11pm–6am)</label>
                      </div>
                    </div>
                    <button className="calc-btn" type="submit">
                      Get Fare Estimate →
                    </button>
                    <div className={`result ${showLocalResult ? "show" : ""}`} id="local-result">
                      <div className="result-top">
                        <div>
                          <div className="result-label">Estimated Fare</div>
                          <div className="result-price" id="local-price">
                            {localPrice}
                          </div>
                          <div className="result-fixed">Fixed price · no hidden charges</div>
                        </div>
                        <div className="result-badge">FIXED FARE</div>
                      </div>
                      <div className="result-details" id="local-details">
                        {localDetails.map(([k, v]) => (
                          <div className="detail-row" key={k}>
                            <span className="dk">{k}</span>
                            <span className="dv">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="result-btns">
                        <a
                          href="https://aylestonekings.webbooker.icabbi.com/"
                          className="btn-book"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Book Online Now
                        </a>
                        <a href="tel:01162338888" className="btn-call">
                          📞 Call
                        </a>
                      </div>
                    </div>
                  </form>
                )}

                {activeTab === "airport" && (
                  <form
                    id="tab-airport"
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleCalcAirport(e.currentTarget)
                    }}
                  >
                    <div className="parking-note">
                      ⚠️ <strong>Please note:</strong> Parking charges at airports are not included in these fares.
                    </div>
                    <div className="form-group">
                      <label>Your Area / Town</label>
                      <select name="ap-from" defaultValue="city">
                        <option value="city" data-dist="0">
                          Leicester City Centre
                        </option>
                        <option value="oadby" data-dist="4">
                          Oadby
                        </option>
                        <option value="wigston" data-dist="5">
                          Wigston
                        </option>
                        <option value="birstall" data-dist="8">
                          Birstall
                        </option>
                        <option value="loughborough" data-dist="11">
                          Loughborough
                        </option>
                        <option value="hinckley" data-dist="14">
                          Hinckley
                        </option>
                        <option value="narborough" data-dist="9">
                          Narborough
                        </option>
                        <option value="market_harborough" data-dist="16">
                          Market Harborough
                        </option>
                        <option value="melton" data-dist="16">
                          Melton Mowbray
                        </option>
                        <option value="coalville" data-dist="14">
                          Coalville
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Select Airport</label>
                    </div>
                    <div className="airport-grid">
                      <button
                        type="button"
                        className={`airport-card ${selectedAirport.code === "EMA" ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAirport({
                            code: "EMA",
                            name: "East Midlands",
                            car: 40,
                            minibus: 60,
                          })
                        }
                      >
                        <div className="ac-code">EMA</div>
                        <div className="ac-name">East Midlands</div>
                        <div className="ac-price">Car from £40</div>
                        <div className="ac-minibus">Minibus from £60</div>
                      </button>
                      <button
                        type="button"
                        className={`airport-card ${selectedAirport.code === "BHX" ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAirport({
                            code: "BHX",
                            name: "Birmingham",
                            car: 60,
                            minibus: 80,
                          })
                        }
                      >
                        <div className="ac-code">BHX</div>
                        <div className="ac-name">Birmingham</div>
                        <div className="ac-price">Car from £60</div>
                        <div className="ac-minibus">Minibus from £80</div>
                      </button>
                      <button
                        type="button"
                        className={`airport-card ${selectedAirport.code === "LHR" ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAirport({
                            code: "LHR",
                            name: "Heathrow",
                            car: 150,
                            minibus: 200,
                          })
                        }
                      >
                        <div className="ac-code">LHR</div>
                        <div className="ac-name">Heathrow</div>
                        <div className="ac-price">Car from £150</div>
                        <div className="ac-minibus">Minibus from £200</div>
                      </button>
                      <button
                        type="button"
                        className={`airport-card ${selectedAirport.code === "LGW" ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAirport({
                            code: "LGW",
                            name: "Gatwick",
                            car: 200,
                            minibus: 260,
                          })
                        }
                      >
                        <div className="ac-code">LGW</div>
                        <div className="ac-name">Gatwick</div>
                        <div className="ac-price">Car from £200</div>
                        <div className="ac-minibus">Minibus from £260</div>
                      </button>
                      <button
                        type="button"
                        className={`airport-card ${selectedAirport.code === "LTN" ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAirport({
                            code: "LTN",
                            name: "Luton",
                            car: 120,
                            minibus: 160,
                          })
                        }
                      >
                        <div className="ac-code">LTN</div>
                        <div className="ac-name">Luton</div>
                        <div className="ac-price">Car from £120</div>
                        <div className="ac-minibus">Minibus from £160</div>
                      </button>
                      <button
                        type="button"
                        className={`airport-card ${selectedAirport.code === "MAN" ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAirport({
                            code: "MAN",
                            name: "Manchester",
                            car: 150,
                            minibus: 200,
                          })
                        }
                      >
                        <div className="ac-code">MAN</div>
                        <div className="ac-name">Manchester</div>
                        <div className="ac-price">Car from £150</div>
                        <div className="ac-minibus">Minibus from £200</div>
                      </button>
                      <button
                        type="button"
                        className={`airport-card ${selectedAirport.code === "STN" ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAirport({
                            code: "STN",
                            name: "Stansted",
                            car: 150,
                            minibus: 200,
                          })
                        }
                      >
                        <div className="ac-code">STN</div>
                        <div className="ac-name">Stansted</div>
                        <div className="ac-price">Car from £150</div>
                        <div className="ac-minibus">Minibus from £200</div>
                      </button>
                    </div>
                    <div className="form-group">
                      <label>Passengers / Vehicle</label>
                      <select name="ap-pax" defaultValue="car">
                        <option value="car">1–4 passengers (saloon car)</option>
                        <option value="minibus">5–8 passengers (6/8-seater minibus)</option>
                      </select>
                    </div>
                    <button className="calc-btn" type="submit">
                      Get Airport Fare →
                    </button>
                    <div className={`result ${showApResult ? "show" : ""}`} id="ap-result">
                      <div className="result-top">
                        <div>
                          <div className="result-label">Fixed Airport Fare</div>
                          <div className="result-price" id="ap-price">
                            {apPrice}
                          </div>
                          <div className="result-fixed">Parking charges not included</div>
                        </div>
                        <div className="result-badge">FIXED</div>
                      </div>
                      <div className="result-details" id="ap-details">
                        {apDetails.map(([k, v]) => (
                          <div className="detail-row" key={k}>
                            <span className="dk">{k}</span>
                            <span className="dv">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="result-btns">
                        <a
                          href="https://aylestonekings.webbooker.icabbi.com/"
                          className="btn-book"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Book Airport Transfer
                        </a>
                        <a href="tel:01162338888" className="btn-call">
                          📞 Call
                        </a>
                      </div>
                    </div>
                  </form>
                )}

                {activeTab === "longdist" && (
                  <form
                    id="tab-longdist"
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleCalcLongDist(e.currentTarget)
                    }}
                  >
                    <div className="parking-note">
                      🚗 <strong>Standard saloon car (up to 4 passengers).</strong> Need a larger vehicle?{" "}
                      <a
                        href="https://aylestonekings.webbooker.icabbi.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#0F0D3E", fontWeight: 700 }}
                      >
                        Use our booking form
                      </a>{" "}
                      for 6 &amp; 8-seater quotes.
                    </div>
                    <div className="form-group">
                      <label>To (UK destination)</label>
                      <select name="ld-to" defaultValue="birmingham">
                        <option value="birmingham" data-miles="38">
                          Birmingham City Centre
                        </option>
                        <option value="nottingham" data-miles="30">
                          Nottingham
                        </option>
                        <option value="coventry" data-miles="25">
                          Coventry
                        </option>
                        <option value="derby" data-miles="30">
                          Derby
                        </option>
                        <option value="london" data-miles="100">
                          London
                        </option>
                        <option value="manchester" data-miles="90">
                          Manchester
                        </option>
                        <option value="milton_keynes" data-miles="55">
                          Milton Keynes
                        </option>
                        <option value="cambridge" data-miles="80">
                          Cambridge
                        </option>
                        <option value="oxford" data-miles="70">
                          Oxford
                        </option>
                        <option value="bristol" data-miles="120">
                          Bristol
                        </option>
                      </select>
                    </div>
                    <button className="calc-btn" type="submit">
                      Estimate Long Distance Fare →
                    </button>
                    <div className={`result ${showLdResult ? "show" : ""}`} id="ld-result">
                      <div className="result-top">
                        <div>
                          <div className="result-label">Estimated Fare</div>
                          <div className="result-price" id="ld-price">
                            {ldPrice}
                          </div>
                          <div className="result-fixed">Fixed price confirmed at booking</div>
                        </div>
                        <div className="result-badge">ESTIMATE</div>
                      </div>
                      <div className="result-details" id="ld-details">
                        {ldDetails.map(([k, v]) => (
                          <div className="detail-row" key={k}>
                            <span className="dk">{k}</span>
                            <span className="dv">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="result-btns">
                        <a href="tel:01162338888" className="btn-book">
                          📞 Call for Exact Quote
                        </a>
                        <a href="https://wa.me/447888873795" className="btn-call" target="_blank" rel="noreferrer">
                          WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="note">
                      Long distance fares are estimates based on mileage. Call 0116 2338888 or WhatsApp for a confirmed
                      fixed price.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-[0.68rem] text-[#9ca3af]">
        Fares are estimates. Exact price confirmed at booking. No surge pricing.
      </div>

      <style jsx>{`
        .widget {
          max-width: 520px;
          margin: 0 auto;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.12);
          overflow: hidden;
        }
        .widget-head {
          background: #0f0d3e;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .widget-icon {
          width: 44px;
          height: 44px;
          background: #06a0a6;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #ffffff;
        }
        .widget-head h2 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .widget-head p {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.75rem;
          margin-top: 1px;
        }
        .widget-body {
          padding: 1.5rem;
        }
        .tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 1.5rem;
          background: #f0f4f8;
          padding: 4px;
          border-radius: 10px;
        }
        .tab-btn {
          flex: 1;
          background: none;
          border: none;
          padding: 8px 10px;
          border-radius: 7px;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s;
        }
        .tab-btn.active {
          background: #fff;
          color: #0f0d3e;
          font-weight: 600;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          letter-spacing: 0.3px;
        }
        select,
        input[type="text"],
        input[type="number"] {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #0f0d3e;
          background: #fff;
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
        }
        select:focus,
        input:focus {
          border-color: #06a0a6;
        }
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .checkbox-group input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: #06a0a6;
          cursor: pointer;
        }
        .checkbox-group label {
          margin: 0;
          font-size: 0.78rem;
          color: #6b7280;
          font-weight: 400;
          cursor: pointer;
        }
        .calc-btn {
          width: 100%;
          background: #06a0a6;
          color: #fff;
          border: none;
          padding: 13px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.5rem;
          letter-spacing: 0.3px;
        }
        .calc-btn:hover {
          background: #058a8f;
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(6, 160, 166, 0.4);
        }
        .calc-btn:active {
          transform: translateY(0);
        }
        .result {
          display: none;
          margin-top: 1.25rem;
          border: 1.5px solid #06a0a6;
          border-radius: 12px;
          overflow: hidden;
        }
        .result.show {
          display: block;
          animation: slideIn 0.3s ease;
        }
        .result-top {
          background: #f0fafa;
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #b2e4e6;
        }
        .result-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: #0f0d3e;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .result-price {
          font-size: 2rem;
          font-weight: 800;
          color: #0f0d3e;
        }
        .result-fixed {
          font-size: 0.7rem;
          color: #6b7280;
          margin-top: 2px;
        }
        .result-badge {
          background: #0f0d3e;
          color: #06a0a6;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }
        .result-details {
          padding: 1rem 1.25rem;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          font-size: 0.78rem;
          border-bottom: 1px solid #f3f4f6;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-row .dk {
          color: #6b7280;
        }
        .detail-row .dv {
          color: #0f0d3e;
          font-weight: 600;
        }
        .result-btns {
          padding: 0 1.25rem 1.25rem;
          display: flex;
          gap: 8px;
        }
        .btn-book {
          flex: 1;
          background: #0f0d3e;
          color: #fff;
          border: none;
          padding: 11px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
          text-align: center;
        }
        .btn-book:hover {
          background: #1a1860;
        }
        .btn-call {
          background: #f0f4f8;
          color: #0f0d3e;
          border: none;
          padding: 11px 16px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
          text-align: center;
          white-space: nowrap;
        }
        .btn-call:hover {
          background: #e5e7eb;
        }
        .note {
          background: #f0fafa;
          border: 1px solid #b2e4e6;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 0.72rem;
          color: #0f0d3e;
          line-height: 1.6;
          margin-top: 1rem;
        }
        .airport-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 1rem;
        }
        .airport-card {
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          padding: 12px;
          cursor: pointer;
          transition: all 0.2s;
          background: #fff;
          text-align: left;
        }
        .airport-card:hover {
          border-color: #06a0a6;
          background: #f0fafa;
        }
        .airport-card.selected {
          border-color: #06a0a6;
          background: #f0fafa;
          box-shadow: 0 0 0 3px rgba(6, 160, 166, 0.15);
        }
        .ac-code {
          font-weight: 800;
          font-size: 1rem;
          color: #0f0d3e;
        }
        .ac-name {
          font-size: 0.68rem;
          color: #6b7280;
          margin-top: 1px;
        }
        .ac-price {
          font-size: 0.72rem;
          font-weight: 700;
          color: #059669;
          margin-top: 4px;
        }
        .ac-minibus {
          font-size: 0.65rem;
          color: #6b7280;
          margin-top: 1px;
        }
        .parking-note {
          background: #fff8e1;
          border: 1px solid #ffe082;
          border-radius: 8px;
          padding: 0.65rem 1rem;
          font-size: 0.72rem;
          color: #7c5700;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default FareEstimator

