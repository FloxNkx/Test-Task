import Vue from 'vue';
import Vuex from 'vuex';
import characters from './modules/characters';
import about from './modules/about';
import episodes from './modules/episodes';
import view from './modules/view';
import timeline from './modules/timeline';
import weather from './modules/weather';
import share from './modules/share';
import deaths from './modules/deaths';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    characters,
    episodes,
    view,
    timeline,
    weather,
    share,
    deaths,
    about,
  },
});