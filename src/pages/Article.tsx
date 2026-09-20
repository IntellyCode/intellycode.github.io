import { MDXProvider } from '@mdx-js/react'
import Seo from '../components/Seo'
import EntryCard from '../components/EntryCard'
import { mdxComponents } from '../components/mdx'
import type { Entry } from '../content'
import { site } from '../site'
import './Article.scss'

type Props = { entry: Entry; series: Entry[] }

export default function Article({ entry, series }: Props) {
  const { meta, Body } = entry
  const next = series[(series.indexOf(entry) + 1) % series.length]
  const isBlog = entry.kind === 'blog'

  return (
    <article className="section-white py-5">
      <Seo title={`${meta.title} — ${site.name}`} description={meta.description} />
      <div aria-hidden className="read-progress" />
      <div className="container pt-md-4" style={{ maxWidth: 768 }}>
        <a href={isBlog ? '/blog' : '/#case-studies'} className="d-inline-flex gap-1 small text-body-secondary mb-4">
          <i className="bi bi-arrow-left" /> {isBlog ? 'All posts' : 'All case studies'}
        </a>
        <p className="small text-uppercase fw-semibold text-primary mb-2" style={{ letterSpacing: '.14em' }}>
          {isBlog ? meta.date : 'Case study'} · {meta.minutes} min read
        </p>
        <h1 className="article-title mb-4">{meta.title}</h1>
        <p className="summary mb-5">{meta.summary}</p>
        <div className="prose">
          <MDXProvider components={mdxComponents}>
            <Body />
          </MDXProvider>
        </div>
        {series.length > 1 && (
          <div className="mt-5 pt-5 border-top">
            <p className="small text-uppercase fw-semibold text-body-secondary" style={{ letterSpacing: '.14em' }}>
              Next {isBlog ? 'post' : 'case study'}
            </p>
            <EntryCard entry={next} />
          </div>
        )}
      </div>
    </article>
  )
}
