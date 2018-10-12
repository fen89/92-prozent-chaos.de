<template>
    <i v-if="isAngular" class="fab fa-angular fa-fw fa-2x" color="red"></i>
    <i v-else-if="isVue" class="fab fa-vuejs fa-fw fa-2x" color="teal"></i>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            default: null
        }
    },
    computed: {
        isAngular() { return this.category.toLowerCase() === 'angular' },
        isVue() { return this.category.toLowerCase() === 'vue' }
    }
}
</script>
