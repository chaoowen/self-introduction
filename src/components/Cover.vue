<template>
  <div class="relative h-screen flex items-center">
    <!-- background words -->
    <div>
      <p class="text-9xl font-extrabold text-shallow">FRONT</p>
      <p class="text-9xl font-extrabold text-shallow">END</p>
      <p class="text-9xl font-extrabold text-shallow">DEVELOPER</p>
    </div>
    <div class="mx-6">
      <div>
        <p class="text-5xl font-extrabold text-dark">Front</p>
        <p class="text-5xl font-extrabold text-dark">End</p>
        <p class="text-5xl font-extrabold text-dark">Developer</p>
      </div>
      <p class="w-60 my-12">{{ introduction }}</p>
      <div class="inline-block py-2 px-6 border border-middle rounded-full cursor-pointer" @click="handlePortfolio">
        <span class="text-middle">查看作品集</span>
      </div>
    </div>
    <!-- picture -->
    <div class="absolute bottom-6 right-6 w-60">
      <img src="./../assets/images/coverImage.jpeg" alt="">
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['directPortfolio']);
const introduction = '我是昭雯，一年半經驗的前端工程師，結合過去行銷工作的溝通特長，相信以人與需求為本的思考出發，能讓網站發揮更大的價值。';
const handlePortfolio = () => {
  emits('directPortfolio');
}
</script>
