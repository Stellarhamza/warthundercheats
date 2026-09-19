import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LogoMark } from './LogoMark'
import { CheckoutLink } from './CheckoutLink'
import { SITE_NAME } from '../data/site'

/** Lean nav — Reviews stay in footer. */
const NAV_LINKS = [
  { label: 'Forums', to: '/forums' },
  { label: 'Product', to: '/warthunder-cheats' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Support', to: '/support' },
] as const

type NavbarProps = {
  onVideo?: boolean
}

export function Navbar({ onVideo: _onVideo = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const brandClass = 'text-z-ink'

  return (
    <>
      <nav className="page-x relative z-20 flex items-center justify-between gap-3 py-4 sm:py-5">
        <a href="/" className="flex min-w-0 items-center gap-2.5">
          <LogoMark className={`${brandClass} shrink-0 text-z-soft`} />
          <span className={`truncate text-sm font-semibold tracking-tight sm:text-base ${brandClass}`}>
            {SITE_NAME}
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <div className="nav-chip flex items-center gap-0.5 rounded-full px-1 py-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium text-z-ink/70 transition-colors hover:bg-z-accent/15 hover:text-z-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <CheckoutLink className="cta-gradient flex items-center self-stretch rounded-full px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Get
          </CheckoutLink>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-z-soft/25 bg-z-elevated/80 text-z-ink backdrop-blur-lg md:hidden"
        >
          <Menu
            className={`absolute h-5 w-5 transition-all duration-300 ${brandClass} ${
              menuOpen ? 'rotate-90 scale-0 opacity-0' : 'opacity-100'
            }`}
          />
          <X
            className={`absolute h-5 w-5 transition-all duration-300 ${brandClass} ${
              menuOpen ? 'opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#06020f]/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-64 flex-col border-l border-z-soft/20 bg-z-elevated/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pt-24">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-4 py-3 text-base font-medium text-z-ink/80 transition-all hover:bg-z-accent/15 hover:text-z-ink"
          >
            Home
          </a>
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.to}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-z-ink/80 transition-all hover:bg-z-accent/15 hover:text-z-ink"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(24px)',
                transitionDelay: menuOpen ? `${(index + 1) * 50}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-auto px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          <CheckoutLink
            onClick={() => setMenuOpen(false)}
            className="cta-gradient block w-full rounded-full px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Get
          </CheckoutLink>
        </div>
      </div>
    </>
  )
}
