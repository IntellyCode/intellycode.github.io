import { Head } from 'vite-react-ssg'
import { site } from '../site'

export default function Redirect({ to }: { to: string }) {
  return (
    <section className="section-white py-5">
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <link rel="canonical" href={site.origin + to} />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="container py-md-5">
        <p className="text-body-secondary">
          This page lives at <a href={to}>{site.origin + to}</a>.
        </p>
      </div>
    </section>
  )
}
