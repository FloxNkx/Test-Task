import Axios from 'axios';

const state = {
    about: '',
    key:"88e836ce",
    id:"tt0903747"
};

const getters = {
    ABOUT: state => {
        return state.about;
    },
};

const mutations = {
  SET_ABOUT: (state, about) => {
    state.about = about;
  },
};

const actions = {
    GET_ABOUT: async (context, url) => {
        let {data} = await Axios.get(`http://www.omdbapi.com/?i=${state.id}&apikey=${state.key}`);
        context.commit('SET_ABOUT', data);
    },
};

export default {
  state,
  getters,
  mutations,
  actions,
};