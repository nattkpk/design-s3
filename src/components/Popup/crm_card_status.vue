<template>
  <div class="relative w-[390px] h-[772px]">
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[358px] h-[328px] px-2 py-4 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
      <div class="self-stretch h-[216px] flex-col justify-start items-start gap-6 flex">
        <div class="self-stretch justify-center items-start gap-2 inline-flex">
          <div class="w-[142px] self-stretch justify-start items-start flex">
            <div class="w-[142px] h-24 relative rounded-[10px]">
              <img class="w-[142px] h-24 left-0 top-0 absolute" src="https://via.placeholder.com/142x96" />
              <div class="w-6 h-6 left-[188px] top-[6px] absolute"></div>
            </div>
          </div>
          <div class=" flex-col justify-start items-start inline-flex">
            <div class="self-stretch text-blue-900 text-sm font-bold font-noto">Level 1</div>
            <div class="self-stretch">
              <span class="text-blue-900 text-sm font-normal font-noto">สถานะ :
                ใช้งานอยู่<br />
              </span>
              <span class="text-black text-sm font-normal font-noto">ยอดคะแนนสะสมสำหรับใช้บัตรนี้<br />20
                คะแนน
              </span>
            </div>
          </div>
        </div>
        <div class="self-stretch justify-center items-start gap-2 inline-flex">
          <div class="w-[142px] self-stretch justify-start items-start flex">
            <div class="w-[142px] h-24 relative rounded-[10px]">
              <img class="w-[142px] h-24 left-0 top-0 absolute" src="https://via.placeholder.com/142x96" />
              <div class="w-6 h-6 left-[188px] top-[6px] absolute"></div>
            </div>
          </div>
          <div class=" flex-col justify-start items-start inline-flex">
            <div class="self-stretch text-blue-900 text-sm font-bold font-noto">Level 2</div>
            <div class="self-stretch text-neutral-400 text-sm font-normal font-noto">
              สถานะ : รอการเลื่อนขั้น<br />ยอดคะแนนสะสมสำหรับใช้บัตรนี้<br />51 คะแนน</div>
          </div>
        </div>
      </div>
      <div class="self-stretch h-16 pt-4 border-t border-blue-900 flex-col justify-start items-start flex">
        <div class="self-stretch text-center text-blue-900 text-lg font-normal font-noto">
          อีก 50 คะแนน คุณจะได้เลื่อนขั้น!</div>
        <div class="self-stretch text-center text-black text-base font-normal font-noto">
          ยอดคะแนนสะสม : 1 คะแนน</div>
      </div>
    </div>


  </div>
</template>

