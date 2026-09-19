export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is War Thunder cheats only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'warthunder', name: 'War Thunder', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-cheats`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-cheats') ? lower.slice(0, -7) : lower
}

export const GUIDE_FEATURES = [
  {
    name: 'War Thunder Aimbot (silent aim)',
    text: 'Silent Aim to Point with adjustable aimpoint size, FOV drawing, dynamic FOV and visible-only checks — land shots without your crosshair snapping across the screen.',
  },
  {
    name: 'Autolead & Autoscout',
    text: 'Automatic lead prediction for moving tanks and aircraft, with lead reset when no target is found, plus Autoscout that marks enemies for your team automatically.',
  },
  {
    name: 'Auto Artillery',
    text: 'Automatic artillery aiming on selected targets with repair-only mode and vehicle type filters, so strikes land on the tanks that matter.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'Enemy boxes (corner or full), unit names, distance, reload and repair timers, plus Chams model highlighting through terrain, buildings and foliage.',
  },
  {
    name: 'Vehicle Modules ESP',
    text: 'See crew placement — commander, gunner, loader, driver — plus engine, transmission, hull and turret ammo racks, gun barrel and cannon breech before you fire.',
  },
  {
    name: 'Bullet & Rocket ESP',
    text: 'Track incoming shells and missiles in real time with trajectory lines, markers and distance readouts so you know where the shot came from.',
  },
  {
    name: 'Radar & HUD tools',
    text: 'Extended radar with direction indication, gun ballistics and aim prediction, map aircraft and ground markers, damage indicator and arcade/realistic HUD presets.',
  },
  {
    name: 'World Changer & Free Camera',
    text: 'No trees, no fallen trees, no smoke, no decor and fog editing for clean sightlines, plus Free Camera, zoom changer and third-person unlocks.',
  },
  {
    name: 'Map Finder',
    text: 'Analyses maps during matchmaking and auto-restarts the queue on blacklisted locations, so you only load into battles you want to play.',
  },
  {
    name: 'Steam & Gaijin client support',
    text: 'Works on Windows 10 and 11 with both the Steam and Gaijin launcher versions of War Thunder on Intel/AMD and Nvidia/AMD hardware.',
  },
  {
    name: 'Live status + support',
    text: 'Clear-to-load or Updating status is reviewed after every War Thunder and Gaijin update before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
