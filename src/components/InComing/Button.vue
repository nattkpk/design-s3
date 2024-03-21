<template>
  <div class="w-[390px] h-12 justify-start items-start inline-flex">
    <div class="grow shrink basis-0 h-12 px-1 py-3 bg-blue-900 justify-center items-center flex"
         :class="{ ' bg-white': !active }">
      <div class="grow shrink basis-0 text-center text-white text-sm font-normal font-noto"
           :class="{ 'text-[#000000]': !active }">การซื้อสินค้า</div>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: true,
    },
  },
}




</script>