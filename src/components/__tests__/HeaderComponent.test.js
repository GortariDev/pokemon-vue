import {expect, it, describe} from '@jest/globals';
import {mount} from '@vue/test-utils';
import HeaderComponent from "@/components/HeaderComponent.vue";

describe('PokemonListComponent', () => {
  it('should render correctly', () => {
    const wrapper = mount(HeaderComponent);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with "Pokemon Explorer" heading text', () => {
    const wrapper = mount(HeaderComponent);
    expect(wrapper.text()).toContain("Pokemon Explorer");
  });
});