import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { toString } from 'mdast-util-to-string'
import { readdirSync, writeFileSync } from 'node:fs'

const ORIGIN = 'https://intellycode.dev'

function slugsIn(kind: string) {
  return readdirSync(`src/content/${kind}`)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => `/${kind}/${file.replace('.mdx', '')}`)
}

function writeSitemap(dir: string) {
  const paths = ['/', '/blog', ...slugsIn('case-studies'), ...slugsIn('blog')]
  const urls = paths.map((path) => `  <url><loc>${ORIGIN}${path}</loc></url>`).join('\n')

  writeFileSync(
    `${dir}/sitemap.xml`,
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  writeFileSync(dir + '/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`)
}

function remarkReadingMinutes() {
  return (tree: any) => {
    const yaml = tree.children.find((node: any) => node.type === 'yaml')
    const body = tree.children.filter((node: any) => node.type !== 'yaml')
    const words = toString({ type: 'root', children: body }).split(/\s+/).length
    yaml.value += `\nminutes: ${Math.max(1, Math.round(words / 230))}`
  }
}

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter, remarkReadingMinutes, remarkMdxFrontmatter],
        rehypePlugins: [rehypeKatex],
      }),
    },
    react({ include: /\.(mdx|tsx)$/ }),
  ],
  css: {
    preprocessorOptions: {
      scss: { quietDeps: true, silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'] },
    },
  },
  ssgOptions: {
    dirStyle: 'flat',
    onFinished: writeSitemap,
  },
})
