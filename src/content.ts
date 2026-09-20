import type { ComponentType } from 'react'

export type Frontmatter = {
  title: string
  description: string
  summary: string
  date?: string
  minutes: number
  icon?: string
  order?: number
}

export type Entry = {
  slug: string
  kind: 'case-studies' | 'blog'
  meta: Frontmatter
  Body: ComponentType<{ components?: object }>
}

type MdxModule = { default: Entry['Body']; frontmatter: Frontmatter }

function collect(modules: Record<string, MdxModule>, kind: Entry['kind']): Entry[] {
  return Object.entries(modules).map(([path, module]) => ({
    slug: path.split('/').pop()!.replace('.mdx', ''),
    kind,
    meta: module.frontmatter,
    Body: module.default,
  }))
}

export const caseStudies = collect(
  import.meta.glob<MdxModule>('./content/case-studies/*.mdx', { eager: true }),
  'case-studies',
).sort((a, b) => a.meta.order! - b.meta.order!)

export const posts = collect(
  import.meta.glob<MdxModule>('./content/blog/*.mdx', { eager: true }),
  'blog',
).sort((a, b) => b.meta.date!.localeCompare(a.meta.date!))
