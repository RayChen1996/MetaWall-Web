<script setup>
import Avatar from '@/components/Avatar.vue'
const emits = defineEmits(['change-page']);
const changePage = (pageName) => {
  emits("change-page", pageName)
}
</script>

<template>
  <ul class="bg-white border-2 border-main-dark p-6 hidden md:block sticky top-16">
    <li class="py-2">
      <div @click="changePage('newCell')" class="button bg-main-blue hover:bg-main-yellow py-3 border-2 border-main-dark text-white hover:text-main-dark rounded-lg text-center font-bold cursor-pointer">張貼動態</div>
    </li>
    <li class="flex items-center py-2 cursor-pointer">
      <Avatar :size="50" class="mr-4"  />
      <span>邊緣小杰</span>
    </li>
    <li class="flex items-center py-2 cursor-pointer">
      <span class="rounded-full bg-gray-300 flex justify-center bg-main-blue-light items-center overflow-hidden text-sm w-[50px] h-[50px] border-2 border-main-dark mr-4">
        <i class="material-icons"> notifications_none </i>
      </span>
      <span>追蹤名單</span>
    </li>
    <li class="flex items-center py-2 cursor-pointer">
      <span class="rounded-full bg-gray-300 flex justify-center bg-main-blue-light items-center overflow-hidden text-sm w-[50px] h-[50px] border-2 border-main-dark mr-4">
        <i class="material-icons"> thumb_up_off_alt </i>
      </span>
      <span>我按讚的文章</span>
    </li>
  </ul>
  <div class="fixed bottom-0 left-0 p-2 w-full text-center">
    <div class="md:hidden w-[calc(100% - 16px)] inline-flex mx-auto bg-[#EFECE7] border-[3px] border-main-dark rounded-full py-2 px-5">
      <a href="/" class="rounded-full bg-gray-300 flex justify-center bg-white items-center overflow-hidden text-sm w-[50px] h-[50px] border-[3px] border-main-dark mx-3 cursor-pointer">
        <i class="material-icons"> house </i>
      </a>
      <span class="rounded-full bg-gray-300 flex justify-center bg-white items-center overflow-hidden text-sm w-[50px] h-[50px] border-[3px] border-main-dark mx-3 cursor-pointer">
        <i class="material-icons"> notifications_none </i>
      </span>
      <span class="rounded-full bg-gray-300 flex justify-center bg-white items-center overflow-hidden text-sm w-[50px] h-[50px] border-[3px] border-main-dark mx-3 cursor-pointer">
        <i class="material-icons"> thumb_up_off_alt </i>
      </span>
      <span @click="changePage('newCell')" class="rounded-full bg-gray-300 flex justify-center text-white hover:text-main-dark bg-main-blue hover:bg-main-yellow items-center overflow-hidden text-sm w-[50px] h-[50px] border-[3px] border-main-dark mx-3 cursor-pointer">
        <i class="material-icons"> add </i>
      </span>
    </div>
  </div>
</template>

<style scoped>
.button {
  box-shadow: -2px 2px 0px #000400;
}
</style>
