import Vue from 'vue';
import VueRouter from 'vue-router';

import UIComponentsList from '../components/UIComponentsList.vue';
import Alerts from '../components/examples/Alerts';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: UIComponentsList },
  { path: '/alerts', component: Alerts },
];

export default new VueRouter({ routes });
