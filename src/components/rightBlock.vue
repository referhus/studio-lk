<template>
    <aside class="right-block">
        <div class="toilet" @click="click">
            <div class="toilet-status"> 
                Туалет: <span :class="{_busy: status === 'занято'}"> {{ status }} </span>
            </div>
        </div>
        <section class="container-block right-block-news">
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
            ></news-item>
        </section>
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import newsItem from '@/components/newsItem';

export default {
    name: 'right-block',
    data: () => {
        return {
            status: 'свободно',
        }
    },
    computed: {
		...mapState('news', ['news']),
	},
    components: {
        newsItem
    },
    methods: {
        click() {
            if (this.status === 'свободно') {
                this.status = 'занято'
            } else {
                this.status = 'свободно'
            }
        }
    },
    created() {
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
        width: 100%
        cursor: pointer
        opacity: 0.8
        transition: .3s

        &:hover 
            opacity: 1
            
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
                background: green
                border-radius: 5px
                margin-left: auto
                &._busy 
                    background: red
    
    &-news 
        gap: 10px !important
        align-items: stretch !important
        width: 100%

</style>