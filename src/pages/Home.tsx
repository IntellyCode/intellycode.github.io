import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import CaseStudies from '../sections/CaseStudies'
import Testimonials from '../sections/Testimonials'
import Work from '../sections/Work'
import Contact from '../sections/Contact'
import { site } from '../site'

export default function Home() {
  return (
    <>
      <Seo
        title={`${site.name} — ${site.role}`}
        description={site.description}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.name,
          jobTitle: site.role,
          description: site.description,
          url: site.origin,
          image: site.avatar,
          email: `mailto:${site.email}`,
          sameAs: [site.linkedin, site.github],
        }}
      />
      <Hero />
      <CaseStudies />
      <Testimonials />
      <Work />
      <Contact />
    </>
  )
}
