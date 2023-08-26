<template>
  <div>
    <!-- background title -->
    <div class="absolute left-0 top-0 text-9xl font-extrabold text-shallow">
      SKILLS 專業技能
    </div>
    <section class="relative z-10 h-screen flex items-center justify-center">
      <div class="flex flex-col md:flex-row py-10 px-12 bg-shallow rounded-xl">
        <!-- skills -->
        <div>
          <p class="pb-4 font-bold text-xl">專業技能</p>
          <li v-for="(item, index) in skills" :key="index" class="pb-2">
            {{ item }}
          </li>
        </div>
        <!-- stick -->
        <div class="mx-16 my-6 w-px bg-middle"></div>
        <!-- studies -->
        <div>
          <p class="pb-4 font-bold text-xl">學習進修</p>
          <li v-for="(item, index) in studies" :key="index" class="pb-2">
            {{ item }}
          </li>
        </div>
        
      </div>
    </section>
  </div>

</template>

<script setup>
  const skills = [
    'figma 繪製 wireframe、mockup',
    'JavaScript、HTML5、CSS、jQuery',
    'vue、nuxt 前端架構',
    'flutter app',
    'tailwind',
    'git 版本控制',
    'node.js'
  ]
  const studies = [
    '網站安全性',
    '網站效能問題',
    'vue3',
    'docker container 粗淺開發與部署',
    'leetcode js 解題 119 題'
  ]
</script>