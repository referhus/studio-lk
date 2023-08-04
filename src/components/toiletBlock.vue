<template>
    <aside class="toilet">
        <div class="toilet-status"> 
            <span> {{ status }} </span>
        </div>
    </aside>
</template>

<script>

// import axios from "axios";
// import ButtonCmp from './ButtonCmp.vue';

export default {
    name: 'toilet-block',
    data() {
        return {
            status: 'Занято',
        }
    },
    components: {
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
.toilet 
    grid-area: area-toilet
    padding: 20px
    display: flex
    justify-content: center
    align-items: center
    height: max-content
    position: sticky
    top: 0

    &-icon 
        grid-area: area-icon
        width: 100%

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
            padding: 10px
            background: red
            transform: rotate(8deg)

</style>