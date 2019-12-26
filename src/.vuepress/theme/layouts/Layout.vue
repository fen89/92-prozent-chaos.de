<template>
  <div class="theme-container">
    <Header/>
    <Component :is="layout"/>
    <Footer/>
  </div>
</template>

<script>
import { isArticle } from '@theme/utils';
import Header from '@theme/components/Header';
import Footer from '@theme/components/Footer';

import HomeLayout from './HomeLayout';
import ArticleLayout from './ArticleLayout';
import BaseLayout from './BaseLayout';

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