import {expect, it, describe, beforeEach} from '@jest/globals';
import {mount} from '@vue/test-utils';
import PokemonListComponent from "@/components/PokemonListComponent.vue";

describe('PokemonList.vue', () => {
  const pokemons = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = mount(PokemonListComponent, {
      propsData: {
        pokemons,
      },
    });
  });

  it('renders the correct number of Pokémon', () => {
    expect(wrapper.findAll('.pokemon-card').length).toBe(pokemons.length);
  });

  it('filters Pokémon by name correctly', async () => {
    await wrapper.setData({ search: 'bulba' });
    const filteredPokemons = wrapper.findAll('.pokemon-card');
    expect(filteredPokemons.length).toBe(1);
    expect(filteredPokemons.at(0).text()).toContain('bulbasaur');
  });
});
