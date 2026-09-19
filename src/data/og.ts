/**
 * Canonical 1200x630 JPEG Open Graph images for Google SERP thumbnails.
 * Every indexed URL maps to a unique crawlable /og/*.jpg under warthundercheats.xyz.
 */

export const OG_HOME = '/og/home.jpg'
export const OG_PRODUCT = '/og/warthunder-cheats.jpg'
export const OG_FORUMS = '/og/forums.jpg'
export const OG_REVIEWS = '/og/reviews.jpg'
export const OG_FAQ = '/og/faq.jpg'
export const OG_SUPPORT = '/og/support.jpg'
export const OG_PRIVACY = '/og/privacy.jpg'
export const OG_TERMS = '/og/terms.jpg'
export const OG_REFUNDS = '/og/refunds.jpg'

/** Default share image (product). */
export const WT_OG = OG_PRODUCT

export function forumOgImage(slug: string) {
  return `/og/forums-${slug}.jpg`
}

/** Resolve the Open Graph JPEG for any site path. */
export function getOgImageForPath(path?: string): string {
  if (!path || path === '/') return OG_HOME
  if (path === '/warthunder-cheats' || path === '/warthunder-hacks') return OG_PRODUCT
  if (path === '/forums') return OG_FORUMS
  if (path === '/reviews') return OG_REVIEWS
  if (path === '/faq') return OG_FAQ
  if (path === '/support') return OG_SUPPORT
  if (path === '/privacy') return OG_PRIVACY
  if (path === '/terms') return OG_TERMS
  if (path === '/refunds') return OG_REFUNDS
  if (path.startsWith('/forums/')) {
    const slug = path.slice('/forums/'.length).replace(/\/$/, '')
    return forumOgImage(slug)
  }
  return OG_HOME
}

export const PAGE_OG = {
  home: OG_HOME,
  product: OG_PRODUCT,
  forums: OG_FORUMS,
  reviews: OG_REVIEWS,
  faq: OG_FAQ,
  support: OG_SUPPORT,
  privacy: OG_PRIVACY,
  terms: OG_TERMS,
  refunds: OG_REFUNDS,
} as const
