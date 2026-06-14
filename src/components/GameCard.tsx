import React from 'react';

interface GameCardProps {
  title: string;
  genre: string;
  notes?: string;
  steamAppId?: number;
  hours?: string;
  status?: 'playing' | 'next' | 'scheduled' | 'completed';
}

const statusStyles: Record<string, React.CSSProperties> = {
  playing: {
    color: '#a4d007',
    fontWeight: 700,
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  next: {
    color: '#67c1f5',
    fontWeight: 600,
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  scheduled: {
    color: '#8091a2',
    fontWeight: 600,
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  completed: {
    color: '#8b5cf6',
    fontWeight: 600,
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
};

export default function GameCard({ title, genre, notes, steamAppId, hours, status }: GameCardProps): React.ReactElement {
  const imgUrl = steamAppId
    ? `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${steamAppId}/header.jpg`
    : null;

  return (
    <div
      style={{
        display: 'flex',
        gap: 0,
        alignItems: 'stretch',
        background: '#16202d',
        borderRadius: 3,
        overflow: 'hidden',
        marginBottom: 6,
      }}
    >
      {imgUrl && (
        <div style={{ flexShrink: 0, width: 280, minHeight: 130 }}>
          <img
            src={imgUrl}
            alt={`${title} header`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </div>
      )}
      <div style={{ flex: 1, padding: '10px 14px', minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#c6d4df', marginBottom: 2 }}>
          {title}
        </div>
        <div style={{ fontSize: '0.7rem', color: '#8f98a0', marginBottom: 6 }}>
          <em>{genre}</em>
        </div>
        <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', marginBottom: 6 }}>
          <span
            style={{
              background: '#2a3f50',
              color: '#67c1f5',
              fontSize: '0.6rem',
              padding: '2px 6px',
              borderRadius: 2,
            }}
          >
            {genre.split('/')[0].trim()}
          </span>
        </div>
        {notes && (
          <div style={{ fontSize: '0.78rem', color: '#8091a2', marginBottom: 8 }}>
            {notes}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          {status && (
            <span style={statusStyles[status]}>{status}</span>
          )}
          {hours && (
            <span style={{ fontSize: '0.72rem', color: '#8091a2' }}>~{hours}</span>
          )}
          {steamAppId && (
            <a
              href={`https://store.steampowered.com/app/${steamAppId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.72rem', color: '#67c1f5', textDecoration: 'none' }}
            >
              View on Steam ›
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
