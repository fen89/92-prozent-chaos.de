<template>
  <div class="theme-container">
    <Header />
    <transition appear name="component-fade" mode="out-in">
      <Component :is="layout" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import { isArticle } from "@theme/utils";
import Header from "@theme/components/Header";
import Footer from "@theme/components/Footer";

import HomeLayout from "@theme/layouts//HomeLayout";
import ArticleLayout from "@theme/layouts/ArticleLayout";
import BaseLayout from "@theme/layouts/BaseLayout";

export default {
  components: { Header, Footer, HomeLayout, ArticleLayout, BaseLayout },

  computed: {
    layout() {
      if (this.$page.path === "/") {
        return HomeLayout;
      }
      if (isArticle(this.$page)) {
        return ArticleLayout;
      }
      return BaseLayout;
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>

<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
