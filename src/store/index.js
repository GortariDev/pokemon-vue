import {createStore} from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pokemons: [],
    selectedPokemon: null,
  },
  mutations: {
    SET_POKEMONS(state, pokemons) {
      state.pokemons = pokemons;
    },
    SET_SELECTED_POKEMON(state, pokemon) {
      state.selectedPokemon = pokemon;
    },
  },
  actions: {
    async fetchPokemons({commit}) {
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');
      commit('SET_POKEMONS', data.results);
    },
    async fetchPokemonDetails({commit}, url) {
      const {data} = await axios.get(url);
      commit('SET_SELECTED_POKEMON', data);
    },
  },
});
