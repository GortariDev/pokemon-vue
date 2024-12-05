<template>
  <div class="pokemon__detail">
    <div v-if="pokemon" class="pokemon-card-detail">
      <div class="pokemon-card-name__image">
        <div class="pokemon-card-detail__header">
          <h2 class="pokemon-card-detail__name">{{ pokemon.name }}</h2>
          <p class="pokemon-card-detail__id">ID: #{{ pokemon.id }}</p>
        </div>

        <div class="pokemon-card-detail__image">
          <img class="pokemon__image__crop" :src="pokemon.sprites.other['official-artwork'].front_default"
               alt="Pokemon Image"/>
        </div>

        <div class="pokemon-card-detail__stats">
          <p><strong>Type:</strong> {{ types }}</p>
          <p><strong>Height:</strong> {{ pokemon.height / 10 }} m</p>
          <p><strong>Weight:</strong> {{ pokemon.weight / 10 }} kg</p>
          <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
        </div>
      </div>

      <div class="pokemon-card-detail__base__stats">
        <div class="pokemon-card-detail__abilities">
          <h3>Abilities</h3>
          <ul>
            <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
              {{ ability.ability.name }}
            </li>
          </ul>
        </div>

        <div class="pokemon-card-detail__base-stats">
          <h3>Base Stats</h3>
          <ul>
            <li v-for="stat in pokemon.stats" :key="stat.stat.name">
              <strong>{{ stat.stat.name }}:</strong> {{ stat.base_stat }}
            </li>
          </ul>
        </div>
      </div>

    </div>
    <a class="back__button" href="/">volver</a>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  computed: {
    types() {
      return this.pokemon.types.map((type) => type.type.name).join(', ');
    },
  },
};
</script>

<style scoped>
.pokemon__detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pokemon-card-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  margin: 20px auto;
  background: linear-gradient(145deg, #e8f3ff, #c1dbff);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #2a75bb;
}

.pokemon-card-detail__header {
  text-align: center;
}

.pokemon-card-detail__name {
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
}

.pokemon-card-detail__id {
  font-size: 1rem;
  font-weight: 800;
  color: #555;
  margin: 5px;
}

.pokemon-card-detail__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.pokemon-card-detail__image img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border: 3px solid #ffcb05;
  border-radius: 50%;
  background: #f7f7f7;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pokemon-card-detail__base__stats {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pokemon-card-detail__stats,
.pokemon-card-detail__abilities,
.pokemon-card-detail__base-stats {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pokemon-card-detail__abilities h3,
.pokemon-card-detail__base-stats h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  text-align: start;
}

.pokemon-card-detail__abilities ul,
.pokemon-card-detail__base-stats ul {
  padding: 0;
}

.pokemon-card-detail__stats p,
.pokemon-card-detail__abilities li,
.pokemon-card-detail__base-stats li {
  margin: 5px 0;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0;
}

.pokemon-card-detail__abilities li,
.pokemon-card-detail__base-stats li {
  list-style: none;
}

.back__button {
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cc0000;
  border-radius: 15px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  color: #cc0000;
  text-transform: capitalize;
  margin-top: 10px;
}

.back__button:hover {
  background-color: #cc0000;
  color: #fff;
  cursor: pointer;
}
</style>
