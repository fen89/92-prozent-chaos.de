<template>
  <router-link
    class="article-card relative flex flex-col rounded-lg shadow-xl hover:shadow-2xl min-h-article-card border-0 z-article-card"
    :class="{ 'highlight-every-third': highlightEveryThird }"
    :to="article.path"
  >
    <figure>
      <div
        class="h-48 rounded-t-lg bg-no-repeat bg-cover bg-center"
        :style="backgroundImageStyle"
      ></div>
    </figure>
    <main class="flex flex-1 flex-col bg-white rounded-b-lg p-6">
      <header>
        <div
          class="uppercase tracking-wide text-gray-600 text-sm font-semibold"
          v-text="tags"
        ></div>
        <div class="font-sans text-2xl " v-text="article.title"></div>
      </header>
      <section
        class="font-content text-lg text-gray-900"
        v-text="article.frontmatter.description"
      ></section>
    </main>
  </router-link>
</template>

<script>
export default {
  props: {
    article: Object,
    highlightEveryThird: Boolean
  },

  computed: {
    tags() {
      return this.article.frontmatter.tags.join(", ");
    },

    backgroundImage() {
      return this.article.frontmatter.image || '/covers/header.jpeg';
    },

    backgroundImageStyle() {
      return {
        backgroundImage: `url('${this.$withBase(this.backgroundImage)}')`
      };
    }
  }
};
</script>

<style lang="stylus">
.article-card
    flex 1 1 300px
    transition all 0.5s ease
    &:hover
        transition all 0.4s ease
        transform translate3D(0, -1px, 0) scale(1.02)
@media md
    .article-card.highlight-every-third:nth-child(3n+1)
        flex 1 1 100%
        flex-direction row
        figure
            flex 1 1 auto
            > div
                border-bottom-left-radius theme('borderRadius.lg')
                border-top-right-radius 0
                width 100%
                height 100%
        main
            flex 0 1 357px
            padding 30px 40px
            border-bottom-left-radius 0
            border-top-right-radius theme('borderRadius.lg')
            h2
                font-size theme('textSizes.3xl')
            section
                font-size theme('textSizes.xl')
                line-height 1.55
</style>
