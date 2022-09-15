<template>
  <div class="bg-primary py-5">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col">
            <h1 class="font-weight-bold text-center mb-5 mt-3">{{ biomeData.name}}</h1>
            <!-- <p class="text-justify">Bioma é um conjunto de vida vegetal e animal, constituído pelo agrupamento de tipos de vegetação que são próximos e que podem ser identificados em nível regional, com condições de geologia e clima semelhantes e que, historicamente, sofreram os mesmos processos de formação da paisagem, resultando em uma diversidade de flora e fauna própria.</p> -->
        </div>
      </div>
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
    }
  },
  mounted() {
    const data = this.biomes.filter(biome => {
      return biome.path.includes(this.$route.params.id);
    });
    this.biomeData = data[0];
  },
  methods: {
  }
}
</script>