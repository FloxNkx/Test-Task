import Axios from 'axios';

const state = {
  currentView: 'home',
};

const getters = {
  VIEW: state => {
    return state.currentView;
  },
};

const mutations = {
  SET_CURRENT_VIEW: (state, currentView) => {
    state.currentView = currentView;
  },
};

const actions = {
  SAVE_VIEW: async (context, view) => {
    await context.commit('SET_CURRENT_VIEW', view);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};