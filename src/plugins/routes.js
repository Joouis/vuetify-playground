/**
 * This file is for sitemap generation.
 */

const routes = [
  { path: '/', name: 'Homepage' },
  { path: '/alerts', name: 'Alerts' },
  { path: '/avatars', name: 'Avatars' },
  { path: '/badges', name: 'Badges' },
  { path: '/banners', name: 'Banners' },
  { path: '/app-bars', name: 'App Bars' },
  { path: '/toolbars', name: 'Toolbars' },
  { path: '/system-bars', name: 'System Bars' },
  { path: '/bottom-navigation', name: 'Bottom Navigation' },
  { path: '/bottom-sheets', name: 'Bottom Sheets' },
  { path: '/breadcrumbs', name: 'Breadcrumbs' },
  { path: '/buttons', name: 'Buttons' },
  { path: '/floating-action-buttons', name: 'Floating Action Buttons' },
  { path: '/calendars', name: 'Calendars' },
  { path: '/cards', name: 'Cards' },
  { path: '/carousels', name: 'Carousels' },
  { path: '/chips', name: 'Chips' },
  { path: '/dialogs', name: 'Dialogs' },
  { path: '/dividers', name: 'Dividers' },
  { path: '/expansion-panels', name: 'Expansion Panels' },
  { path: '/footer', name: 'Footer' },
  { path: '/grids', name: 'Grids' },
  { path: '/hover', name: 'Hover' },
  { path: '/icons', name: 'Icons' },
  { path: '/images', name: 'Images' },
  { path: '/lazy', name: 'Lazy' },
  { path: '/lists', name: 'Lists' },
  { path: '/*', name: '404' }
].map(i => ({
  ...i,
  path: `vuetify-playground${i.path}`,
  lastmod: new Date() - 0,
  priority: 1,
  changefreq: 'monthly'
}));

module.exports = routes;