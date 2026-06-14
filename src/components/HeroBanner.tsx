import React from 'react';

const games = [
  { id: 2651280, title: "Marvel's Spider-Man 2" },
  { id: 1091500, title: 'Cyberpunk 2077' },
  { id: 292030, title: 'The Witcher 3' },
  { id: 1174180, title: 'Red Dead Redemption 2' },
  { id: 1151640, title: 'Horizon Zero Dawn' },
  { id: 2322010, title: 'God of War Ragnarök' },
];

export default function HeroBanner(): React.ReactElement {
  return (
    <div
      style={{
        position: 'relative',
        margin: '0 calc(-1 * var(--ifm-spacing-horizontal)) 1.5rem',
        width: 'calc(100% + 2 * var(--ifm-spacing-horizontal))',
        height: 280,
        overflow: 'hidden',
        borderRadius: 0,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          width: '100%',
          height: '100%',
        }}
      >
        {games.map((game) => (
          <img
            key={game.id}
            src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.id}/header.jpg`}
            alt=""
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(27,40,56,0.15) 0%, rgba(27,40,56,0.92) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '2rem var(--ifm-spacing-horizontal)',
          pointerEvents: 'none',
        }}
      >
        <h1
          style={{
            color: '#ffffff',
            fontSize: '2rem',
            fontWeight: 700,
            margin: 0,
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          The Balanced Backlog
        </h1>
        <p
          style={{
            color: '#c6d4df',
            fontSize: '1rem',
            margin: '6px 0 0',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            fontWeight: 400,
          }}
        >
          A schedule that balances mood, season, and genre for 2026–2028
        </p>
      </div>
    </div>
  );
}
