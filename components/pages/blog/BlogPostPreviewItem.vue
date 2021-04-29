<template>
  <div
    class="p-2 transition-colors duration-300  ease-linear hover:bg-gray-200 rounded hover:cursor-pointer"
  >
    <NuxtLink
      class="mb-2 hover:text-primary"
      :to="{ name: 'blog-slug', params: { slug: post.slug } }"
    >
      <h2
        class="mb-4 inline-block leading-tight text-light font-semibold text-2xl md:text-3xl"
      >
        {{ post.title }}
      </h2>

      <div class="mb-4">
        <p class="truncate-multiline-3 text-light">
          {{ post.description }}
        </p>
      </div>

      <div class="flex flex-row flex-wrap justify-start mb-2 text-light">
        <span
          v-for="(tag, id) in post.tags"
          :key="id"
          class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border-dark border-light-border"
        >
          {{ tag }}
        </span>
      </div>

      <div class="flex w-full justify-between text-sm">
        <div class="mb-4 lg:mb-0 flex items-center">
          <span
            v-for="(author, index) in post.authors"
            :key="index"
            class="flex items-center mr-4"
          >
            <AppAuthorAvatar :author="author" />
          </span>
        </div>
        <span class="text-light text-sm">
          {{ post.createdAt | date('DD. MMM YYYY') }}
        </span>
        <span class="text-light text-sm">
          {{ post.readingTime }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import AppAuthorAvatar from '~/components/app/AppAuthorAvatar'

export default {
  components: { AppAuthorAvatar },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
