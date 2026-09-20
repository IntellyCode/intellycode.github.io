import Section from '../components/Section'
import EntryCard from '../components/EntryCard'
import { caseStudies } from '../content'

export default function CaseStudies() {
  return (
    <Section id="case-studies" tone="white" title="Case Studies" subtitle="A closer look at how a hard problem became a working system.">
      <div className="entry-list">
        {caseStudies.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </Section>
  )
}
