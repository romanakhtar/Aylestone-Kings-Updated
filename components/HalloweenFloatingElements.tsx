'use client'

import { useHalloweenTheme } from './HalloweenThemeProvider'

/**
 * Halloween decoration scattered down the whole page - bats in a range of
 * poses, bat flocks, swarms and the odd ghost.
 *
 * Decorative only: aria-hidden, no pointer events, hidden on small screens,
 * and animation stops for visitors who prefer reduced motion
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
  { src: '/halloween/bats/bat-09.png', top: '2.9%', left: '5.5%', w: 104, o: 0.85, d: '0.1s' },
  { src: '/halloween/bats/bat-05.png', top: '4.5%', right: '22.7%', w: 68, o: 0.84, d: '1.7s' },
  { src: '/halloween/ghost-with-bag-black-and-white-1225.svg', top: '8.3%', left: '13%', w: 67, o: 0.75, d: '3.2s', sway: true },
  { src: '/halloween/bats-276128.svg', top: '9.2%', right: '5%', w: 113, o: 0.84, d: '2.7s' },
  { src: '/halloween/bats-flying-337063.svg', top: '12.4%', left: '21.6%', w: 87, o: 0.76, d: '6.7s' },
  { src: '/halloween/bats/bat-14.png', top: '13.2%', right: '24.8%', w: 98, o: 0.72, d: '2s' },
  { src: '/halloween/bats-flying-337063.svg', top: '15.9%', left: '28.1%', w: 80, o: 0.78, d: '0.8s' },
  { src: '/halloween/bats/bat-03.png', top: '18%', right: '8.3%', w: 89, o: 0.79, d: '3.9s' },
  { src: '/halloween/bats-flying-337063.svg', top: '21.2%', left: '22.8%', w: 72, o: 0.8, d: '6.7s' },
  { src: '/halloween/bats/bat-15.png', top: '21.7%', right: '35.5%', w: 78, o: 0.77, d: '6.4s' },
  { src: '/halloween/bats/bat-02.png', top: '24.2%', left: '22.1%', w: 98, o: 0.72, d: '2.6s' },
  { src: '/halloween/bats/bat-17.png', top: '26.4%', right: '18.5%', w: 61, o: 0.84, d: '1s' },
  { src: '/halloween/bats/bat-08.png', top: '29.3%', left: '24.6%', w: 81, o: 0.84, d: '1.7s' },
  { src: '/halloween/bats-276128.svg', top: '32.3%', right: '30.4%', w: 109, o: 0.84, d: '2.4s' },
  { src: '/halloween/bats-flying-337063.svg', top: '34%', left: '5.3%', w: 72, o: 0.72, d: '4.7s' },
  { src: '/halloween/bats/bat-18.png', top: '36%', right: '25.6%', w: 76, o: 0.85, d: '1.2s' },
  { src: '/halloween/bats/bat-03.png', top: '37%', left: '10.4%', w: 57, o: 0.76, d: '2.4s' },
  { src: '/halloween/bats-276128.svg', top: '39.3%', right: '5.2%', w: 109, o: 0.78, d: '2.3s' },
  { src: '/halloween/bats/bat-20.png', top: '42%', left: '31.7%', w: 105, o: 0.7, d: '5.5s' },
  { src: '/halloween/bats/bat-04.png', top: '44%', right: '7.6%', w: 52, o: 0.7, d: '0.1s' },
  { src: '/halloween/bats/bat-16.png', top: '46.6%', left: '4.6%', w: 104, o: 0.82, d: '0.9s' },
  { src: '/halloween/bats/bat-21.png', top: '49.7%', right: '22.2%', w: 52, o: 0.77, d: '3.4s' },
  { src: '/halloween/bats/bat-08.png', top: '50.1%', left: '24.8%', w: 54, o: 0.81, d: '6.9s' },
  { src: '/halloween/bats-276128.svg', top: '52.6%', right: '24.2%', w: 111, o: 0.74, d: '0.2s' },
  { src: '/halloween/bats/bat-07.png', top: '54.7%', left: '9.8%', w: 56, o: 0.78, d: '1.8s' },
  { src: '/halloween/bats/bat-06.png', top: '58.2%', right: '7.3%', w: 61, o: 0.72, d: '2.9s' },
  { src: '/halloween/bats/bat-06.png', top: '60.4%', left: '31.7%', w: 54, o: 0.83, d: '3.1s' },
  { src: '/halloween/bats/bat-09.png', top: '62%', right: '34%', w: 57, o: 0.73, d: '5.3s' },
  { src: '/halloween/bats/bat-15.png', top: '64.7%', left: '29.6%', w: 104, o: 0.73, d: '3.8s' },
  { src: '/halloween/bats/bat-09.png', top: '67.3%', right: '21.3%', w: 54, o: 0.73, d: '1.2s' },
  { src: '/halloween/bats/bat-15.png', top: '68.4%', left: '31.9%', w: 109, o: 0.81, d: '6.8s' },
  { src: '/halloween/bats-276128.svg', top: '70.5%', right: '10.7%', w: 83, o: 0.76, d: '6s' },
  { src: '/halloween/bats/bat-03.png', top: '73.7%', left: '26.8%', w: 111, o: 0.8, d: '2.7s' },
  { src: '/halloween/bats/bat-18.png', top: '75.7%', right: '20.9%', w: 109, o: 0.73, d: '3s' },
  { src: '/halloween/bats/bat-03.png', top: '77.3%', left: '20.6%', w: 107, o: 0.81, d: '4.9s' },
  { src: '/halloween/ghost-with-bag-black-and-white-1225.svg', top: '79.4%', right: '25.8%', w: 70, o: 0.72, d: '1.1s', sway: true },
  { src: '/halloween/bats-flying-337063.svg', top: '81.1%', left: '5.6%', w: 70, o: 0.68, d: '0s' },
  { src: '/halloween/bat-2699.svg', top: '83.2%', right: '12.3%', w: 68, o: 0.69, d: '5.3s' },
  { src: '/halloween/bat-2699.svg', top: '86.1%', left: '15.8%', w: 85, o: 0.83, d: '1.8s' },
  { src: '/halloween/ghost-with-bag-black-and-white-1225.svg', top: '87.9%', right: '23.6%', w: 70, o: 0.73, d: '5.8s', sway: true },
  { src: '/halloween/bats-flying-337063.svg', top: '91.1%', left: '12%', w: 91, o: 0.69, d: '0.2s' },
  { src: '/halloween/bats/bat-19.png', top: '92.7%', right: '18.6%', w: 54, o: 0.81, d: '3.3s' },
  { src: '/halloween/bats-flying-337063.svg', top: '95.6%', left: '7.3%', w: 81, o: 0.71, d: '2.7s' },
  { src: '/halloween/bats/bat-15.png', top: '96.5%', right: '31.9%', w: 56, o: 0.77, d: '2.5s' },
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
