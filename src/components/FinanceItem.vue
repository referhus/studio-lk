<template>
    <template>
    </template>

</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "FinanceItem",
  props: {
    item: Object,
  },
  data() {
    return {
    };
  },
  components: {
    // ButtonCmp,
  },
  computed: {
    ...mapState("notification", ["notifications"]),
  },
  methods: {
    ...mapMutations("finance", ["setTask", "setDoneTask"]),
    ...mapMutations("modal", ["openModal"]),
    ...mapMutations("notification", ["setNotification", "closeNotification"]),
    deleteTask() {
      this.setTask({ id: this.item.id });
      this.setNotification({
        type: "error",
        text: "Задача успешно удалена!",
      });
      setTimeout(() => {
        this.closeNotification(this.notifications.length);
      }, 4000);
    },

    editTask() {
      this.openModal({
        newState: "ModalTask",
        props: {
          title: "редактировать",
          type: "edit",
          item: this.item,
        },
      });
    },

    handleItem(item) {
      if (item.action === "edit") {
        this.editTask();
      } else if (item.action === "delete") {
        this.deleteTask();
      }
    },

    changeDoneTask() {
      this.setDoneTask(this.item.id);
    },

    openTask(done) {
      !done &&
        this.openModal({
          newState: "ModalTask",
          props: {
            title: "просмотр",
            type: "view",
            item: this.item,
          },
        });
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/params"

.task
    display: grid
    grid-template-columns: 1fr 68px
    gap: 10px
    align-items: center
    border-radius: 10px
    border: 1px solid #E6E4F0
    background: #FFF
    padding: 16px
    width: calc((100% - 16px) / 2)
    min-height: 122.4px

    @include _1024
        width: 100%

    & input
        padding: 8px

    &-date
        grid-area: area-date
        margin-top: auto

    &-body
        grid-area: area-body
        cursor: pointer
        display: flex
        align-items: center
        gap: 10px
        overflow: hidden

    &-checkbox
        width: 19px
        height: 19px
        flex-shrink: 0
        border-radius: 4px
        border: 2px solid #BBBBBE
        color: white
        display: flex
        justify-content: center
        align-items: center
        .material-icons
            font-size: 16px

    &-buttons
        grid-area: area-buttons
        display: flex
        align-items: center
        justify-content: flex-end
        gap: 20px
        color: gray

    &-button
        opacity: 0.7
        cursor: pointer
        transition: .3s

        &:hover
            opacity: 1

    .tag
        max-width: 110px

    &-tags
        grid-area: area-tags
        width: 100%
        display: flex
        flex-wrap: wrap
        gap: 10px
        pointer-events: none

    &.done
        .task
            &-name
                text-decoration: line-through
                color: rgba(85, 119, 255, 0.80)

            &-checkbox
                background: rgba(85, 119, 255, 0.80)
                border: none
                span
                    color: white

            &-buttons, &-tags
                pointer-events: none
                opacity: .5
</style>
