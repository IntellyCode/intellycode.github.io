import { useLocation } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { site } from '../site'

type Props = { title: string; description: string; schema?: object }

export default function Seo({ title, description, schema }: Props) {
  const { pathname } = useLocation()
  const canonical = site.origin + (pathname === '/' ? '/' : pathname.replace(/\.html$|\/$/, ''))

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={site.avatar} />
      <meta name="twitter:card" content="summary" />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Head>
  )
}
