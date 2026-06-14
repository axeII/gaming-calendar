import React from 'react';
import metadata from '@site/src/data/metadata.json';

const chipStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.15rem',
  padding: '0.4rem 0.6rem',
  borderRadius: 2,
  background: '#16202d',
  border: '1px solid #253545',
  minWidth: 0,
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.55rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#8091a2',
  whiteSpace: 'nowrap',
};

const valueStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 600,
  color: '#c6d4df',
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
        border: '1px solid #253545',
        borderRadius: 3,
        padding: '0 14px 10px',
        marginBottom: '12px',
        background: '#16202d',
      }}
    >
      <div style={{ fontSize: '0.7rem', color: '#8091a2', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em', paddingBottom: '5px', borderBottom: '1px solid #2a3a4a' }}>
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
