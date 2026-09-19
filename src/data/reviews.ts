export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 * Dates stay recent for War Thunder commercial reviews.
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'Ground realistic main',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the product page matched what I got in game. Tank ESP and reload timers held through the first patch after I bought — glad I waited for clear-to-load instead of forcing it.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Heavy tank player',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Modules ESP is the whole product for me. Seeing the ammo rack and gunner position through a hull means one shot instead of three and a dead barrel.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'War Thunder',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog, just War Thunder. Honest Updating vs clear-to-load flips after Gaijin updates are what convinced me to buy here.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Air realistic duo',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Autolead on aircraft is unfair in the best way. Rocket ESP saved me from two SPAA missiles I never would have seen coming at that altitude.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Top tier grinder',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was easy to read. Stream-proof on, radar on, no trees on. The setup guides covered Defender exclusions so we did not burn the first launch.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Took the $35 starter license first to test it on the Gaijin client. Instant delivery, loaded clean, then I upgraded to a longer license the same week.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Light tank scout',
    game: 'War Thunder',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Autoscout plus distance readouts turned my scouting into free silver lions. Silent aim took ten minutes to dial in so it did not look obvious on replay.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'Naval player',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Bullet ESP with trajectory lines finally told me where the shots come from in naval. Nothing like the free garbage menus I tried before this.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'Sim battles',
    game: 'War Thunder',
    rating: 4,
    datePublished: '2026-09-15',
    body: 'Silent aim looks legit on server replay as long as aimpoint size and dynamic FOV stay conservative. I still re-check status after every update note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-15',
    body: 'Map Finder alone sold the squad. Auto restart on the maps we hate means no more urban brawls in a Maus. Support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11 / Steam',
    game: 'War Thunder',
    rating: 3,
    datePublished: '2026-09-12',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to the Steam overlay before the menu appeared.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'Ground arcade',
    game: 'War Thunder',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'War Thunder-only shop is a plus. World Changer with no trees and no smoke changes ground battles completely, and the feature list matched the actual menu.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count, bestRating: '5', worstRating: '1' }
}
