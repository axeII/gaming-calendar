import React from 'react';
import metadata from '@site/src/data/metadata.json';

export default function SteamProfile(): React.ReactElement {
  const { steam } = metadata;

  return (
    <div
      style={{
        border: '1px solid #253545',
        borderRadius: 3,
        padding: '0 14px 10px',
        marginBottom: '12px',
        background: '#16202d',
      }}
    >
      <div style={{ fontSize: '0.7rem', color: '#8091a2', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em', paddingBottom: '5px', borderBottom: '1px solid #2a3a4a' }}>
        Steam Profile
      </div>
      <div style={{ fontSize: '0.8rem' }}>
        <a
          href={steam.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#67c1f5', textDecoration: 'none' }}
        >
          View Steam Profile ›
        </a>
      </div>
      <div style={{ fontSize: '0.72rem', color: '#8091a2', marginTop: '4px' }}>
        Steam ID: <code style={{ background: '#1e2c3a', border: '1px solid #2a3a4a', color: '#c6d4df', padding: '1px 4px', borderRadius: 2 }}>{steam.id}</code>
      </div>
    </div>
  );
}
