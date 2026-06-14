import React from 'react';

interface GameCardProps {
  title: string;
  genre: string;
  notes?: string;
  steamAppId?: number;
  hours?: string;
  status?: 'playing' | 'next' | 'scheduled' | 'completed';
}

const statusColors: Record<string, string> = {
  playing: '#22c55e',
  next: '#3b82f6',
  scheduled: '#6b7280',
  completed: '#8b5cf6',
};

export default function GameCard({ title, genre, notes, steamAppId, hours, status }: GameCardProps): React.ReactElement {
  const imgUrl = steamAppId
    ? `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${steamAppId}/header.jpg`
    : null;

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'stretch',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 'var(--ifm-card-border-radius)',
        overflow: 'hidden',
        marginBottom: '1rem',
        background: 'var(--ifm-card-background-color)',
      }}
    >
      {imgUrl && (
        <div style={{ flexShrink: 0, width: 180, minHeight: 84 }}>
          <img
            src={imgUrl}
            alt={`${title} header`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </div>
      )}
      <div style={{ flex: 1, padding: '0.75rem 1rem 0.75rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <strong style={{ fontSize: '1.05rem' }}>{title}</strong>
          {status && (
            <span
              style={{
                display: 'inline-block',
                padding: '0.1rem 0.5rem',
                borderRadius: 999,
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                background: statusColors[status] + '22',
                color: statusColors[status],
                border: `1px solid ${statusColors[status]}44`,
              }}
            >
              {status}
            </span>
          )}
          {hours && (
            <span style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)' }}>
              ~{hours}
            </span>
          )}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '0.15rem' }}>
          <em>{genre}</em>
        </div>
        {notes && (
          <div style={{ fontSize: '0.9rem', marginTop: '0.35rem', color: 'var(--ifm-color-emphasis-600)' }}>
            {notes}
          </div>
        )}
        {steamAppId && (
          <div style={{ marginTop: '0.35rem' }}>
            <a
              href={`https://store.steampowered.com/app/${steamAppId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.8rem' }}
            >
              View on Steam →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
