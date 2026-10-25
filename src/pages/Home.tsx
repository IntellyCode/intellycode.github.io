import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import CaseStudies from '../sections/CaseStudies'
import Offers from '../sections/Offers'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import { site } from '../site'

export default function Home() {
  return (
    <>
      <Seo
        title={site.name}
        shareTitle={site.name}
        description={site.description}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.name,
          description: site.description,
          url: site.origin,
          image: site.avatar,
          email: `mailto:${site.email}`,
          sameAs: [site.linkedin, site.github],
        }}
      />
      <Hero />
      <CaseStudies />
      <Offers />
      <Testimonials />
      <Contact />
    </>
  )
}
