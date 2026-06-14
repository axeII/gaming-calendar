import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HeroBanner from '@site/src/components/HeroBanner';
import PCCard from '@site/src/components/PCCard';
import SteamProfile from '@site/src/components/SteamProfile';

const links = [
  { href: '/docs/now-playing', title: 'Now Playing ›', desc: 'Current active games and what\'s up next' },
  { href: '/docs/monthly/2026-06-june', title: 'June 2026 ›', desc: 'Start of the calendar — the post-Spider-Man detox' },
  { href: '/docs/shopping', title: 'Shopping List ›', desc: 'Steam Summer Sale 2026 price analysis' },
  { href: '/docs/beers-and-friends', title: 'Beers & Friends ›', desc: 'Co-op collection running outside the solo schedule' },
  { href: '/docs/mood-cheat-sheet', title: 'Mood Cheat Sheet ›', desc: 'Quick reference for each month\'s vibe' },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Gaming Calendar"
      description="A balanced backlog schedule for 2026–2027">
      <HeroBanner />
      <main>
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p>
                This site is a living schedule covering <strong>June 2026 → January 2028</strong>. It factors in:
              </p>
              <ul>
                <li><strong>Seasonal atmosphere</strong> — play games when the weather matches the setting</li>
                <li><strong>Genre rotation</strong> — no two similar games back-to-back</li>
                <li><strong>Social play</strong> — co-op runs in parallel, guilt-free</li>
                <li><strong>Sale timing</strong> — buy only when the price is right for your schedule</li>
              </ul>
              <PCCard />
              <SteamProfile />
              <h2>Quick Links</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="card-link"
                    style={{
                      background: '#16202d',
                      border: '1px solid #253545',
                      borderRadius: 3,
                      padding: '16px 20px',
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    <div style={{ color: '#1a9fff', fontSize: '1.05rem', fontWeight: 700 }}>{link.title}</div>
                    <div style={{ color: '#e6eaef', fontSize: '0.9rem', marginTop: 4 }}>{link.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
