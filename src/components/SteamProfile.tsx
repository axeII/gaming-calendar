import React from 'react';
import metadata from '@site/src/data/metadata.json';

export default function SteamProfile(): React.ReactElement {
  const { steam } = metadata;

  return (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 'var(--ifm-card-border-radius)',
        padding: '1rem 1.25rem',
        marginBottom: '1rem',
        background: 'var(--ifm-card-background-color)',
      }}
    >
      <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ifm-color-emphasis-600)' }}>
        Steam Profile
      </div>
      <div style={{ fontSize: '0.9rem' }}>
        <a
          href={steam.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Steam Profile →
        </a>
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-500)', marginTop: '0.3rem' }}>
        Steam ID: <code>{steam.id}</code>
      </div>
    </div>
  );
}
