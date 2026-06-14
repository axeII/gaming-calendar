# Gaming Calendar — AI Agent Guide

## Project Overview
Personal gaming backlog schedule for 2026–2027, built as a Docusaurus v3 site and hosted on GitHub Pages. Shows monthly game plans, PC specs, Steam profile, sale price analysis, and a "Now Playing" section. Public, open-source (MIT).

**URL**: https://axeii.github.io/gaming-calendar/
**Repo**: https://github.com/axeII/gaming-calendar
**Owner**: axeII (@axeii on GitHub)

## Tech Stack
- **Framework**: Docusaurus 3.10.1 with classic preset, TypeScript
- **Content**: MDX (JSX in Markdown) with React component imports
- **Styling**: CSS custom properties via Docusaurus theme, custom CSS in `src/css/custom.css`
- **Theme**: Dark mode default, purple primary color (`#7c3aed`)
- **Hosting**: GitHub Pages via `gh-pages` branch
- **Node**: v26.1.0, npm 11.16.0

## Project Structure
```
gaming-calendar/
├── docs/                        # All doc pages (MDX files)
│   ├── index.mdx                # Homepage / landing
│   ├── now-playing.mdx          # Current game queue
│   ├── shopping.mdx             # Sale price tracking
│   ├── beers-and-friends.mdx    # Co-op / party games
│   ├── mood-cheat-sheet.mdx     # Genre mood picker
│   ├── notes.mdx                # Overflow & notes
│   └── monthly/                 # One file per month/period
│       ├── 2026-06-june.mdx
│       ├── 2026-07-july.mdx
│       ├── 2026-08-august.mdx
│       ├── 2026-09-september.mdx
│       ├── 2026-10-october.mdx
│       ├── 2026-11-november.mdx
│       ├── 2026-12-december.mdx
│       ├── 2027-01-january.mdx
│       ├── 2027-02-03-feb-march.mdx
│       ├── 2027-04-april.mdx
│       ├── 2027-05-may.mdx
│       ├── 2027-06-07-june-july.mdx
│       ├── 2027-08-09-august-september.mdx
│       ├── 2027-10-october.mdx
│       ├── 2027-11-november.mdx
│       └── 2027-12-2028-01-december-january.mdx
├── src/
│   ├── components/
│   │   ├── GameCard.tsx         # Game thumbnail + status + Steam link
│   │   ├── PCCard.tsx           # PC specs grid card
│   │   ├── SteamProfile.tsx     # Steam profile link
│   │   └── SteamNowPlaying.tsx  # Live Steam data (deferred)
│   ├── data/
│   │   └── metadata.json        # PC specs + Steam ID
│   ├── css/
│   │   └── custom.css           # Theme overrides
│   └── pages/                   # Any top-level pages (unused)
├── static/
│   └── data/
│       └── steam-status.json    # Placeholder for live Steam API
├── scripts/
│   └── fetch-steam-data.ts      # Build-time Steam fetcher (deferred)
├── sidebars.ts                  # Sidebar config
├── docusaurus.config.ts         # Main Docusaurus config
├── package.json
└── AGENTS.md                    # This file
```

## Components

### GameCard (`src/components/GameCard.tsx`)
Props: `title`, `genre`, `notes?`, `steamAppId?`, `hours?`, `status?`

Renders a horizontal card with:
- Steam CDN header image (`shared.akamai.steamstatic.com/store_item_assets/steam/apps/{steamAppId}/header.jpg`)
- Status badge (playing=green, next=blue, scheduled=gray, completed=purple)
- Genre, notes, hours
- "View on Steam →" link

Usage in MDX:
```mdx
import GameCard from '@site/src/components/GameCard';

<GameCard
  title="Nobody Wants to Die"
  genre="Detective / Adventure"
  steamAppId={1939970}
  hours="4-6"
  status="playing"
/>
```

### PCCard (`src/components/PCCard.tsx`)
Renders PC specs from `metadata.json` as a 3-column CSS grid of chip-style cards. No props.

### SteamProfile (`src/components/SteamProfile.tsx`)
Renders Steam ID and profile link from `metadata.json`. No props.

## Data Files

### `src/data/metadata.json`
```json
{
  "steam": { "id": "76561198216855980" },
  "pc": {
    "os": "CachyOS",
    "cpu": "AMD Ryzen 5 5600X",
    "ram": "31GB",
    "gpu": "AMD Radeon RX 9070 XT",
    "driver": "Mesa 24.3.4",
    "kernel": "7.0.8-1-cachyos"
  }
}
```

