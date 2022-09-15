import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue';
import BiomeView from './views/BiomeView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomeView },
    { path: '/:id', component: BiomeView, props: true }
  ],
});
