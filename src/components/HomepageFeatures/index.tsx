import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'How-To Guides',
        Svg: require('@site/static/img/guides.svg').default,
        description: (
            <>
                We have curated guides to assist you in learning about the threats to your privacy online,
                and how to stay safe.
            </>
        ),
    },
    {
        title: 'Public Services',
        Svg: require('@site/static/img/servers.svg').default,
        description: (
            <>
                We host services, supported by donations, for anyone to use to help maintain their privacy
                and improve their security online.
            </>
        ),
    },
  {
    title: 'Community Meetups',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        We plan to restart local meetups soon.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
