<template>
  <div class="container mx-auto px-5">
    <h1 class="text-5xl font-bold my-8">Blog</h1>

    <p
      class="text-lg leading-relaxed pt-2 pb-2"
    >Read articles about Angular, Vue.js, JavaScript and Front-End Architecture in general.</p>

    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container pt-24 mx-auto">
        <div v-for="post in posts" :key="post.id" class="-my-8">
          <div class="py-8 flex content-center flex-wrap md:flex-no-wrap">
            <div class>
              <nuxt-link
                class="text-2xl font-medium text-teal-500 title-font mb-2"
                :to="{ name: 'blog-slug', params: { slug: post.slug }}"
              >
                <h2 class="text-3xl">{{ post.title }}</h2>
              </nuxt-link>
              <p class="mt-1 text-gray-500 text-md">
                <span class="uppercase">{{ post.createdAt | date('DD MMM YYYY') }}</span>
                <!-- -->·<!-- -->
                <span>{{ post.readingTime }}</span>
                <!-- <span v-if="post.category">
                  ·
                  <post-category :category="post.category" />
                </span> -->
              </p>
              <p class="leading-relaxed text-lg mt-1 mb-1">
                <!-- <span>{{ post.content | truncate }}</span> -->
                <span>{{  post.description }}</span>
              </p>
              <nuxt-link
                class="bg-light-surface text-teal-500 uppercase"
                :to="{ name: 'blog-slug', params: { slug: post.slug }}"
              >Read more</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PostCategory from '~/components/PostCategory'

export default {
  name: 'IndexPage',

  components: { PostCategory },

  async fetch() {
    this.posts = await this.$content('posts')
      // .only([
      //   'title',
      //   'img',
      //   'alt',
      //   'tags',
      //   'date',
      //   'description',
      //   'path',
      //   'slug',
      //   'createdAt',
      //   'updatedAt',
      //   'readingTime'
      // ])
      .where({ draft: false })
      .sortBy('date')
      .fetch()
  },

  data: () => ({
    prefix: 'blog',
    posts: []
  })
}
</script>

