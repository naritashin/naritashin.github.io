import Vue from 'vue';
import Vuex from 'vuex';

import top from './modules/top';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    top
  }
});

export default store;
