<template>
    <div class="news item" :class="{fill: fill}">
        <div class="news-icon">
            <span class="material-icons">
                description
            </span>
        </div>
        <span class="news-name item-name">
            {{ item.name }}
        </span>
        <div class="news-date item-date">
            {{ item.date }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'news-item',
    props: {
        item: {
            type: Object
        },
        fill: {
            type: Boolean
        }
    },
    data() {
        return {
        }
    },
    components: {
    },
    computed: {
        ...mapState('finance', ['finance']),
    },
    methods: {
    },
    mounted() {
        this.count
    }
}
</script>

<style scoped lang="sass">
@import "@/assets/styles/params"
.news
    padding: 22px
    width: calc((100% - 22px) / 2)
    height: 139px
    border-radius: 10px
    border: 1px solid #E6E4F0
    background: #FFF 
    position: relative
    display: grid
    grid-template-areas: 'area-icon area-name area-name' 'area-date area-date area-buttons'
    grid-template-columns: 28px 1fr 1fr
    gap: 7px
    line-height: 28px
    align-content: space-between

    @include _1024
        width: 100%

    &-icon 
        grid-area: area-icon
        width: 28px
        height: 28px
        border-radius: 10px
        display: flex
        justify-content: center
        align-items: center
        &-wrap
            width: 8px
            height: 8px
            background: #fff

    &-name 
        grid-area: area-name

    &-date 
        grid-area: area-date
</style>