<template>
  <div>
    <div class="container lg:max-w-lg xl:max-w-xl mb-16 mb-16">
      <div class="flex flex-wrap -mx-5" v-if="hasArticles">
        <ArticleCard
          v-for="article in $featuredArticles"
          :key="article.key"
          :article="article"
          class="mx-5 mb-6 sm:mb-10"
          highlight-every-third
        />
      </div>
      <div v-else class="flex-grow-0">
       Empty in here! Come back later...
      </div>
    </div>
    <div class="container" v-if="hasMoreArticles">
        <h2>More Articles</h2>
    </div>
    <ArticleList class="mb-12" :articles="$otherArticles" />
  </div>
</template>

<script>
import ArticleCard from "@theme/components/ArticleCard";
import ArticleList from '@theme/components/ArticleList';

export default {
  components: { ArticleCard, ArticleList },

  computed: {
    hasArticles () {
      return this.$articles.length > 0;
    },
    hasMoreArticles () {
      return this.$otherArticles.length > 0;
    }
  }
};
</script>
