<template>
  <div class="container">
    <div class="row my-3">
      <div class="search__container col-12">
        <input
            type="text"
            v-model="search"
            class="form-control search-input"
            placeholder="Qué pokemon buscas?"
        />
      </div>
    </div>

    <div class="pokemon-list">
      <div
          class="pokemon-card"
          v-for="pokemon in filteredPokemons"
          :key="pokemon.name"
          @click="selectPokemon(pokemon)"
      >

        <div class="pokemon-card__image">
          <img
              :src="getPokemonImage(pokemon.url)"
              alt="Pokemon Image"
          />
        </div>

        <div class="pokemon-card__details">
          <h5 class="pokemon-card__name">{{ pokemon.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemons'],
  data() {
    return {
      search: '',
    };
  },
  computed: {
    filteredPokemons() {
      return this.pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    selectPokemon(pokemon) {
      this.$emit('select', pokemon);
    },
    getPokemonImage(url) {
      const id = url.split('/').filter(Boolean).pop();
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}

.search__container {
  justify-self: center;
}

.search-input {
  border: 2px solid #cc0000;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
  outline: none;
  transition: box-shadow 0.3s;
}

.search-input:focus {
  box-shadow: 0 0 10px 2px #ffcb05;
}

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

.pokemon-card {
  background: linear-gradient(135deg, #f7f7f7, #d3d3d3);
  border: 3px solid #2a75bb;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 200px;
  position: relative;
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.2);
}

.pokemon-card__image {
  background-image: url("../assets/images/card-background.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.pokemon-card__image img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.pokemon-card__details {
  text-align: center;
  padding: 10px;
  background: #cc0000;
  border-top: 3px solid #2a75bb;
  color: #ffffff;
}

.pokemon-card__name {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
}

@media (max-width: 576px) {
  .pokemon-card {
    height: 250px;
    width: 150px;
  }

  .pokemon-card__image img {
    width: 80px;
    height: 80px;
  }

  .pokemon-card__name {
    font-size: 1.2rem;
  }
}
</style>
