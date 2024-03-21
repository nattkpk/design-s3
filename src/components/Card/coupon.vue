<template>
  <div v-if="myCoupons">
    <div :class="{ 'bg-white': !active, 'bg-blue-900': active }" @click="onActive"
      class="w-[167px] h-24 pl-2 rounded-lg shadow justify-start items-center inline-flex overflow-hidden">
      <div class="grow shrink basis-0 text-lg font-bold font-noto leading-normal"
        :class="{ 'text-blue-900': !active, 'text-white': active }">คูปองของฉัน</div>
      <div class="w-14 h-24 relative rounded-br-[10px]">
        <div class="w-24 h-24 left-[-6px] top-0 absolute">
          <img v-if="active" class="absolute" src="../../assets/gift-w.svg" />
          <img v-else class="absolute" src="../../assets/gift.svg" />
        </div>
      </div>
    </div>
  </div>

  <div v-if="!myCoupons">
    <div :class="{ 'bg-white': !active, 'bg-blue-900': active }" @click="onActive"
      class="w-[167px] h-24 pl-2 rounded-lg shadow justify-start items-center inline-flex overflow-hidden">
      <div class="grow shrink basis-0 text-lg font-bold font-noto leading-normal"
        :class="{ 'text-blue-900': !active, 'text-white': active }">สิทธิพิเศษ</div>
      <div class="w-14 h-24 relative rounded-br-[10px]">
        <div class="w-24 h-24 left-[-6px] top-0 absolute">
          <img v-if="active" class="absolute" src="../../assets/gift-w.svg" />
          <img v-else class="absolute" src="../../assets/gift.svg" />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
var active = ref(false);
var myCoupons = ref(false);
var privileges = ref(true);

const onActive = () => {
  active.value = !active.value;
}

defineProps({
  active: Boolean,
  myCoupons: Boolean
})

</script>
