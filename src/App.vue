<template>
  <!-- <full-page ref="fullpage" :options="options">
    <div class="section">
      <button class="next" @click="$refs.fullpage.api.moveSectionDown()">
        Next
      </button>
      Section 1
    </div>
    <div class="section">
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
        Prev
      </button>
      Section 2
    </div>
  </full-page> -->

  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <Cover 
        @directPortfolio="$refs.fullpage.api.moveTo('portfolio')"
      />
    </div>
    <div class="section">
      <Workline />
    </div>
    <div class="section">
      <Skills />
    </div>
    <div class="section">
      <Portfolio />
    </div>
  </full-page>
</template>

<script>
import Cover from '@/components/Cover.vue';
import Workline from '@/components/Workline.vue';
import Skills from '@/components/Skills.vue';
import Portfolio from '@/components/Portfolio.vue';
import { onMounted } from 'vue';
export default {
  components: {
    Cover,
    Workline,
    Skills,
    Portfolio
  },
  setup() {
    const options = {
      licenseKey: 'gplv3-license',
      verticalCentered: false,
      menu: '#menu',
      anchors: ['cover', 'workTimeline', 'expertise', 'portfolio'],
      sectionsColor: ['#D8D8D8', '#E2E2E2', '#D8D8D8', '#E2E2E2'],
    };
    onMounted(() => {
      // hide fullpage watermark
      const watermark = document.getElementsByClassName('fp-watermark');
      watermark[0].style.display = 'none';
    })
    return {
      options
    }
  }
}
</script>

<style scoped>
/* not working */
/* .fp-watermark {
  display: none !important;
} */
</style>
