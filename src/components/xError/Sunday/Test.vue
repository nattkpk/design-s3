<template>

    <div class=" w-[390px] h-[772px] mx-auto bg-white">
        <div class="relative">
            <Header />
            <div class="absolute top-0 pt-[71px] px-9 w-full z-20 flex flex-col justify-center items-center">
                <div class="bg-slate-100">
                    <Card />
                </div>
                <div class="mt-[24px] px-4">
                    <div class="text-lg/6 text-[#274384]">เงื่อนไขการใช้คูปอง</div>

                    <ul class="list-disc mt-[8px] text-4/5 ml-[24px] ">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                            velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                        </li>
                    </ul>
                </div>
                <div class="mt-26 px-4 w-full flex justify-center">
                    <div class=" bottom-0">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import Header from '../../Header/detail_Bar.vue';
import Card from '../../Cards/get_coupon.vue';
import Button from '../../Buttons/Button.vue';

</script>

<script>

</script>