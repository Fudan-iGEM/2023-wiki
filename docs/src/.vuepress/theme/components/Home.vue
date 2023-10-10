<template>
  <div class="whole">
    <div class="anim">
      <lottie-home :options="homeOptions" @lottie-complete="handleComplete"></lottie-home>
    </div>
    <div class="home">
      <div class="hero" id="hero">
        <img
          v-if="recoShowModule && $frontmatter.heroImage"
          :style="heroImageStyle || {}"
          :src="$withBase($frontmatter.heroImage)"
          alt="hero">
        <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">
          {{ $frontmatter.tagline || $description || 'Welcome to your vuePress site' }}
        </p>
        <a href="#features"><span style="font-size: 2rem;color: var(--text-color-sub)" class="iconfont icon-down-circle"></span></a>
      </div>

      <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-out-cubic">
        <div id="features" class="features" v-if="recoShowModule && $frontmatter.features && $frontmatter.features.length">
          <div v-for="(feature, index) in $frontmatter.features" :key="index" class="feature">
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.details }}</p>
          </div>
        </div>
      </div>
      <Content class="home-center" v-show="recoShowModule" custom/>
      <div style="text-align: center; margin-bottom: 4rem">
         <iframe title="Fudan: B.HOME — Biofilm Harnessing for Offworld Mankind Establishment (2023) - Project Promotion [English]" width="80%" height="500px" src="https://video.igem.org/videos/embed/cb83de45-1af6-40f9-bb2a-29754852a3b5?subtitle=en" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import NavLink from '@theme/components/NavLink'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import { useInstance, useShowModule } from '@theme/helpers/composable'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LottieHome from "./LottieHome.vue";

export default defineComponent({
  components: {LottieHome, NavLink, ModuleTransition },
  data(){
      return{
          homeOptions: {
              path: 'https://static.igem.wiki/teams/4765/wiki/czy/wiki-3.json',
              loop: false,
              autoplay:true,
          },
      }
  },
  mounted(){
      AOS.init()
  },

  setup (props, ctx) {
    const instance = useInstance()
    const recoShowModule = useShowModule()
    const actionLink = computed(() => instance && {
      link: instance.$frontmatter.actionLink,
      text: instance.$frontmatter.actionText
    })
    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {
      maxHeight: '450px',
      margin: '6rem auto 1.5rem'
    })

    return { recoShowModule, actionLink, heroImageStyle }
  },
  methods:{
      handleComplete(){
          document.querySelector('.anim').style.zIndex = '-1000';
          document.getElementById('hero').scrollIntoView();
          console.log('done')
      }
  },
})
</script>

<style lang="stylus">
:root {
  --navbar-height: $navbarHeight;
}
.anim{
  min-width: 100vw;
  min-height:100vh;
  position: fixed;
  z-index: 1000;
}
.home {
  padding: 0 2rem 0;
  max-width: 80%;
  margin: 0px auto;
  .hero {
    text-align: center;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      display: block;
      font-size: 2.5rem;
      color: var(--text-color);
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      font-size: 1.6rem;
      line-height: 1.3;
      color: var(--text-color);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.2rem 1.2rem;
      border-radius: $borderRadius
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      load-start()

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid var(--border-color);
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    transition: all .5s
    color: var(--text-color);
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    }

    &:hover {
      transform scale(1.05)
    }
  }
}
@media (max-width: $MQWide){
  .anim{
    display: none;
  }
}
@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
