<template>
    <component :is="tag" :field="link"
        class="font-medium tracking-wider cursor-pointer px-8 pt-5 pb-4 md:px-12 md:pt-6 md:pb-5 rounded-full text-white text-lg md:text-2xl font-display uppercase leading-none transition-shadow duration-200"
        :class="color === 'primary'
            ? 'bg-primary shadow-glow-primary hover:shadow-glow-primary-intense'
            : 'bg-secondary shadow-glow-secondary hover:shadow-glow-secondary-intense'
        ">
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            default: null,
        },
        color: {
            type: String,
            default: 'primary',
        },
    },
    computed: {
        tag() {
            return this.link ? 'prismic-link' : 'button'
        },
    },
}
</script>