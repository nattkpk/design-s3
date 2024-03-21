<template>
    <div class="w-[390px] h-[772px]  relative">
        <div class="">
            <Header />
        </div>

        <div class="flex justify-center pt-4">
            <div class="flex w-[171px] h-12">
                <img class="h-8 w-8 " src="../../assets/total_point.svg">
                <div class="pl-2" >
                    <p>คะแนนสะสม</p>
                    <p>1</p>
                </div>

            </div>

            <div class="flex w-[171px] h-12">
                <img class="h-8 w-8" src="../../assets/point.svg">
                <div class="pl-2" >
                    <p>คะแนนคงเหลือ</p>
                    <p>1</p>
                </div>
            </div>

        </div>

        <div class="flex justify-center mt-4">
            <Card />
        </div>

        <div class=" w-full flex justify-center pt-8 text-info" >
            <p>ดูรายละเอียดบัตรสมาชิก</p> <img src="../../assets/warning.svg">
        </div>
        <div class=" w-full flex justify-center pt-10">
            <p>กรุณาแจ้งเบอร์โทรหรือสแกน QR code เพื่อสะสมคะแนน</p>
        </div>



        <div class=" fixed bottom-0">
            <Navbar />
        </div>
    </div>

</template>

<script setup>
import Header from '.././Header/profile.vue';
import Card from '.././Card/member.vue';
import Navbar from '.././Footer/Navbar.vue';
</script>
