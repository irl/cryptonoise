import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'cryptonoise.org',
  tagline: 'Noise to save the world.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cryptonoise.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'irl', // Usually your GitHub org/user name.
  projectName: 'cryptonoise', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/irl/cryptonoise/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/irl/cryptonoise/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'cryptonoise.org',
      logo: {
        alt: 'Cryptonoise',
        src: 'img/cryptonoise-short.png',
        srcDark: 'img/cryptonoise-short-invert.png',
      },
      items: [
        {
          to: "/meetup",
          label: "Meetups",
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/irl/cryptonoise',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'light',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Delta Chat',
              to: '/docs/category/delta-chat',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Open Tech Calendar',
              href: 'https://opentechcalendar.co.uk/group/184-cryptonoise-aberdeen',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
               label: 'Privacy Policy',
               to: '/privacy',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/irl/cryptonoise',
            },
          ],
        },
      ],
      copyright: `Copyright © 2016-${new Date().getFullYear()} <a href="https://www.sr2.uk/">SR2 Communications Limited</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
