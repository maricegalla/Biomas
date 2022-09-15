<template>
  <div>
    <div class="bg-primary py-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col">
              <h1 class="font-weight-bold text-center mb-5 mt-3">{{ biomeData.name}}</h1>
              <p class="text-justify">{{ biomeData.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img class="rounded mx-auto d-block mt-4 mb-2" :src="biomeData.image" :alt="biomeData.name" />
        <router-link to="/">
          <button type="button" class="rounded-pill mx-auto d-block btn btn-primary" >
            <b-icon-arrow-return-left />
            Voltar
          </button>
        </router-link>
    </div>
  </div>
</template>

<script>
import { biomes } from '../constants/biomesConstants';

export default {
  name: 'BiomeView',
  props: ['id'],
  data() {
    return {
      biomes: biomes,
      biomeData: {},
      url: '',
    }
  },
  mounted() {
    const data = this.biomes.filter(biome => {
      return biome.path.includes(this.$route.params.id);
    });
    this.biomeData = data[0];
  },
}
</script>