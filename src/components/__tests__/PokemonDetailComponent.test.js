import {expect, it, describe, beforeEach} from '@jest/globals';
import {mount} from '@vue/test-utils';
import PokemonDetailComponent from '@/components/PokemonDetailComponent.vue';

describe('PokemonDetailComponent', () => {
  const pokemon = {
    name: 'bulbasaur',
    id: 1,
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
      },
    },
    height: 7,
    weight: 69,
    base_experience: 64,
    types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
    abilities: [
      {ability: {name: 'chlorophyll'}},
      {ability: {name: 'overgrow'}},
    ],
    stats: [
      {stat: {name: 'hp'}, base_stat: 45},
      {stat: {name: 'attack'}, base_stat: 49},
      {stat: {name: 'defense'}, base_stat: 49},
    ],
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(PokemonDetailComponent, {
      propsData: {pokemon},
    });
  });

  it('renders the Pokémon name and ID correctly', () => {
    expect(wrapper.find('.pokemon-card-detail__name').text()).toBe('bulbasaur');
    expect(wrapper.find('.pokemon-card-detail__id').text()).toBe('ID: #1');
  });

  it('displays Pokémon height and weight correctly', () => {
    expect(wrapper.text()).toContain('Height: 0.7 m');
    expect(wrapper.text()).toContain('Weight: 6.9 kg');
  });

  it('shows the Pokémon types correctly', () => {
    expect(wrapper.text()).toContain('Type: grass, poison');
  });

  it('displays the Pokémon abilities correctly', () => {
    const abilities = wrapper.findAll('li');
    expect(abilities.at(0).text()).toBe('chlorophyll');
    expect(abilities.at(1).text()).toBe('overgrow');
  });
});
