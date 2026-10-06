'use client'

import { useHalloweenTheme } from './HalloweenThemeProvider'

/**
 * Halloween decoration spaced down the page - bat flocks, single bats and the
 * odd ghost. Deliberately sparse: roughly one every 7% of the page, sides
 * alternating, kept to the outer margins so it reads as seasonal trim rather
 * than clutter.
 *
 * Decorative only: aria-hidden, no pointer events, capped to a smaller size on
 * phones, and animation stops for visitors who prefer reduced motion
 * (see styles/halloween.css).
 *
 * Positions are fixed values rather than Math.random() - random values would
 * differ between the server and client render and cause a hydration mismatch.
 */
type Decor = {
  src: string
  top: string
  left?: string
  right?: string
  w: number
  o: number
  d: string
  sway?: boolean
}

const DECOR: Decor[] = [
  { src: '/halloween/bats-276128.svg', top: '3.5%', right: '5.5%', w: 78, o: 0.72, d: '0.4s' },
  { src: '/halloween/bats/bat-09.png', top: '9.8%', left: '4.2%', w: 52, o: 0.7, d: '2.1s' },
  { src: '/halloween/bats-flying-337063.svg', top: '16.5%', right: '7.5%', w: 66, o: 0.68, d: '4.3s' },
  { src: '/halloween/ghost-with-bag-black-and-white-1225.svg', top: '23.5%', left: '6.5%', w: 58, o: 0.62, d: '1.2s', sway: true },
  { src: '/halloween/bats/bat-18.png', top: '30.5%', right: '4.5%', w: 60, o: 0.74, d: '3.5s' },
  { src: '/halloween/bats-276128.svg', top: '37.5%', left: '5%', w: 84, o: 0.7, d: '0.9s' },
  { src: '/halloween/bats/bat-03.png', top: '44.5%', right: '8%', w: 56, o: 0.72, d: '5.1s' },
  { src: '/halloween/bat-2699.svg', top: '51.5%', left: '7%', w: 50, o: 0.66, d: '2.7s' },
  { src: '/halloween/bats-flying-337063.svg', top: '58.5%', right: '5%', w: 70, o: 0.7, d: '1.6s' },
  { src: '/halloween/bats/bat-15.png', top: '65.5%', left: '4.5%', w: 58, o: 0.73, d: '4.8s' },
  { src: '/halloween/ghost-with-bag-black-and-white-1225.svg', top: '72.5%', right: '6.5%', w: 56, o: 0.6, d: '3.1s', sway: true },
  { src: '/halloween/bats-276128.svg', top: '79.5%', left: '6%', w: 76, o: 0.7, d: '1.4s' },
  { src: '/halloween/bats/bat-06.png', top: '86.5%', right: '5.5%', w: 54, o: 0.72, d: '5.6s' },
  { src: '/halloween/bats-flying-337063.svg', top: '93.5%', left: '5.5%', w: 64, o: 0.68, d: '2.3s' },
]

export default function HalloweenFloatingElements() {
  const { isHalloweenActive } = useHalloweenTheme()

  if (!isHalloweenActive) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {DECOR.map((item, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={item.src}
          alt=""
          className={`halloween-silhouette halloween-floating-bat absolute ${
            item.sway ? 'halloween-sway' : 'halloween-drift'
          }`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            width: item.w,
            opacity: item.o,
            animationDelay: item.d,
          }}
        />
      ))}
    </div>
  )
}
