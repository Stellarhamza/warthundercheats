import { WT_HERO, WT_VEHICLE, WT_COVER, WT_MENU, WT_ESP } from './media'
import { WT_OG, getOgImageForPath, PAGE_OG } from './og'

export { WT_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const WT_PRODUCT_HERO = WT_HERO
export const WT_PRODUCT_COVER = WT_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  warthunder: {
    alt: 'War Thunder cheats product artwork for War Thunder on PC',
    title: 'War Thunder Cheats Product Details',
    caption:
      'War Thunder Aimbot, silent aim, player ESP, vehicle modules ESP, wallhack chams, radar HUD and Map Finder',
    heroAlt: 'War Thunder cheats silent aim Aimbot and ESP features',
    heroTitle: 'War Thunder Cheats Features',
    heroCaption: 'Review War Thunder Aimbot, ESP, modules ESP and the current load status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: WT_VEHICLE,
    og: PAGE_OG.home,
    alt: 'War Thunder cheats Aimbot and ESP artwork for War Thunder on PC',
    title: 'War Thunder Cheats',
    caption: 'War Thunder Aimbot, ESP, wallhack chams and radar HUD overview.',
  },
  forums: {
    src: WT_HERO,
    og: PAGE_OG.forums,
    alt: 'War Thunder cheats product artwork',
    title: 'War Thunder Cheats Guides',
    caption: 'Setup, Aimbot and ESP guides for War Thunder.',
  },
  reviews: {
    src: WT_ESP,
    og: PAGE_OG.reviews,
    alt: 'War Thunder cheats review artwork',
    title: 'War Thunder Cheats Reviews',
    caption: 'Feature and compatibility feedback for War Thunder on PC.',
  },
  faq: {
    src: WT_MENU,
    og: PAGE_OG.faq,
    alt: 'War Thunder cheats FAQ artwork',
    title: 'War Thunder Cheats FAQ',
    caption: 'Compatibility, feature and setup answers for War Thunder.',
  },
  support: {
    src: WT_HERO,
    og: PAGE_OG.support,
    alt: 'War Thunder cheats support artwork',
    title: 'War Thunder Cheats Support',
    caption: 'Delivery, loader and setup support for War Thunder cheats.',
  },
  product: {
    src: WT_COVER,
    og: PAGE_OG.product,
    alt: 'War Thunder Aimbot, ESP and modules wallhack product artwork',
    title: 'War Thunder Cheats Features',
    caption: 'Product details for War Thunder Aimbot, ESP and modules ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return WT_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return WT_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
