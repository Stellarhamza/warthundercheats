/**
 * Worker entry for Astro static output in ./dist.
 * IMPORTANT: Always fetch assets via https://assets.local — never the request
 * hostname — or Cloudflare returns HTTP 522 on custom domains.
 *
 * Canonical host is apex (no www). Always 301 www → apex so crawlers never
 * see duplicate content or mismatched canonical/hreflang on www.
 *
 * /sitemap.xml and /robots.txt always run through this Worker (not asset-only)
 * so Google gets stable application/xml + apex redirects (fixes GSC "Couldn't fetch").
 */
function assetsFetch(env, request, pathname) {
  return env.ASSETS.fetch(new Request(new URL(pathname, 'https://assets.local'), request))
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

function wantsBrowserSitemapView(request) {
  const accept = (request.headers.get('accept') || '').toLowerCase()
  const ua = (request.headers.get('user-agent') || '').toLowerCase()
  if (/googlebot|bingbot|yandex|duckduck|slurp|baiduspider|facebookexternalhit|twitterbot|linkedinbot|semrush|ahrefs|mj12bot|dotbot/.test(ua)) {
    return false
  }
  return accept.includes('text/html')
}

async function serveSitemap(env, request) {
  const assetResponse = await assetsFetch(env, request, '/sitemap.xml')
  if (!assetResponse.ok) {
    return new Response('Sitemap unavailable', {
      status: assetResponse.status,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }

  let body = await assetResponse.text()
  if (wantsBrowserSitemapView(request) && !body.includes('xml-stylesheet')) {
    body = body.replace(
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/css" href="/sitemap.css"?>',
    )
  }

  const headers = new Headers()
  headers.set('content-type', 'application/xml; charset=utf-8')
  headers.set('cache-control', 'public, max-age=300')
  headers.set('x-content-type-options', 'nosniff')
  headers.set('access-control-allow-origin', '*')
  headers.set('x-robots-tag', 'noindex, follow')
  return new Response(body, { status: 200, headers })
}

async function serveRobots(env, request) {
  const assetResponse = await assetsFetch(env, request, '/robots.txt')
  if (!assetResponse.ok) {
    return new Response('User-agent: *\nAllow: /\n', {
      status: 200,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }
  const headers = new Headers()
  headers.set('content-type', 'text/plain; charset=utf-8')
  headers.set('cache-control', 'public, max-age=300')
  headers.set('x-content-type-options', 'nosniff')
  return new Response(assetResponse.body, { status: 200, headers })
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

    if (url.pathname === '/sitemap.xml') {
      return serveSitemap(env, request)
    }
    if (url.pathname === '/robots.txt') {
      return serveRobots(env, request)
    }

    const assetResponse = await assetsFetch(env, request, url.pathname + url.search)
    const response = withHtmlCharset(assetResponse)

    // Help crawlers + Seobility: advertise preferred host + self-canonical
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
