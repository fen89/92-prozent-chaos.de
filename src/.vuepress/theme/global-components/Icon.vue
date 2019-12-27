<template>
    <font-awesome-icon :icon="icon" :class="[ primary, secondary ]" />
</template>

<script>
export default {
    props: {
        icon: String,
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