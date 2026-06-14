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
    image: 'img/logo.svg',
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
          type: 'doc',
          docId: 'now-playing',
          position: 'left',
          label: 'Now Playing',
        },
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
              label: 'June 2026',
              to: '/docs/monthly/2026-06-june',
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
          title: 'Quick Links',
          items: [
            {
              label: 'Mood Cheat Sheet',
              to: '/docs/mood-cheat-sheet',
            },
            {
              label: 'Notes & Overflow',
              to: '/docs/notes',
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
      copyright: `Gaming Calendar © ${new Date().getFullYear()} · axeII`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
