<script>
export default {
  props: ['item'],
  data () {
    return {
      dialog: false,
    }
  }
}
</script>
<template>
  <v-card class="d-flex flex-column pa-5 justify-space-between align-center" style="width: calc((100% - 16px * 3) / 4)" height="300px">
    <h2 class="mb-5">
      {{ item.title }}
    </h2>
    <img class="mb-5" src="logo-t.svg">
    <span>Цена: <b>{{ item.cost }}</b></span>
    <v-dialog
        v-model="dialog"
        width="auto"
    >
      <template v-slot:activator="{ props }">
        <button
            v-bind="props"
            class="bg-blue-lighten-4 :hover-bg-red pa-3 rounded">
          Приобрести
        </button>
      </template>

      <v-card>
        <v-card-text>
          Вы уверены, что хотите приобрести данный товар за {{ item.cost }} ?
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn @click="dialog = false" color="danger">
            <span class="text-green-darken-1">Да</span>
          </v-btn>
          <v-btn @click="dialog = false" color="danger" class="text-green-darken-1">
            <span class="text-red-darken-1">Передумал</span>
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<style lang="sass">
.v-card__underlay
  display: none !important
</style>