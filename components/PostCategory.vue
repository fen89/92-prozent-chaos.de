<template>
  <span class="text-red-500">{{ category }}</span>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },

  computed: {
    classNames() {
      return [

      ]
    }
  }
}
</script>
