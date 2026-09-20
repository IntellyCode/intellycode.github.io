import Seo from '../components/Seo'
import EntryCard from '../components/EntryCard'
import { posts } from '../content'
import { site } from '../site'

export default function BlogIndex() {
  return (
    <section className="section-white py-5">
      <Seo title={`Blog — ${site.name}`} description="Notes on engineering, physics, and software." />
      <div className="container">
        <div className="pt-md-4 mb-5" style={{ maxWidth: 640 }}>
          <h1 className="section-title mb-2">Notes</h1>
          <p className="text-body-secondary fs-6 mb-0">Notes on engineering, physics, and software.</p>
        </div>
        <div className="row g-3 g-lg-4">
          {posts.map((entry) => (
            <div key={entry.slug} className="col-md-6">
              <EntryCard entry={entry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
