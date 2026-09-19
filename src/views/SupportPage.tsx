import { ChevronDown } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { CheckoutLink } from '../components/CheckoutLink'
import { SITE_NAME } from '../data/site'
import { SUPPORT_FAQS, SUPPORT_INTRO, SUPPORT_TOPICS } from '../data/support'
import { blogPath } from '../data/blogs'

export function SupportPage() {
  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar />
      </div>

      <main>
        <section className="page-x pt-12 sm:pt-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
              {SITE_NAME} · Help
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              War Thunder Cheats Support
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">{SUPPORT_INTRO}</p>
            <p className="mt-3 text-sm text-white/45">
              Setup guides live in the{' '}
              <a
                href="/forums"
                className="text-z-soft underline-offset-2 hover:text-white hover:underline"
              >
                forums
              </a>
              . Start with{' '}
              <a
                href={blogPath('complete-setup')}
                className="text-z-soft underline-offset-2 hover:text-white hover:underline"
              >
                complete setup
              </a>{' '}
              before opening a ticket.
            </p>
          </div>
        </section>

        <section className="page-x py-10 sm:py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              How we help
            </h2>
            <ol className="mt-6 space-y-6">
              {SUPPORT_TOPICS.map((topic, i) => (
                <li key={topic.heading} className="flex gap-4 sm:gap-5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-z-soft/25 bg-z-accent/15 text-sm font-semibold text-z-soft"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-base font-semibold text-white">{topic.heading}</h3>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-white/55">
                      {topic.body.map((line) => (
                        <li key={line.slice(0, 48)}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="page-x pb-10 sm:pb-12" aria-labelledby="support-faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2
              id="support-faq-heading"
              className="mb-6 text-lg font-semibold tracking-tight text-white sm:text-xl"
            >
              Support FAQ
            </h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {SUPPORT_FAQS.map((item) => (
                <details key={item.q} className="group py-1">
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
                Need help now?
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/50">
                Confirm the load status on the product page, then buy or reopen your order for
                delivery support.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <a
                href="/warthunder-cheats"
                className="inline-flex h-11 items-center justify-center rounded-full border border-z-soft/35 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-z-soft/50 hover:bg-white/[0.1]"
              >
                Product details
              </a>
              <CheckoutLink className="cta-gradient inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-white">
                Buy War Thunder Cheats
              </CheckoutLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter currentPath="/support" />
    </div>
  )
}
