<script setup>
import Avatar from '@/components/Avatar.vue'
import { defineProps, computed } from 'vue'
const props = defineProps({
  size: {
    type: Number,
    default: 45
  }
})
const sizeStyle = computed(() => {
  return { width: `${props.size}px`, height: `${props.size}px` }
})
</script>


<template>
  <div :style="sizeStyle" class="rounded-full bg-gray-300 flex justify-center items-center overflow-hidden text-sm w-8 h-8 border-2 border-main-dark">
    <img
      src="@/assets/img/user-avater.jpg"
      alt="邊緣小杰"
      class="w-full object-cover h-full"
    >
  </div>
</template>
