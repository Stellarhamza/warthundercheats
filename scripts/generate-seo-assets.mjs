/**
 * Auto-generate 1200x630 JPEG Open Graph images for every indexed URL.
 * Google SERP / social crawlers fetch these for right-side thumbnails.
 * Never overwrites the sourced /media/wt-* assets.
 */
import { access, mkdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const ogDir = join(root, 'public', 'og')
const mediaDir = join(root, 'public', 'media')
const blogsPath = join(root, 'src', 'data', 'blogs.ts')
const HOST = 'warthundercheats.xyz'

await mkdir(ogDir, { recursive: true })
await mkdir(mediaDir, { recursive: true })

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const requiredSourceArt = [
  join(mediaDir, 'wt-hero-full.webp'),
  join(mediaDir, 'wt-cover.webp'),
  join(mediaDir, 'wt-box.jpg'),
  join(mediaDir, 'wt-menu.gif'),
  join(mediaDir, 'wt-esp-gameplay.gif'),
  join(mediaDir, 'wt-video-thumb.jpg'),
]

for (const path of requiredSourceArt) {
  if (!(await exists(path))) {
    throw new Error(`Missing War Thunder media asset (do not regenerate): ${path}`)
  }
}

function overlaySvg(width, height, eyebrow, title, subtitle) {
  const titleSize = Math.min(54, Math.round(width * 0.042))
  const lines = String(title).match(/.{1,28}(\s|$)/g)?.map((s) => s.trim()).filter(Boolean) || [
    title,
  ]
  const titleLines = lines.slice(0, 2)
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#08060f" stop-opacity="0.55"/>
          <stop offset="0.45" stop-color="#08060f" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#14081f" stop-opacity="0.88"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shade)"/>
      <text x="64" y="210" fill="#c084fc" font-size="22" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${escapeXml(eyebrow)}</text>
      ${titleLines
        .map(
          (line, i) =>
            `<text x="64" y="${290 + i * 64}" fill="#ffffff" font-size="${titleSize}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(line)}</text>`,
        )
        .join('\n')}
      <text x="64" y="480" fill="#c9bdd2" font-size="26" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="64" y="560" fill="#9299a3" font-size="20" font-family="Arial, sans-serif">${HOST}</text>
    </svg>
  `)
}

async function writeOgJpeg(outPath, sourcePath, eyebrow, title, subtitle) {
  const base = sharp(sourcePath).resize(1200, 630, { fit: 'cover', position: 'centre' })
  const overlay = sharp(overlaySvg(1200, 630, eyebrow, title, subtitle))
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#08060f' },
  })
    .composite([
      { input: await base.toBuffer(), top: 0, left: 0 },
      { input: await overlay.png().toBuffer(), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)
}

function loadForumSlugs(src) {
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
}

function loadForumMeta(src) {
  const pattern =
    /slug:\s*['"]([^'"]+)['"],[\s\S]*?metaTitle:\s*['"]([^'"]+)['"],[\s\S]*?metaDescription:\s*['"]([^'"]+)['"]/g
  return [...src.matchAll(pattern)].map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
  }))
}

const heroFull = join(mediaDir, 'wt-hero-full.webp')
const coverArt = join(mediaDir, 'wt-cover.webp')
const espGif = join(mediaDir, 'wt-esp-gameplay.gif')
const menuGif = join(mediaDir, 'wt-menu.gif')
const videoThumb = join(mediaDir, 'wt-video-thumb.jpg')

const staticOg = [
  {
    file: 'home.jpg',
    source: heroFull,
    eyebrow: 'WAR THUNDER CHEATS',
    title: 'WT Aimbot, ESP & Modules ESP',
    subtitle: 'War Thunder cheats from $35 - live load status',
  },
  {
    file: 'warthunder-cheats.jpg',
    source: coverArt,
    eyebrow: 'PRODUCT DETAILS',
    title: 'War Thunder Aimbot, ESP & Radar HUD',
    subtitle: 'Features, load status and price',
  },
  {
    file: 'forums.jpg',
    source: menuGif,
    eyebrow: 'GUIDES',
    title: 'War Thunder Cheats Setup Forums',
    subtitle: 'Aimbot, ESP, Map Finder and loader guides',
  },
  {
    file: 'reviews.jpg',
    source: espGif,
    eyebrow: 'REVIEWS',
    title: 'War Thunder Cheats Buyer Reviews',
    subtitle: 'Real silent aim and modules ESP feedback',
  },
  {
    file: 'faq.jpg',
    source: menuGif,
    eyebrow: 'FAQ',
    title: 'War Thunder Cheats FAQ',
    subtitle: 'Price, load status and setup answers',
  },
  {
    file: 'support.jpg',
    source: videoThumb,
    eyebrow: 'SUPPORT',
    title: 'War Thunder Cheats Support',
    subtitle: 'Loader, delivery and Windows help',
  },
  {
    file: 'privacy.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Privacy Policy',
    subtitle: `How ${HOST} handles order data`,
  },
  {
    file: 'terms.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Terms of Use',
    subtitle: 'License rules for War Thunder Cheats',
  },
  {
    file: 'refunds.jpg',
    source: coverArt,
    eyebrow: 'POLICY',
    title: 'Refund Policy',
    subtitle: 'Digital license refund rules',
  },
]

const created = []

for (const item of staticOg) {
  const out = join(ogDir, item.file)
  await writeOgJpeg(out, item.source, item.eyebrow, item.title, item.subtitle)
  created.push(item.file)
}

const blogsSrc = await readFile(blogsPath, 'utf8')
const forums = loadForumMeta(blogsSrc)
if (!forums.length) {
  // Fallback if the regex misses - at least create from slugs
  for (const slug of loadForumSlugs(blogsSrc)) {
    forums.push({
      slug,
      title: `War Thunder Cheats ${slug}`,
      description: `War Thunder cheats guide on ${HOST}`,
    })
  }
}

for (const forum of forums) {
  const file = `forums-${forum.slug}.jpg`
  const out = join(ogDir, file)
  const source =
    /esp|wallhack|modules|chams/i.test(forum.slug)
      ? espGif
      : /aimbot|features|hotkeys|setup|windows|antivirus|loader|stream|radar|map/i.test(forum.slug)
        ? menuGif
        : coverArt
  await writeOgJpeg(
    out,
    source,
    'WAR THUNDER GUIDE',
    forum.title.replace(/\s*\|\s*.*$/, '').slice(0, 48),
    `War Thunder cheats - ${HOST}`,
  )
  created.push(file)
}

// Auxiliary on-page art (only if missing)
async function writeIfMissing(path, factory) {
  if (await exists(path)) return false
  await factory(path)
  return true
}

function fillerSvg(width, height, eyebrow, title, subtitle) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#08060f"/>
      <text x="${width * 0.075}" y="${height * 0.47}" fill="#c084fc" font-size="${width * 0.022}" font-family="Arial, sans-serif" font-weight="700" letter-spacing="6">${escapeXml(eyebrow)}</text>
      <text x="${width * 0.075}" y="${height * 0.64}" fill="#ffffff" font-size="${width * 0.05}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(title)}</text>
      <text x="${width * 0.075}" y="${height * 0.75}" fill="#c9bdd2" font-size="${width * 0.026}" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
    </svg>
  `)
}

for (const [name, eyebrow, title, subtitle] of [
  [
    'wt-tactical-art.jpg',
    'WAR THUNDER',
    'War Thunder Cheats',
    'Aimbot - ESP - Modules ESP - Radar HUD',
  ],
  [
    'wt-control-art.jpg',
    'WAR THUNDER - WINDOWS PC',
    'War Thunder ESP & Radar HUD',
    'Built for tank and aircraft battles',
  ],
  [
    'wt-home-art.jpg',
    HOST,
    'War Thunder Cheats',
    'Silent aim, ESP, wallhack chams and Map Finder',
  ],
]) {
  const path = join(mediaDir, name)
  if (
    await writeIfMissing(path, (p) =>
      sharp(fillerSvg(1200, 675, eyebrow, title, subtitle))
        .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
        .toFile(p),
    )
  ) {
    created.push(name)
  }
}

console.log(`SEO OG images ready (${created.length}): ${created.slice(0, 8).join(', ')}...`)
