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
                            <h3 class="headline mb-0">{{ frontmatter.title }}</h3>
                            <span class="grey--text">{{ frontmatter.date | formatDate }}</span>
                          </div>
                        </v-card-title>
                        <v-card-text>
                            <v-chip label color="red" text-color="white">{{ content.category }}</v-chip>
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
  },
};
</script>