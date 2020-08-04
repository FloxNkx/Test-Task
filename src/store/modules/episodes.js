import Axios from 'axios';

const state = {
  episodes: [],
  deaths: [],
};

const getters = {
    EPISODES: state => {
        return state.episodes;
    },
    DEATHS: state => {
        return state.deaths;
  },
};

const mutations = {
  SET_EPISODES_BY_SEASON: (state, episod) => {
    state.episodes = episod;
  },

  SET_DEATHS: (state, episod) => {
    state.deaths = (episod);
  },

  ADD_EPISODES: (state, episod) => {
    state.episodes.push(episod);
  },

  ADD_CHARACTERS_IN_EPISODE: (state, episod) => {
    state.episodes.push(episod);
  },

};

const actions = {
  GET_EPISOD: async (context, season) => {
    let {data} = await Axios.get('https://www.breakingbadapi.com/api/episodes');
    context.commit('SET_EPISODES_BY_SEASON', 
                    data.filter(item => item.season == season && item.series == "Breaking Bad"));
  },

  GET_DEATHS: async (context, episode) => {
    let {data} = await Axios.get('https://www.breakingbadapi.com/api/deaths');
    context.commit('SET_DEATHS', data.filter(item => item.episode == episode[0] && item.season == episode[1]));
  },

  GET_CHARACTER_IN_EPISODE: async(context, episode) => {
    let {data} = await Axios.get('https://www.breakingbadapi.com/api/episodes');
    context.commit('ADD_CHARACTERS_IN_EPISODE', data.filter(item => item.characters.includes(episode) ? item : null))
  }

};

export default {
  state,
  getters,
  mutations,
  actions,
};