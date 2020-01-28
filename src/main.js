import Vue from 'vue';
import VueAnalytics from 'vue-analytics'
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './plugins/router';

Vue.use(VueAnalytics, {
  id: 'UA-76188004-3',
  router
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app');
