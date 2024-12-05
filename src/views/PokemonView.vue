<template>
  <div>
    <HeaderComponent/>
    <PokemonDetailComponent :pokemon="selectedPokemon"/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import HeaderComponent from '../components/HeaderComponent.vue';
import PokemonDetailComponent from '../components/PokemonDetailComponent.vue';

export default {
  components: {
    HeaderComponent,
    PokemonDetailComponent,
  },
  computed: {
    ...mapState(['selectedPokemon']),
  },
};
</script>
