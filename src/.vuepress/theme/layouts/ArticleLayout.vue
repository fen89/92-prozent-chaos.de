<template>
  <div>
    <ArticleHeader />
    <div class="container mb-8">
      <ArticleMeta />
    </div>
    <Content class="content" />
    <div class="bg-gray-400 mt-16">
      <div class="container py-4" v-if="hasRelatedArticles">
        <h2>Related articles</h2>
        <!-- <div class="flex flex-wrap"> -->
        <transition-group appear name="list" tag="div" class="flex flex-wrap">
          <ArticleCard
            v-for="article in relatedArticles"
            :key="article.key"
            :article="article"
            class="mx-5 mb-8 -mx-5 list-item"
          />
        </transition-group>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { randomElements, excludePages } from "@theme/utils";
import ArticleHeader from "@theme/components/ArticleHeader";
import ArticleMeta from "@theme/components/ArticleMeta";
import ArticleCard from "@theme/components/ArticleCard";

export default {
  components: { ArticleHeader, ArticleMeta, ArticleCard },

  computed: {
    relatedArticles() {
      const tags = this.$page.frontmatter.tags || [];
      const relatedArticles = this.$articles.filter(article =>
        (article.frontmatter.tags || []).some(tag => tags.includes(tag))
      );

      return randomElements(excludePages(relatedArticles, [this.$page], 2));
    },

    hasRelatedArticles() {
      return this.relatedArticles.length > 0;
    }
  }
};
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>