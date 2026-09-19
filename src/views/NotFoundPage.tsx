import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { HeroSearch } from '../components/HeroSearch'
import { CheckoutLink } from '../components/CheckoutLink'

export function NotFoundPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="border-b border-z-soft/15 bg-z-bg/90 backdrop-blur-xl">
        <Navbar />
      </div>

      <main className="page-body">
        <section className="page-x py-16 sm:py-28">
          <div className="page-card mx-auto max-w-3xl rounded-2xl px-5 py-12 text-center sm:rounded-3xl sm:px-12 sm:py-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              Error 404
            </p>
            <h1
              className="mt-4 text-6xl font-normal tracking-tight text-white sm:text-7xl"
              style={{ fontFamily: "'Silkscreen', cursive" }}
            >
              404
            </h1>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Page not found
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
              That route does not exist. Search the War Thunder Cheats guides or head back home.
            </p>

            <div className="relative z-50 mx-auto mt-8 flex max-w-xl justify-center text-left">
              <HeroSearch placeholder="Search War Thunder cheats guides…" className="w-full" />
            </div>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Back home
              </a>
              <a
                href="/forums"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Forums
              </a>
              <CheckoutLink className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white">
                Get
              </CheckoutLink>
            </div>
          </div>
        </section>

        <SiteFooter currentPath="/404" />
      </main>
    </div>
  )
}
