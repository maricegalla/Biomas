<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <page-hero/>
  </div>
</template>

<script>
import PageHero from './components/PageHero.vue'

export default {
  name: 'App',
  components: {
    PageHero,
  }
}
</script>
