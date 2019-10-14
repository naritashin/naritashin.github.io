import Vue from 'vue';
import Vuex from 'vuex';

import tasklist from './modules/tasklist';
import detail from './modules/detail';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tasklist,
    detail
  }
});

export default store;
