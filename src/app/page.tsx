import Nav from '@/components/layout/Nav'
import HeroSection from '@/components/home/HeroSection'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <HeroSection
        imageSrc="/images/hero-trans.jpg"
        imageAlt="Nooon TRANS collection"
        subheadline="Nooon Est.2024"
        headline="TRANS"
        ctas={[
          { label: 'Shop the Collection', href: '/collections/trans' },
          { label: 'Discover the Campaign', href: '/campaigns/trans' },
          { label: 'Chat with Our Representatives', href: '/contact' },
        ]}
      />
    </main>
  )
}
