import Vue from 'vue';
import VueRouter from 'vue-router';

import UIComponentsList from '../components/UIComponentsList.vue';
import Alerts from '../components/examples/Alerts';
import Avatars from '../components/examples/Avatars';
import Badges from '../components/examples/Badges';
import Banners from '../components/examples/Banners';
import AppBars from '../components/examples/AppBars';
import Toolbars from '../components/examples/Toolbars';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: UIComponentsList },
  { path: '/alerts', component: Alerts },
  { path: '/avatars', component: Avatars },
  { path: '/badges', component: Badges },
  { path: '/banners', component: Banners },
  { path: '/app-bars', component: AppBars },
  { path: '/toolbars', component: Toolbars }
];

export default new VueRouter({ routes });