## Steam App IDs (Verified)
Each game uses a numeric Steam App ID for CDN images and store links:

| Game | App ID |
|------|--------|
| Alan Wake 2 | 203160 |
| Assetto Corsa Competizione | 805550 |
| Beyond: Two Souls | 1010550 |
| Civilization VI | 289070 |
| Control | 870780 |
| Cyberpunk 2077 | 1091500 |
| Darkest Dungeon II | 1940340 |
| Detroit: Become Human | 1222140 |
| Disco Elysium | 632470 |
| DOOM (2016) | 379720 |
| DOOM Eternal | 782330 |
| Dragon Age: The Veilguard | 1845910 |
| Endling | 1623250 |
| God of War Ragnarök | 2322010 |
| Hogwarts Legacy | 990080 |
| Horizon Zero Dawn | 1151640 |
| Kingdom Come: Deliverance II | 2331290 |
| Life is Strange: Double Exposure | 2138710 |
| Manor Lords | 1363080 |
| Marvel's Spider-Man 2 | 2651280 |
| Marvel's Spider-Man: Miles Morales | 1817190 |
| Nobody Wants to Die | 1939970 |
| Pacific Drive | 1458140 |
| Pillars of Eternity II | 560130 |
| Red Dead Redemption 2 | 1174180 |
| Resident Evil 4 | 2050650 |
| Resident Evil Village | 1196590 |
| S.T.A.L.K.E.R. 2 | 1643320 |
| Severed Steel | 834150 |
| Shadow of the Tomb Raider | 750920 |
| The Quarry | 1577120 |
| The Witcher 3 | 292030 |
| This Is The Police | 443810 |
| This Is The Police 2 | 785740 |
| Tomb Raider (2013) | 203160 |
| Vampire: The Masquerade - Swansong | 1322440 |
| Victoria 3 | 529340 |
| Wolfenstein: The New Order | 17410 |
| Wolfenstein: The Old Blood | 302510 |

## Key Decisions
1. **No live Steam API** — metadata is hardcoded. STEAM_API_KEY + STEAM_ID secrets are configured in GitHub but not wired into the build. Deferred.
2. **No local images** — game thumbnails served from Steam CDN only. No binary assets in repo.
3. **All content is MDX** — .md files were converted to .mdx for React component support.
4. **Blog disabled** — not needed for this project.
5. **Dark mode default** — `defaultMode: 'dark'` in config, user can toggle.

## Navbar & Sidebar
- **Navbar**: "Now Playing" (type: doc) left, "Calendar" (type: docSidebar with sidebarId: calendarSidebar) left, "GitHub" right
- **Sidebar** (calendarSidebar): Now Playing, then months grouped by year (2026 expanded, 2027 collapsed), then Shopping, Beers & Friends, Mood Cheat Sheet, Notes

## Deployment Process
1. `npm run build` — produces static files in `build/`
2. Copy `build/*` to gh-pages branch
3. Commit and push to `gh-pages` branch
4. GitHub Pages auto-deploys from the `gh-pages` branch

Use git worktree to deploy without disturbing the main branch:
```sh
git worktree add /tmp/gh-pages gh-pages
cp -r build/* /tmp/gh-pages/
git -C /tmp/gh-pages add -A
git -C /tmp/gh-pages commit -m "deploy: <sha>"
git -C /tmp/gh-pages push origin gh-pages
git worktree remove /tmp/gh-pages
```

## Common Pitfalls
1. **Steam App IDs are easy to get wrong** — always verify via `store.steampowered.com/app/<id>`. A wrong ID = broken image + broken store link.
2. **Navbar doc links must use `type: 'doc'`** — using plain `to:` for docs won't navigate correctly. Use `type: 'doc', docId: 'id-here'` instead.
3. **node_modules gets deleted when checking out gh-pages** — the build dir sits inside the working tree and gets wiped by `rm -rf *`. Use git worktree to avoid this.
4. **Docusaurus sidebar IDs must match** — the sidebar ID in `sidebars.ts` must match the `sidebarId` in config.
5. **onBrokenLinks: 'throw'** — any broken internal link will fail the build at compile time.

## Related Files Outside This Repo
- `/home/ales/gaming-calendar-2026.md` — Original source doc (single file)
- `/home/ales/steam-price-analysis.md` — Price analysis notes
- `/home/ales/.config/opencode/AGENTS.md` — System-level agent config (CachyOS, RDNA 4)
