import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gaming Calendar',
  tagline: 'A balanced backlog schedule for 2026–2027',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://axeII.github.io',
  baseUrl: '/gaming-calendar/',
  trailingSlash: false,

  organizationName: 'axeII',
  projectName: 'gaming-calendar',

  onBrokenLinks: 'throw',

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
          editUrl: 'https://github.com/axeII/gaming-calendar/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Gaming Calendar',
      logo: {
        alt: 'Gaming Calendar',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'calendarSidebar',
          position: 'left',
          label: 'Calendar',
        },
        {
          href: 'https://github.com/axeII/gaming-calendar',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Calendar',
          items: [
            {
              label: 'Now Playing',
              to: '/docs/now-playing',
            },
            {
              label: 'Shopping List',
              to: '/docs/shopping',
            },
            {
              label: 'Beers & Friends',
              to: '/docs/beers-and-friends',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/axeII/gaming-calendar',
            },
          ],
        },
      ],
      copyright: `Gaming Calendar © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
