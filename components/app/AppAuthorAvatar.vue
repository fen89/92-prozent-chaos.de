<template>
  <div class="inline-block">
    <img
      class="inline-block h-6 w-6 rounded-full"
      :src="author.avatarUrl"
      :alt="author.name"
    />
    <span class="leading-none last:mr-0 text-light">
      {{ author.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
  // computed: {
  //   avatarUrl() {
  //     const mapping = new Map([['Tobi', '/img/authors/tobi.jpg']])
  //     return mapping.get(this.author.name)
  //   }
  // }
}
</script>
