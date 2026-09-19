import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Serve crawler-critical SEO files with correct MIME types in Astro
 * dev + preview (production uses public/_headers on Cloudflare Pages).
 */
export function sitemapBrowserViewPlugin(root = process.cwd()) {
  const files = new Map([
    [
      '/sitemap.xml',
      {
        path: join(root, 'public', 'sitemap.xml'),
        type: 'text/xml; charset=utf-8',
      },
    ],
    [
      '/robots.txt',
      {
        path: join(root, 'public', 'robots.txt'),
        type: 'text/plain; charset=utf-8',
      },
    ],
    [
      '/sitemap.css',
      {
        path: join(root, 'public', 'sitemap.css'),
        type: 'text/css; charset=utf-8',
      },
    ],
  ])

  const serve = (req, res, next) => {
    const path = req.url?.split('?')[0] ?? ''
    const file = files.get(path)
    if (!file) {
      next()
      return
    }

    let body
    try {
      body = readFileSync(file.path)
    } catch {
      next()
      return
    }

    res.statusCode = 200
    res.setHeader('Content-Type', file.type)
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Cache-Control', 'no-cache')
    res.end(body)
  }

  return {
    name: 'sitemap-browser-view',
    configureServer(server) {
      server.middlewares.use(serve)
    },
    configurePreviewServer(server) {
      server.middlewares.use(serve)
    },
  }
}
