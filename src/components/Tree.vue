<template>
  <div>
    <canvas id="canvastree"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import canvasTree from '@/plugins/canvas.js'
onMounted(() => {
  canvasTree.doCanvasTree();
})
</script>

<style>
#canvastree {
  /* position: relative; 
  margin-left: auto;
  margin-right: auto; */
  width: 600px;
  height: 300px;
  border-bottom: 1px solid black;
}
</style>