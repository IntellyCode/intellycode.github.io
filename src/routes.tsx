import type { RouteRecord } from 'vite-react-ssg'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Article from './pages/Article'
import BlogIndex from './pages/BlogIndex'
import { caseStudies, posts } from './content'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <BlogIndex /> },
      ...caseStudies.map((entry) => ({
        path: `case-studies/${entry.slug}`,
        element: <Article entry={entry} series={caseStudies} />,
      })),
      ...posts.map((entry) => ({
        path: `blog/${entry.slug}`,
        element: <Article entry={entry} series={posts} />,
      })),
    ],
  },
]
