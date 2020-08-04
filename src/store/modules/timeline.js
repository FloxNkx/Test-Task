import Axios from 'axios';

const state = {
  timeline: [],
};

const getters = {
  TIMELINE: state => {
    return state.timeline.flat();
  },
};

const mutations = {
  SET_TIMELINE: (state, timeline) => {
    state.timeline = timeline;
  },

  ADD_TIMELINE: (state, timeline) => {
    state.timeline.push(timeline);
  },

};

const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions,
};