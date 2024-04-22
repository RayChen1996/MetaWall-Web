<script setup lang="ts"></script>

<template>
  <div class="wrapper w-[500px] text-center">
    <div
      class="bg-white p-4 border-solid border-2 border-black text-2xl font-medium"
    >
      張貼動態
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  z-index: 1;
}

.wrapper::after {
  display: block;
  content: "";
  background: #fff;
  border: 2px solid #000400;
  height: 72px;
  width: 100%;
  position: absolute;
  right: 5px;
  bottom: -5px;
  z-index: -1;
}
</style>
