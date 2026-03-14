'use client'

import Link from 'next/link'

const NAV_LINKS = [
  { label: 'New In', href: '/collections/new' },
  { label: 'Collections', href: '/collections' },
  { label: 'Campaigns', href: '/campaigns' },
  { label: 'Events', href: '/events' },
]

interface NavProps {
  cartCount?: number
}

export default function Nav({ cartCount = 0 }: NavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 pt-6">
      {/* Left — wordmark */}
      <div className="bg-[rgba(151,151,151,0.2)] rounded-[18px] px-5 py-3 backdrop-blur-sm">
        <Link href="/">
          <span className="text-white text-xs font-bold uppercase tracking-widest leading-tight block">
            Nooon Est.2024
          </span>
          <span className="text-white/40 text-[10px] tracking-[0.3em] leading-tight block mt-0.5">
            ·· ·· · ·· ·· · ·· ·
          </span>
        </Link>
      </div>

      {/* Center — nav links */}
      <nav className="bg-[rgba(255,255,255,0.2)] rounded-full px-8 py-2 backdrop-blur-sm">
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white text-sm font-bold uppercase tracking-wider whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right — search + cart */}
      <div className="flex items-center gap-3">
        <button className="bg-[rgba(151,151,151,0.2)] rounded-full px-5 py-2.5 backdrop-blur-sm">
          <span className="text-white text-sm font-bold uppercase tracking-wider">
            Search
          </span>
        </button>
        <button className="bg-[rgba(151,151,151,0.2)] rounded-full px-5 py-2.5 backdrop-blur-sm">
          <span className="text-white text-sm font-bold uppercase tracking-wider">
            Cart{cartCount > 0 && ` (${cartCount})`}
          </span>
        </button>
      </div>
    </header>
  )
}
