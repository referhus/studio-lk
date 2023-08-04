<template>
  <section class="container">
    <v-card class="pa-5">
      <div class="list">
        <div class="list-text">
          <div class="list-month">
            Месяц
          </div>
          <a  href="/assets/test.pdf" target="_blank" class="list-number">Расчетный лист №245</a>
        </div>
        <div class="list-buttons">
          <v-dialog
              v-model="dialog1"
              width="auto"
          >
            <template v-slot:activator="{ props }">
              <button
                  v-bind="props"
                  class="bg-green-lighten-4 pa-3 rounded">
                Подтвердить
              </button>
            </template>

            <v-card>
              <v-card-text>
                Вы уверены?
              </v-card-text>
              <v-card-actions class="d-flex justify-space-around">
                <v-btn @click="dialog1 = false" color="danger">
                  <span class="text-green-darken-1">Да</span>
                </v-btn>
                <v-btn @click="dialog1 = false" color="danger" class="text-green-darken-1">
                  <span class="text-red-darken-1">Передумал</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>


          <!-- кнопки -->
          <v-dialog
              v-model="dialog"
              width="auto"
          >
            <template v-slot:activator="{ props }">
              <button
                  v-bind="props"
                  class="bg-blue-lighten-4 :hover-bg-red pa-3 rounded">
                Задать вопрос
              </button>
            </template>

            <v-card width="600" height="200">
              <v-textarea variant="solo" label="Ваш вопрос"></v-textarea>
              <v-btn @click="dialog = false" color="danger" class="text-green-darken-1">
                Задать вопрос
              </v-btn>
            </v-card>
          </v-dialog>

        </div>
      </div>
    </v-card>
    <div class="list-month">
      АРХИВ
    </div>
    <v-card width="100%">
      <v-list>
        <template
            v-for="(item, index) in items"
        >
          <v-subheader
              v-if="item.header"
              :key="item.header"
          >{{ item.header }}
          </v-subheader>

          <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }} </v-list-item-title>
              <v-list-item-subtitle>  <a href="/assets/test.pdf" target="_blank"> {{ item.subtitle }}</a> </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </section>
</template>

<script>

export default {
  name: 'financeView',
  data() {
    return {
      dialog: false,
      dialog1: false,
      items: [
        {
          title: 'Июль',
          subtitle: `Расчетный лист №244`,
        },
        {divider: true, inset: true},
        {
          title: 'Июнь',
          subtitle: `Расчетный лист №243`,
        },
        {divider: true, inset: true},
        {
          title: 'Май',
          subtitle: `Расчетный лист №242`,
        },
        {divider: true, inset: true},
        {
          title: 'Апрель',
          subtitle: `Расчетный лист №241`,
        },
        {divider: true, inset: true},
        {
          title: 'Март',
          subtitle: `Расчетный лист №240`,
        },
      ]
    }
  },
  components: {},
  computed: {},
  methods: {},
}
</script>


<style lang="sass">
.v-input__details
  display: none
.list
  padding: 5px
  display: flex
  justify-content: space-between

  &-buttons
    display: flex
    gap: 10px
</style>