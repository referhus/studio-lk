<template>
    <aside class="right-block">
        <div class="toilet">
            <div class="toilet-status"> 
                Туалет: <span> {{ status }} </span>
            </div>
        </div>
        <section v-if="$route.name == 'home'" class="container-block right-block-news">
            <div class="container-head">
                <h2>Новости</h2>
                <router-link 
                    to="/news"   
                    class="link"
                >
                <span class="material-icons">
                    arrow_forward
                </span>
                </router-link>
            </div>
            <news-item 
                v-for="item in news.slice(0, 5)" 
                :key="`news-${item.id}`"
                :item="item"
                fill
            ></news-item>
        </section>
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import newsItem from '@/components/newsItem';

// import axios from "axios";
// import ButtonCmp from './ButtonCmp.vue';

export default {
    name: 'toilet-block',
    data() {
        return {
            status: 'Занято',
        }
    },
    computed: {
		...mapState('news', ['news']),
	},
    components: {
        newsItem
    },
    watch: {
    },
    methods: {
        // settoilet() {
        //     if (this.status) {
        //         axios.get(`https://api.opentoiletmap.org/data/2.5/toilet?&units=metric&q=${this.status}&appid=790a96bd8bb9d8c93506ff43bb1b5b73`)
        //             .then(res => {
        //                 this.icon = `https://opentoiletmap.org/img/wn/${(res.data.toilet[0].icon)}@2x.png`
        //                 this.temp = Math.round(res.data.main.temp)
        //                 this.edit = false
        //             })    
        //             .catch(res => {
        //                 this.error = res.response.data.message
        //             })             
        //     } 
        // }
    },
    created() {
        // this.settoilet()
    }
}
</script>

<style lang="sass">
.right-block 
    grid-area: area-toilet
    padding: 20px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: max-content
    position: sticky
    top: 0

    .container-block
        display: flex
        align-items: center

    .toilet
        margin-bottom: 20px
        &-status 
            grid-area: area-status
            margin-bottom: auto
            display: flex
            align-items: center
            gap: 10px
            position: relative

            span 
                font-size: 16px
                color: white    
                padding: 5px 15px
                background: red
                border-radius: 5px
    
    &-news 
        gap: 10px !important
        align-items: stretch !important
        width: 100%

</style>