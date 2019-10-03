import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from 'App';
import routes from 'routes';
import store from 'store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});
const unsync = sync(store, router);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
});

unsync();
