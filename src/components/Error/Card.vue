<template>
    <div class="w-[390px] h-[772px] flex flex-col">
        <div class="relative">
            <Header />
            <div class="flex absolute -bottom-12 w-full justify-evenly z-20">
                <Card />
                <Card />
            </div>

        </div>


        <div class=" flex-grow  w-full pt-[80px] overflow-hidden ">
            <div class="flex flex-col gap-4   items-center overflow-y-scroll  h-full w-full ">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>

        </div>

        <div class="bottom-0">
            <Navbar />
        </div>
    </div>

</template>

<script setup>
import Header from '.././Header/privilege.vue';
import Card from '.././Card/coupon.vue'
import Cards from '.././Card/mycoupon.vue'
import Navbar from '../Footer/Navbar.vue';
</script>

<script>

</script>