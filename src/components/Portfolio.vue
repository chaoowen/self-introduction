<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <!-- background title -->
    <div class="absolute left-0 top-10">
      <p class="text-9xl font-extrabold text-deep-shallow">WEBSITE</p>
      <p class="text-9xl font-extrabold text-deep-shallow">PORTFOLIO</p>
      <p class="text-9xl font-extrabold text-deep-shallow">......</p>
    </div>
    <div class="absolute right-0 bottom-10">
      <p class="text-9xl font-extrabold text-deep-shallow">作品集</p>
    </div>
    <!-- content -->
    <section class="flex">
      <div class="pr-10">
        <div
          class="relative cursor-pointer"
          @mouseover="setShowProject('template')" 
          @mouseleave="clearShowProject"
          @click="handleLink('template')"
        >
          <Hexagon :color="isProjectChecked('template')" />
          <p class="w-20 absolute-center text-center text-shallow text-xl">
            後台模板系統
          </p>
        </div>
        <div>content....</div>
      </div>
      <div>
        <div
          class="relative cursor-pointer"
          @mouseover="setShowProject('draggable')" 
          @mouseleave="clearShowProject"
          @click="handleLink('draggable')"
        >
          <Hexagon :color="isProjectChecked('draggable')" />
          <p class="w-20 absolute-center text-center text-shallow text-xl">
            客製商品拖曳
          </p>
        </div>
      </div>
    </section>  
    <div>
      <div
        class="relative cursor-pointer"
        @mouseover="setShowProject('teachingOnline')" 
        @mouseleave="clearShowProject"
        @click="handleLink('teachingOnline')"
      >
        <Hexagon :color="isProjectChecked('teachingOnline')" />
        <p class="w-20 absolute-center text-center text-shallow text-xl">
          美語購課網站
        </p>
      </div>
    </div>
  </div>
  
  
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import Hexagon from '@/components/svg/Hexagon.vue'
  const showProject = ref('');  // teachingOnline, draggable, template
  const websiteLink = reactive({
    'teachingOnline': 'https://www.ynso.com.tw/online/',
    'draggable': 'https://chaoowen.github.io/draggable/',
    'template': 'https://chaoowen.github.io/vite-framework/'
  });
  const setShowProject = (name) => {
    console.log('calll')
    showProject.value = name;
    console.log('showProject.value', showProject.value)
  }
  const clearShowProject = () => {
    showProject.value = '';
  }
  const isProjectChecked = (name) => {
    return showProject.value === name ? '#777' : '#999';
  }
  const handleLink = (name) => {
    const url = websiteLink[name];
    window.open(url, '_blank');
  }
</script>

<style>
.absolute-center {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
</style>