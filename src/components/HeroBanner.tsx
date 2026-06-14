import React from 'react';

const heroImg = 'https://cdn.fastly.steamstatic.com/store/home/store_home_share.jpg';

export default function HeroBanner(): React.ReactElement {
  return (
    <div
      style={{
        position: 'relative',
        margin: '0 calc(-1 * var(--ifm-spacing-horizontal)) 1.5rem',
        width: 'calc(100% + 2 * var(--ifm-spacing-horizontal))',
        height: 320,
        overflow: 'hidden',
        borderRadius: 0,
      }}
    >
      <img
        src={heroImg}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, transparent 20%, rgba(21,22,22,0.4) 50%, rgba(21,22,22,0.92) 100%)',
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
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          The Balanced Backlog
        </h1>
        <p
          style={{
            color: '#c6d4df',
            fontSize: '1.05rem',
            margin: '6px 0 0',
            textShadow: '0 1px 6px rgba(0,0,0,0.6)',
            fontWeight: 400,
          }}
        >
          A schedule that balances mood, season, and genre for 2026–2028
        </p>
      </div>
    </div>
  );
}
