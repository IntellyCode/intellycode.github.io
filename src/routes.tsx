import type { RouteRecord } from 'vite-react-ssg'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Article from './pages/Article'
import BlogIndex from './pages/BlogIndex'
import Redirect from './pages/Redirect'
import { caseStudies, featuredCaseStudies, posts } from './content'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <BlogIndex /> },
      ...caseStudies.map((entry) => ({
        path: `case-studies/${entry.slug}`,
        element: <Article entry={entry} series={featuredCaseStudies} />,
      })),
      ...posts.map((entry) => ({
        path: `blog/${entry.slug}`,
        element: <Article entry={entry} series={posts} />,
      })),
      ...['shear-locking-fea', 'ai-delegation-outreach'].map((slug) => ({
        path: `case-studies/${slug}`,
        element: <Redirect to={`/blog/${slug}`} />,
      })),
    ],
  },
]
