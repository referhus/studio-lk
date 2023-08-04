<template>
    <form class="add-block" @submit.prevent="handlerBtn">
        <h2 class="title add-block__title">
            {{ props.title }}
        </h2>

        <button-cmp
            class="add-block__btn"
            text="подтвердить"
            border
            @event="handlerBtn"
        ></button-cmp>
        <button-cmp
            class="add-block__btn"
            text="отмена"
            border
        ></button-cmp>
    </form>
</template>

<script>
import ButtonCmp from '@/components/ButtonCmp';
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
    name: 'add-task',
    props: ['props'],
    components: {
        ButtonCmp,
    },
    data() {
        return {
            task: {
                name: '',
                desc: '', 
                folders: []
            },
            isValid: true,
            results: []
        }
    },
    computed: {
        ...mapState('notification', ['notifications']),
        ...mapState('folders', ['folders']),
        ...mapGetters('folders', ['getFoldersByName'])
    },
    methods: {
        ...mapMutations('modal', ['closeModal']),
        ...mapMutations('finance', ['addTask', 'setTask']),
        ...mapMutations('notification', ['setNotification', 'closeNotification']),

        handlerBtn() {
        // toDo: добавить валидацию
            switch (this.props.type) {
                case 'add': 
                    this.addTask(this.task)
                    this.setNotification({
                        type: 'success',
                        text: 'Задача успешно создана!'
                    })
                    setTimeout(() => {
                        this.closeNotification(this.notifications.length)
                    }, 4000)
                break
                case 'edit':
                    this.setTask({
                        ...this.props.item,
                        ...this.task
                    })
                    this.setNotification({
                        type: 'success',
                        text: 'Задача успешно изменена!'
                    })
                    setTimeout(() => {
                        this.closeNotification(this.notifications.length)
                    }, 4000)
                break
                default:
                    return false
            }
            this.closeModal()
        },

        setElem(el) {
            this.task.folders.push(el)
            console.log(this.task.folders)
        },

        search(el) {
            if (!el.value) {
                this.results = [...this.folders]
            } else {
                this.results = this.getFoldersByName(el.value)
            }
        },

        deleteItem(id) {
            this.task.folders.splice(id, 1)
        }
    },
    mounted() {
        if (this.props.item) {
            this.task.name = this.props.item.name
            this.props.item.desc && (this.task.desc = this.props.item.desc)
            this.props.item.folders?.length && (this.task.folders = [...this.props.item.folders])
        }
        this.results = [...this.folders]
        
    }
}
</script>

<style lang="sass">
.add-block
    display: flex
    flex-direction: column
    gap: 10px

    .task-tags
        max-height: 80px
        overflow: auto

    &__btn
        background: gray
        span
            color: white
      
</style>