import React from 'react';
import { ExternalLink, Gamepad2 } from 'lucide-react';
import metadata from '@site/src/data/metadata.json';

export default function SteamProfile(): React.ReactElement {
  const { steam } = metadata;

  return (
    <div className="profile-card">
      <div className="profile-card__header">
        Steam Profile
      </div>
      <div>
        <a
          href={steam.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card__link"
        >
          <Gamepad2 size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
          View Steam Profile <ExternalLink size={11} style={{ verticalAlign: 'middle', marginLeft: 2 }} />
        </a>
      </div>
      <div className="profile-card__id">
        Steam ID: <code>{steam.id}</code>
      </div>
    </div>
  );
}
