<script setup>
import Avatar from "@/components/Avatar.vue";
</script>

<template>
  <div class="rounded-lg mt-4 shadow-md h-full p-5 bg-white border-2">
    <div class="flex gap-4 items-center">
      <Avatar />
      <div class="flex flex-col">
        <label for="" class="underline font-bold text-[#03438D]"
          >邊緣小杰</label
        >
        <label class="text-[#9B9893]">2022/1/10 12:00</label>
      </div>
    </div>
    <p class="my-4">
      外面看起來就超冷.... <br />
      我決定回被窩繼續睡.....
    </p>

    <img
      src="@/assets/img/image.png"
      alt="背景"
      class="w-full object-cover h-full"
    />
  </div>
</template>
