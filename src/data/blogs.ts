export type BlogSection = {
  heading: string
  body: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  searchTerms: string
  date: string
  readMinutes: number
  tag: string
  sections: BlogSection[]
  /** Emit HowTo JSON-LD when true (setup / how-to guides). */
  howTo?: boolean
}

/**
 * Commercial War Thunder cheat guides — unique intents, keyword-targeted meta.
 * Primary SERP targets: war thunder cheats, warthunder cheats, war thunder hacks,
 * war thunder aimbot, war thunder esp, war thunder wallhack.
 */
export const BLOGS: BlogPost[] = [
  {
    slug: 'features-list',
    title: 'War Thunder Cheat Features Checklist',
    excerpt:
      'Checklist of every War Thunder cheat module on warthundercheats.xyz — silent aim, Autolead, player ESP, vehicle modules ESP, bullet and rocket ESP, radar HUD and Map Finder — before you open checkout from $35.',
    metaTitle: 'War Thunder Cheat Features Checklist | Aimbot ESP',
    metaDescription:
      'War Thunder cheat features checklist: silent aim Aimbot, Autolead, player ESP, vehicle modules ESP, bullet and rocket ESP, World Changer, radar HUD and Map Finder from $35.',
    searchTerms:
      'war thunder cheat features checklist warthunder cheats aimbot esp modules esp map finder',
    date: '2026-09-17',
    readMinutes: 9,
    tag: 'Features',
    sections: [
      {
        heading: 'Use this checklist before checkout',
        body: [
          'Searching "war thunder cheats" or "warthunder cheat" usually means one question: what is actually included? This guide is the module checklist — not the price page. Open Product details for live load status and checkout from $35.',
          'War Thunder Cheats on warthundercheats.xyz is a single internal build for Windows 10 and 11: one loader, one license, clear-to-load or Updating after each Gaijin patch. Both the Steam and Gaijin launcher clients are supported.',
        ],
      },
      {
        heading: 'Aimbot, silent aim and Autolead',
        body: [
          'Silent Aim to Point — fire near a target and the shell still lands while your crosshair never jumps, with visible-only checks so nothing tracks through a hill.',
          'Aimpoint size, FOV drawing and Dynamic FOV — shape the capture zone for sniping down a lane or brawling in a town.',
          'Autolead — automatic lead prediction for moving tanks and aircraft, with its own FOV, visible-only mode, aircraft toggle and lead reset when the target is gone.',
          'Autoscout and Auto Artillery — automatic scouting for free research points and artillery aiming with repair-only mode plus vehicle type filters.',
        ],
      },
      {
        heading: 'ESP, chams and modules',
        body: [
          'Player ESP — corner or full boxes, box thickness, unit names, distance format, reload timers and repair timers with a colour override while a target repairs.',
          'Chams — model highlighting through terrain, buildings and foliage with outline scale and custom colours.',
          'Vehicle Modules ESP — commander, gunner, loader and driver positions plus engine, transmission, hull and turret ammo, gun barrel, cannon breech and coaxial gun, each with its own colour.',
        ],
      },
      {
        heading: 'Projectiles, world and extras',
        body: [
          'Bullet ESP — shell markers with trajectory lines, display time and update rate so you can trace where a shot came from.',
          'Rocket ESP — missile markers, flight path, distance and owner filters for local, allied or enemy rockets.',
          'World Changer — no trees, no fallen trees, no smoke, no decor and fog editing for clean sightlines.',
          'HUD and radar — gun ballistics, aim prediction, map air and ground markers, damage indicator, extended radar with direction indication and arcade, realistic or hardcore presets.',
          'Extras — Free Camera, zoom changer, players info panel, enemy aim warning, fog of war bypass and Map Finder.',
        ],
      },
      {
        heading: 'Next reads',
        body: [
          'Tune the aim complex in the Aimbot settings guide, dial visuals in the ESP & wallhack guide, learn the internals in the Modules ESP guide, then confirm live status before you buy War Thunder cheats.',
        ],
      },
    ],
  },
  {
    slug: 'aimbot-settings',
    title: 'War Thunder Aimbot Settings for Silent Aim',
    excerpt:
      'Tune War Thunder Aimbot aimpoint size, FOV, Autolead and silent aim so tank and aircraft tracking stays effective without looking obvious on server replay.',
    metaTitle: 'War Thunder Aimbot Settings | Silent Aim & Autolead',
    metaDescription:
      'War Thunder Aimbot settings for PC: Silent Aim to Point, aimpoint size, dynamic FOV, Autolead and visible-only checks so your WT cheat stays believable on replay.',
    searchTerms:
      'war thunder aimbot settings silent aim autolead fov warthunder cheat war thunder hacks',
    date: '2026-09-17',
    readMinutes: 10,
    tag: 'Aimbot',
    howTo: true,
    sections: [
      {
        heading: 'Start conservative',
        body: [
          'War Thunder keeps server replays, and players who lose a top tier vehicle do watch them. Start with a small aimpoint size, visible-only checks and Autolead off on aircraft before you push anything aggressive.',
          'Confirm live status first. No aim setting saves a build that has not been rebuilt after a Gaijin update.',
        ],
      },
      {
        heading: 'Silent Aim to Point',
        body: [
          'Silent Aim to Point is the feature most buyers search for: the shell goes where the aimpoint is while your turret and crosshair keep moving naturally.',
          'Enable Silent Aim Visible Only so nothing fires at a target behind a ridge — a shot through solid terrain is the clearest replay evidence there is.',
          'Aimpoint Size is your capture zone. Small reads as good aim; oversized reads as a magnet in a close-range town map.',
        ],
      },
      {
        heading: 'Autolead for moving targets',
        body: [
          'Autolead calculates lead for you, which matters most against fast light tanks and aircraft where manual lead is guesswork.',
          'Keep Autolead FOV moderate and enable Autolead on Visible Only. Turn on Reset Lead if No Target so the aimpoint does not drift onto empty sky.',
          'Disable on Aircraft is useful in air realistic if you would rather keep manual deflection and only use lead indicators.',
        ],
      },
      {
        heading: 'Autoscout and Auto Artillery',
        body: [
          'Autoscout marks enemies automatically in a light tank, which is quiet value: research points and team assists without touching aim.',
          'Auto Artillery aims strikes for you. Use Repair Only to punish repairing tanks, or the type filter to target light and medium vehicles where artillery actually kills.',
        ],
      },
      {
        heading: 'Save ground and air configs',
        body: [
          'For ground realistic, lean on modules ESP with mild silent aim. For air, Autolead plus the air-to-air aim indicator does most of the work.',
          'Save a "ground" and an "air" config so you are not editing sliders in a spawn queue. Licenses start from $35 on warthundercheats.xyz.',
        ],
      },
    ],
  },
  {
    slug: 'esp-wallhack-guide',
    title: 'War Thunder ESP and Wallhack Setup',
    excerpt:
      'Configure War Thunder ESP and wallhack chams for enemy boxes, reload and repair timers, distance and clean colours without flooding your HUD.',
    metaTitle: 'War Thunder ESP Wallhack Setup | Boxes & Chams',
    metaDescription:
      'War Thunder ESP and wallhack setup: enemy boxes, unit names, distance, reload and repair timers plus chams through terrain. Clean HUD defaults for WT cheats on PC.',
    searchTerms:
      'war thunder esp wallhack chams boxes reload timer warthunder cheats war thunder hack',
    date: '2026-09-17',
    readMinutes: 9,
    tag: 'ESP',
    howTo: true,
    sections: [
      {
        heading: 'What War Thunder ESP actually does',
        body: [
          'War Thunder ESP draws enemy vehicles through terrain, buildings, bushes and smoke before they ever appear as a marker. It does not fire for you.',
          'Most searches for "war thunder wallhack" or "war thunder esp" want exactly this: knowing which ridge the enemy heavy is behind, and whether he has reloaded.',
        ],
      },
      {
        heading: 'Boxes, names and distance',
        body: [
          'Pick corner boxes for a lighter HUD or full boxes for clarity at range, then tune box thickness and corner scale so lines stay readable at 1440p and above.',
          'Show Unit Name to know whether that is a Tiger or a Panther before you commit, and Show Distance with the format you think in — metres for ground, kilometres for air.',
          'Draw Forepart of Box tells you which way a hull is facing, which is often more useful than the box itself when you flank.',
        ],
      },
      {
        heading: 'Reload and repair timers',
        body: [
          'Show Reload Timer turns every trade into maths you can win: peek on his reload, not on yours.',
          'Show Repair Timer with a box colour override marks tanks that are stuck repairing a barrel or track — free kills and ideal Auto Artillery targets.',
          'Corpse and invulnerable boxes are worth enabling separately so a destroyed hull or a just-spawned vehicle is never mistaken for a live threat.',
        ],
      },
      {
        heading: 'Chams and clean colours',
        body: [
          'Chams highlight whole models through objects. Pick a subtle chams type with a thin border scale; neon shells across the map look bad in clips and hurt readability.',
          'Cap what you show. With World Changer removing trees and smoke, you often need far less ESP than you think.',
          'Use stream-proof if you record or stream, and read the Modules ESP guide next for internal component highlighting.',
        ],
      },
    ],
  },
  {
    slug: 'modules-esp-guide',
    title: 'War Thunder Modules ESP: Crew, Engine and Ammo',
    excerpt:
      'Use War Thunder vehicle modules ESP to see crew positions, engine, transmission, ammo racks, barrel and breech so every shell hits something that matters.',
    metaTitle: 'War Thunder Modules ESP | Crew, Ammo Rack & Engine',
    metaDescription:
      'War Thunder modules ESP guide: highlight commander, gunner, loader and driver plus engine, transmission, hull and turret ammo, gun barrel and breech for one-shot kills.',
    searchTerms:
      'war thunder modules esp ammo rack crew engine transmission warthunder cheats war thunder esp',
    date: '2026-09-16',
    readMinutes: 10,
    tag: 'Modules ESP',
    howTo: true,
    sections: [
      {
        heading: 'Why modules ESP wins fights',
        body: [
          'War Thunder damage is modelled per component. Two players can both hit a hull and only one detonates the ammo rack. Modules ESP removes the guesswork by drawing the internals where they actually sit.',
          'This is the feature that separates a War Thunder cheat from a generic wallhack: you are not just seeing the tank, you are seeing what is inside it.',
        ],
      },
      {
        heading: 'Crew placement',
        body: [
          'Enable commander, gunner, loader and driver so you can pick a crew knockout instead of a lucky spall.',
          'Two crew members lost is often a dead tank in practice — the survivor cannot aim and reload fast enough to trade back.',
        ],
      },
      {
        heading: 'Ammo, engine and drivetrain',
        body: [
          'Ammo Body and Ammo Turret are the instant kills. Hull ammo is the classic one-shot on Soviet mediums; turret ammo ends a lot of heavies from the side.',
          'Engine and Transmission stop a vehicle dead. Against a heavy you cannot penetrate frontally, immobilising it and waiting for a flank is the correct play.',
        ],
      },
      {
        heading: 'Barrel, breech and coaxial',
        body: [
          'Gun Barrel and Cannon Breech shots disarm a target without killing it — perfect when you need time to reload or reposition.',
          'A barreled tank usually starts repairing, which lights up the repair timer in player ESP and makes it an easy Auto Artillery target.',
        ],
      },
      {
        heading: 'Keep it readable',
        body: [
          'Use Entity Type to limit modules ESP to the vehicles you care about, and set per-module colours so ammo and crew are distinct at a glance.',
          'Additional Color helps at close range when modules overlap. If the hull becomes a rainbow, cut back to ammo, crew and engine only.',
        ],
      },
    ],
  },
  {
    slug: 'radar-hud-guide',
    title: 'War Thunder Radar and HUD Tools Guide',
    excerpt:
      'Set up the War Thunder radar, gun ballistics, aim prediction, map markers and damage indicator so you always know where the battle is going.',
    metaTitle: 'War Thunder Radar & HUD Guide | Ballistics, Markers',
    metaDescription:
      'War Thunder radar and HUD guide: extended radar with direction indication, gun ballistics, aim prediction, map air and ground markers, damage indicator and HUD presets.',
    searchTerms:
      'war thunder radar hud ballistics aim prediction map markers warthunder cheats war thunder hack',
    date: '2026-09-16',
    readMinutes: 9,
    tag: 'Radar & HUD',
    howTo: true,
    sections: [
      {
        heading: 'Why HUD tools matter in War Thunder',
        body: [
          'Most War Thunder deaths are information gaps — the flanking light tank, the aircraft already lining up, the SPAA you never spotted. The HUD module closes that gap without touching your aim.',
          'Start from a preset (arcade, realistic or hardcore) and then adjust. Presets keep you from enabling forty indicators at once and losing your screen.',
        ],
      },
      {
        heading: 'Radar and map awareness',
        body: [
          'The extended radar with direction indication tells you where contacts are relative to your hull, which is the fastest way to avoid getting flanked while you are scoped in.',
          'Map aircraft markers, map ground markers and map projectile markers turn the minimap into a live picture of the battle instead of a guess.',
        ],
      },
      {
        heading: 'Ballistics and aim prediction',
        body: [
          'Show Gun Ballistics draws the predicted impact point, which makes long shots and shooting over cover far more reliable.',
          'Aim Prediction and the air-to-air aim indicator handle deflection, and Show Bomb Sight matters if you play strike aircraft.',
          'Show Outline while aiming and Show Tank Distance in scope are small quality-of-life wins that never look suspicious.',
        ],
      },
      {
        heading: 'Warnings and cameras',
        body: [
          'Damage Indicator shows incoming damage direction, and Show Enemy Aim Warning tells you when someone is already aiming at you — back off before the shot.',
          'Camera unlocks (third person, artillery camera, virtual views) and Free Camera are strong for scouting but the most visible on replay. Use them sparingly and read the Stream-proof guide before you record.',
        ],
      },
    ],
  },
  {
    slug: 'map-finder-guide',
    title: 'War Thunder Map Finder: Skip Maps You Hate',
    excerpt:
      'Use Map Finder to filter War Thunder maps during matchmaking, auto-restart the queue on blacklisted locations and only load into battles you want.',
    metaTitle: 'War Thunder Map Finder Guide | Map Filter & Restart',
    metaDescription:
      'War Thunder Map Finder guide: filter maps during matchmaking, allow only preferred locations, avoid blacklisted maps and auto-restart the queue with a safe restart delay.',
    searchTerms:
      'war thunder map finder map filter matchmaking warthunder cheats war thunder cheat menu',
    date: '2026-09-16',
    readMinutes: 8,
    tag: 'Map Finder',
    howTo: true,
    sections: [
      {
        heading: 'What Map Finder does',
        body: [
          'Map Finder analyses the map while matchmaking resolves and can cancel the queue before the battle loads, so a slow heavy tank never ends up in a close-quarters city brawl again.',
          'It is the feature buyers underestimate and then refuse to play without. No aim assistance, just better games.',
        ],
      },
      {
        heading: 'Filter modes',
        body: [
          'Only Selected Green — you queue exclusively into maps you marked as good. Strictest mode, longest queues.',
          'All Without Red — everything is allowed except your blacklist. Faster queues and usually the better default.',
        ],
      },
      {
        heading: 'Auto restart settings',
        body: [
          'Enable Map Finder Auto Restart so the queue cancels and re-searches automatically on a bad map.',
          'Set a Restart Delay rather than an instant loop. Hammering matchmaking is both noisy and slower in practice.',
          'Make The Window Active is worth enabling so the game focuses itself once an accepted battle starts and you do not spawn late.',
        ],
      },
      {
        heading: 'Build a sane blacklist',
        body: [
          'Blacklist by lineup, not by taste. City maps hurt long-range lineups; open maps hurt short-barrel brawlers.',
          'Keep the list small. Twenty blacklisted maps at top tier means queue times that cost you more than a bad map would.',
        ],
      },
    ],
  },
  {
    slug: 'complete-setup',
    title: 'Complete War Thunder Cheats Setup',
    excerpt:
      'Step-by-step War Thunder cheats setup: buy from $35, antivirus exclusions, load order for Steam or Gaijin, enable ESP and Aimbot, save configs, re-check status.',
    metaTitle: 'War Thunder Cheats Setup Guide | Loader Steps',
    metaDescription:
      'Complete War Thunder cheats setup for Windows 10 and 11: buy when status is clear, add antivirus exclusions, run the load order for Steam or Gaijin, then configure ESP and Aimbot.',
    searchTerms:
      'war thunder cheats setup load order windows steam gaijin warthunder cheat install',
    date: '2026-09-18',
    readMinutes: 11,
    tag: 'Setup',
    howTo: true,
    sections: [
      {
        heading: '1) Buy and confirm status',
        body: [
          'Open warthundercheats.xyz. If status is Updating after a War Thunder patch, wait. If status is clear to load, checkout from $35 and use only the official delivery link.',
        ],
      },
      {
        heading: '2) Prep Windows',
        body: [
          'Close the Steam overlay, Discord overlay, GeForce overlay and RGB suites that hook the game process.',
          'Follow the antivirus exclusion guide for the delivery folder before first launch, and reboot once if Defender quarantined anything.',
        ],
      },
      {
        heading: '3) Load order',
        body: [
          'Launch War Thunder from Steam or the Gaijin launcher and reach the hangar.',
          'Run the War Thunder Cheats loader exactly as delivered, with the permissions listed in your order email.',
          'Wait for a successful load, open the menu, enable player ESP and modules ESP first, then Aimbot and Autolead only if you want them.',
        ],
      },
      {
        heading: '4) Save configs and re-check patches',
        body: [
          'Save a ground config and an air config, then set up Map Finder before your first queue.',
          'After any War Thunder or Gaijin update, check status again before you load. Run one test battle in arcade before a long top tier session.',
        ],
      },
    ],
  },
  {
    slug: 'windows-setup',
    title: 'War Thunder Cheats on Windows 10 and 11',
    excerpt:
      'Windows 10/11 prep for War Thunder cheats — overlays, Defender exclusions, permissions and a clean first launch on the Steam or Gaijin client.',
    metaTitle: 'War Thunder Cheats Windows 10/11 Setup | PC Guide',
    metaDescription:
      'Windows 10 and 11 setup for War Thunder cheats: close overlays, add Defender exclusions, launch with the right permissions and run a clean first load on Steam or Gaijin.',
    searchTerms:
      'war thunder cheats windows 11 setup defender overlay steam gaijin warthunder cheat',
    date: '2026-09-18',
    readMinutes: 8,
    tag: 'Windows',
    howTo: true,
    sections: [
      {
        heading: 'Supported systems',
        body: [
          'War Thunder Cheats targets Windows 10 and Windows 11 (including 23H2, 24H2 and 25H2 builds) on Intel or AMD processors with Nvidia or AMD graphics.',
          'Both the Steam version and the standalone Gaijin launcher are supported. Console, Mac and Linux clients are not.',
        ],
      },
      {
        heading: 'Overlays and background apps',
        body: [
          'Disable the Steam overlay, Discord overlay, NVIDIA and AMD overlays and aggressive RGB software before you load. They cause most "loader ran but the menu never appeared" reports.',
          'Close screen recorders and browser hardware-acceleration hogs during the first load so you can tell a real failure from a resource problem.',
        ],
      },
      {
        heading: 'Permissions and launcher',
        body: [
          'Run the delivered loader with the permissions in your order email and keep the files inside the excluded folder — moving them re-triggers antivirus.',
          'Launch War Thunder only through Steam or the official Gaijin launcher. Unofficial or repacked clients are unsupported.',
        ],
      },
    ],
  },
  {
    slug: 'disable-antivirus',
    title: 'Antivirus Exclusions for War Thunder Cheats',
    excerpt:
      'Allowlist War Thunder cheats in Windows Defender and common antivirus so the loader is not quarantined before your first battle.',
    metaTitle: 'War Thunder Cheats Antivirus Exclusions | Defender',
    metaDescription:
      'Allowlist War Thunder cheats loaders in Windows Defender and third-party antivirus, restore quarantined files, exclude the delivery folder, then continue setup when status is clear.',
    searchTerms:
      'war thunder cheats antivirus defender exclusion quarantine loader warthunder cheat fix',
    date: '2026-09-18',
    readMinutes: 8,
    tag: 'Antivirus',
    howTo: true,
    sections: [
      {
        heading: 'Why loaders get flagged',
        body: [
          'Cheat loaders trip generic heuristics even on a legitimate warthundercheats.xyz purchase. Exclusions come before you spam launch into War Thunder.',
        ],
      },
      {
        heading: 'Windows Defender steps',
        body: [
          'Windows Security ? Virus and threat protection ? Manage settings ? add an exclusion for the delivery folder.',
          'Restore the file from Protection history if it was already quarantined, then exclude the folder permanently so the next build survives.',
          'Third-party suites need the same treatment. Real-time protection plus a cheat loader is the most common first-run failure.',
        ],
      },
      {
        heading: 'Then continue setup',
        body: [
          'Return to Complete Setup for load order. Open support with your order ID if a clear-to-load War Thunder build still fails after exclusions.',
        ],
      },
    ],
  },
  {
    slug: 'status-checklist',
    title: 'Status Checklist Before You Buy or Load',
    excerpt:
      'Short status checklist for War Thunder cheats — confirm clear-to-load before checkout and before every session after a Gaijin update.',
    metaTitle: 'WT Cheat Status Checklist | Clear to Load vs Updating',
    metaDescription:
      'War Thunder cheats status checklist: what clear-to-load and Updating mean after Gaijin updates, when to wait, and how to check before checkout and before every session.',
    searchTerms:
      'war thunder cheats status clear to load updating undetected warthunder cheat checklist',
    date: '2026-09-19',
    readMinutes: 8,
    tag: 'Status',
    sections: [
      {
        heading: 'Status is part of the product',
        body: [
          'War Thunder gets frequent client updates, and a major Gaijin patch can invalidate a build overnight. warthundercheats.xyz shows clear-to-load or Updating so you are not buying a dead loader from a Discord screenshot.',
          'Licenses start from $35 for a day — honest status beats "always undetected" marketing that nobody can back up.',
        ],
      },
      {
        heading: 'Clear to load vs Updating',
        body: [
          'Clear to load (product label: Undetected) — the build matches the current War Thunder client and is ready to run.',
          'Updating — wait. Forcing yesterday\'s build into a patched client is how people lose an account and a license window at the same time.',
        ],
      },
      {
        heading: 'Before checkout',
        body: [
          'Confirm status on the homepage or product page. If it is Updating, either wait or read Refunds for how extended downtime is handled.',
          'Buy the short tariff first if you are new. It costs $35 to find out whether the loader runs cleanly on your PC.',
        ],
      },
      {
        heading: 'Before every session',
        body: [
          'Re-check status after each War Thunder update, then load once cleanly instead of retrying into a failed state.',
          'Replay review is a separate risk from anti-cheat. Keep silent aim and camera unlocks conservative even while status is green.',
        ],
      },
    ],
  },
  {
    slug: 'loader-errors',
    title: 'Fix War Thunder Cheats Loader Errors',
    excerpt:
      'Troubleshoot War Thunder cheats loader errors — menu not opening, instant close, antivirus quarantine and failed load on Steam or Gaijin clients.',
    metaTitle: 'Fix War Thunder Cheats Loader Errors | Menu & Load',
    metaDescription:
      'Fix War Thunder cheats loader errors on Windows: antivirus quarantine, overlay conflicts, failed load and the menu not opening. Check status first, then escalate with your order ID.',
    searchTerms:
      'war thunder cheats loader error menu not opening crash fix warthunder cheat support',
    date: '2026-09-19',
    readMinutes: 8,
    tag: 'Support',
    howTo: true,
    sections: [
      {
        heading: 'Stop and check status',
        body: [
          'First question: is the product clear to load right now? Updating builds fail for reasons no setting can fix, especially in the days after a big Gaijin patch.',
        ],
      },
      {
        heading: 'Common fixes',
        body: [
          'Restore quarantined files, confirm the folder exclusion, close the Steam and Discord overlays, reboot once, then try a single clean load with War Thunder sitting in the hangar.',
          'Verify you launched the right client — load order notes differ slightly between the Steam and Gaijin launcher versions.',
          'Do not run random "fix DLL" downloads from elsewhere. Support only covers official delivery from warthundercheats.xyz.',
        ],
      },
      {
        heading: 'Escalate with order ID',
        body: [
          'Contact Support with your order ID, Windows version, client (Steam or Gaijin) and a short error description. Screenshots of the status label and the loader window speed things up.',
        ],
      },
    ],
  },
  {
    slug: 'hotkeys',
    title: 'War Thunder Cheats Hotkeys After Load',
    excerpt:
      'Menu and toggle hotkeys for War Thunder cheats after a clean load — Aimbot, ESP, modules ESP, no trees, Free Camera and stream-proof binds.',
    metaTitle: 'War Thunder Cheats Hotkeys | Menu, ESP & Aimbot',
    metaDescription:
      'War Thunder cheats hotkeys after checkout: open the menu, aimpoint key, ESP toggles, no trees and no smoke keys, Free Camera and stream-proof binds for battle use.',
    searchTerms:
      'war thunder cheats hotkeys menu key esp aimbot toggle warthunder cheat binds',
    date: '2026-09-19',
    readMinutes: 7,
    tag: 'Hotkeys',
    howTo: true,
    sections: [
      {
        heading: 'After a clean load',
        body: [
          'Buy War Thunder Cheats on warthundercheats.xyz (from $35), confirm status, launch the game to the hangar, run the loader, then open the menu with the key in your delivery notes.',
          'If the menu does not open, do not spam keys — check exclusions and overlays, then contact support with your order ID.',
        ],
      },
      {
        heading: 'Binds worth setting',
        body: [
          'Aimpoint Key for silent aim, an ESP master toggle, a modules ESP toggle, No Trees Key and No Smoke Key, Free Camera Key and a stream-proof toggle.',
          'Bind only what you use in battle. Extra panic keys get pressed by accident during a fight and look obvious on replay.',
        ],
      },
      {
        heading: 'Session habits',
        body: [
          'Keep a quick visuals-off bind for screenshots and clips, and re-check your binds after every build update since defaults can move.',
        ],
      },
    ],
  },
  {
    slug: 'stream-proof-setup',
    title: 'Stream-Proof War Thunder Cheats for OBS',
    excerpt:
      'Hide War Thunder ESP, chams and HUD overlays from OBS and capture tools with stream-proof mode, and keep replays clean too.',
    metaTitle: 'Stream-Proof War Thunder Cheats | OBS Safe Overlay',
    metaDescription:
      'Stream-proof War Thunder cheats for OBS and clips: keep ESP, chams and HUD overlays off recordings while you still see them locally. Test with a private capture first.',
    searchTerms:
      'war thunder stream proof cheats esp obs hide overlay clips warthunder cheat',
    date: '2026-09-19',
    readMinutes: 8,
    tag: 'Stream',
    howTo: true,
    sections: [
      {
        heading: 'Why stream-proof exists',
        body: [
          'ESP boxes and chams in a clip are an instant report, and War Thunder clips get shared constantly. Stream-proof keeps supported overlays out of common capture paths while you still see them locally.',
        ],
      },
      {
        heading: 'OBS checklist',
        body: [
          'Enable stream-proof in the menu before you start OBS, not after.',
          'Prefer game capture over display capture where possible, then verify with a short private recording before you go live.',
        ],
      },
      {
        heading: 'Server replays are separate',
        body: [
          'Stream-proof hides your overlay, not your behaviour. War Thunder server replays show trajectories and turret movement, so keep silent aim, Autolead and camera unlocks conservative if you care about reports.',
        ],
      },
    ],
  },
]

export function getBlog(slug: string) {
  return BLOGS.find((b) => b.slug === slug)
}

export { blogPath } from './blog-paths'
