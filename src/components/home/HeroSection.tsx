import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  imageSrc: string
  imageAlt?: string
  headline: string
  subheadline?: string
  ctas?: {
    label: string
    href: string
  }[]
}

export default function HeroSection({
  imageSrc,
  imageAlt = '',
  headline,
  subheadline,
  ctas = [],
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background image — rotated and full-bleed */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-[160%] h-[160%]"
          style={{ transform: 'rotate(28.84deg)' }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Dark overlay — very subtle, preserves image quality */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {subheadline && (
          <p className="text-white text-sm font-bold uppercase tracking-[0.4em] mb-4 opacity-90">
            {subheadline}
          </p>
        )}
        <h1 className="text-white font-bold uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
        >
          {headline}
        </h1>
      </div>

      {/* Bottom CTAs */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        {/* Left — copyright */}
        <span className="text-white text-xs font-bold uppercase tracking-wider opacity-80">
          2026 ® All Rights Reserved
        </span>

        {/* Center/Right — CTA pills */}
        <div className="flex items-center gap-3">
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className="bg-[rgba(255,255,255,0.2)] backdrop-blur-sm rounded-full px-6 py-2.5 text-white text-sm font-bold uppercase tracking-wider whitespace-nowrap hover:bg-[rgba(255,255,255,0.35)] transition-colors"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
