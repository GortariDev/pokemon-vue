<template>
  <div>
    <HeaderComponent/>
    <PokemonListComponent :pokemons="pokemons" @select="selectPokemon"/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import HeaderComponent from '../components/HeaderComponent.vue';
import PokemonListComponent from '../components/PokemonListComponent.vue';

export default {
  components: {
    HeaderComponent,
    PokemonListComponent,
  },
  computed: {
    ...mapState(['pokemons']),
  },
  methods: {
    ...mapActions(['fetchPokemons', 'fetchPokemonDetails']),
    selectPokemon(pokemon) {
      this.fetchPokemonDetails(pokemon.url);
      this.$router.push(`/pokemon/${pokemon.name}`);
    },
  },
  created() {
    this.fetchPokemons();
  },
};
</script>
