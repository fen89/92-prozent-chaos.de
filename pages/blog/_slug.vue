<template>
  <div>
    <div class="container p-4 pb-8 mx-auto lg:max-w-4xl">
      <BlogPostItem :post="post" />
    </div>
  </div>
</template>

<script>
import BlogPostItem from '~/components/pages/blog/BlogPostItem'

export default {
  name: 'PostPage',

  components: { BlogPostItem },

  async fetch() {
    const slug = this.$route.params.slug

    try {
      this.post = await this.$content(`blog/${slug}`)
        .where({ draft: false })
        .fetch()

      const [next, prev] = await this.$content(`blog`)
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
