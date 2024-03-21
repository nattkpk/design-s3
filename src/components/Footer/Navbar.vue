<template>
    <div class="w-[390px] shadow justify-start items-start inline-flex">
        <Button :active="activeButton === 1" page="profile" @click.prevent="selectSlide(1)"/>
        <Button :active="activeButton === 2" page="coupons" @click.prevent="selectSlide(2)"/>
        <Button :active="activeButton === 3" page="list" @click.prevent="selectSlide(3)" />
    </div>
</template>

<script setup>
import Button from "./Button.vue";
import { ref } from 'vue';

const activeButton = ref(1);

const selectSlide = (i) => {
    activeButton.value = i;
};
</script>
