<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
    <div class="container home">
        <h1>ГЛАВНАЯ</h1>
        <section class="container-block" v-if="employees.length">
            <v-text-field 
                label="Введите ФИО сотрудника"
                v-model="input"
            ></v-text-field>
            <v-tabs
                v-model="tab"
            >
                <v-tab value="all">Все</v-tab>
                <v-tab value="1">Удаленка</v-tab>
                <v-tab value="2">Офис</v-tab>
                <v-tab value="3">Отпуск</v-tab>
                <v-tab value="4">Больничный</v-tab>
                <v-tab value="5">Перерыв</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="all">
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
                </v-window-item>
                <v-window-item value="1">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in employees" 
                            :key="item.id"
                        >
                                <div class="card" v-if="item.status.includes('удаленка')">
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
                </v-window-item>
                <v-window-item value="2">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in employees" 
                            :key="item.id"
                        >
                                <div class="card" v-if="item.status.includes('офис')">
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
                </v-window-item>
                <v-window-item value="3">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in employees" 
                            :key="item.id"
                        >
                                <div class="card" v-if="item.status.includes('отпуск')">
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
                </v-window-item>
                <v-window-item value="4">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in employees" 
                            :key="item.id"
                        >
                                <div class="card" v-if="item.status.includes('больничный')">
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
                </v-window-item>
                <v-window-item value="5">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in employees" 
                            :key="item.id"
                        >
                                <div class="card" v-if="item.status.includes('перерыв')">
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
                </v-window-item>
            </v-window>
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
            tab: 'all',
            input: ''
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
