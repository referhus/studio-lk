<template>
    <aside class="navigation">
        <template 
            v-for="(item, i) in nav" 
            :key="i"
        >
            <router-link 
                :to="item.link" 
                class="navigation-link"
            >
                <span class="navigation-link__name">{{ item.name }}</span>
            </router-link>
        </template>
    </aside>
</template>

<script>
    export default {
        data() {
            return {
                nav: [
                    {
                        link: '/',
                        name: 'Главная',
                    },
                    {
                        link: '/finance',
                        name: 'Финансы',
                    },
                    {
                        link: '/vacation',
                        name: 'График отпусков',
                    },
                    {
                        link: '/news',
                        name: 'Новости',
                    },
                    {
                        link: '/shop',
                        name: 'Магазин',
                    },
                ]
            }
        },
    }
</script>

<style lang="sass">
@import "@/assets/styles/params"
.navigation
    grid-area: area-menu
    padding: 20px
    display: flex
    flex-direction: column
    gap: 10px
    background: white
    flex-shrink: 0
    width: 100%
    height: 100vh
    z-index: 2
    position: sticky
    top: 0

    &-link 
        display: flex
        align-items: center
        gap: 10px
        color: gray
        padding: 10px
        border-radius: 10px
        transition: .3s

        &.router-link-active 
            background: #57F
            & > span
                color: white

        &._disabled
            opacity: 0.5
            pointer-events: none
            background: #E9E8EC
        
        &__name
            @include _1024
                display: none
                

</style>