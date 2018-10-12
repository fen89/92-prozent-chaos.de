<template>
    <v-app light>
        <v-container>
            <v-layout row wrap align-center>
                <v-flex>
                    <v-card class="my-1" height="100%">
                        <v-img
                            class="white--text"
                            height="50vh"
                            :src="$withBase(postFeaturedImage)"
                        >
                        </v-img>
                        <v-card-title primary-title>
                          <div>
                            <h1 class="mb-2">{{ frontmatter.title }}</h1>
                            <div class="title-meta grey--text">
                              <span class="title-category grey--text">
                                <CategoryIcon :category="frontmatter.category"/>
                              </span>
                              <span v-if="frontmatter.tags" class="title-tags grey--text">
                                Tagged in {{ frontmatter.tags | formatArray }}
                              </span>
                              <span class="title-bullet grey--text"></span>
                              <span class="grey--text">
                                {{ frontmatter.date | formatDate }}
                              </span>
                              <span class="title-bullet grey--text"></span>
                                3 min <i class="far fa-clock fa-fw"></i>
                            </div>
                          </div>
                          
                        </v-card-title>
                        <v-card-text>
                            <Content />
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import format from 'date-fns/format';
import de from 'date-fns/locale/de';

import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";
import PostListItem from "../components/PostListItem";

export default {
  components: {
    TheHeader,
    TheFooter,
    PostListItem
  },
  computed: {
    title() {
      return this.$page.title;
    },
    content() {
      return this.$page;
    },
    frontmatter() {
      return this.$page.frontmatter;
    },
    postFeaturedImage() {
      return (
        this.frontmatter.image || "https://picsum.photos/g/600/400/?random"
      );
    }
  },
  filters: {
    formatDate (value) {
      return format(value, 'dddd, DD.MM.YYYY', { locale: de});
    },
    formatArray (value) {
      return value.join(', ');
    },
  },
};
</script>

<style scoped>
.svg-inline--fa, .svg-inline--fab {
    vertical-align: middle;
}
.title-bullet::after {
  content: '\02022';
  margin: 0 10px;
}
</style>
