import React, { useEffect, useState } from 'react';

interface SteamGameData {
  appId: number;
  name: string;
  playtime2Weeks: number;
  playtimeForever: number;
  headerUrl: string;
}

interface SteamStatus {
  fetchedAt: string;
  totalCount: number;
  games: SteamGameData[];
}

function formatPlaytime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins}m`;
  return `${hours}h ${mins}m`;
}

function timeAgo(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function SteamNowPlaying(): React.ReactElement {
  const [data, setData] = useState<SteamStatus | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/gaming-calendar/data/steam-status.json')
      .then((r) => {
        if (!r.ok) throw new Error('Not found');
        return r.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div
        style={{
          padding: '1rem',
          border: '1px dashed var(--ifm-color-emphasis-300)',
          borderRadius: 'var(--ifm-card-border-radius)',
          color: 'var(--ifm-color-emphasis-500)',
          fontSize: '0.9rem',
        }}
      >
        Steam status unavailable. Set up <code>STEAM_API_KEY</code> and{' '}
        <code>STEAM_ID</code> to enable live data.
      </div>
    );
  }

  if (!data) {
    return <div style={{ padding: '1rem' }}>Loading Steam status...</div>;
  }

  if (data.games.length === 0) {
    return (
      <div
        style={{
          padding: '1rem',
          border: '1px dashed var(--ifm-color-emphasis-300)',
          borderRadius: 'var(--ifm-card-border-radius)',
          color: 'var(--ifm-color-emphasis-500)',
        }}
      >
        No recently played games found.
      </div>
    );
  }

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.5rem' }}>
        Synced {timeAgo(data.fetchedAt)} via Steam API
      </div>
      {data.games.map((game) => (
        <div
          key={game.appId}
          style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            marginBottom: '0.5rem',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: 'var(--ifm-card-border-radius)',
            overflow: 'hidden',
          }}
        >
          <div style={{ flexShrink: 0, width: 120 }}>
            <img
              src={game.headerUrl}
              alt={`${game.name} header`}
              style={{ width: '100%', display: 'block' }}
              loading="lazy"
            />
          </div>
          <div style={{ flex: 1, padding: '0.5rem 0.75rem 0.5rem 0' }}>
            <div>
              <a
                href={`https://store.steampowered.com/app/${game.appId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 600 }}
              >
                {game.name}
              </a>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)' }}>
              {formatPlaytime(game.playtime2Weeks)} past 2 weeks ·{' '}
              {formatPlaytime(game.playtimeForever)} total
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
