<template>
  <div class="w-[167px] h-24 pl-2 rounded-lg shadow justify-start items-center inline-flex overflow-hidden"
    :class="{ 'bg-white': !active, 'bg-blue-900': active }" @click.prevent="onActive">
    <div class="grow shrink basis-0 text-lg/6 font-semibold font-noto "
      :class="{ 'text-blue-900': !active, 'text-white': active }">
      {{ myCoupons ? 'คูปองของฉัน' : 'สิทธิพิเศษ' }}
    </div>
    <div class="w-14 h-24 relative rounded-br-[10px]">
      <div class="w-24 h-24 left-[-6px] top-0 absolute">
        <img v-if="active" :src=' myCoupons ? couponw : giftw' alt="Active" />
        <img v-else :src="myCoupons ? coupon : gift" alt="Inactive" />
      </div>
    </div>
  </div>
</template>

<script setup>

import couponw from '../../assets/coupon-w.svg'
import coupon from '../../assets/coupon.svg'
import giftw from '../../assets/gift-w.svg'
import gift from '../../assets/gift.svg'

</script>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    myCoupons: {
      type: Boolean,
      default: true,
    },
  },
 
}
</script>