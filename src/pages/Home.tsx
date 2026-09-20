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
      <Seo title={`${site.name} — ${site.role}`} description={site.description} />
      <Hero />
      <CaseStudies />
      <Testimonials />
      <Work />
      <Contact />
    </>
  )
}
