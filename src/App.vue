<script setup>
import Header from "@/components/Header.vue";
import PostCell from "@/components/PostCell/cell.vue";
import SearchBar from "@/components/searchInput.vue";
import CustomSelect from "@/components/CategorySelect.vue";
</script>

<template>
  <main class="main bg-repeat bg-center">
    <Header />
    <div class="min-h-screen h-full px-4 max-w-[1440px] mx-auto">
      <div class="h-20 mt-12 flex gap-3">
        <CustomSelect />
        <SearchBar />
      </div>
      <PostCell />
    </div>
  </main>
</template>

<style scoped>
.main {
  background-image: url("./assets/img/bg.svg");
}
</style>
