<template>
    <i v-if="isAngular" class="fab fa-angular fa-fw fa-2x" color="red"></i>
    <i v-else-if="isVue" class="fab fa-vuejs fa-fw fa-2x" color="teal"></i>
    <i v-else-if="isCode" class="fa fa-code fa-fw fa-2x" color="gray"></i>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            default: ''
        }
    },
    computed: {
        isAngular() { return this.category.toLowerCase() === 'angular' },
        isVue() { return this.category.toLowerCase() === 'vue' },
        isCode() { return this.category.toLowerCase() === 'code' },
    }
}
</script>
