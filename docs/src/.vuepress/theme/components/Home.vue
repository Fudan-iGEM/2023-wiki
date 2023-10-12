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
        <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description" style="color: #e37654">
            <strong>B</strong>iofilm <strong>H</strong>arnessing for <strong>O</strong>ffworld <strong>M</strong>ankind <strong>E</strong>stablishment
        </p>
        <a href="#start"><span style="font-size: 2rem;color: var(--text-color-sub)" class="iconfont icon-down-circle"></span></a>
      </div>
      <section class="page-1" id="start">
          <div style="width: 40%;padding-top: 10vh;padding-bottom: 10vh">
              <lottie :options="earthOptions"></lottie>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom"><p style="margin:0;padding-left:5vw;padding-bottom: 10vh;padding-top:10vh;color:white;font-size: 2vw;"><span style="color:#e37654;font-size: 4vw">What if ...</span><br>We could call somewhere <span style="color:#e37654;">beyond Earth</span>
              our new home?</p></div>
      </section>
      <section class="page-2">
          <div style="width: 40%;padding-top: 10vh;padding-bottom: 10vh">
              <lottie :options="marsOptions"></lottie>
          </div>
          <div data-aos="fade-down" data-aos-duration="4500" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom"><p style="margin:0;padding-top:10vh;padding-bottom: 10vh;padding-left:5vw;padding-right:5vw;color:white;font-size: 1.5vw;"><span style="font-size: 4vw;color: #e37654">Why Mars</span><br>Since the dawn of time, humanity's insatiable curiosity has reached out to the cosmos. With the advent of modern aerospace technology, our ability to explore the vast universe has expanded, igniting dreams of future space migration.
              Among the potential homes, Mars stands as the most promising candidate. It possesses several Earth-like qualities that make it an attractive choice.</p></div>
      </section>
      <section class="page-3">
          <div style="width: 40%;padding-top: 15vh;padding-bottom: 15vh">
              <lottie :options="rocketOptions"></lottie>
          </div>
          <div data-aos="flip-left" data-aos-duration="4500" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom">
            <p style="margin:0;padding-top:25vh;padding-bottom: 25vh;padding-left:5vw;padding-right:5vw;background: linear-gradient(#fcc6ae,#e37654);background-clip: text; -webkit-background-clip: text;font-size: 1.5vw;color: transparent;-webkit-text-stroke:1px transparent">However, before Mars can truly become a hospitable home for us humanity, it must undergo a transformative process known as terraforming, reshaping the planet's surface to mimic Earth's conditions.<br>The journey to Mars presents formidable challenges, with its barren landscape; covered in rocks and dusts. To create a sustainable ecosystem, the terraforming of Martian soil is a pivotal step.</p>
          </div>
      </section>
      <section class="page-4">
          <div data-aos="fade-down-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom">
              <img style="width: 30vw;" src="https://static.igem.wiki/teams/4765/wiki/czy/lichen.jpg">
          </div>
          <div data-aos="fade-down-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom">
              <p style="margin:0;padding-top:10vh;padding-bottom: 10vh;padding-left:5vw;padding-right:5vw;color:#242424;font-size: 1.5vw;">In the process of primary succession on Earth, <span style="color: #01ab6d;">lichens</span> play a vital role in <span style="color:#01ab6d;">shaping environment</span>.<br><small>"...the tinist objects of inquiry become the most cosmic and otherworldly."</small><br><span style="color:#e37654;">· Community fungi and algae</span><br><span style="color:#e37654;">· Symbiosis system</span><br><span style="color:#e37654;">· Lichenic acid</span></p>
          </div>
      </section>
      <section class="page-5">
        <div data-aos="zoom-in-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom">
            <p style="margin:0;padding-top:20vh;padding-bottom: 20vh;padding-left:5vw;padding-right:5vw;color:white;font-size: 1.5vw;">We have developed an ecological biofilm that mimics a symbiotic relationship between cyanobacteria and Escherichia coli, and can transmute Martian rocks into fertile soil and endure harsh Martian conditions.<br><br>The B.HOME project revolves around four interdependent systems: Symbiotic, Functional, Survival, and Metabolic Regulation. Through these systems, we have constructed an ecological biofilm capable of autotrophic survival, rock weathering, extreme tolerance, and poly-cistron expression efficiency. Together, these systems pave the way for our biofilm pioneers to flourish on Mars.<br><br>Our project extends <span style="color: #e37654"><strong>beyond Mars</strong></span>, with applications on Earth such as desertification management, functional biomaterial creation, assisting synthetic metabolic pathways, and industrial applications.</p>
        </div>
      </section>
      <section class="page-6">
          <div data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="bottom-bottom">
            <p style="margin:0;padding-top:20vh;padding-bottom: 20vh;padding-left:20vw;padding-right:20vw;color:white;font-size: 1.5vw;">Our <span style="color:#e37654;"><strong>B.HOME</strong></span> project aspires to transmute Martian rocks into fertile soil,marking a bold stride toward a viable human habitat. Our B.HOME project aspires to transmute
                Martian rocks into fertile soil,marking a bold stride toward a viable <strong>human habitat</strong>
                  on terrestrial planets.
            </p>
          </div>
      </section>
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
import Lottie from "./Lottie.vue";

export default defineComponent({
  components: {Lottie, LottieHome, NavLink, ModuleTransition },
  data(){
      return{
          homeOptions: {
              path: 'https://static.igem.wiki/teams/4765/wiki/czy/wiki-4.json',
              loop: false,
              autoplay:true,
          },
          earthOptions: {
              path: 'https://static.igem.wiki/teams/4765/wiki/czy/earth-home.json',
              autoplay:true,
          },
          marsOptions: {
              path: 'https://static.igem.wiki/teams/4765/wiki/czy/mars-home.json',
              autoplay:true,
          },
          rocketOptions:{
              path: 'https://static.igem.wiki/teams/4765/wiki/czy/spacecraft-lottie-czy.json',
              autoplay:true,
          }
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
      }
  },
})
</script>

<style lang="stylus">
:root {
  --navbar-height: $navbarHeight;
  overflow-x: hidden;
}
.anim{
  min-width: 100vw;
  min-height:100vh;
  position: fixed;
  z-index: 1000;
}
.home {
  //padding: 0 2rem 0;
  //max-width: 80%;
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
  .page-1 {
    background: linear-gradient(#fff6f0, #052a45);
    width: calc(100vw - 5px);
    //height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
  .page-2 {
    background-color: #052a45;
    width: calc(100vw - 5px);
    //height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
  .page-3 {
    background: linear-gradient(#052a45, #fff6f0);
    width: calc(100vw - 5px);
    //height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .page-4 {
    background-color: #fff6f0;
    width: calc(100vw - 5px);
    //height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
  .page-5 {
    background-image: url("https://static.igem.wiki/teams/4765/wiki/czy/mars-home-bg.jpg");
    background-repeat: round;
    width: calc(100vw - 5px);
    //height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
  .page-6 {
    background-image: url("https://static.igem.wiki/teams/4765/wiki/czy/backgorund-last-home.png");
    background-repeat: round;
    width: calc(100vw - 5px);
    //height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
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
    //padding-left: 1.5rem;
    //padding-right: 1.5rem;

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
