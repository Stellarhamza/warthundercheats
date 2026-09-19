import { Check, Shield } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { GameCover } from '../components/GameCover'
import {
  GUIDE_FEATURES,
  getGame,
  guidePath,
  parseGuideSlug,
  type Game,
} from '../data/games'
import { PRODUCT_PAGE_FAQS } from '../data/faqs'
import { PRODUCT_PRICE_USD, SITE_HOST, SITE_NAME } from '../data/site'
import { FaqSection } from '../components/FaqSection'
import { CheckoutLink } from '../components/CheckoutLink'
import { NotFoundPage } from './NotFoundPage'
import { blogPath } from '../data/blogs'
import { WT_HOME_VIDEO } from '../data/media'
import { GamePreview } from '../components/GamePreview'

function ProductPurchaseCard({ game }: { game: Game }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-z-soft/15 bg-[rgba(20,16,31,0.95)] sm:rounded-3xl">
      <CheckoutLink className="block" aria-label="Buy War Thunder Cheats">
        <GameCover
          slug={game.slug}
          name={game.name}
          aspect="square"
          variant="product"
          className="rounded-none"
        />
      </CheckoutLink>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="icon-well shrink-0 text-sm font-bold">WT</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">War Thunder Cheats</p>
            <p className="text-xs text-white/45">
              {game.status} · From ${PRODUCT_PRICE_USD}
            </p>
          </div>
        </div>

        <CheckoutLink className="cta-gradient mt-5 block w-full rounded-full py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Buy War Thunder Cheats
        </CheckoutLink>
        <p className="mt-3 text-center text-[11px] text-white/40">
          Instant delivery · Check load status first
        </p>
      </div>
    </div>
  )
}

type GameProductPageProps = {
  guideSlug: string
}

export function GameProductPage({ guideSlug }: GameProductPageProps) {
  const slug = parseGuideSlug(guideSlug)
  const game = getGame(slug)

  if (!guideSlug.toLowerCase().endsWith('-cheats')) {
    const maybe = getGame(guideSlug.toLowerCase())
    if (maybe) {
      if (typeof window !== 'undefined') {
        window.location.replace(guidePath(maybe.slug))
      }
      return null
    }
    return <NotFoundPage />
  }

  if (!game) return <NotFoundPage />

  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar />
      </div>

      <main>
        <section className="page-x py-8 sm:py-12">
          <div className="mx-auto max-w-6xl">
            <nav
              className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
              aria-label="Breadcrumb"
            >
              <a href="/" className="shrink-0 hover:text-white/70">
                Home
              </a>
              <span className="shrink-0">/</span>
              <span className="min-w-0 text-white/70">Product details</span>
            </nav>

            <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-12 lg:items-start lg:gap-10">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 text-xs text-z-soft">
                  <Shield className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  {game.status} · War Thunder · Steam & Gaijin · {SITE_HOST}
                </span>

                <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  War Thunder Cheats Price & Checkout
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:mt-4 sm:text-base">
                  Silent aim Aimbot with Autolead, player ESP, vehicle modules ESP, wallhack chams,
                  radar HUD and Map Finder for War Thunder on PC. Confirm load status, then
                  checkout — worldwide delivery.
                </p>

                <div className="mt-6 lg:hidden">
                  <ProductPurchaseCard game={game} />
                </div>

                <div className="mt-10">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Included features
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {GUIDE_FEATURES.map((f) => (
                      <li key={f.name} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-z-accent/20">
                          <Check className="h-3 w-3 text-z-soft" strokeWidth={2.5} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white">{f.name}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-white/50">{f.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 space-y-8 text-sm leading-relaxed text-white/55">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      Clients & load status
                    </h2>
                    <p className="mt-3">
                      Runs on Windows 10 and 11 with both the Steam and Gaijin launcher versions of
                      War Thunder. After a War Thunder or Gaijin patch, status may show Updating
                      until tested — {SITE_NAME} publishes live status so you are not buying a dead
                      loader. Status first, load second.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      Checkout and delivery
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-5">
                      <li>Confirm current status on {SITE_HOST}.</li>
                      <li>Only load when status is clear (or accept Updating risk).</li>
                      <li>Checkout for digital license delivery worldwide.</li>
                      <li>
                        Follow the{' '}
                        <a
                          href={blogPath('complete-setup')}
                          className="text-white/80 underline-offset-2 hover:underline"
                        >
                          complete setup guide
                        </a>{' '}
                        after delivery.
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Feature preview
                  </h2>
                  <p className="mt-2 text-sm text-white/45">{WT_HOME_VIDEO.caption}</p>
                  <GamePreview className="mt-4" />
                </div>
              </div>

              <aside className="hidden lg:col-span-5 lg:block">
                <div className="sticky top-24">
                  <ProductPurchaseCard game={game} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <FaqSection
          heading="War Thunder Cheats product FAQ"
          intro="Status, features, client support, delivery and load questions before checkout."
          items={PRODUCT_PAGE_FAQS}
        />
      </main>

      <SiteFooter currentPath="/warthunder-cheats" />
    </div>
  )
}
