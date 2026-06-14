import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  calendarSidebar: [
    'now-playing',
    {
      type: 'category',
      label: '2026',
      collapsible: true,
      collapsed: false,
      items: [
        'monthly/2026-06-june',
        'monthly/2026-07-july',
        'monthly/2026-08-august',
        'monthly/2026-09-september',
        'monthly/2026-10-october',
        'monthly/2026-11-november',
        'monthly/2026-12-december',
      ],
    },
    {
      type: 'category',
      label: '2027',
      collapsible: true,
      collapsed: true,
      items: [
        'monthly/2027-01-january',
        'monthly/2027-02-03-feb-march',
        'monthly/2027-04-april',
        'monthly/2027-05-may',
        'monthly/2027-06-07-june-july',
        'monthly/2027-08-09-august-september',
        'monthly/2027-10-october',
        'monthly/2027-11-november',
        'monthly/2027-12-2028-01-december-january',
      ],
    },
    'shopping',
    'beers-and-friends',
    'mood-cheat-sheet',
    'notes',
  ],
};

export default sidebars;
