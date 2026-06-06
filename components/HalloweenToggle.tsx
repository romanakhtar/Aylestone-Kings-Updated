'use client'

import { useHalloweenTheme } from './HalloweenThemeProvider'

export default function HalloweenToggle() {
  const { isHalloweenActive, toggleHalloween } = useHalloweenTheme()

  return (
    <button
      onClick={toggleHalloween}
      className={`fixed bottom-4 left-4 z-50 px-4 py-2 rounded-lg font-semibold text-sm transition-[transform,opacity] duration-200 shadow-lg ${
        isHalloweenActive 
          ? 'bg-[#FF7B00] text-white hover:bg-[#E65100]' 
          : 'bg-[#06A0A6] text-white hover:bg-[#0F0D3E]'
      }`}
      title="Toggle Halloween Theme (for testing)"
    >
      {isHalloweenActive ? '🎃 Halloween ON' : 'Halloween OFF'}
    </button>
  )
}

