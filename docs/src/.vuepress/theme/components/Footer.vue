<template>
  <div class="footer-wrapper">
      <div class="logos">
          <a href="http://www.yfc.cn/" target="_blank"><img class="logo" src="https://static.igem.wiki/teams/4765/wiki/czy/yf-logo-accent.png"></a>
          <a href="https://www.fudan.edu.cn/en/" target="_blank"><img class="logo" src="https://static.igem.wiki/teams/4765/wiki/czy/fudan-logo-accent-czy.svg"></a>
          <a href="https://life.fudan.edu.cn/main.htm" target="_blank"><img class="logo" src="https://static.igem.wiki/teams/4765/wiki/czy/sky-logo-accent-czy.png"></a>
          <a href="https://2023.igem.wiki/fudan/" target="_blank"><img class="logo" src="https://static.igem.wiki/teams/4765/wiki/czy/logo-square-czy.svg"></a>
      </div>
      <hr>
      <div class="copyright">
        <p>Contact us: <a href="mailto:igem@fudan.edu.cn" target="_blank">igem@fudan.edu.cn</a>&nbsp;&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.bilibili.com/video/BV1yw411i769/" target="_blank">Watch our promotion video!</a></p>
        <p><small>&copy; 2023 - Content on this site is licensed under a <a class="subfoot" href="https://creativecommons.org/licenses/by/4.0/" rel="license" target="_blank">Creative Commons Attribution 4.0 International license</a>.</small></p>
        <p><small>The repository used to create this website is available at <a href="https://gitlab.igem.org/2023/fudan" target="_blank">gitlab.igem.org/2023/fudan</a>.</small></p>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top-left-radius 1rem
    border-top-right-radius 1rem
    text-align: center;
    color: lighten($textColor, 25%);
    background-color: #f0fffc;
    a > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
  }
  .copyright{
    display flex
    flex-direction column
    align-items flex-start
    p {
      margin 0
    }
  }
  .logos {
    display flex
    flex-wrap wrap
    -ms-flex-wrap wrap
    -webkit-flex-wrap wrap
    .logo{
      height 7rem
      padding 0 1rem
    }
  }
@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
