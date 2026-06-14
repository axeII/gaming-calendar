import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HeroBanner from '@site/src/components/HeroBanner';
import PCCard from '@site/src/components/PCCard';
import SteamProfile from '@site/src/components/SteamProfile';
import { Gamepad2, Calendar, ShoppingCart, Beer, Sparkles } from 'lucide-react';

const links = [
  { href: '/docs/now-playing', icon: Gamepad2, title: 'Now Playing', desc: 'Current active games and what\'s up next' },
  { href: '/docs/monthly/2026-06-june', icon: Calendar, title: 'June 2026', desc: 'Start of the calendar — the post-Spider-Man detox' },
  { href: '/docs/shopping', icon: ShoppingCart, title: 'Shopping List', desc: 'Steam Summer Sale 2026 price analysis' },
  { href: '/docs/beers-and-friends', icon: Beer, title: 'Beers & Friends', desc: 'Co-op collection running outside the solo schedule' },
  { href: '/docs/mood-cheat-sheet', icon: Sparkles, title: 'Mood Cheat Sheet', desc: 'Quick reference for each month\'s vibe' },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Gaming Calendar"
      description="A balanced backlog schedule for 2026–2027">
      <HeroBanner />
      <main>
        <div className="container" style={{paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-12)'}}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p style={{ fontSize: '1.05rem', color: '#9ca3af', marginBottom: 'var(--space-6)' }}>
                This site is a living schedule covering <strong style={{ color: '#f3f4f6' }}>June 2026 → January 2028</strong>. It factors in:
              </p>
              <ul style={{ color: '#9ca3af', marginBottom: 'var(--space-6)' }}>
                <li><strong style={{ color: '#d1d5db' }}>Seasonal atmosphere</strong> — play games when the weather matches the setting</li>
                <li><strong style={{ color: '#d1d5db' }}>Genre rotation</strong> — no two similar games back-to-back</li>
                <li><strong style={{ color: '#d1d5db' }}>Social play</strong> — co-op runs in parallel, guilt-free</li>
                <li><strong style={{ color: '#d1d5db' }}>Sale timing</strong> — buy only when the price is right for your schedule</li>
              </ul>
              <PCCard />
              <SteamProfile />
              <h2>Quick Links</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                {links.map(({ href, icon: Icon, title, desc }) => (
                  <Link
                    key={href}
                    to={href}
                    className="card-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: 'rgba(96, 165, 250, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#60a5fa',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#f3f4f6', fontSize: '1rem', fontWeight: 600 }}>{title}</div>
                      <div style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: 2 }}>{desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
