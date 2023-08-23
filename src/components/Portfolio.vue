<template>
  <div class="lg:h-screen flex flex-col items-center justify-center">
    <!-- background title -->
    <div class="hidden md:block absolute left-0 top-10">
      <p class="text-9xl font-extrabold text-deep-shallow">WEBSITE</p>
      <p class="text-9xl font-extrabold text-deep-shallow">PORTFOLIO</p>
      <p class="text-9xl font-extrabold text-deep-shallow">......</p>
    </div>
    <div class="absolute right-0 bottom-10">
      <p class="text-9xl font-extrabold text-deep-shallow">作品集</p>
    </div>
    <!-- content -->
    <section class="flex flex-col lg:flex-row pb-10 lg:pb-0">
      <div class="relative pb-10 lg:pb-0 lg:pr-10">
        <div
          class="relative cursor-pointer"
          @mouseover.prevent="setShowProject('template')" 
          @mouseleave="clearShowProject('template')"
          @click="handleLink('template')"
        >
          <Hexagon :color="projectCheckColor('template')" />
          <p class="w-20 absolute-center text-center text-shallow text-xl">
            後台模板系統
          </p>
        </div>
        <div ref="animationTemplate" class="animationIntro introduction absolute right-60 top-16">
          {{ introduction.template }}
        </div>
      </div>
      <div class="relative">
        <div
          class="relative cursor-pointer"
          @mouseover="setShowProject('draggable')" 
          @mouseleave="clearShowProject('draggable')"
          @click="handleLink('draggable')"
        >
          <Hexagon :color="projectCheckColor('draggable')" />
          <p class="w-20 absolute-center text-center text-shallow text-xl">
            客製商品拖曳
          </p>
        </div>
        <div ref="animationDraggable" class="animationIntro introduction absolute left-48 top-10">
          {{ introduction.draggable }}
        </div>
      </div>
      <div class="hidden lg:block w-48"></div>
    </section>  
    <section class="flex flex-col lg:flex-row">
      <div class="relative pb-10 lg:pb-0 lg:pr-10">
        <div
          class="relative cursor-pointer"
          @mouseover="setShowProject('lanzi')" 
          @mouseleave="clearShowProject('lanzi')"
          @click="handleLink('lanzi')"
        >
          <Hexagon :color="projectCheckColor('lanzi')" />
          <p class="w-20 absolute-center text-center text-shallow text-xl">
            酒吧切版網站
          </p>
        </div>
        <div ref="animationLanzi" class="animationIntro introduction absolute right-60 top-16">
          {{ introduction.lanzi }}
        </div>
      </div>
      <div class="relative">
        <div
          class="relative cursor-pointer"
          @mouseover="setShowProject('teachingOnline')" 
          @mouseleave="clearShowProject('teachingOnline')"
          @click="handleLink('teachingOnline')"
        >
          <Hexagon :color="projectCheckColor('teachingOnline')" />
          <p class="w-20 absolute-center text-center text-shallow text-xl">
            美語購課網站
          </p>
        </div>
        <div ref="animationTeachingOnline" class="animationIntro introduction absolute left-48 top-10">
          {{ introduction.teachingOnline }}
        </div>
      </div>
    </section>
    
  </div>
  
  
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import Hexagon from '@/components/svg/Hexagon.vue'
  const showProject = ref('');  // teachingOnline, draggable, template
  const animationTemplate = ref(null);
  const animationDraggable = ref(null);
  const animationTeachingOnline = ref(null);
  const animationLanzi = ref(null);
  const websiteLink = reactive({
    'teachingOnline': 'https://www.ynso.com.tw/online/',
    'draggable': 'https://chaoowen.github.io/draggable/',
    'template': 'https://chaoowen.github.io/vite-framework/',
    'lanzi': 'https://chaoowen.github.io/TFD102-07/index.html'
  });
  const introduction = reactive({
    'teachingOnline': '架構使用 nuxt2+tailwindcss，於工作期間與同事協作完成，主要負責師資頁面與會員功能',
    'draggable': '架構使用 vue2+html Drag and Drop API+tailwindcss，製作客製化商品拖曳的小功能',
    'template': '架構使用 vite+vue2+vuetify，運用 vuetify 的元件設計，建造一個後台模板系統',
    'lanzi': '第一個純切版與動畫的網站作品，使用 html/css/js/jQuery'
  });
  const setShowProject = (name) => {
    showProject.value = name;
    if (name === 'template') {
      animationTemplate.value.classList.add('animation');
    } else if (name === 'draggable') {
      animationDraggable.value.classList.add('animation');
    } else if (name === 'teachingOnline') {
      animationTeachingOnline.value.classList.add('animation');
    } else if (name === 'lanzi') {
      animationLanzi.value.classList.add('animation');
    }
  }
  const clearShowProject = (name) => {
    showProject.value = '';
    if (name === 'template') {
      animationTemplate.value.classList.remove('animation');
    } else if (name === 'draggable') {
      animationDraggable.value.classList.remove('animation');
    } else if (name === 'teachingOnline') {
      animationTeachingOnline.value.classList.remove('animation');
    } else if (name === 'lanzi') {
      animationLanzi.value.classList.remove('animation');
    }
  }
  const projectCheckColor = (name) => {
    return showProject.value === name ? '#777' : '#999';
  }
  const isProjectChecked = (name) => {
    return showProject.value === name;
  }
  const handleLink = (name) => {
    const url = websiteLink[name];
    window.open(url, '_blank');
  }
</script>

<style scoped>
.introduction {
  @apply hidden md:block w-60 text-dark;
}
.animationIntro {
  transform: translateY(0);   /* 初始位置 */
  transition: transform 1s ease;   /* 效果 */
}
.animation {
  transform: translateY(-20px);
}
</style>