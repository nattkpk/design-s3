<template>
  <button type="button" class="font-bold rounded text-base w-[358px] h-[40px] "
   :class="{
    'text-white bg-primary': !outlined,
    'outline outline-1 border-neutral-light  text-neutral-light': outlined
  }">
    <slot> ยืนยันการแลกคะแนน</slot>
  </button>
</template>

<script setup>
defineProps({
  outlined: Boolean
})
</script>