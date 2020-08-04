import Axios from 'axios';

const state = {
  weather: [],
};

const getters = {
    WEATHER: state => {
        return state.weather;
    }
};

const mutations = {
  SET_WEATHER: (state, weather) => {
    state.weather = weather;
  },
};

const actions = {
  GET_WEATHER: async(context, episode) => {
    let ids = await Axios.get('https://www.metaweather.com/api/location/search/?query=Albuquerque');
    let {data} = await Axios.get(`https://www.metaweather.com/api/location/${ids.data[0].woeid}/${episode}`);
    context.commit('SET_WEATHER', data)
  }

};

export default {
  state,
  getters,
  mutations,
  actions,
};