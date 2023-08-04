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
        <div>
            <v-text-field 
                label="Введите ФИО сотрудника"
                v-model="input"
                clearable
            ></v-text-field>
        </div>
        <table v-if="search.length"  border="1">
            <thead>
                <tr>
                    <th style="text-align: start;">
                        ФИО
                    </th>
                    <th style="text-align: start;">
                        ДАТА
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in search"
                :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td>{{ item.vacation }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else> Совпадений не найдено </div>
    </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: "financeView",
  data() {
    return {
        input: '',
        search: []
    };
  },
  components: {},
  watch: {
        input(newVal) {
            if (newVal) {
                this.search = this.getEmployeesByName(newVal) ? this.getEmployeesByName(newVal) : []
            } else {
                this.search = [...this.employees]
            }
        }
    },
  computed: {
    ...mapState('employees', ['employees']),
    ...mapGetters('employees', ['getEmployeesByName']),
  },
  methods: {},
  mounted() {
    this.search = [...this.employees]
  }
};
</script>

<style lang="sass">
.list
	padding: 5px
	display: flex
	justify-content: space-between

    
</style>
