import assignWith from 'lodash/assignWith';
import isEqual from 'lodash/isEqual';

const initialState = () => {
  return {
    id: '',
    title: '',
    description: '',
    status: '1',
    estimatedTime: {
      hours: 0,
      minutes: 0
    },
    usageTime: {
      hours: 0,
      minutes: 0
    }
  };
};

const state = {
  edit: initialState(),
  origin: initialState()
};

const mutations = {
  setEdit (state, editted) {
    state.edit = assignWith(state.edit, editted);
  },
  setOrigin (state, origin) {
    state.origin = origin;
  }
};

const actions = {
  setEdit ({ commit }, editted) {
    commit('setEdit', editted);
  },
  setOrigin ({ commit }, origin) {
    commit('setOrigin', origin);
  }
};

const getters = {
  isChanged (state) {
    return !isEqual(state.origin, state.edit);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
