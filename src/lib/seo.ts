import type { FaqItem } from '../data/faqs'
import {
  OG_IMAGE,
  PRODUCT_PRICE_USD,
  SEO_REGIONS,
  SITE_ABOUT,
  SITE_NAME,
  SITE_PURPOSE,
  SITE_URL,
  absoluteUrl,
  type PageSeo,
} from '../data/site'
import { getReviewsAggregate, REVIEWS } from '../data/reviews'
import type { GameStatus } from '../data/games'
import { PAGE_MEDIA } from '../data/media'

export const PRODUCT_ID = `${SITE_URL}/#product`

function absoluteAsset(src: string) {
  return src.startsWith('http') ? src : `${SITE_URL}${src.startsWith('/') ? src : `/${src}`}`
}

function baseOffer(url: string, availability: string) {
  return {
    '@type': 'Offer',
    url,
    availability,
    price: PRODUCT_PRICE_USD,
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': `${SITE_URL}/#organization` },
  }
}

/** Stable Organization + WebSite identity for every page. */
export function siteIdentityGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: [
        'War Thunder Hacks',
        'Warthunder Cheats',
        'warthundercheats.xyz',
        'War Thunder Aimbot ESP',
      ],
      url: SITE_URL,
      description: SITE_PURPOSE,
      knowsAbout: [...SITE_ABOUT],
      brand: { '@type': 'Brand', name: SITE_NAME },
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
        width: 48,
        height: 46,
      },
      image: absoluteAsset(OG_IMAGE),
      areaServed: 'Worldwide',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_PURPOSE,
      inLanguage: 'en',
      about: {
        '@type': 'Thing',
        name: 'War Thunder cheats',
        description:
          'Commercial War Thunder cheats for PC — silent aim Aimbot, Autolead, player ESP, vehicle modules ESP, wallhack chams, bullet and rocket ESP, radar HUD and Map Finder with live load status.',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ]
}

export function webPageNode(seo: PageSeo) {
  const img = seo.image || OG_IMAGE
  const page = {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(seo.path)}#webpage`,
    url: absoluteUrl(seo.path),
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  } as Record<string, unknown>
  const hasVisibleImage =
    ['/', '/warthunder-cheats', '/forums'].includes(seo.path) || seo.path.startsWith('/forums/')
  // Text pages (faq/support/reviews) still expose OG as WebPage.image for social crawlers
  const hasOgImage = Boolean(seo.image)
  if (hasVisibleImage || hasOgImage) {
    page.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: absoluteAsset(img),
      width: 1200,
      height: 630,
      caption: seo.imageAlt || seo.title,
    }
    page.image = absoluteAsset(img)
  }
  return page
}

export function productCoreJsonLd() {
  return {
    '@type': 'Product',
    '@id': PRODUCT_ID,
    name: 'War Thunder Cheats',
    alternateName: [
      'War Thunder Hacks',
      'Warthunder Cheats',
      'War Thunder Aimbot',
      'War Thunder ESP',
      'War Thunder Wallhack',
      'War Thunder Modules ESP',
    ],
    description: SITE_PURPOSE,
    url: `${SITE_URL}/warthunder-cheats`,
    image: [
      absoluteAsset('/og/warthunder-cheats.jpg'),
      absoluteAsset('/og/home.jpg'),
      absoluteAsset(PAGE_MEDIA.product.image),
      absoluteAsset(PAGE_MEDIA.home.image),
    ],
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    category: 'PC game software',
    offers: baseOffer(`${SITE_URL}/warthunder-cheats`, 'https://schema.org/InStock'),
    subjectOf: {
      '@type': 'VideoObject',
      name: 'War Thunder Cheats Aimbot and ESP preview',
      description:
        'Preview of War Thunder silent aim, player ESP, vehicle modules ESP and radar HUD features on PC.',
      thumbnailUrl: absoluteAsset('/media/wt-video-thumb.jpg'),
      contentUrl: absoluteAsset('/videos/wt-preview.mp4'),
      uploadDate: '2026-09-16',
      inLanguage: 'en',
    },
  }
}

export function productDetailJsonLd(status: GameStatus) {
  const availability =
    status === 'Undetected' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
  return {
    ...productCoreJsonLd(),
    url: `${SITE_URL}/warthunder-cheats`,
    image: absoluteAsset(PAGE_MEDIA.product.image),
    about: {
      '@type': 'VideoGame',
      name: 'War Thunder',
      alternateName: ['Warthunder', 'War Thunder PC'],
      publisher: { '@type': 'Organization', name: 'Gaijin Entertainment' },
      gamePlatform: 'PC',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Platform', value: 'Windows 10 / Windows 11 PC' },
      {
        '@type': 'PropertyValue',
        name: 'Features',
        value:
          'Silent aim Aimbot, Autolead, Autoscout, Auto Artillery, player ESP, vehicle modules ESP, wallhack chams, bullet ESP, rocket ESP, World Changer, radar HUD, Free Camera, Map Finder',
      },
      {
        '@type': 'PropertyValue',
        name: 'Clients',
        value: 'Steam and Gaijin launcher versions of War Thunder',
      },
      { '@type': 'PropertyValue', name: 'Status', value: status },
    ],
    offers: baseOffer(`${SITE_URL}/warthunder-cheats`, availability),
  }
}

export function productReviewsJsonLd() {
  const aggregate = getReviewsAggregate()
  return {
    ...productCoreJsonLd(),
    url: `${SITE_URL}/warthunder-cheats`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregate.ratingValue,
      reviewCount: aggregate.reviewCount,
      bestRating: aggregate.bestRating,
      worstRating: aggregate.worstRating,
    },
    review: REVIEWS.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.datePublished,
      reviewBody: review.body,
      name: `${review.author} War Thunder Cheats review`,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
      itemReviewed: { '@id': PRODUCT_ID },
    })),
  }
}

/** Merge site identity + WebPage + optional extra nodes into FAQ/Product graph. */
export function buildPageJsonLd(seo: PageSeo, extra: unknown[] = []) {
  const cleaned = extra.filter((node) => {
    if (!node || typeof node !== 'object') return true
    const t = (node as { '@type'?: string })['@type']
    return t !== 'WebSite' && t !== 'Organization'
  })
  return {
    '@context': 'https://schema.org',
    '@graph': [...siteIdentityGraph(), webPageNode(seo), ...cleaned],
  }
}

/** Build FAQPage JSON-LD graph node from the same items shown in FaqSection. */
export function faqPageJsonLd(items: FaqItem[], pageUrl?: string) {
  return {
    '@type': 'FAQPage',
    ...(pageUrl ? { '@id': `${pageUrl}#faq`, url: pageUrl } : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export { SEO_REGIONS, absoluteUrl, OG_IMAGE, SITE_NAME, SITE_URL }
