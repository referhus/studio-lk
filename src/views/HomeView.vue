<template>
    <div class="container">
        <section class="container-block" v-if="news.length">
            <div class="container-head">
                <h2>Новости</h2>
                <router-link 
                    to="/news" 
                    class="link"
                >
                    Смотреть все
                </router-link>
            </div>
            <div class="cards">
                <div class="cards">
                    <news-item 
                        v-for="item in news.slice(0, 4)" 
                        :key="`new-${item.id}`"
                        :item="item"
                        no-actions
                    ></news-item>
                </div>
            </div>
        </section>
        <section class="container-block">
            <div class="container-head">
                <h2>Новости</h2>
                <router-link 
                    to="/folders"   
                    class="link"
                >
                    Смотреть все
                </router-link>
            </div>
            <finance-item 
                v-for="task in finance.slice(0, 4)" 
                :key="`task-${task.id}`"
                :item="task"
                no-actions
            ></finance-item>

        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import FinanceItem from '@/components/FinanceItem';
import newsItem from '@/components/newsItem';

export default {
    name: 'HomeView',
	components: {
		FinanceItem,
		newsItem
	},
    computed: {
		...mapState('finance', ['finance']),
		...mapState('news', ['news']),
	},
}
</script>
