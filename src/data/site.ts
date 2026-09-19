import { WT_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://warthundercheats.xyz'
export const SITE_NAME = 'War Thunder Cheats'
export const SITE_HOST = 'warthundercheats.xyz'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: War Thunder cheats for PC (Steam + Gaijin clients, worldwide).
 * Canonical host is apex https://warthundercheats.xyz (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy War Thunder cheats for PC — silent aim Aimbot with Autolead, player and vehicle modules ESP, wallhack chams, bullet and rocket ESP, extended radar HUD and Map Finder, with live clear-to-load status after every War Thunder update.'

export const SITE_ABOUT = [
  'war thunder cheats',
  'warthunder cheats',
  'war thunder cheat',
  'war thunder hacks',
  'war thunder hack',
  'war thunder aimbot',
  'war thunder silent aim',
  'war thunder esp',
  'war thunder wallhack',
  'war thunder modules esp',
  'war thunder map finder',
  'war thunder cheat aimbot',
] as const

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = WT_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'War Thunder Cheats | WT Aimbot, ESP & Hacks',
    description:
      'Buy War Thunder cheats for PC — silent aim Aimbot, Autolead, player and modules ESP, wallhack chams, radar HUD and Map Finder from $35. Check live status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'War Thunder Cheats — WT Aimbot, ESP and modules wallhack for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'War Thunder Cheats Guides | Aimbot, ESP & Setup',
    description:
      'War Thunder cheats guides hub — silent aim and Autolead tuning, player and modules ESP, radar HUD, Map Finder, antivirus exclusions, loader setup and status articles.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'War Thunder Cheats setup guides for Aimbot, ESP and status',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'War Thunder Cheats Reviews | Buyer Feedback',
    description:
      'Read War Thunder cheats reviews covering silent aim, tank and aircraft ESP, vehicle modules ESP, Map Finder and honest status updates before you buy a WT license.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'War Thunder Cheats buyer reviews for tank and aircraft ESP',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'War Thunder Cheats FAQ | Price, Status & Setup',
    description:
      'FAQ for buying War Thunder cheats on Windows 10/11 — price from $35, Aimbot and ESP features, Steam and Gaijin clients, live status, loader setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'War Thunder Cheats FAQ — price, status and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'War Thunder Cheats Support | Loader & Setup Help',
    description:
      'Get help buying and loading War Thunder cheats — delivery email, Windows 10/11 setup, antivirus exclusions, loader errors and status updates after WT patches.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'War Thunder Cheats support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'War Thunder Cheats Price & Checkout | Aimbot ESP',
    description:
      'War Thunder cheats price and checkout — silent aim Aimbot, Autolead, player ESP, vehicle modules ESP, bullet and rocket ESP, radar HUD and Map Finder from $35.',
    path: '/warthunder-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'War Thunder Aimbot, ESP and modules wallhack product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'War Thunder Cheats — WT Aimbot, ESP & Hacks',
  h2Features: 'War Thunder Aimbot, ESP, modules ESP & radar HUD',
  h2Featured: 'War Thunder ESP and silent aim Aimbot',
  h2About: 'Clear load status before you buy War Thunder cheats',
  h2Access: 'Buy War Thunder Cheats',
  h2Faq: 'War Thunder Cheats FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
