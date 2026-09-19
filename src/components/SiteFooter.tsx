import { LogoMark } from './LogoMark'
import {
  OFFICIAL_WARTHUNDER_LINKS,
  SITE_GUIDE_LINKS,
  SITE_PAGE_LINKS,
} from '../data/links'
import { SITE_NAME } from '../data/site'

type SiteFooterProps = {
  currentPath?: string
}

function normalizePath(path?: string) {
  if (!path) return ''
  return path.replace(/\/+$/, '') || '/'
}

function isCurrent(to: string, currentPath?: string) {
  const path = normalizePath(currentPath)
  if (!path) return false
  const target = normalizePath(to)
  if (target === '/') return path === '/'
  return path === target || path.startsWith(`${target}/`)
}

/**
 * Site footer with page / guide / official War Thunder links (crawl-friendly).
 * XML sitemap remains at /sitemap.xml — not shown as an on-page “sitemap” section.
 */
export function SiteFooter({ currentPath }: SiteFooterProps) {
  const path = normalizePath(currentPath || '/')

  return (
    <footer className="page-x border-t border-z-soft/15 bg-z-band py-12 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
          <div className="max-w-sm shrink-0">
            <div className="flex items-center gap-2">
              <LogoMark className="text-z-soft" />
              <span className="font-semibold text-z-ink">{SITE_NAME}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              War Thunder Cheats for PC — silent aim Aimbot, Autolead, player and vehicle modules
              ESP, wallhack chams, radar HUD, Map Finder and live load status worldwide.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                Pages
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                {SITE_PAGE_LINKS.filter(
                  (l) => !['/privacy', '/terms', '/refunds'].includes(l.to),
                ).map((l) => (
                  <li key={l.to}>
                    <a
                      href={l.to}
                      aria-current={isCurrent(l.to, path) ? 'page' : undefined}
                      className={
                        isCurrent(l.to, path)
                          ? 'font-medium text-white'
                          : 'transition-colors hover:text-white'
                      }
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                Guides
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                {SITE_GUIDE_LINKS.map((l) => (
                  <li key={l.to}>
                    <a
                      href={l.to}
                      aria-current={isCurrent(l.to, path) ? 'page' : undefined}
                      className={
                        isCurrent(l.to, path)
                          ? 'font-medium text-white'
                          : 'transition-colors hover:text-white'
                      }
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/forums"
                    className="font-medium text-white/80 transition-colors hover:text-white"
                  >
                    All guides →
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                Official War Thunder
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                {OFFICIAL_WARTHUNDER_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
                <li>
                  <a href="/privacy" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/refunds" className="hover:text-white">
                    Refunds
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-10 border-t border-z-soft/10 pt-6 text-xs text-white/35">
          © {new Date().getFullYear()} {SITE_NAME}. Not affiliated with Gaijin Entertainment or
          the official War Thunder game. Indexed pages are listed in{' '}
          <a href="/sitemap.xml" className="underline-offset-2 hover:text-white/55 hover:underline">
            sitemap.xml
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
