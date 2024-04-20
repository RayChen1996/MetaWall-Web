<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <main class="main bg-repeat bg-center">
    <Header />
    <div class="min-h-screen px-4 max-w-[1440px] mx-auto">
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-image: url('./assets/img/bg.svg');
}

</style>
