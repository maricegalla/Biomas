<template>
  <div id="app">
    <page-hero/>
    <page-list/>
  </div>
</template>

<script>
import PageHero from './components/PageHero.vue';
import PageList from './components/PageList.vue';

export default {
  name: 'App',
  components: {
    PageHero,
    PageList,
  }
}
</script>
