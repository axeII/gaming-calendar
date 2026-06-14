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
          type: 'dropdown',
          label: 'Calendar',
          position: 'left',
          items: [
            { type: 'doc', docId: 'now-playing', label: 'Now Playing' },
            { type: 'doc', docId: 'monthly/2026-06-june', label: 'June 2026' },
            { type: 'doc', docId: 'monthly/2026-07-july', label: 'July 2026' },
            { type: 'doc', docId: 'monthly/2026-08-august', label: 'August 2026' },
            { type: 'doc', docId: 'monthly/2026-09-september', label: 'September 2026' },
            { type: 'doc', docId: 'monthly/2026-10-october', label: 'October 2026' },
            { type: 'doc', docId: 'monthly/2026-11-november', label: 'November 2026' },
            { type: 'doc', docId: 'monthly/2026-12-december', label: 'December 2026' },
            { type: 'doc', docId: 'monthly/2027-01-january', label: 'January 2027' },
            { type: 'doc', docId: 'monthly/2027-02-03-feb-march', label: 'Feb–Mar 2027' },
            { type: 'doc', docId: 'monthly/2027-04-april', label: 'April 2027' },
            { type: 'doc', docId: 'monthly/2027-05-may', label: 'May 2027' },
            { type: 'doc', docId: 'monthly/2027-06-07-june-july', label: 'Jun–Jul 2027' },
            { type: 'doc', docId: 'monthly/2027-08-09-august-september', label: 'Aug–Sep 2027' },
            { type: 'doc', docId: 'monthly/2027-10-october', label: 'October 2027' },
            { type: 'doc', docId: 'monthly/2027-11-november', label: 'November 2027' },
            { type: 'doc', docId: 'monthly/2027-12-2028-01-december-january', label: 'Dec 2027–Jan 2028' },
            { type: 'doc', docId: 'shopping', label: 'Shopping List' },
            { type: 'doc', docId: 'beers-and-friends', label: 'Beers & Friends' },
            { type: 'doc', docId: 'mood-cheat-sheet', label: 'Mood Cheat Sheet' },
            { type: 'doc', docId: 'notes', label: 'Notes & Overflow' },
          ],
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
