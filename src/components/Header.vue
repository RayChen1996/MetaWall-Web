<script setup>
import Avatar from '@/components/Avatar.vue'
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white border-b-[3px] border-main-dark">
    <div class="flex justify-between max-w-[1440px] mx-auto p-2">
      <a href="/" class="header__logo text-3xl font-bold">MetaWall</a>
      <div class="flex items-center">
        <Avatar />
        <span class="member border-b-2 border-main-dark leading-4 ml-2 font-bold">Member</span>
      </div> 
    </div>
  </header>
</template>

<style scoped>
/* .header__logo {
  font-family: Paytone One, Regular;
}
.member {
  font-family: Azeret Mono, Bold;
} */
</style>
