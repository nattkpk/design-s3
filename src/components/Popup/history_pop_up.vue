<template>
  <div class="w-[358px] h-[296px] pb-4 bg-white rounded-lg flex-col justify-start items-center gap-4 inline-flex"
  :class="{  'h-[336px]': icon}">
    <div class="self-stretch p-2 bg-blue-900 rounded-tl-lg rounded-tr-lg justify-start items-start">
      <div class=" text-center text-white text-lg font-normal font-noto ">
        <div v-if="type === 'purchase'">รายละเอียดการซื้อสินค้า</div>
        <div v-if="type === 'coupon'">รายละเอียดการใช้คูปอง</div>
        <div v-if="type === 'redemption'">รายละเอียดการแลกคูปอง</div>
        <div v-if="type === 'top_up'">รายละเอียดการเติมเงิน</div>
      </div>
    </div>
    <div class="self-stretch h-56 px-4 flex-col justify-start items-start flex">
      <div class="self-stretch h-56 flex-col justify-start items-start gap-4 flex">

        <div v-if="type === 'purchase'" class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/baht.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">ยอดชำระ</div>
            <div class=" text-black text-sm/6 font-normal font-noto ">255.-</div>
          </div>
        </div>

        <div v-if="type === 'coupon' || type === 'redemption'"
          class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/coupon-pop.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">ประเภท</div>
            <div class=" text-black text-sm/6 font-normal font-noto ">คูปองส่วนลดมูลค่า 40.-</div>
          </div>
        </div>

        <div v-if="type === 'coupon' || type === 'redemption'"
          class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/coupon_code.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">รหัสคูปอง</div>
            <div class=" text-black text-sm/6 font-normal font-noto ">577BB147ABC </div>
          </div>
        </div>



        <div v-if="type === 'coupon' || type === 'redemption'"
          class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/coupon_code.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">วันหมดอายุ</div>
            <div class=" text-black text-sm/6 font-normal font-noto ">03/11/2026</div>
          </div>
        </div>

        <div v-if="type === 'coupon'" class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/doc.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">ใบเสร็จเลขที่</div>
            <div class=" text-black text-sm/6 font-normal font-noto ">123456789ABC</div>
          </div>
        </div>

        <div v-if="type === 'purchase' || type === 'redemption'"
          class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets//point.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-green-600 text-sm/6 font-normal font-noto ">คะแนนที่ได้</div>
            <div class=" text-green-600 text-sm/6 font-normal font-noto ">5 คะแนน</div>
          </div>
        </div>

        <div v-if="type === 'top_up'" class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/vector.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-green-600 text-sm/6 font-normal font-noto ">ยอดเติมเงิน</div>
            <div class=" text-green-600 text-sm/6 font-normal font-noto ">500.-</div>
          </div>
        </div>

        <div class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/branch.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">สาขา</div>
            <div class=" text-black text-sm/6 font-normal font-noto ">ชื่อสาขา</div>
          </div>
        </div>

        <div class="self-stretch justify-start items-center gap-2 inline-flex">
          <div v-if="icon" class="w-6 h-6">
            <img src="../../assets/clock.svg" />
          </div>
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">วันและเวลา</div>
            <div class=" text-black text-sm/6 font-normal font-noto ">03/11/2023, 15:00</div>
          </div>
        </div>

        <div v-if="icon" class="self-stretch justify-start items-center gap-2 inline-flex">
          <div class=" h-6 justify-start items-center flex">
            <div class="w-24 text-black text-sm/6 font-normal font-noto ">วันและเวลา</div>
            <div class=" text-right text-neutral-400 text-xs font-normal font-noto">03/11/2023, 15:00</div>
          </div>
        </div>



      </div>
    </div>
  </div>


  
</template>


<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (value) {
        return ['purchase', 'coupon', 'redemption', 'top_up'].indexOf(value) !== -1;
      },
    },
  }
}
</script>