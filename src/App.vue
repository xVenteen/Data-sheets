<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import Home from "./view/Home.vue";
import Particles from "./components/particles/index.vue";  
</script>

<template>
  <div class="bgc">
    <Particles></Particles>
  </div>
  <Home></Home>


</template>

<style>
/* 去掉页面滚轮 */
body::-webkit-scrollbar {
  display: none;
}

/* 本项目全局使用怪异和模型 */
:root {
  box-sizing: border-box
}

*,
::before::after {
  box-sizing: inherit;
}

.bgc {
  z-index: -1;
  position: absolute;
  /* mix-blend-mode: color-dodge; */
}
</style>
