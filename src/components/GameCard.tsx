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
        transition: 'box-shadow 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-1px)' : 'none',
        boxShadow: hovered ? '0 4px 20px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.2)',
      }}
    >
      {imgUrl && (
        <div style={{ flexShrink: 0, width: 324, minHeight: 151, position: 'relative' }}>
          <img
            src={imgUrl}
            alt={`${title} header`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: hovered ? 'brightness(1.05)' : 'brightness(0.95)',
              transition: 'filter 0.3s',
            }}
            loading="lazy"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: hovered ? 'linear-gradient(135deg, rgba(26,159,255,0.08) 0%, transparent 60%)' : 'transparent',
              transition: 'background 0.3s',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}
      <div style={{ flex: 1, padding: '14px 18px', minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: 4 }}>
          <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#d6e0e7' }}>
            {title}
          </span>
          {status && (
            <span style={{ ...statusStyles[status], marginLeft: 10 }}>{status}</span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', color: '#acb8c4' }}>
            <em>{genre}</em>
          </span>
          {hours && (
            <span style={{ fontSize: '0.75rem', color: '#8091a2' }}>~{hours}</span>
          )}
        </div>
        {notes && (
          <div style={{ fontSize: '0.85rem', color: '#c6d4df', lineHeight: 1.5 }}>
            {notes}
          </div>
        )}
        {steamAppId && (
          <div style={{ marginTop: notes ? 8 : 0 }}>
            <a
              href={`https://store.steampowered.com/app/${steamAppId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.75rem',
                color: '#67c1f5',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              View on Steam ›
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
