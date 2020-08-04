import Axios from 'axios';

const state = {
  winners: [],
};

const getters = {
  WINNERS: state => {
    return state.winners;
  },
};

const mutations = {
  ADD_WINNERS: (state, death) => {
      console.log(death);
    const groups = ['responsible'], grouped = [];
    death.forEach(function (a) {
      groups.reduce(function (o, g, i) {                     
          o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : []);
          return o[a[g]];                                           
      }, grouped).push(a);
    });
    state.winners.push(Object.entries(grouped).sort(function(a, b) {
        return a - b;
    }).slice(0,5));
  },

};

const actions = {
  GET_WINNERS: async (context, character) => {
    let {data} = await Axios.get('https://www.breakingbadapi.com/api/deaths');
    context.commit('ADD_WINNERS', data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};