import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { VideoBg } from '../components/VideoBg'
import { HeroSearch } from '../components/HeroSearch'
import { BLOGS, blogPath } from '../data/blogs'
import { guidePath } from '../data/games'
import { SITE_HOST } from '../data/site'

type ForumsPageProps = {
  initialQuery?: string
}

export function ForumsPage({ initialQuery = '' }: ForumsPageProps) {
  const [q, setQ] = useState(() => initialQuery)

  function onSearchChange(next: string) {
    setQ(next)
  }

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return BLOGS
    return BLOGS.filter((b) => {
      const hay = `${b.title} ${b.excerpt} ${b.tag} ${b.searchTerms}`.toLowerCase()
      return hay.includes(term)
    })
  }, [q])

  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <section className="relative flex min-h-[60vh] flex-col overflow-x-clip sm:min-h-[65vh]">
        <VideoBg
          image="/media/wt-hero-full.webp"
          imageAlt="War Thunder cheats Aimbot and ESP product artwork"
        />
        <div className="relative z-20 flex min-h-[60vh] flex-col sm:min-h-[65vh]">
          <Navbar onVideo />
          <div className="page-x mt-auto pb-10 sm:pb-14">
            <div className="relative z-30 mx-auto max-w-6xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Forums · Setup · {SITE_HOST}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                War Thunder Cheats Guides
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                Setup threads for War Thunder Cheats — features, Aimbot and Autolead tuning, modules
                ESP, radar HUD, Map Finder, hotkeys, antivirus exclusions and live load status
                before you checkout.
              </p>
              <div className="relative z-50 mt-7">
                <HeroSearch
                  value={q}
                  onChange={onSearchChange}
                  submitTo="filter"
                  placeholder="Search forums — setup, antivirus, hotkeys…"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hero-to-body" aria-hidden />

      <main className="page-body relative z-10">
        <section className="page-x py-12">
          <div className="mx-auto max-w-6xl">
            <div className="page-card mb-10 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/45">Product</p>
                <h2 className="mt-1 text-xl font-semibold text-white">War Thunder Cheats</h2>
                <p className="mt-2 max-w-xl text-sm text-white/55">
                  Buy player ESP, modules ESP, wallhack chams & silent aim Aimbot for War Thunder —
                  live load status before checkout.
                </p>
              </div>
              <a
                href={guidePath('warthunder')}
                className="cta-gradient inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                Buy War Thunder Cheats
              </a>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                {q.trim() ? 'Search results' : 'All forum threads'}
              </h2>
              <p className="text-sm text-white/40">
                {filtered.length} thread{filtered.length === 1 ? '' : 's'}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="page-card mt-8 rounded-2xl px-6 py-10 text-center">
                <p className="text-sm text-white/55">
                  Nothing matched “{q}”. Try “setup”, “antivirus”, or “hotkeys”.
                </p>
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="mt-4 text-sm font-medium text-white hover:text-white/80"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <a
                    key={post.slug}
                    href={blogPath(post.slug)}
                    className="page-card group flex h-full flex-col rounded-2xl p-5 sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-white/45">
                        {post.tag}
                      </span>
                      <span className="text-xs text-white/35">{post.readMinutes} min</span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold tracking-tight text-white sm:text-lg">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                      Open thread
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={1.75}
                      />
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <SiteFooter currentPath="/forums" />
      </main>
    </div>
  )
}
