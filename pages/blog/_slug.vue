<template>
  <div class="container mx-auto px-5">
    <article>
      <h1 class="text-3xl font-medium text-center text-teal-500 title-font mb-2">{{ post.title }}</h1>
      <p class="mt-1 text-gray-500 text-md text-center">
        <span class="uppercase">{{ post.createdAt | date('DD MMM YYYY') }}</span>
        <!-- -->·<!-- -->
        <span>{{ post.readingTime }}</span>
      </p>
      <nuxt-content :document="post" />

      <prev-next :prev="previousPost" :next="nextPost" />
    </article>
  </div>
</template>

<script>
import PrevNext from '~/components/PrevNext'

export default {
  name: 'PostPage',

  components: { PrevNext },

  async fetch() {
    const slug = this.$route.params.slug

    try {
      this.post = await this.$content(`posts/${slug}`)
        .where({ draft: false })
        .fetch()

      const [next, prev] = await this.$content(`posts`)
        // .only(['title', 'path'])
        .sortBy('createdAt')
        .where({ draft: false })
        .surround(this.$route.params.slug)
        .fetch()

      this.previousPost = prev
      this.nextPost = next
    } catch (error) {
      this.$nuxt.error({ statusCode: 404, message: 'post not found ;/' })
    }
  },

  data: () => ({
    post: {},
    previousPost: null,
    nextPost: null
  }),

  head() {
    return {
      title: this.title,
      meta: [
        { name: 'author', content: 'Tobi' },
        {
          name: 'description',
          property: 'og:description',
          content: this.description,
          hid: 'description'
        },
        { name: 'og:title', content: this.title },
        // { name: 'og:image', content: this.ogImage },
        { name: 'twitter:description', content: this.description }
        // { name: 'twitter:image', content: this.ogImage }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
