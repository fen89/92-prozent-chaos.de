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
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.nuxt-content {
  font-family: Source Sans Pro, HelveticaNeue-Light, Helvetica Neue Light,
    Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
  @apply p-5;

  h1,
  h2,
  h3,
  h4,
  h5 {
    @apply mt-10;
  }
  h1 {
    font-weight: bold;
    font-size: 30px;
  }
  h2 {
    font-weight: bold;
    font-size: 28px;
  }
  h3 {
    font-weight: bold;
    font-size: 22px;
  }
  p {
    @apply my-8;
    line-height: 32px;
    font-size: 21px;

    code {
      font-size: 75%;
      @apply p-1 text-gray-800 bg-gray-100;
    }

    a {
      @apply underline;
    }
  }

  pre {
    background-color: #2f495e;
    @apply rounded;
  }
}
</style>
