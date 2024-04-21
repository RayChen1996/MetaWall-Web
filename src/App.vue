<script setup>
import Header from "@/components/Header.vue";
import PostCell from "@/components/PostCell/cell.vue";
import SearchBar from "@/components/searchInput.vue";
import CustomSelect from "@/components/CategorySelect.vue";

import Aside from "@/components/Aside.vue";

import { ref } from "vue";
const page = ref("home");
const changePage = (pageName) => {
  page.value = pageName;
};
</script>

<template>
  <main class="main bg-repeat bg-center pt-14">
    <Header />
    <div class="min-h-screen px-4 max-w-[1440px] mx-auto flex py-12">
      <div class="flex-auto">
        <div class="flex items-center gap-3">
          <CustomSelect />
          <SearchBar />
        </div>
        <PostCell />
      </div>
      <aside class="w-[300px] ml-7 relative">
        <Aside @change-page="changePage" />
      </aside>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-image: url("./assets/img/bg.svg");
}
</style>
