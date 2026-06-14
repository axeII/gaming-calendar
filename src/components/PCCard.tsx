import React from 'react';
import metadata from '@site/src/data/metadata.json';

const chipStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.15rem',
  padding: '0.5rem 0.6rem',
  borderRadius: 'var(--ifm-global-radius)',
  background: 'var(--ifm-color-emphasis-100)',
  minWidth: 0,
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--ifm-color-emphasis-500)',
  whiteSpace: 'nowrap',
};

const valueStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--ifm-color-emphasis-800)',
  textAlign: 'center',
  wordBreak: 'break-word',
  lineHeight: 1.3,
};

export default function PCCard(): React.ReactElement {
  const { pc } = metadata;

  const specs = [
    { label: 'OS', value: pc.os },
    { label: 'CPU', value: pc.cpu },
    { label: 'RAM', value: pc.ram },
    { label: 'GPU', value: pc.gpu },
    { label: 'Driver', value: pc.driver },
    { label: 'Kernel', value: pc.kernel },
  ];

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
      <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ifm-color-emphasis-600)' }}>
        Gaming PC
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
        }}
      >
        {specs.map((s) => (
          <div key={s.label} style={chipStyle}>
            <span style={labelStyle}>{s.label}</span>
            <span style={valueStyle}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
