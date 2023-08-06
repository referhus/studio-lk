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

<script>
import ShopItem from "@/components/ShopItem.vue";
export default {
  data: () => ({
    items: [
      {
        title: 'Стикерпак',
        cost: '300 T-Coin'
      },
      {
        title: 'Футболка',
        cost: '900 T-Coin'
      },
      {
        title: 'Выходной',
        cost: '3000 T-Coin'
      },
      {
        title: 'Выходной',
        cost: '3000 T-Coin'
      },
      {
        title: 'Выходной',
        cost: '3000 T-Coin'
      },
      {
        title: 'Выходной',
        cost: '3000 T-Coin'
      },
    ],
  }),
  components: {
    ShopItem
  }
}
</script>