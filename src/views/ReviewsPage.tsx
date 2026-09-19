import { Star } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { getReviewsAggregate, REVIEWS } from '../data/reviews'
import { CheckoutLink } from '../components/CheckoutLink'
import { SITE_NAME } from '../data/site'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? 'fill-z-soft text-z-soft' : 'text-z-soft/25'}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export function ReviewsPage() {
  const aggregate = getReviewsAggregate()

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
              War Thunder Cheats Reviews
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Feedback from players who bought War Thunder Cheats — silent aim and Autolead
              accuracy, modules ESP detail, status honesty, and whether the build held after the
              last Gaijin patch.
            </p>
            <p className="mt-4 text-sm text-white/45" aria-label="Aggregate rating">
              Average {aggregate.ratingValue} / 5 · {aggregate.reviewCount} reviews
            </p>
          </div>
        </section>

        <section className="page-x py-12 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {REVIEWS.map((review) => (
                <li key={review.id} className="py-7 sm:py-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-white">{review.author}</p>
                      <p className="text-xs text-white/45">{review.role}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Stars rating={review.rating} />
                      <time className="text-[11px] text-white/35" dateTime={review.datePublished}>
                        {review.datePublished}
                      </time>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">“{review.body}”</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="page-x border-t border-white/10 py-14 sm:py-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Ready to buy War Thunder Cheats?
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/50">
                Confirm the live load status on the product page, then checkout.
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
                Buy now
              </CheckoutLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter currentPath="/reviews" />
    </div>
  )
}
