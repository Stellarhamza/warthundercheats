import { ArrowRight, Crosshair, Eye, Radar, Sparkles } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { VideoBg } from '../components/VideoBg'
import { SiteFooter } from '../components/SiteFooter'
import { HeroSearch } from '../components/HeroSearch'
import { FaqSection } from '../components/FaqSection'
import { guidePath } from '../data/games'
import { CheckoutLink } from '../components/CheckoutLink'
import { HOME_FAQS } from '../data/faqs'
import { HOME_HEADINGS, SITE_HOST, SITE_NAME, SITE_PURPOSE } from '../data/site'
import { BLOGS, blogPath } from '../data/blogs'

const FEATURES = [
  {
    icon: Crosshair,
    label: 'War Thunder Aimbot',
    desc: 'Silent Aim to Point with adjustable FOV, Autolead prediction and visible-only checks — land shots without your crosshair snapping.',
  },
  {
    icon: Eye,
    label: 'Player ESP / Wallhack',
    desc: 'Enemy boxes, names, distance, reload and repair timers plus Chams highlighting through terrain, buildings and foliage.',
  },
  {
    icon: Radar,
    label: 'Vehicle Modules ESP',
    desc: 'Crew placement, engine, transmission, ammo racks, gun barrel and breech — see what to hit before you fire.',
  },
  {
    icon: Sparkles,
    label: 'Map Finder',
    desc: 'Analyses maps during matchmaking and restarts the queue on blacklisted locations, so you only load battles you want.',
  },
] as const

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <section id="home" className="relative flex min-h-screen flex-col overflow-x-clip">
        <VideoBg
          image="/media/wt-hero-full.webp"
          imageAlt="War Thunder cheats Aimbot and ESP product artwork"
        />

        <div className="relative z-20 flex min-h-screen flex-col">
          <Navbar onVideo />

          <main className="page-x mt-auto pb-6 sm:pb-8 lg:pb-10">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="relative z-30 max-w-md lg:max-w-lg">
                <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-z-soft/80 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  War Thunder · Worldwide · {SITE_HOST}
                </p>
                <h1 className="text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                  {HOME_HEADINGS.h1}
                </h1>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:mt-3.5 sm:text-[0.95rem]">
                  War Thunder cheats for Windows PC — silent aim Aimbot with Autolead, player and
                  vehicle modules ESP, wallhack chams, radar HUD and Map Finder on Steam and Gaijin
                  clients.
                </p>

                <div className="relative z-50 mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <CheckoutLink className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                    Buy War Thunder Cheats
                  </CheckoutLink>
                  <a
                    href={guidePath('warthunder')}
                    className="inline-flex items-center justify-center rounded-full border border-z-soft/35 bg-[rgba(28,22,48,0.88)] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-[background-color,border-color] hover:border-z-soft/50 hover:bg-[rgba(36,28,58,0.95)]"
                  >
                    Product details
                  </a>
                </div>
              </div>

              <div className="relative z-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:w-[30rem] lg:shrink-0">
                <div className="glass flex h-full min-h-[140px] flex-col justify-between rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <p
                    className="status-pill text-2xl font-normal tracking-tight sm:text-3xl"
                    style={{ fontFamily: "'Silkscreen', cursive" }}
                  >
                    UD
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/70 sm:mt-3 sm:text-sm">
                    Live clear-to-load status for War Thunder. Reviewed after every Gaijin
                    update — not random Discord screenshots.
                  </p>
                </div>

                <div className="glass flex h-full min-h-[140px] flex-col rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-z-accent/30 text-[10px] font-bold text-z-soft sm:h-6 sm:w-6 sm:text-xs">
                      WT
                    </div>
                    <span className="text-sm font-semibold text-white">War Thunder</span>
                  </div>
                  <p className="flex-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                    “Bought it for modules ESP and mild silent aim. Status stayed honest after the
                    last Gaijin patch — finally an honest status shop.”
                  </p>
                  <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-z-accent/25 text-xs font-semibold text-z-ink sm:h-9 sm:w-9 sm:text-sm">
                      JK
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">jayk</p>
                      <p className="text-xs text-white/60">War Thunder player</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <div className="hero-to-body" aria-hidden />

      <div className="page-body relative z-10">
        <section className="page-band page-x border-t border-z-soft/15 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {HOME_HEADINGS.h2Features}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="page-card flex h-full min-h-[168px] flex-col rounded-2xl p-5"
                >
                  <div className="icon-well mb-4">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="picks" className="page-x py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Forums
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  War Thunder Cheats forums
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                  Bigger setup library — Aimbot and Autolead tuning, ESP, modules ESP, radar HUD,
                  Map Finder, status checks and loader fixes before you buy.
                </p>
              </div>
              <a
                href="/forums"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
              >
                All forums
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div className="relative z-20 mt-8 max-w-xl">
              <HeroSearch placeholder="Search War Thunder cheats guides…" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BLOGS.slice(0, 6).map((post) => (
                <a
                  key={post.slug}
                  href={blogPath(post.slug)}
                  className="page-card group flex h-full flex-col rounded-2xl p-5 sm:p-6"
                >
                  <p className="text-xs uppercase tracking-wider text-white/45">{post.tag}</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                    {post.title}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                    Read guide
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </a>
              ))}
            </div>

            <div className="page-card mt-8 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-lg font-semibold text-white">War Thunder Cheats product</p>
                <p className="mt-1 text-sm text-white/55">
                  Detailed features · live status · price · checkout
                </p>
              </div>
              <a
                href={guidePath('warthunder')}
                className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                View product details
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="page-band page-x border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
            <div className="page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  About {SITE_NAME}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2About}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  {SITE_PURPOSE} Clear features, honest status labels, and deep forums for
                  setup. Then check{' '}
                  <a
                    href="/warthunder-cheats"
                    className="text-white/80 underline-offset-2 hover:underline"
                  >
                    the War Thunder feature list
                  </a>
                  ,{' '}
                  <a href="/reviews" className="text-white/80 underline-offset-2 hover:underline">
                    reviews
                  </a>
                  , or{' '}
                  <a href="/support" className="text-white/80 underline-offset-2 hover:underline">
                    loader help
                  </a>
                  .
                </p>
              </div>
              <a
                href={guidePath('warthunder')}
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80"
              >
                See War Thunder product details
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div
              id="access"
              className="page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Checkout
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2Access}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  Confirm War Thunder Cheats status is clear to load, then checkout for digital
                  delivery on supported Windows builds — worldwide.
                </p>
              </div>
              <CheckoutLink className="cta-gradient mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-fit">
                Get War Thunder Cheats license
              </CheckoutLink>
            </div>
          </div>
        </section>

        <FaqSection
          id="faq"
          heading={HOME_HEADINGS.h2Faq}
          intro="Load status, Aimbot and ESP, clients, delivery and checkout — before you buy."
          items={HOME_FAQS}
          moreHref="/faq"
          moreLabel="Full FAQ →"
        />

        <SiteFooter currentPath="/" />
      </div>
    </div>
  )
}
