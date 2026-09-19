import { ChevronDown } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { SITE_FAQS } from '../data/faqs'
import { CheckoutLink } from '../components/CheckoutLink'
import { SITE_NAME } from '../data/site'

export function FaqPage() {
  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar />
      </div>

      <main>
        <section className="page-x pt-12 sm:pt-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
              {SITE_NAME}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              War Thunder Cheats FAQ
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Load status, ESP, Aimbot, modules ESP, radar HUD, Steam and Gaijin clients, buying,
              loading, support and refunds — straight answers before you checkout.
            </p>
          </div>
        </section>

        <section id="faq" className="page-x py-10 sm:py-12" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="mb-6 text-lg font-semibold tracking-tight text-white sm:text-xl"
            >
              All questions
            </h2>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {SITE_FAQS.map((item) => (
                <details key={item.q} className="group faq-item py-1">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-transform duration-200 group-open:rotate-180"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-white/55">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="page-x border-t border-white/10 py-14 sm:py-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Still need help?
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/50">
                Open support for load help, or buy when the status is clear to load.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <a
                href="/support"
                className="inline-flex h-11 items-center justify-center rounded-full border border-z-soft/35 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-z-soft/50 hover:bg-white/[0.1]"
              >
                Support
              </a>
              <CheckoutLink className="cta-gradient inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-white">
                Buy War Thunder Cheats
              </CheckoutLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter currentPath="/faq" />
    </div>
  )
}
