<template>
  <div class="h-screen flex jusity-between items-center">
    <!-- background title -->
    <p class="absolute right-0 top-10 text-9xl font-extrabold bg-word">EXPERIENCE</p>
    <p class="absolute right-0 bottom-10 text-9xl font-extrabold bg-word">工作經歷</p>
    <!-- content -->
    <div v-for="(item, index) in experience" :key="index" class="z-10 flex-1 flex flex-col items-center">
      <div class="flex items-center justify-center w-40 h-40 rounded-full text-white bg-middle">
        <div class="flex flex-col items-center">
          <span class="text-2xl pb-1">{{ item.phase[0] }}</span>
          <span>{{ item.phase[1] }}</span>  
        </div>
      </div>
      <div class="mt-12 mx-2">
        <p class="mb-4">{{ item.title }}</p>
        <div>
          <li v-for="(list, idx) in item.content" :key="idx" class="pb-1">
            {{ list }}
          </li>  
        </div>
      </div>
    </div>  
  </div>
  
</template>

<script setup>
  const experience = [
    { 
      phase: ['行銷工作', '時期'], 
      title: '秀泰影城行銷企劃', 
      content: [
        '異業合作洽談與活動規劃執行',
        '主導影城電影牆軟體使用教育訓練',
        '擔任官網與APP調整的工程師聯繫窗口',
        '會員分析與社群媒體經營'
      ] 
    },
    { 
      phase: ['前端工程師', '轉職'], 
      title: 'tibame就業養成班進修', 
      content: [
        '依據 UI/UX 設計 wireframe 與 mockup',
        '設計 user story 與類別圖規劃網站功能',
        '學習 html/css/js/jQuery 網頁切版與功能',
        '資料庫設計，PHP 與 MySQL 資料串接'
      ] 
    },
    { 
      phase: ['台灣知識庫', '前端工程師'], 
      title: '2021/10 - 20223/02', 
      content: [
        '協作2個 nuxt 約課、購課系統網站',
        '負責1個 nuxt 線上解題網站',
        '多項 html 切版 與 js/jQuery 功能撰寫',
        '自學 flutter 並完成2個 app 畫面切版與功能'
      ] 
    },
    { 
      phase: ['星宇航空', '前端工程師'], 
      title: '2023/03 - 2023/06', 
      content: [
        '學習了解 vue 內部模板 JX template',
        'clean code 程式碼優化',
        '依據使用者需求新增並調整網站功能'
      ] 
    }
  ]
</script>

<style scoped>
.bg-word {
  color: #D8D8D8;
}
</style>