import Axios from 'axios';

const state = {
  characters: [],
  character: '',
  deaths: [],
  quotes: [],
  occupation: [],
  favouriteCharacters: JSON.parse(localStorage.getItem('favouriteCharacters')) || []
};

const getters = {
  CHARACTERS: state => {
    return state.characters.flat();
  },
  CHARACTER: state => {
    return state.character;
  },

  CH_DEATHS: state => {
      return state.deaths.flat();
  },

  CH_QUOTES: state => {
    return state.quotes.flat();
  },

  CH_OCCUPATION: state => {
    return state.occupation;
  },

  FAVOURITE: state => {
    return state.favouriteCharacters;
  }
};

const mutations = {
  SET_CHARACTER: (state, character) => {
    state.characters = character;
  },

  SET_CHARACTERS: (state, character) => {
    state.character = character;
  },

  SET_QUOTES: (state, quotes) => {
    state.quotes = quotes;
  },

  ADD_CHARACTER: (state, death) => {
    state.characters.push(death);
  },

  ADD_DEATHS: (state, character) => {
    state.deaths.push(character);
  },

  SET_FAVOURITE_CHARACTER: (state, character) => {
    state.favouriteCharacters.push(character);
    localStorage.setItem('favouriteCharacters', JSON.stringify(state.favouriteCharacters))
  },

  SET_UNFAVOURITE_CHARACTER: (state, character) => {
    state.favouriteCharacters = state.favouriteCharacters.filter(item => item.char_id !== character.char_id)
    localStorage.setItem('favouriteCharacters', JSON.stringify(state.favouriteCharacters))
  },

  ADD_OCCUPATION: (state, occupation) => {
    const groups = ['occupation'], grouped = {};
    occupation.forEach(function (a) {
      groups.reduce(function (o, g, i) {                     
          o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : {});
          return o[a[g]];                                           
      }, grouped).push(a);
    });
    state.occupation = grouped;
  },

};

const actions = {
  GET_CHARACTER: async (context, character) => {
    let {data} = await Axios.get('https://www.breakingbadapi.com/api/characters');
    context.commit('SET_CHARACTER', data);
  },

  GET_CHARACTER_DETAILS_BY_NAME: async (context, name) => {
    let {data} = await Axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`);
    context.commit('ADD_CHARACTER', data);
  },

  GET_CHARACTER_DETAILS_BY_ID: async (context, id) => {
    let {data} = await Axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    context.commit('SET_CHARACTERS', data);
  },

  SAVE_FAVOURITE_CHARACTER: async (context, character) => {
    await context.commit('SET_FAVOURITE_CHARACTER', character);
  },

  SAVE_UNFAVOURITE_CHARACTER: async (context, character) => {
    await context.commit('SET_UNFAVOURITE_CHARACTER', character);
  },

  GET_RESPONSIBLE_DEATH: async (context, character) => {
    let {data} = await Axios.get(`https://www.breakingbadapi.com/api/deaths`);
    context.commit('ADD_DEATHS', data.filter(item => item.responsible.includes(character) ? item : ''));
  },

  GET_QUOTES: async (context, quotes) => {
    let {data} = await Axios.get(`https://www.breakingbadapi.com/api/quote?author=${quotes}`);
    context.commit('SET_QUOTES', data);
  },

  GET_OCCUPATION: async (context, occupation) => {
    let {data} = await Axios.get('https://www.breakingbadapi.com/api/characters');
    context.commit('ADD_OCCUPATION', data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};