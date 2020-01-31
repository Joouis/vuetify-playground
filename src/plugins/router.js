import Vue from 'vue';
import VueRouter from 'vue-router';

import UIComponentsList from '../components/UIComponentsList.vue';
import PageNotFound from '../components/PageNotFound.vue';
import Alerts from '../components/examples/Alerts';
import Avatars from '../components/examples/Avatars';
import Badges from '../components/examples/Badges';
import Banners from '../components/examples/Banners';
import AppBars from '../components/examples/AppBars';
import Toolbars from '../components/examples/Toolbars';
import SystemBars from '../components/examples/SystemBars';
import BottomNavigation from '../components/examples/BottomNavigation';
import BottomSheets from '../components/examples/BottomSheets';
import Breadcrumbs from '../components/examples/Breadcrumbs';
import Buttons from '../components/examples/Buttons';
import FloatingActionButtons from '../components/examples/FloatingActionButtons';
import Calendars from '../components/examples/Calendars';
import Cards from '../components/examples/Cards';
import Carousels from '../components/examples/Carousels';
import Chips from '../components/examples/Chips';
import Dialogs from '../components/examples/Dialogs';
import Dividers from '../components/examples/Dividers';
import ExpansionPanels from '../components/examples/ExpansionPanels';
import Footer from '../components/examples/Footer';
import Grids from '../components/examples/Grids';
import Hover from '../components/examples/Hover';
import Icons from '../components/examples/Icons';
import Images from '../components/examples/Images';
import Lazy from '../components/examples/Lazy';
import Lists from '../components/examples/Lists';
import Menus from '../components/examples/Menus';

Vue.use(VueRouter);

// Sync `./routes.js` file if routes below changed.
const routes = [
  { path: '/', component: UIComponentsList },
  { path: '/alerts', component: Alerts },
  { path: '/avatars', component: Avatars },
  { path: '/badges', component: Badges },
  { path: '/banners', component: Banners },
  { path: '/app-bars', component: AppBars },
  { path: '/toolbars', component: Toolbars },
  { path: '/system-bars', component: SystemBars },
  { path: '/bottom-navigation', component: BottomNavigation },
  { path: '/bottom-sheets', component: BottomSheets },
  { path: '/breadcrumbs', component: Breadcrumbs },
  { path: '/buttons', component: Buttons },
  { path: '/floating-action-buttons', component: FloatingActionButtons },
  { path: '/calendars', component: Calendars },
  { path: '/cards', component: Cards },
  { path: '/carousels', component: Carousels },
  { path: '/chips', component: Chips },
  { path: '/dialogs', component: Dialogs },
  { path: '/dividers', component: Dividers },
  { path: '/expansion-panels', component: ExpansionPanels },
  { path: '/footer', component: Footer },
  { path: '/grids', component: Grids },
  { path: '/hover', component: Hover },
  { path: '/icons', component: Icons },
  { path: '/images', component: Images },
  { path: '/lazy', component: Lazy },
  { path: '/lists', component: Lists },
  { path: '/menus', component: Menus },
  { path: '*', component: PageNotFound }
];

export default new VueRouter({ routes });
