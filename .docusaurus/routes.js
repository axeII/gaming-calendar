import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gaming-calendar/docs',
    component: ComponentCreator('/gaming-calendar/docs', 'fb5'),
    routes: [
      {
        path: '/gaming-calendar/docs',
        component: ComponentCreator('/gaming-calendar/docs', '180'),
        routes: [
          {
            path: '/gaming-calendar/docs',
            component: ComponentCreator('/gaming-calendar/docs', 'c5f'),
            routes: [
              {
                path: '/gaming-calendar/docs',
                component: ComponentCreator('/gaming-calendar/docs', 'bb3'),
                exact: true
              },
              {
                path: '/gaming-calendar/docs/beers-and-friends',
                component: ComponentCreator('/gaming-calendar/docs/beers-and-friends', '8d1'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2026-06-june',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2026-06-june', 'f1d'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2026-07-july',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2026-07-july', '3e3'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2026-08-august',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2026-08-august', 'c6d'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2026-09-september',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2026-09-september', 'c9b'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2026-10-october',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2026-10-october', '502'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2026-11-november',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2026-11-november', '552'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2026-12-december',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2026-12-december', '1dc'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-01-january',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-01-january', '221'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-02-03-feb-march',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-02-03-feb-march', 'edd'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-04-april',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-04-april', '807'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-05-may',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-05-may', '5e8'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-06-07-june-july',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-06-07-june-july', '6ea'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-08-09-august-september',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-08-09-august-september', '4bc'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-10-october',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-10-october', '557'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-11-november',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-11-november', '2c2'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/monthly/2027-12-2028-01-december-january',
                component: ComponentCreator('/gaming-calendar/docs/monthly/2027-12-2028-01-december-january', '0db'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/mood-cheat-sheet',
                component: ComponentCreator('/gaming-calendar/docs/mood-cheat-sheet', '461'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/notes',
                component: ComponentCreator('/gaming-calendar/docs/notes', '604'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/now-playing',
                component: ComponentCreator('/gaming-calendar/docs/now-playing', '378'),
                exact: true,
                sidebar: "calendarSidebar"
              },
              {
                path: '/gaming-calendar/docs/shopping',
                component: ComponentCreator('/gaming-calendar/docs/shopping', 'b7a'),
                exact: true,
                sidebar: "calendarSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/gaming-calendar/',
    component: ComponentCreator('/gaming-calendar/', '312'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
