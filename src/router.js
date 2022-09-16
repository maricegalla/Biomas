import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue';
import BiomeView from './views/BiomeView.vue';
import VideoView from './views/VideoView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomeView },
    { path: '/videos', component: VideoView},
    { path: '/:id', component: BiomeView, props: true },
  ],
});
