import Axios from 'axios';

const state = {
    url: ''
};

const getters = {
    URL: state => {
        return state.url;
    },
};

const mutations = {
  SET_URL: (state, url) => {
    state.url = `https://rel.ink/api/links/${url.hashid}`;
  },
};

const actions = {
    GET_URL: async (context, url) => {
        state.url = '';
        let {data} = await Axios.post("https://rel.ink/api/links/", {url: `${url}`});
        context.commit('SET_URL', data);
    },
};

export default {
  state,
  getters,
  mutations,
  actions,
};