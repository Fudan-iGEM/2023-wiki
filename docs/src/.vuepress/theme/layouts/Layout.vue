<template>
  <Common :sidebarItems="sidebarItems" :showModule="show">
    <component v-if="$frontmatter.home" :is="homeCom"/>
    <div v-else>
      <ModuleTransition v-if="sidebarItems.length > 0">
        <Page :key="path" :sidebar-items="sidebarItems"/>
      </ModuleTransition>
      <Page v-else :key="path" :sidebar-items="sidebarItems"/>
    </div>
    <Footer class="footer" />
  </Common>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from 'vue'
import Home from '@theme/components/Home'
import HomeBlog from '@theme/components/HomeBlog'
import Page from '@theme/components/Page'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common'
import { resolveSidebarItems } from '@theme/helpers/utils'
import { useInstance } from '@theme/helpers/composable'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import browserslist from 'browserslist'
import browserDetect from 'browser-detect';

export default defineComponent({
  components: { HomeBlog, Home, Page, Common, Footer, ModuleTransition },
  setup (props, ctx) {
    const instance = useInstance()

    const sidebarItems = computed(() => {
      const { $page, $site, $localePath } = instance
      if ($page) {
        return resolveSidebarItems(
          $page,
          $page.regularPath,
          $site,
          $localePath
        )
      } else {
        return []
      }
    })

    const homeCom = computed(() => {
      const { type } = instance.$themeConfig || {}
      if (type) {
        return type == 'blog' ? 'HomeBlog' : type
      }
      return 'Home'
    })

    const show = ref(false)
    onMounted(() => {
      show.value = true
    })

    const path = computed(() => {
      return instance?.$page.path
    })

    return { sidebarItems, homeCom, show, path }
  },
  mounted() {
      const browsers = browserslist(this.$site.browserslist);
      const bd = browserDetect();
      const browserVersion = bd.name + ' ' + parseFloat(bd.version);
      let isNeo = true;
      for (let browser of browsers) {
          const [name, version] = browser.split(' ');
          if (name === bd.name && parseFloat(bd.version) < version) {
              alert('Your browser version is too low, for full experience of our wiki please use the latest version of chrome to visit.');
              isNeo = false;
              break;
          }
          else if (name ===bd.name && parseFloat(bd.version) >= version){
              isNeo = false;
              break;
          }
      }
      if (isNeo === true){
          alert('For full experience of our wiki please use the latest version of chrome to visit.');
      }
  }
})
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
@media print
  .navbar
    display none
</style>