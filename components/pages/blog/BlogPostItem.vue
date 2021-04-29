<template>
  <article>
    <header class="flex items-left justify-between flex-col mt-12">
      <div class="flex flex-1 flex-col mb-8">
        <h1 class="text-4xl font-semibold mb-4 leading-tight text-light">
          {{ post.title }}
        </h1>
        <div class="text-sm flex justify-between flex-col sm:flex-row">
          <div>
            <BlogPostAuthor
              v-for="(author, index) in post.authors"
              :key="index"
              :author="author"
            />
          </div>
          <div class="mt-1 text-light">
            {{ post.createdAt | date('DD MMM YYYY') }}
            <span class="text-xs mx-1">&bullet;</span>
            {{ post.readingTime }}
          </div>
        </div>
        <div v-if="hasTags" class="my-2 border-gray-400">
          <div class="flex flex-row flex-wrap justify-end mb-2 text-light">
            <span
              v-for="(tag, id) in post.tags"
              :key="id"
              class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border-dark border-light-border"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </header>
    <div class="mt-12">
      <NuxtContent :document="post" />
    </div>
  </article>
</template>

<script>
import BlogPostAuthor from './BlogPostAuthor'

export default {
  components: {
    BlogPostAuthor
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    hasTags() {
      return Boolean(this.post.tags)
    }
  }
}
</script>
