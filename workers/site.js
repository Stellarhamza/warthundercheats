/**
 * Worker entry for Astro static output in ./dist.
 * IMPORTANT: Always fetch assets via https://assets.local — never the request
 * hostname — or Cloudflare returns HTTP 522 on custom domains.
 *
 * Canonical host is apex (no www). Always 301 www → apex so crawlers never
 * see duplicate content or mismatched canonical/hreflang on www.
 *
 * /sitemap.xml and /robots.txt are served as static assets (see wrangler
 * run_worker_first exclusions) so Google gets the same text/xml path that
 * works on sibling sites — Worker reconstruction can 5xx some crawler IPs.
 */
function assetsFetch(env, pathname) {
  // Never forward client Accept-Encoding / cookies — those can 5xx ASSETS for bots.
  return env.ASSETS.fetch(new Request(new URL(pathname, 'https://assets.local'), { method: 'GET' }))
}

function withHtmlCharset(response) {
  const contentType = response.headers.get('content-type') || ''
  const primary = contentType.split(',')[0].trim()
  if (!primary.toLowerCase().startsWith('text/html')) return response
  if (/charset=/i.test(primary)) {
    if (contentType.includes(',')) {
      const headers = new Headers(response.headers)
      headers.set('content-type', primary)
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      })
    }
    return response
  }
  const headers = new Headers(response.headers)
  headers.set('content-type', 'text/html; charset=utf-8')
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

/** Prefer apex: https://www.example.com/path → https://example.com/path */
function toApexUrl(url) {
  const host = url.hostname.toLowerCase()
  if (!host.startsWith('www.')) return null
  const next = new URL(url.toString())
  next.hostname = host.slice(4)
  next.protocol = 'https:'
  return next
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.protocol === 'http:') {
      url.protocol = 'https:'
      const apex = toApexUrl(url)
      return Response.redirect((apex || url).toString(), 301)
    }

    const apex = toApexUrl(url)
    if (apex) {
      return Response.redirect(apex.toString(), 301)
    }

    // Explicit apex redirects for crawl files if Worker is ever invoked for them
    if (
      url.pathname === '/sitemap.xml' ||
      url.pathname === '/sitemap.txt' ||
      url.pathname === '/robots.txt'
    ) {
      const assetResponse = await assetsFetch(env, url.pathname)
      const headers = new Headers(assetResponse.headers)
      if (url.pathname === '/sitemap.xml') {
        headers.set('content-type', 'text/xml; charset=utf-8')
      } else if (url.pathname === '/sitemap.txt') {
        headers.set('content-type', 'text/plain; charset=utf-8')
      } else {
        headers.set('content-type', 'text/plain; charset=utf-8')
      }
      headers.set('cache-control', 'public, max-age=3600')
      headers.set('x-content-type-options', 'nosniff')
      headers.delete('x-robots-tag')
      return new Response(assetResponse.body, {
        status: assetResponse.status,
        statusText: assetResponse.statusText,
        headers,
      })
    }

    const assetResponse = await assetsFetch(env, url.pathname + url.search)
    const response = withHtmlCharset(assetResponse)

    const headers = new Headers(response.headers)
    if (!headers.has('Strict-Transport-Security')) {
      headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    }
    const contentType = headers.get('content-type') || ''
    if (contentType.includes('text/html')) {
      const canonical = `https://${url.hostname}${url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '') || '/'}`
      const existing = headers.get('Link')
      const linkCanonical = `<${canonical}>; rel="canonical"`
      headers.set('Link', existing ? `${existing}, ${linkCanonical}` : linkCanonical)
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  },
}
