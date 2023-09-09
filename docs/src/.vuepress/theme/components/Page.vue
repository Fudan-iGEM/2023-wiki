<template>
  <main class="page" :style="pageStyle">
    <section v-show="recoShowModule">
      <ModuleTransition delay="0.08">
        <div class="page-title-with-bg">
          <div class="page-title">
            <vue-typed-js
              class="title"
              :loop="true"
              :fadeOut="true"
              :typeSpeed="200"
              :strings="[$page.title]">
                <h1 class="typing"></h1>
            </vue-typed-js>
            <lottie :options="rocketOptions" width="200"></lottie>
          </div>
        </div>
      </ModuleTransition>
      <PageInfo :pageInfo="$page" :showAccessNumber="showAccessNumber"></PageInfo>
      <!-- 这里使用 v-show，否则影响 SSR -->
      <Content class="theme-reco-content" />
    </section>

    <div class="page-nav" v-if="recoShowModule && (prev || next)">
      <p class="inner">
        <span v-if="prev" class="prev">
          <router-link v-if="prev" class="prev" :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link>
        </span>
      </p>
    </div>
  </main>
</template>

<script>
import { defineComponent, computed, toRefs } from 'vue'
import PageInfo from '@theme/components/PageInfo'
import { resolvePage, outboundRE, endingSlashRE } from '@theme/helpers/utils'
import { useInstance, useShowModule } from '@theme/helpers/composable'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import Lottie from "./Lottie.vue";

export default defineComponent({
  components: {Lottie, PageInfo, ModuleTransition },

  props: ['sidebarItems'],
  data(){
    return{
        rocketOptions: {
            path: 'https://static.igem.wiki/teams/4765/wiki/czy/spacecraft-lottie-czy.json',
            loop: true,
            autoplay:true
        },
    }
  },

  setup (props, ctx) {
    const instance = useInstance()

    const { sidebarItems } = toRefs(props)

    const recoShowModule = useShowModule()

    // 是否显示评论
    const shouldShowComments = computed(() => {
      const { isShowComments } = instance.$frontmatter
      const { showComment } = instance.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    })

    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = instance || {}

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })

    const lastUpdated = computed(() => {
      if (instance.$themeConfig.lastUpdated === false) return false
      return instance.$page.lastUpdated
    })

    const lastUpdatedText = computed(() => {
      if (typeof instance.$themeLocaleConfig.lastUpdated === 'string') {
        return instance.$themeLocaleConfig.lastUpdated
      }
      if (typeof instance.$themeConfig.lastUpdated === 'string') {
        return instance.$themeConfig.lastUpdated
      }
      return 'Last Updated'
    })

    const prev = computed(() => {
      const frontmatterPrev = instance.$frontmatter.prev
      if (frontmatterPrev === false) {
        return
      } else if (frontmatterPrev) {
        return resolvePage(instance.$site.pages, frontmatterPrev, instance.$route.path)
      } else {
        return resolvePrev(instance.$page, sidebarItems.value)
      }
    })

    const next = computed(() => {
      const frontmatterNext = instance.$frontmatter.next
      if (next === false) {
        return
      } else if (frontmatterNext) {
        return resolvePage(instance.$site.pages, frontmatterNext, instance.$route.path)
      } else {
        return resolveNext(instance.$page, sidebarItems.value)
      }
    })

    const editLink = computed(() => {
      if (instance.$frontmatter.editLink === false) {
        return false
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = instance.$themeConfig

      if (docsRepo && editLinks && instance.$page.relativePath) {
        return createEditLink(repo, docsRepo, docsDir, docsBranch, instance.$page.relativePath)
      }
      return ''
    })

    const editLinkText = computed(() => {
      return (
        instance.$themeLocaleConfig.editLinkText || instance.$themeConfig.editLinkText || `Edit this page`
      )
    })

    const pageStyle = computed(() => {
      return instance.$showSubSideBar ? {} : { paddingRight: '0' }
    })

    return {
      recoShowModule,
      shouldShowComments,
      showAccessNumber,
      lastUpdated,
      lastUpdatedText,
      prev,
      next,
      editLink,
      editLinkText,
      pageStyle
    }
  }
})

function createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
  const bitbucket = /bitbucket.org/
  if (bitbucket.test(repo)) {
    const base = outboundRE.test(docsRepo)
      ? docsRepo
      : repo
    return (
      base.replace(endingSlashRE, '') +
        `/src` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
        path +
        `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
    )
  }

  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  return (
    base.replace(endingSlashRE, '') +
    `/edit` +
    `/${docsBranch}/` +
    (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
    path
  )
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.page-title-with-bg
  background-image url("https://static.igem.wiki/teams/4765/wiki/czy/space-bg-czy.png")
  background-repeat no-repeat
  background-position center right
.page
  position relative
  padding-top 5rem
  padding-bottom 2rem
  padding-right 14rem
  display block
  .page-title
    display flex
    max-width: $contentWidth;
    margin: 0 auto;
    padding: 7rem 2.5rem;
    color var(--text-color)
    justify-content space-between
    align-items center
    .title
      color $accentColor
      font-size 5rem
      font-family Handjet, Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
      .typing
        height 5rem
        font-size 5rem
        font-family Handjet, Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
  .theme-reco-content h2
    position relative
    padding-left 0.8rem
    &::before
      position absolute
      left 0
      //top 3.5rem
      display block
      height 1.8rem
      content ''
      border-left 5px solid $accentColor
  .page-edit
    @extend $wrapper
    padding-top 1rem
    padding-bottom 1rem
    overflow auto
    .edit-link
      display inline-block
      a
        color $accentColor
        margin-right 0.25rem
    .last-updated
      float right
      font-size 0.9em
      .prefix
        font-weight 500
        color $accentColor
      .time
        font-weight 400
        color #aaa
  .comments-wrapper
    @extend $wrapper

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid var(--border-color)
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

@media (max-width: $MQMobile)
  .page
    padding-right 0
    .page-title
      padding: 0 1rem;
    .page-edit
      .edit-link
        margin-bottom .5rem
      .last-updated
        font-size .8em
        float none
        text-align left

</style>