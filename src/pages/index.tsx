import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
            <ThemedImage
                alt="Cryptonoise"
                sources={{
                    light: useBaseUrl('/img/cryptonoise-invert.png'),
                    dark: useBaseUrl('/img/cryptonoise-invert.png'),
                }}
            />
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://opentechcalendar.co.uk/group/184-cryptonoise-aberdeen">
            📅  Upcoming Events
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
      title="cryptonoise.org"
      description="Noise to save the world.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
