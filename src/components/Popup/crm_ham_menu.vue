<template>
    <div class="relative w-[390px] h-[772px]">
      <div v-cloak v-if="active" class="absolute inset-0 bg-black opacity-50"></div>
  
      <Transition v-cloak v-if="active" name="slide-fade">
        <div class="absolute w-64 h-[772px] pb-[340px] bg-white flex-col justify-start items-start inline-flex">
          <div class="w-[256px] h-[72px]">
            <img src="https://via.placeholder.com/256x72" />
          </div>
          <div class="w-64 px-4 py-6 bg-white justify-start items-start gap-2 inline-flex">
            <div class="w-6 h-6">
              <img src="../../assets/branch.svg" />
            </div>
            <div class="text-black text-base font-normal font-noto">เกี่ยวกับเรา</div>
          </div>
          <div class="w-64 px-4 py-6 bg-white justify-start items-start gap-2 inline-flex">
            <div class="w-6 h-6">
              <img src="../../assets/chat.svg" />
            </div>
            <div class="text-black text-base font-normal font-noto">ติดต่อเรา</div>
          </div>
          <div class="w-64 px-4 py-6 bg-white justify-start items-start gap-2 inline-flex">
            <div class="w-6 h-6">
              <img src="../../assets/warning-black.svg" />
            </div>
            <div class="text-black text-base font-normal font-noto">FAQs</div>
          </div>
          <div class="w-64 px-4 py-6 bg-white justify-start items-start gap-2 inline-flex">
            <div class="w-6 h-6">
              <img src="../../assets/personal_setting.svg" />
            </div>
            <div class="text-black text-base font-normal font-noto">แก้ไขข้อมูลส่วนตัว</div>
          </div>
          <div class="w-64 px-4 py-6 bg-white justify-start items-start gap-2 inline-flex">
            <div class="w-6 h-6">
              <img src="../../assets/language_eng_th.svg" />
            </div>
            <div class="text-neutral-400 text-base font-normal font-noto">ไทย / English</div>
          </div>
        </div>
      </Transition>
    </div>
  </template>
  

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%); 
}
</style>

<script>
import { Transition } from 'vue';

export default {
  components: {
    Transition,
  },
  props: {
    active: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
