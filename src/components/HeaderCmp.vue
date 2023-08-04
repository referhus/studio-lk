<template>
      <v-container class="d-flex justify-space-between align-center">
        <img height="30" src="logo-t.svg">
        <v-menu>
          <template v-slot:activator="{ props }">
            <a v-bind="props">
              <div class="d-flex align-center">
                <span class="mr-2">Полховская Анна</span>
                <v-badge content="990 T-Coin" color="warning">
                  <v-avatar size="x-large">
                    <v-icon icon="mdi-account-circle" size="x-large"></v-icon>
                  </v-avatar>
                </v-badge>
              </div>
            </a>

          </template>
          <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-container>


</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Профиль' },
      { title: 'Выйти' },
    ],
  }),
}
</script>