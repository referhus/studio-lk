<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
    <div class="container home">
        <h1>ГЛАВНАЯ</h1>
        <section class="container-block" v-if="employees.length">
            <v-text-field 
                label="Введите ФИО сотрудника"
                v-model="input"
                clearable
            ></v-text-field>
            <v-tabs
                v-model="tab"
            >
                <v-tab value="all">Все</v-tab>
                <v-tab value="1">Офис</v-tab>
                <v-tab value="2">Удаленка</v-tab>
                <v-tab value="3">Больничный</v-tab>
                <v-tab value="4">Отпуск</v-tab>
                <v-tab value="5">Перерыв</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="all">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in search" 
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
                            v-for="item in search" 
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
                <v-window-item value="2">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in search" 
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
                <v-window-item value="3">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in search" 
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
                <v-window-item value="4">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in search" 
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
                <v-window-item value="5">
                    <div class="cards">
                        <v-card
                            variant="tonal" 
                            v-for="item in search" 
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
            <div v-if="!search.length"> Совпадений не найдено </div>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'HomeView',
	components: {
	},
    data() {
        return {
            tab: 'all',
            input: '',
            search: []
        }
    },
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
		...mapState('finance', ['finance']),
		...mapState('news', ['news']),
        ...mapState('employees', ['employees']),
        ...mapGetters('employees', ['getEmployeesByName']),
	},
    mounted() {
        this.search = [...this.employees]
    }
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
