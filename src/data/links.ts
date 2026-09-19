import { blogPath } from './blog-paths'

/** Official War Thunder destinations for factual game context. */
export const OFFICIAL_WARTHUNDER_LINKS = [
  {
    label: 'War Thunder',
    href: 'https://warthunder.com/',
    description: 'Official War Thunder game site',
  },
  {
    label: 'War Thunder on Steam',
    href: 'https://store.steampowered.com/app/236390/War_Thunder/',
    description: 'Official PC store page and Steam client download',
  },
  {
    label: 'Gaijin Entertainment Support',
    href: 'https://support.gaijin.net/',
    description: 'Publisher support and Gaijin account help',
  },
] as const

/** Primary internal routes for crawl equity. */
export const SITE_PAGE_LINKS = [
  { label: 'Home', to: '/', description: 'Live status, price and checkout' },
  {
    label: 'Product page',
    to: '/warthunder-cheats',
    description: 'Aimbot, player ESP, modules ESP, radar HUD and compatibility details',
  },
  {
    label: 'Forums index',
    to: '/forums',
    description: 'Setup forums — Aimbot, ESP, load, status',
  },
  {
    label: 'Player reviews',
    to: '/reviews',
    description: 'Player reviews and ratings',
  },
  {
    label: 'FAQ answers',
    to: '/faq',
    description: 'Frequently asked questions',
  },
  {
    label: 'Support desk',
    to: '/support',
    description: 'Delivery, loader and setup help',
  },
  {
    label: 'Privacy policy',
    to: '/privacy',
    description: 'Order data and site privacy',
  },
  {
    label: 'Terms of use',
    to: '/terms',
    description: 'License rules and risk disclaimer',
  },
  {
    label: 'Refund policy',
    to: '/refunds',
    description: 'When digital license refunds apply',
  },
] as const

export const SITE_GUIDE_LINKS = [
  { label: 'Features checklist', to: blogPath('features-list') },
  { label: 'Aimbot settings', to: blogPath('aimbot-settings') },
  { label: 'ESP & wallhack', to: blogPath('esp-wallhack-guide') },
  { label: 'Modules ESP', to: blogPath('modules-esp-guide') },
  { label: 'Radar & HUD', to: blogPath('radar-hud-guide') },
  { label: 'Map Finder', to: blogPath('map-finder-guide') },
  { label: 'Hotkeys', to: blogPath('hotkeys') },
  { label: 'Complete setup', to: blogPath('complete-setup') },
  { label: 'Windows setup', to: blogPath('windows-setup') },
  { label: 'Antivirus exclusions', to: blogPath('disable-antivirus') },
  { label: 'Stream-proof setup', to: blogPath('stream-proof-setup') },
  { label: 'Status checklist', to: blogPath('status-checklist') },
  { label: 'Loader errors', to: blogPath('loader-errors') },
] as const

const CHECKOUT_HOST = ['za', 'deyo', '.com'].join('')
const CHECKOUT_REF = ['Q', 'R', 'H'].join('')
const CHECKOUT_PRODUCT = '/products/warthunder-cheats'

export const CHECKOUT_URL = `https://${CHECKOUT_HOST}/go/${CHECKOUT_REF}?to=${encodeURIComponent(CHECKOUT_PRODUCT)}`

export function getCheckoutUrl(_productSlug?: string): string {
  return CHECKOUT_URL
}

export const CHECKOUT_REL = 'nofollow noopener noreferrer'
