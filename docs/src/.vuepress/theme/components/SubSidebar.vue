<script>
import { defineComponent, computed } from 'vue'
import { isActive } from '@theme/helpers/utils'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  setup (props, ctx) {
    const instance = useInstance()

    const headers = computed(() => {
      return instance.$showSubSideBar ? instance.$page.headers : []
    })

    const isLinkActive = (header) => {
      const active = isActive(instance.$route, instance.$page.path + '#' + header.slug)
      return active
    }

    return { headers, isLinkActive }
  },
  render (h) {
    return h('ul', {
      class: { 'sub-sidebar-wrapper': true },
      style: { width: this.headers.length > 0 ? '12rem' : '0' }
    }, [
      ...this.headers.map(header => {
          if (header.level>2){
              return;
          }
        return h('li', {
          class: {
            active: this.isLinkActive(header),
            [`level-${header.level}`]: true
          },
          attr: { key: header.title }
        }, [
          h('router-link', {
            class: { 'sidebar-link': true, [`reco-side-${header.slug}`]: true },
            props: { to: `${this.$page.path}#${header.slug}` }
          }, header.title)
        ])
      })
    ])
  }
})
</script>

<style lang="stylus" scoped>
.sub-sidebar-wrapper
  width 12rem
  font-family Quicksand, Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
  padding-left 0
  list-style none
  font-size 0.8rem
  li
    padding .2rem 0
    cursor pointer
    //border-left 1px solid var(--border-color)
    a
      padding 0.35rem 1rem 0.35rem 0rem
      color var(--text-color)
      font-weight 500
    &:hover
      a
       color $accentColor
    &.active
      border-left 3px solid $accentColor
      a
       transition ease 0.4s
       font-size 1rem
       color $accentColor
    &.level-1
      padding-left .4rem
    &.level-2
      padding-left .9rem
    &.level-3
      padding-left 1.5rem
</style>

