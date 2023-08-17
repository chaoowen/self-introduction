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
    <div class="section">First section ...</div>
    <div class="section">Second section ...</div>
  </full-page>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    const options = {
      licenseKey: 'gplv3-license',
      menu: '#menu',
      anchors: ['page1', 'page2', 'page3'],
      sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
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
