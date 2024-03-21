<template>
  <p
    class="outline outline-1 rounded w-[358px] h-[40px] text-center pt-2 border-neutral text-neutral text-base "
     :class="{'w-[167px] h-[40px]': haft}">{{ text }}</p>
  <slot></slot>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    haft: {
      type: Boolean,
      default: false,
    },
  },
}

</script>