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
                    <folder-item 
                        v-for="item in news.slice(0, 4)" 
                        :key="`new-${item.id}`"
                        :item="item"
                        no-actions
                    ></folder-item>
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
            <task-item 
                v-for="task in tasks.slice(0, 4)" 
                :key="`task-${task.id}`"
                :item="task"
                no-actions
            ></task-item>

        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskItem from '@/components/TaskItem';
import FolderItem from '@/components/FolderItem';

export default {
    name: 'HomeView',
	components: {
		TaskItem,
		FolderItem
	},
    computed: {
		...mapState('tasks', ['tasks']),
		...mapState('news', ['news']),
	},
}
</script>
