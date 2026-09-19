export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** War Thunder product art + menu stills (self-hosted). */
export const WT_HERO = '/media/wt-hero-full.webp'
export const WT_VEHICLE = '/media/wt-hero-full.webp'
export const WT_COVER = '/media/wt-cover.webp'
export const WT_BOX = '/media/wt-box.jpg'
export const WT_ESP = '/media/wt-esp-gameplay.gif'
export const WT_MENU = '/media/wt-menu.gif'
export const WT_GAMEPLAY = '/media/wt-esp-gameplay.gif'
export const WT_HOME_ART = '/media/wt-home-art.jpg'
export const WT_CONTROL = '/media/wt-control-art.jpg'
export const WT_TACTICAL = '/media/wt-tactical-art.jpg'
export const WT_VIDEO_THUMB = '/media/wt-video-thumb.jpg'

/** Self-hosted War Thunder cheat preview clip. */
export const WT_HOME_VIDEO = {
  src: '/videos/wt-preview.mp4',
  poster: WT_VIDEO_THUMB,
  title: 'War Thunder Cheats Aimbot and ESP preview',
  caption:
    'Preview of War Thunder silent aim, player ESP, vehicle modules ESP and radar HUD features on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: WT_VEHICLE,
    alt: 'War Thunder cheats Aimbot and ESP product artwork for War Thunder on PC',
    title: 'War Thunder Cheats for PC',
    caption:
      'Feature overview for War Thunder Aimbot, silent aim, player ESP, modules ESP and radar HUD.',
  },
  product: {
    image: WT_COVER,
    video: WT_HOME_VIDEO.src,
    alt: 'War Thunder ESP, silent aim Aimbot and vehicle modules highlight artwork',
    title: 'War Thunder Aimbot, ESP and Modules ESP Features',
    caption: 'Product overview for War Thunder on Windows 10 and 11 (Steam and Gaijin clients).',
    videoTitle: WT_HOME_VIDEO.title,
    videoDescription: WT_HOME_VIDEO.caption,
  },
  forums: {
    image: WT_HERO,
    alt: 'War Thunder cheats product artwork',
    title: 'War Thunder Cheats Guides',
    caption: 'Reference for setup, Aimbot, ESP, Map Finder and load status articles.',
  },
  reviews: {
    image: WT_ESP,
    alt: 'War Thunder cheats ESP gameplay review artwork',
    title: 'War Thunder Cheats Reviews',
    caption: 'Feature and compatibility feedback for War Thunder cheats.',
  },
  faq: {
    image: WT_MENU,
    alt: 'War Thunder cheats menu artwork for the FAQ',
    title: 'War Thunder Cheats FAQ',
    caption: 'Compatibility, status and setup answers for War Thunder on PC.',
  },
  support: {
    image: WT_HERO,
    alt: 'War Thunder cheats support artwork',
    title: 'War Thunder Cheats Support',
    caption: 'Delivery, loader and setup help for War Thunder cheats.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'status-checklist': { ...PAGE_MEDIA.product },
  'aimbot-settings': { ...PAGE_MEDIA.home },
  'esp-wallhack-guide': { ...PAGE_MEDIA.reviews },
  'modules-esp-guide': {
    image: WT_ESP,
    alt: 'War Thunder vehicle modules ESP artwork showing crew, engine and ammo racks',
    title: 'War Thunder Modules ESP Guide',
    caption: 'Crew, engine, transmission and ammo rack highlighting for War Thunder cheats.',
  },
  'radar-hud-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'windows-setup': { ...PAGE_MEDIA.support },
  'map-finder-guide': {
    image: WT_BOX,
    alt: 'War Thunder Map Finder matchmaking filter artwork',
    title: 'War Thunder Map Finder Guide',
    caption: 'Map filtering and matchmaking restart tips for War Thunder cheats.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
