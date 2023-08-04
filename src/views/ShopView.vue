<script setup>
import ShopItem from "@/components/ShopItem.vue";
</script>

<template>
  <section class="container">
    <div class="container-head">
      <h1>Магазин</h1>
    </div>
    <div class="news cards">
      <shop-item
          v-for="item in items"
          :key="item.id"
          :item="item"
      ></shop-item>
    </div>
  </section>
</template>

<style scoped lang="sass">

</style>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Стикерпак',
        cost: '300 T'
      },
      {
        title: 'Футболка',
        cost: '900 T'
      },
      {
        title: 'Выходной',
        cost: '3000 T'
      },
      {
        title: 'Выходной',
        cost: '3000 T'
      },
      {
        title: 'Выходной',
        cost: '3000 T'
      },
      {
        title: 'Выходной',
        cost: '3000 T'
      },
    ],
  }),
}
</script>