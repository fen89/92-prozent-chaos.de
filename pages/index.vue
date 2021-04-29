<template>
  <div>
    <div class="text-center p-4 sm:p-0">
      <h2 class="xl:text-lg font-medium leading-relaxed mb-16">
        {{ heading }}
      </h2>
    </div>
    <section>
      <BlogPostPreviewItem
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      />
    </section>
  </div>
</template>

<script>
import BlogPostPreviewItem from '~/components/pages/blog/BlogPostPreviewItem'

export default {
  name: 'IndexPage',

  components: { BlogPostPreviewItem },

  async fetch() {
    this.posts = await this.$content('blog')
      .where({ draft: false })
      .sortBy('date')
      .fetch()
  },

  data: () => ({
    heading: 'Artikel über Angular, Vue.js, JavaScript & .NET',
    prefix: 'blog',
    posts: []
  })
}
</script>

