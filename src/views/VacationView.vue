<template>
  <section class="container">
    <v-card>
      <div class="list">
        <div class="list-text">
          <div class="list-month">МОИ ОТПУСКА</div>
          <div class="list-number">25.04.2023 - 28.04.2023</div>
          <div class="list-number">25.09.2023 - 28.09.2023</div>
        </div>
        <div>
          <h2>Остаток</h2>
          <div><strong style="font-size: 25px;">25</strong> дней</div>
        </div>
      </div>
    </v-card>
    <div class="list-month">ГРАФИК ОТПУСКОВ</div>
    <v-simple-table>
        <thead>
            <tr>
                <th class="text-left" style="width: 80%">
                    ФИО
                </th>
                <th class="text-left" style="width: 50%">
                    ДАТА
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="item in items"
            :key="item.name"
            >
            <td style="width: 80%">{{ item.name }}</td>
            <td style="width: 50%">{{ item.date }}</td>
            </tr>
        </tbody>
    </v-simple-table>
    </section>
</template>

<script>
export default {
  name: "financeView",
  data() {
    return {
      items: [
      {
          name: "Валерий Бовгира",
          date: '22.04.2023'
        },
        {
          name: "Анна Полховская",
          date: '22.04.2023'
        },
        {
          name: "Ольга Захарова",
          date: '22.04.2023'
        },
        {
          name: "Валерий Бовгира",
          date: '22.04.2023'
        },
        {
          name: "Анна Полховская",
          date: '22.04.2023'
        },
        {
          name: "Ольга Захарова",
          date: '22.04.2023'
        },
        {
          name: "Валерий Бовгира",
          date: '22.04.2023'
        },
        {
          name: "Анна Полховская",
          date: '22.04.2023'
        },
        {
          name: "Ольга Захарова",
          date: '22.04.2023'
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="sass">
.list
	padding: 5px
	display: flex
	justify-content: space-between

    
</style>
