<template>
  <div>
    <page-hero/>
    <page-list/>
  </div>
</template>

<script>
import PageHero from '../components/PageHero.vue';
import PageList from '../components/PageList.vue';

export default {
  name: 'HomeView',
  components: {
    PageHero,
    PageList,
  }
}
</script>
