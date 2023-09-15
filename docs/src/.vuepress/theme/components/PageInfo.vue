<template>
  <div class="info">
    <span v-if="pageInfo.frontmatter.author || $themeConfig.author" class="iconfont icon-user">
        <span class="info-content">{{ pageInfo.frontmatter.author || $themeConfig.author }}</span>
    </span>
    <span v-if="pageInfo.frontmatter.date" class="iconfont icon-calendar"><span class="info-content">{{ formatDateValue(pageInfo.frontmatter.date) }}</span></span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { RecoIcon },
  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },
  },

  setup (props, ctx) {
    const instance = useInstance()
    const formatDateValue = (value) => {
      return new Intl.DateTimeFormat(instance.$lang).format(new Date(value))
    }

    return { formatDateValue }
  }
})
</script>

<style lang="stylus" scoped>
.info{
  margin-top 1rem
  display flex
  align-items center
  justify-content center
  .info-content{
    font-family Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    color $accentColor
    font-weight 600
  }
}
.iconfont
  display inline-block
  font-size 1.2rem
  line-height 1rem
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
</style>
