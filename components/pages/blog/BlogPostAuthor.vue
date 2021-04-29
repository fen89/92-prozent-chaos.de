<template>
  <a
    v-if="author.link"
    :href="author.link"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"
  >
    <AppAuthorAvatar :author="author" />
  </a>
  <span
    v-else
    class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"
  >
    <AppAuthorAvatar :author="author" />
  </span>
</template>

<script>
import AppAuthorAvatar from '~/components/app/AppAuthorAvatar'

export default {
  name: 'BlogPostAuthor',
  components: { AppAuthorAvatar },
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
