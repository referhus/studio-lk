<template>
    <section class="container">
        <div class="container-head">
            <h1>Новости</h1>
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
// import ButtonCmp from '@/components/ButtonCmp';
import newsItem from '@/components/newsItem';

export default {
	name: 'newsView',
	data() {
		return {
            show: false,
            folder: {
                name: '',
                color: '#000000'
            }
		}
	},
	components: {
        // ButtonCmp,
        newsItem
	},
	computed: {
		...mapState('news', ['news'])
	},
	methods: {
		// ...mapMutations('news', ['addFolder', 'setFolder']),
        handlerBtn() {
            if (this.folder.name) {
                this.addFolder(this.folder)
                this.show = false
                this.clearForm()
            } 
        },
        clearForm() {
            for (let key in this.folder) {
                this.folder[key] = ''
            }
        },
        handlerAdd() {
            this.show = !this.show
        }
	},
}
</script>

<style lang="sass" scoped>
.news
    gap: 22px

</style>