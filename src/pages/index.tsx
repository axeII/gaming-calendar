import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import PCCard from '@site/src/components/PCCard';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/now-playing">
            See What's Playing Now →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Gaming Calendar"
      description="A balanced backlog schedule for 2026–2027">
      <HomepageHeader />
      <main>
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <PCCard />

              <div className="card" style={{marginBottom: '1rem'}}>
                <div className="card__header">
                  <Heading as="h3">📅 Browse the Calendar</Heading>
                </div>
                <div className="card__body">
                  <p>Each month is curated by mood, season, and genre — so you never burn out on two similar games back-to-back.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--sm" to="/docs/monthly/2026-06-june">
                    Start with June 2026
                  </Link>
                </div>
              </div>

              <div className="card" style={{marginBottom: '1rem'}}>
                <div className="card__header">
                  <Heading as="h3">🛒 Steam Sale Shopping List</Heading>
                </div>
                <div className="card__body">
                  <p>Price analysis and buying advice — what to buy now vs what to wait for.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--sm" to="/docs/shopping">
                    View Shopping List
                  </Link>
                </div>
              </div>

              <div className="card" style={{marginBottom: '1rem'}}>
                <div className="card__header">
                  <Heading as="h3">🎮 Beers & Friends</Heading>
                </div>
                <div className="card__body">
                  <p>Co-op and social games that run on friend time, outside the solo schedule.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--sm" to="/docs/beers-and-friends">
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
