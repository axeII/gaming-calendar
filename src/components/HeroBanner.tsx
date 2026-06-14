import React from 'react';

export default function HeroBanner(): React.ReactElement {
  return (
    <div className="hero-section" style={{ minHeight: 'clamp(300px, 50vh, 480px)' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(96, 165, 250, 0.15) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(167, 139, 250, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 80%, rgba(52, 211, 153, 0.08) 0%, transparent 50%)
          `,
          animation: 'heroAmbient 8s ease-in-out infinite alternate',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.95) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: 'inherit',
          padding: 'var(--space-16) var(--ifm-spacing-horizontal)',
        }}
      >
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2.2rem, 4vw + 0.5rem, 3.5rem)',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            maxWidth: '14ch',
            textShadow: '0 2px 24px rgba(0,0,0,0.3)',
          }}
        >
          The Balanced Backlog
        </h1>
        <p
          style={{
            color: '#9ca3af',
            fontSize: 'clamp(1rem, 0.8vw + 0.5rem, 1.15rem)',
            margin: '12px 0 0',
            fontWeight: 400,
            maxWidth: '40ch',
          }}
        >
          A schedule that balances mood, season, and genre for 2026–2028
        </p>
        <style>{`
          @keyframes heroAmbient {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(-8px, 4px) scale(1.02); }
          }
        `}</style>
      </div>
    </div>
  );
}
