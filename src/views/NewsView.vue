<template>
    <section class="container">
        <div class="container-head">
            <h1>Новости</h1>
            <!-- <button-cmp 
				icon="add"
				border
				@event="handlerAdd"
			></button-cmp> -->
        </div>
        <!-- <form 
            class="news-form"
            v-if="show"
            @submit.prevent="handlerBtn"
        >
            <input 
                v-model="folder.name"
                type="text" 
                placeholder="название"
                autofocus
            >
            <input 
                type="color" 
                v-model="folder.color"
            >
            <button-cmp 
                type="submit"
                text="создать"
				border
                @event="handlerBtn"
			></button-cmp>
        </form> -->
        <div class="news cards">
            <folder-item
                v-for="item in news" 
                :key="item.id"
                :item="item"
            ></folder-item>
        </div>
    </section>
</template>
<script> 

import { mapState } from 'vuex';
// import ButtonCmp from '@/components/ButtonCmp';
import FolderItem from '@/components/FolderItem';

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
        FolderItem
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