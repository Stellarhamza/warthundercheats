export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ ? visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are War Thunder Cheats?',
    a: 'War Thunder Cheats are PC tools on warthundercheats.xyz for War Thunder ? silent aim Aimbot with Autolead, player ESP with reload and repair timers, vehicle modules ESP, wallhack chams, bullet and rocket ESP, radar HUD and Map Finder ? with live load status after every game update.',
  },
  {
    q: 'How much do War Thunder cheats cost?',
    a: `War Thunder cheats start from $35. Longer licenses cost more per period but less per day. Always confirm live status and the current price on warthundercheats.xyz before checkout.`,
  },
  {
    q: 'Do you sell War Thunder hacks for other games?',
    a: 'No. warthundercheats.xyz sells War Thunder cheats / War Thunder hacks only ? one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with War Thunder ESP, vehicle modules ESP and the radar HUD, then enable silent aim and Autolead only if they want firepower assistance.',
  },
  {
    q: 'How do you handle War Thunder updates?',
    a: 'We publish live clear-to-load or Updating labels after every War Thunder and Gaijin patch. Major updates can pause the build for a rebuild, so always check status on warthundercheats.xyz before you load.',
  },
  {
    q: 'What is War Thunder ESP / wallhack?',
    a: 'War Thunder ESP draws enemy boxes, unit names, distance, reload timers and repair timers through terrain, buildings and foliage. Chams highlight the whole vehicle model so a hull-down tank behind a ridge is never a surprise.',
  },
  {
    q: 'What is vehicle modules ESP?',
    a: 'Modules ESP shows the internals of a target vehicle ? commander, gunner, loader and driver positions plus engine, transmission, hull and turret ammo racks, gun barrel and cannon breech ? so you aim at the module that ends the fight instead of guessing.',
  },
  {
    q: 'What features are included?',
    a: 'War Thunder Aimbot with Silent Aim, Autolead, Autoscout and Auto Artillery, player ESP with chams, vehicle modules ESP, bullet and rocket ESP with trajectories, World Changer (no trees, no smoke, fog editing), extended radar and HUD tools, Free Camera, zoom changer and Map Finder. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Does it work on Steam and Gaijin clients?',
    a: 'Yes. The build supports War Thunder on Windows 10 and Windows 11 through both the Steam version and the standalone Gaijin launcher, on Intel or AMD processors with Nvidia or AMD graphics.',
  },
  {
    q: 'How do I buy War Thunder cheats?',
    a: 'Start on the homepage, confirm live load status and review the price from $35. Open Product details for compatibility and the full feature list, then continue to checkout for instant digital delivery.',
  },
  {
    q: 'How do I load War Thunder Cheats?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build into a patched War Thunder client.',
  },
  {
    q: 'Where do I get War Thunder Cheats support?',
    a: 'Use the Support page and your checkout order channel. Include the current status label and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read War Thunder Cheats reviews?',
    a: 'Buyer reviews with ratings are on the Reviews page. They cover tank and aircraft ESP, silent aim behaviour, Map Finder and status honesty after patches.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page ? delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official War Thunder site?',
    a: 'No. We sell War Thunder Cheats only. Buy and play the game from warthunder.com. We are not affiliated with Gaijin Entertainment or War Thunder.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[8],
  SITE_FAQS[9],
]
