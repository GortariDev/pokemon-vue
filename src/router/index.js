import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PokemonView from '../views/PokemonView.vue';

const routes = [
  {path: '/', component: HomeView},
  {path: '/pokemon/:id', component: PokemonView, props: true},
  {path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
