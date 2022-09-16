<template>
  <div>
    <div class="bg-primary py-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col">
              <h1 class="font-weight-bold text-center mb-5 mt-3">Vídeos</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p align="center" class="mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eEPabXAVzNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>
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
}
</script>
