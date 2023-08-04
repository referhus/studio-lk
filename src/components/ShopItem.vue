<script>
export default {
  props: ['item']
}
</script>

<template>
  <v-card class="d-flex flex-column pa-5 justify-space-between align-center" width="200px" height="300px">
    <h2 class="mb-5">
      {{ item.title }}
    </h2>
    <img class="mb-5" src="logo-t.svg">
    <span>Цена: <b>{{ item.cost }}</b></span>
    <button
        class="bg-blue-lighten-4 :hover-bg-red pa-3 rounded :hover">
      Приобрести
    </button>
  </v-card>
</template>

<style lang="sass">
.v-card__underlay
  display: none !important
</style>