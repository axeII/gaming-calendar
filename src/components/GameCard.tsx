import React from 'react';
import { Play, PlayCircle, Clock, CheckCircle, ExternalLink } from 'lucide-react';

interface GameCardProps {
  title: string;
  genre: string;
  notes?: string;
  steamAppId?: number;
  hours?: string;
  status?: 'playing' | 'next' | 'scheduled' | 'completed';
}

const statusConfig: Record<string, { className: string; icon: React.ReactNode }> = {
  playing: { className: 'status-badge--playing', icon: <Play size={10} /> },
  next: { className: 'status-badge--next', icon: <PlayCircle size={10} /> },
  scheduled: { className: 'status-badge--scheduled', icon: <Clock size={10} /> },
  completed: { className: 'status-badge--completed', icon: <CheckCircle size={10} /> },
};

export default function GameCard({ title, genre, notes, steamAppId, hours, status }: GameCardProps): React.ReactElement {
  const imgUrl = steamAppId
    ? `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${steamAppId}/header.jpg`
    : null;

  return (
    <div className="game-card">
      {imgUrl && (
        <div className="game-card__image">
          <img
            src={imgUrl}
            alt={`${title} header`}
            loading="lazy"
          />
          <div className="game-card__image-overlay" />
        </div>
      )}
      <div className="game-card__body">
        <div className="game-card__title">
          {title}
          {status && (
            <span className={`status-badge ${statusConfig[status].className}`} style={{ marginLeft: 10 }}>
              {statusConfig[status].icon}
              {status}
            </span>
          )}
        </div>
        <div className="game-card__meta">
          <span className="game-card__genre"><em>{genre}</em></span>
          {hours && <span className="game-card__hours">~{hours}h</span>}
        </div>
        {notes && (
          <div className="game-card__notes">
            {notes}
          </div>
        )}
        {steamAppId && (
          <div style={{ marginTop: notes ? 10 : 0 }}>
            <a
              href={`https://store.steampowered.com/app/${steamAppId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="game-card__steam-link"
            >
              View on Steam <ExternalLink size={11} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
