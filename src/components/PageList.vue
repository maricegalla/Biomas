<template>
  <div class="container my-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-auto">
        <h2 class="font-weight-bold text-primary">Biomas existentes</h2>
        <ul class=" text-primary mb-5">
          <li v-for="(biome, index) in biomes" :key="index">
            <h5>
              <a :href="biome.path">{{ biome.name }}</a>
            </h5>
          </li>
        </ul>
        <router-link to="/videos">
          <h2 class="font-weight-bold text-primary">
            Vídeos
          </h2>
        </router-link>
      </div>
      <div class="col-auto">
        <img alt="Biomas" src="../assets/biomas.png" height="500">
      </div>
    </div>
  <div>
</div>
  </div>
</template>

<script>
import { biomes } from '../constants/biomesConstants';

export default {
  name: 'PageList',
  data() {
    return {
      biomes: biomes,
    }
  }
}
</script>