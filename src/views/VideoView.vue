<template>
  <div>
    <div class="bg-primary py-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col">
              <h1 class="font-weight-bold text-center mb-3 mt-3">Vídeos</h1>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(video, index) in videos" :key="index">
      <p align="center" class="mt-5">
        <iframe width="560" height="315" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>
    </div>
    <div class="mb-5">
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
export default {
  name: 'VideoView',
  data() {
    return {
      videos: [
        'https://www.youtube.com/embed/eEPabXAVzNA',
        'https://www.youtube.com/embed/vg9-DLSuo7Q',
        'https://www.youtube.com/embed/IIO6agFJMOw',
        'https://www.youtube.com/embed/GnS4SlV8hmY',
        'https://www.youtube.com/embed/yxRolBxeDEU',
        'https://www.youtube.com/embed/9iw71uHPYtQ',
        'https://www.youtube.com/embed/TBEDhBCO1ow',
      ]
    }
  }
}
</script>
