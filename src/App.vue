<template>
  <div id="app">
      <header-cmp></header-cmp>
      <main class="main" :class="{_fill: $route.name !== 'home'}">
          <side-menu></side-menu>
          <router-view/>
          <right-block v-if="$route.name === 'home'"></right-block>
          <notification-cmp/>
      </main>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';
import NotificationCmp from './components/NotificationCmp.vue';
import HeaderCmp from "@/components/HeaderCmp.vue";
import rightBlock from './components/rightBlock.vue';
export default {
  data() {
      return {
      };
  },
  components: {
    HeaderCmp,
    SideMenu,
    rightBlock,
    NotificationCmp
  },
}

</script>

<style lang="sass">
@import "@/assets/styles/params"

*
  font-family: Avenir, Helvetica, Arial, sans-serif
  font-size: 16px
  color: #4F4F4F
  padding: 0
  margin: 0
  box-sizing: border-box
  user-select: none
  scrollbar-width: thin
  scrollbar-color: rgba(#000, 0.2) rgba(#000, 0)

body
  width: 100%

a
  text-decoration: none

input, textarea
  padding: 5px
  border-radius: 5px
  border: 1px solid gray
  width: 100%
  outline: none

  &._error
      border: 1px solid red

textarea
  resize: none

::-webkit-scrollbar
  position: absolute
  left: 0
  width: 8px
  height: 4px

/* Track */
::-webkit-scrollbar-track
  border-radius: 4px

/* Handle */
::-webkit-scrollbar-thumb
  background: #fff
  border-radius: 4px

/* Handle on hover */
::-webkit-scrollbar-thumb:hover
  background: gray

.main
  display: grid
  grid-template-columns: 200px 1fr 220px
  grid-template-areas: 'area-menu area-content area-toilet'
  padding: 0 40px
  max-width: 1440px
  margin: 0 auto
  @include _1024
      padding: 0 16px
      grid-template-columns: 85px 1fr 170px

  &._fill
    grid-template-areas: 'area-menu area-content area-content'

.container
  grid-area: area-content
  width: 100%
  display: flex
  flex-direction: column
  gap: 20px
  padding: 20px
  &-head
      background: white
      position: sticky
      top: 0
      padding: 10px 0
      display: flex
      align-items: center
      justify-content: space-between
      gap: 10px
      z-index: 1
  &-block
      display: flex
      flex-direction: column
      gap: 20px

.cards
  display: flex
  flex-wrap: wrap
  gap: 16px

.item
  height: max-content

  &.fill
    width: 100%
    height: auto
    padding: 10px

  &-name
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

  &-date
      font-size: 12px
      color: #A3A3A3
      pointer-events: none

.link
  font-size: 14px
  color: #A3A3A3
  opacity: 0.6
  transition: .3s
  &:hover
      opacity: 1


thead, tbody
  width: 100%

</style>
