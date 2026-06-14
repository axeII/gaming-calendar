import React from 'react';
import { Monitor, Cpu, HardDrive, MonitorUp, Wrench, Terminal } from 'lucide-react';
import metadata from '@site/src/data/metadata.json';

const specIcons: Record<string, React.ReactNode> = {
  OS: <Monitor size={12} />,
  CPU: <Cpu size={12} />,
  RAM: <HardDrive size={12} />,
  GPU: <MonitorUp size={12} />,
  Driver: <Wrench size={12} />,
  Kernel: <Terminal size={12} />,
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
    <div className="spec-card">
      <div className="spec-card__header">
        Gaming PC
      </div>
      <div className="spec-card__grid">
        {specs.map((s) => (
          <div key={s.label} className="spec-card__chip">
            <span className="spec-card__label">
              {specIcons[s.label] && <span style={{ marginRight: 4, verticalAlign: 'middle' }}>{specIcons[s.label]}</span>}
              {s.label}
            </span>
            <span className="spec-card__value">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
