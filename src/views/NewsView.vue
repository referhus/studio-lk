<template>
    <section class="container">
        <div class="container-head">
            <h1>НОВОСТИ</h1>
        </div>
        <div class="news cards">
            <news-item
                v-for="item in news" 
                :key="item.id"
                :item="item"
            ></news-item>
        </div>
    </section>
</template>
<script> 

import { mapState } from 'vuex';
import newsItem from '@/components/newsItem';

export default {
	name: 'newsView',
	data() {
		return {
		}
	},
	components: {
        newsItem
	},
	computed: {
		...mapState('news', ['news'])
	},
	methods: {
	},
}
</script>

<style lang="sass" scoped>
.news
    gap: 22px

</style>