<template>
  <div class="info">
    <span v-if="pageInfo.frontmatter.author || $themeConfig.author" class="iconfont icon-user"
      style="padding-top: 2rem;padding-bottom: 1.5rem">
        <span class="info-content" v-for="(authorinfo, index) in pageInfo.frontmatter.author.map((item, index) => [item, pageInfo.frontmatter.authorlink[index]])" :key="authorinfo"><a :href="authorinfo[1]">{{ authorinfo[0] }}</a><span v-if="index < pageInfo.frontmatter.author.map((item, index) => [item, pageInfo.frontmatter.authorlink[index]]).length - 1">, </span></span>
    </span>
    <reco-icon
      v-if="showAccessNumber === true"
      icon="reco-eye"
    >
      <AccessNumber :idVal="pageInfo.path" :numStyle="numStyle" />
    </reco-icon>
    <reco-icon
      v-if="pageInfo.frontmatter.tags"
      icon="reco-tag"
      class="tags"
    >
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click.stop="goTags(subItem)"
      >{{subItem}}</span>
    </reco-icon>
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
    currentTag: {
      type: String,
      default: ''
    },
    showAccessNumber: {
      type: Boolean,
      default: false
    }
  },

  setup (props, ctx) {
    const instance = useInstance()

    const numStyle = {
      fontSize: '.9rem',
      fontWeight: 'normal',
      color: '#999'
    }

    const goTags = (tag) => {
      if (instance.$route.path !== `/tag/${tag}/`) {
        instance.$router.push({ path: `/tag/${tag}/` })
      }
    }

    const formatDateValue = (value) => {
      return new Intl.DateTimeFormat(instance.$lang).format(new Date(value))
    }

    return { numStyle, goTags, formatDateValue }
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
    margin-left 0
    margin-right 0
    a{
      font-weight 600
    }
    span{
      margin-left 0
    }
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
.icon-user:before
  margin-right 0.5rem
.tags
  .tag-item
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    cursor pointer
    &.active
      color $accentColor
    &:hover
      color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
</style>
