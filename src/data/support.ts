export type SupportTopic = {
  heading: string
  body: string[]
}

export type SupportFaq = {
  q: string
  a: string
}

export const SUPPORT_INTRO =
  'Support for War Thunder Cheats buyers on warthundercheats.xyz — loader setup, load status after Gaijin patches, menu config and delivery help after you purchase War Thunder cheats.'

export const SUPPORT_TOPICS: SupportTopic[] = [
  {
    heading: 'Status before you load',
    body: [
      'Check live status on the product page. If it says Updating, do not load. Wait until it is clear to load again.',
      'A War Thunder or Gaijin update can invalidate yesterday’s build. Status honesty matters more than rushing one more battle.',
    ],
  },
  {
    heading: 'Loader and menu issues',
    body: [
      'Follow Complete Setup for antivirus exclusions and load order before you open a ticket.',
      'If the product is Updating, wait. If a clear-to-load build still fails after one clean retry, open a support request with your order ID and whether you use the Steam or Gaijin client.',
    ],
  },
  {
    heading: 'Delivery and refunds',
    body: [
      'Delivery failures and extended Updating windows are covered on the Refunds page. Include your order ID when you write in.',
      'Licenses from $35 are the entry option to confirm the loader fits your PC before you extend.',
    ],
  },
  {
    heading: 'What we can and cannot help with',
    body: [
      'Supported: War Thunder on Windows 10 and 11, Steam and Gaijin launcher clients, loader and menu help for paid licenses.',
      'Not supported: other games, console or Mac clients, cracked loaders or third-party mirrors.',
    ],
  },
]

export const SUPPORT_FAQS: SupportFaq[] = [
  {
    q: 'How do I contact War Thunder Cheats support?',
    a: 'Open your order on warthundercheats.xyz and use the checkout support channel tied to your purchase. Include a status screenshot (clear to load / Updating), your Windows version and whether you need load, menu or delivery help.',
  },
  {
    q: 'The loader will not open — what first?',
    a: 'Follow the Complete Setup forum thread for the current load order. If status is Updating, wait; if a clear-to-load build fails, include your order ID in a support request.',
  },
  {
    q: 'Menu opened once then never again?',
    a: 'Do not spam launch. Close War Thunder, confirm antivirus exclusions, disable overlays, re-check status, then try one clean load. If it still fails, contact support with your order ID.',
  },
  {
    q: 'Do you support both the Steam and Gaijin clients?',
    a: 'Yes. Both the Steam version and the standalone Gaijin launcher are supported on Windows 10 and 11. Tell support which client you use when you write in, because load order notes differ slightly.',
  },
  {
    q: 'Where is my delivery?',
    a: 'Delivery is digital right after checkout on warthundercheats.xyz. Use only that loader link. Third-party mirrors are unsupported and unsafe.',
  },
]
