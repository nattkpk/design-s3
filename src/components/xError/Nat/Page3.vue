<template>
    <div class="w-[390px] h-[772px] flex flex-col">
        <div class="relative">
            <Header />
            <div class="flex absolute -bottom-12 w-full justify-evenly z-20">
                <Button />
                <Button />
            </div>

        </div>


        <div class=" flex-grow  w-full pt-[80px] overflow-hidden ">
            <div class="flex flex-col gap-4   items-center overflow-y-scroll  h-full w-full ">
                <Coupons />
                <Coupons />
                <Coupons />
                <Coupons />
                <Coupons />
                <Coupons />
                <Coupons />
                <Coupons />
                <Coupons />
            </div>

        </div>

        <div class="bottom-0">
            <Navbar />
        </div>
    </div>

</template>

<script setup>
import Header from '../../Header/privilege_Bar.vue';
import Button from '../../Cards/offer_button.vue'
import Coupons from '../../Cards/crm_offer_card_ticket.vue'
import Navbar from '../../Footer/navigation_bar.vue';
</script>

<script>

</script>