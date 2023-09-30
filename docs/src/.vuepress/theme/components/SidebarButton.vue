<template>
  <div class="sidebar-button" @click="$emit('toggle-sidebar')">
    <svg t="1694267568016" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8388"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" p-id="8389"></path></svg>
  </div>
</template>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 1.25rem
  height 1.25rem
  position absolute
  padding 0.6rem
  top 1.275rem
  left 1rem
  fill var(--text-color)
  .icon
    display block
    width 1.25rem
    height 1.25rem

@media (max-width: $MQWide)
  .sidebar-button
    display block
</style>
