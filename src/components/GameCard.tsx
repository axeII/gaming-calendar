import React, { useState } from 'react';

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
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  next: {
    color: '#67c1f5',
    fontWeight: 600,
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  scheduled: {
    color: '#8091a2',
    fontWeight: 600,
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  completed: {
    color: '#8b5cf6',
    fontWeight: 600,
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
};

export default function GameCard({ title, genre, notes, steamAppId, hours, status }: GameCardProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);
  const imgUrl = steamAppId
    ? `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${steamAppId}/header.jpg`
    : null;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        gap: 0,
        alignItems: 'stretch',
        background: '#16202d',
        borderRadius: 3,
        overflow: 'hidden',
        marginBottom: 10,
        border: '1px solid transparent',
        borderColor: hovered ? '#67c1f544' : 'transparent',
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-1px)' : 'none',
        boxShadow: hovered ? '0 4px 16px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {imgUrl && (
        <div style={{ flexShrink: 0, width: 280, minHeight: 130 }}>
          <img
            src={imgUrl}
            alt={`${title} header`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.2s',
              opacity: hovered ? 1 : 0.92,
            }}
            loading="lazy"
          />
        </div>
      )}
      <div style={{ flex: 1, padding: '14px 18px', minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#d6e0e7', marginBottom: 3 }}>
          {title}
        </div>
        <div style={{ fontSize: '0.78rem', color: '#acb8c4', marginBottom: 8 }}>
          <em>{genre}</em>
        </div>
        {notes && (
          <div style={{ fontSize: '0.85rem', color: '#c6d4df', marginBottom: 12, lineHeight: 1.5 }}>
            {notes}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          {status && (
            <span style={statusStyles[status]}>{status}</span>
          )}
          {hours && (
            <span style={{ fontSize: '0.78rem', color: '#acb8c4' }}>~{hours}</span>
          )}
          {steamAppId && (
            <a
              href={`https://store.steampowered.com/app/${steamAppId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.78rem',
                color: '#67c1f5',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              View on Steam ›
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
