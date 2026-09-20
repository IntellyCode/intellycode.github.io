import { Head } from 'vite-react-ssg'
import { site } from '../site'

export default function Seo({ title, description }: { title: string; description: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={site.avatar} />
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}
