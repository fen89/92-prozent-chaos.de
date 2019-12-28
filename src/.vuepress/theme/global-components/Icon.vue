<template>
    <font-awesome-icon :icon="[prefix, icon]" :size="size" :class="[ primary, secondary ]" />
</template>

<script>
export default {
    props: {
        prefix: {
            type: String,
            default: 'fas',
        },
        icon: String,
        size: {
            type: String,
            default: 'lg',
        },
        primary: {
            type: String,
            default: 'text-gray-700',
        },
        secondary: {
            type: String,
            default: '',
        }
    },

    methods: {

    }
}
</script>