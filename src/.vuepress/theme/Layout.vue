<template>
  <div class="theme-container">
    <Header/>
    <Component :is="layout"/>
    <Footer/>
  </div>
</template>

<script>
import { isArticle } from '@theme/utils';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeLayout from './layouts//HomeLayout';
import ArticleLayout from './layouts/ArticleLayout';
import BaseLayout from './layouts/BaseLayout';

export default {
  components: { Header, Footer, HomeLayout, ArticleLayout, BaseLayout },
  
  computed: {
    layout () {
      if (this.$page.path === '/') {
        return HomeLayout;
      }
      if (isArticle(this.$page)) {
        return ArticleLayout;
      }
      return BaseLayout;
    }

  }
}
</script>

<style lang="stylus">
  @import './styles/style.styl';
</style>