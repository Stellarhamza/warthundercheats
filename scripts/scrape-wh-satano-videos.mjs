import { writeFileSync, mkdirSync, createWriteStream, existsSync } from 'node:fs'
import { join } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { Readable } from 'node:stream'

const pageUrl = 'https://wh-satano.ru/en/cheats/wt/mason-internal'
const outDir = join('public', 'videos')
const scrapDir = join('public', 'media', 'wh-satano-mason')
mkdirSync(outDir, { recursive: true })
mkdirSync(scrapDir, { recursive: true })

const res = await fetch(pageUrl, {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    Accept: 'text/html',
    'Accept-Language': 'en-US,en;q=0.9',
  },
})
if (!res.ok) throw new Error(`page ${res.status}`)
const html = await res.text()
writeFileSync(join(scrapDir, '_page-videos.html'), html)

const urls = new Set()
const patterns = [
  /(?:src|data-src|href)=["']([^"']+\.(?:mp4|webm|m3u8)(?:\?[^"']*)?)["']/gi,
  /https?:\/\/[^"'\\s>]+\.(?:mp4|webm)/gi,
  /"(?:videoUrl|file|url|src)"\s*:\s*"(https?:\\\/\\\/[^"]+\.(?:mp4|webm)[^"]*)"/gi,
  /mediadelivery\.net\/[^"'\\s>]+/gi,
  /iframe[^>]+src=["']([^"']+)["']/gi,
]

for (const re of patterns) {
  let m
  while ((m = re.exec(html))) {
    let u = m[1] || m[0]
    u = u.replace(/\\\//g, '/')
    if (u.startsWith('//')) u = 'https:' + u
    else if (u.startsWith('/')) u = 'https://wh-satano.ru' + u
    urls.add(u)
  }
}

console.log('candidates', [...urls])

let i = 0
for (const u of urls) {
  i++
  if (u.includes('youtube') || u.includes('youtu.be') || u.includes('.m3u8')) {
    console.log('skip stream/youtube', u)
    continue
  }
  try {
    const ir = await fetch(u, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        Referer: pageUrl,
      },
      redirect: 'follow',
    })
    const ct = ir.headers.get('content-type') || ''
    console.log(i, ir.status, ct.slice(0, 40), u.slice(0, 100))
    if (!ir.ok) continue
    if (!ct.includes('video') && !u.match(/\.mp4|\.webm/i)) {
      // might still be html iframe page - save for inspect
      if (ct.includes('text/html')) {
        const text = await ir.text()
        writeFileSync(join(scrapDir, `embed-${i}.html`), text)
        const nested = [...text.matchAll(/https?:\/\/[^"'\\s>]+\.mp4[^"'\\s>]*/gi)].map((x) =>
          x[0].replace(/\\\//g, '/'),
        )
        console.log('nested mp4', nested)
        for (const nu of nested) urls.add(nu)
      }
      continue
    }
    const ext = u.includes('.webm') ? 'webm' : 'mp4'
    const dest = join(outDir, i === 1 ? `wt-preview.${ext}` : `wt-preview-${i}.${ext}`)
    await pipeline(Readable.fromWeb(ir.body), createWriteStream(dest))
    console.log('saved', dest)
  } catch (e) {
    console.log('fail', u, e.message)
  }
}

// second pass for newly discovered nested urls
for (const u of [...urls]) {
  if (!u.match(/\.mp4|\.webm/i)) continue
  const dest = join(outDir, 'wt-preview.mp4')
  if (existsSync(dest) && i > 0) continue
  try {
    const ir = await fetch(u, {
      headers: { Referer: pageUrl, 'User-Agent': 'Mozilla/5.0' },
      redirect: 'follow',
    })
    if (!ir.ok) continue
    await pipeline(Readable.fromWeb(ir.body), createWriteStream(dest))
    console.log('saved primary', dest, 'from', u)
    break
  } catch {}
}
