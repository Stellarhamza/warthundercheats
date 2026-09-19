import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { BLOGS, blogPath, getBlog } from '../data/blogs'
import { guidePath } from '../data/games'
import { CheckoutLink } from '../components/CheckoutLink'
import { SeoMedia } from '../components/SeoMedia'
import { SITE_HOST } from '../data/site'
import { getForumMedia } from '../data/media'
import { NotFoundPage } from './NotFoundPage'

type BlogPostPageProps = {
  slug: string
}

function sectionId(heading: string) {
  return heading
    .replace(/^\d+\)\s*/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = getBlog(slug)

  if (!post) return <NotFoundPage />

  const related = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 6)

  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="border-b border-z-soft/15 bg-z-bg/90 backdrop-blur-xl">
        <Navbar />
      </div>

      <main className="page-body">
        <article className="page-x py-10 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <nav
              className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
              aria-label="Breadcrumb"
            >
              <a href="/" className="hover:text-white/70">
                Home
              </a>
              <span>/</span>
              <a href="/forums" className="hover:text-white/70">
                Forums
              </a>
              <span>/</span>
              <span className="text-white/70">{post.tag}</span>
            </nav>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              {post.tag} · {post.readMinutes} min read · {post.date}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              {post.excerpt}
            </p>

            <SeoMedia media={getForumMedia(post.slug)} className="mt-8" />

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-24">
                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/55 sm:text-base">
                    {section.body.map((para) => (
                      <p key={para.slice(0, 48)}>{para}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="page-card mt-12 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">
                Ready for War Thunder Cheats?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Check the live load status, then buy player ESP, modules ESP, wallhack chams and
                silent aim for War Thunder on {SITE_HOST}. Need help? Read{' '}
                <a href="/support" className="text-white/80 underline-offset-2 hover:underline">
                  War Thunder Cheats support
                </a>
                {' '}or{' '}
                <a href="/reviews" className="text-white/80 underline-offset-2 hover:underline">
                  player reviews
                </a>
                . Own the game via{' '}
                <a
                  href="https://warthunder.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 underline-offset-2 hover:underline"
                >
                  warthunder.com
                </a>
                .
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={guidePath('warthunder')}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                >
                  Buy War Thunder Cheats
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                >
                  Support
                </a>
                <CheckoutLink className="cta-gradient inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white">
                  Buy War Thunder Cheats
                </CheckoutLink>
              </div>
            </div>

            <a
              href="/forums"
              className="mt-10 inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              All forum threads
            </a>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="page-band page-x border-t border-white/10 py-12 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                More forum threads
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((b) => (
                  <a
                    key={b.slug}
                    href={blogPath(b.slug)}
                    className="page-card group flex h-full flex-col rounded-2xl p-5"
                  >
                    <p className="text-xs uppercase tracking-wider text-white/40">{b.tag}</p>
                    <h3 className="mt-2 text-sm font-semibold text-white group-hover:text-white/85">
                      {b.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50">
                      {b.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white/70">
                      Read
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <SiteFooter currentPath={blogPath(post.slug)} />
      </main>
    </div>
  )
}
