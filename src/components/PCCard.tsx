import React from 'react';
import metadata from '@site/src/data/metadata.json';

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
      <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ifm-color-emphasis-600)' }}>
        Gaming PC
      </div>
      <table style={{ fontSize: '0.85rem', width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {specs.map((s) => (
            <tr key={s.label}>
              <td style={{ fontWeight: 600, width: 80, padding: '0.25rem 0.75rem 0.25rem 0', verticalAlign: 'top', whiteSpace: 'nowrap', textAlign: 'left' }}>
                {s.label}
              </td>
              <td style={{ padding: '0.25rem 0', color: 'var(--ifm-color-emphasis-700)', textAlign: 'left' }}>
                {s.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
