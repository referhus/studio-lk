<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
    <div class="container home">
        <h1>ГЛАВНАЯ</h1>
        <section class="container-block" v-if="employees.length">
            <v-text-field label="Введите ФИО сотрудника"></v-text-field>
            <v-tabs
                v-model="tab"
            >
                <v-tab value="1">Все</v-tab>
                <v-tab value="2">Удаленка</v-tab>
                <v-tab value="3">Офис</v-tab>
                <v-tab value="4">Отпуск</v-tab>
                <v-tab value="5">Больничный</v-tab>
            </v-tabs>
            <div class="cards">
                <v-card
                    variant="tonal" 
                    v-for="item in employees" 
                    :key="item.id"
                >
                        <div class="card">
                            <span>
                                {{ item.name }}
                            </span>
                            <v-chip 
                                v-for="(status, key) in item.status" 
                                :key="key"
                            >
                                {{ status }}
                            </v-chip>
                        </div>
                </v-card>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import FinanceItem from '@/components/FinanceItem';
// import newsItem from '@/components/newsItem';

export default {
    name: 'HomeView',
	components: {
		// FinanceItem,
		// newsItem
	},
    data() {
        return {
            tab: '1',
        }
    },
    computed: {
		...mapState('finance', ['finance']),
		...mapState('news', ['news']),
        ...mapState('employees', ['employees'])
	},
}
</script>

<style lang="sass" scoped>
.home .cards 
    display: flex
    flex-direction: column
    gap: 10px
.card 
    width: 100%
    padding: 5px
    display: flex
    gap: 5px
    align-items: center
</style>
