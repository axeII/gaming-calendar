/**
 * Fetches recently played games from Steam API at build time.
 * Usage: STEAM_API_KEY=xxx STEAM_ID=xxx npx tsx scripts/fetch-steam-data.ts
 *
 * Outputs to src/data/steam-status.json which is imported by SteamNowPlaying component.
 */

import fs from 'fs';
import path from 'path';

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

interface SteamGame {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  img_logo_url: string;
}

interface SteamResponse {
  response: {
    total_count: number;
    games?: SteamGame[];
  };
}

async function fetchSteamId(vanityUrl: string): Promise<string | null> {
  const url = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${STEAM_API_KEY}&vanityurl=${vanityUrl}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.response.success === 1) {
    return data.response.steamid;
  }
  return null;
}

async function fetchRecentlyPlayed(): Promise<SteamGame[]> {
  if (!STEAM_API_KEY || !STEAM_ID) {
    console.warn('⚠️  STEAM_API_KEY or STEAM_ID not set. Generating empty data file.');
    return [];
  }

  let steamId = STEAM_ID;

  // If STEAM_ID looks like a vanity URL (no numeric ID), resolve it
  if (!/^\d+$/.test(steamId)) {
    const resolved = await fetchSteamId(steamId);
    if (resolved) {
      steamId = resolved;
      console.log(`✓ Resolved vanity URL "${STEAM_ID}" to SteamID ${steamId}`);
    } else {
      console.warn(`⚠️  Could not resolve vanity URL "${STEAM_ID}". Using as-is.`);
    }
  }

  const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${STEAM_API_KEY}&steamid=${steamId}&count=5`;
  const res = await fetch(url);
  const data: SteamResponse = await res.json();

  if (!data.response || !data.response.games) {
    console.warn('⚠️  No recently played games found or API error.');
    return [];
  }

  console.log(`✓ Fetched ${data.response.games.length} recently played games`);
  return data.response.games;
}

async function main() {
  const games = await fetchRecentlyPlayed();

  const output = {
    fetchedAt: new Date().toISOString(),
    totalCount: games.length,
    games: games.map((g) => ({
      appId: g.appid,
      name: g.name,
      playtime2Weeks: g.playtime_2weeks,
      playtimeForever: g.playtime_forever,
      imgIconUrl: `https://shared.akamai.steamstatic.com/steamcommunity/public/images/apps/${g.appid}/${g.img_icon_url}.jpg`,
      imgLogoUrl: g.img_logo_url
        ? `https://shared.akamai.steamstatic.com/steamcommunity/public/images/apps/${g.appid}/${g.img_logo_url}.jpg`
        : null,
      headerUrl: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${g.appid}/header.jpg`,
    })),
  };

  const outDir = path.resolve('src/data');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'steam-status.json'), JSON.stringify(output, null, 2));

  console.log(`✓ Written src/data/steam-status.json`);
}

main().catch(console.error);
