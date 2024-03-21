<template>
  <div class="w-[390px] justify-start items-start inline-flex">

    <div v-for="(index, key) in numberOfButtons" :key="key">
      <div class="grow shrink basis-0 h-12 px-1  py-3 bg-blue-900 justify-center items-center flex"
           :class="{ 'bg-white': !active }">
        <div class="grow shrink basis-0 text-center text-white text-sm font-normal font-noto"
             :class="{ 'text-[#000000]': !active }">{{ text }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    text: String,
    numberOfButtons: {
      type: Number,
      default: 1, 
    },
  },
};
</script>
