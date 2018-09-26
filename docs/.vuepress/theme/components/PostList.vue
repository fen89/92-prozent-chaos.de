<template>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="post in posts"
              v-bind="{ [`xs12 md6 lg4`]: true }"
              :key="post.title"
            >
            <PostPreview :post="post"/>
            </v-flex>
          </v-layout>
        </v-container>
</template>

<script>
import PostPreview from './PostPreview.vue'

export default {
    name: 'post-list',
    components: {
        PostPreview
    },

    computed: {
        posts() {
            return this.$site.pages
                .filter(page => page.path.startsWith('/blog/'))
                .filter(page => !page.frontmatter.blog);
        }
    }
}
</script>
