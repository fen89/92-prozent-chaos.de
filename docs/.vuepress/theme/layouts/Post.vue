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
                            <h1 class="headline">{{ frontmatter.title }}</h1>
                        </v-card-title>
                          <v-card-text>
                            <span class="grey--text">{{ frontmatter.date }}</span>
                        </v-card-text>
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
  }
};
</script>

<style>
.headline {
  text-align: center;
}
</style>
