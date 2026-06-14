import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A balanced backlog schedule for 2026–2027">
      <HomepageHeader />
      <main>
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className="card" style={{marginBottom: '1rem'}}>
                <div className="card__body">
                  <Heading as="h3">📅 The Monthly Calendar</Heading>
                  <p>Browse each month's curated game selection, balanced by mood and season.</p>
                  <Link to="/docs/monthly/2026-06-june">Start with June 2026 →</Link>
                </div>
              </div>
              <div className="card" style={{marginBottom: '1rem'}}>
                <div className="card__body">
                  <Heading as="h3">🛒 Shopping List</Heading>
                  <p>Price analysis and buying advice for the Steam Summer Sale.</p>
                  <Link to="/docs/shopping">View Shopping List →</Link>
                </div>
              </div>
              <div className="card" style={{marginBottom: '1rem'}}>
                <div className="card__body">
                  <Heading as="h3">🎮 Beers & Friends</Heading>
                  <p>Co-op and social games running outside the solo schedule.</p>
                  <Link to="/docs/beers-and-friends">View Co-op Collection →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
