<template>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <!-- <pre>{{ $site.pages }}</pre> -->
            <v-flex v-bind="{ [ 'xs12 md12 lg12' ]: true }">
              <PostListItem :featured="true" :post="latestPost"/>              
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex
              v-for="post in otherPosts"
              v-bind="{ [`xs12 md12 lg12`]: true }"
              :key="post.path"
            >
            <PostListItem :post="post" :featured="true"/>
            </v-flex>
          </v-layout>
        </v-container>
</template>

<script>
import PostListItem from './PostListItem.vue'

export default {
    name: 'post-list',
    components: {
        PostListItem
    },

    props: {
      posts: {
        type: Array,
        required: false,
        default: null
      },
    },

    computed: {
      listPosts() {
        return this.posts || this.$posts;
      },
      // posts() {
      //       return this.$site.pages
      //           .filter(page => page.regularPath.startsWith('/blog/'))
      //           .filter(page => !page.frontmatter.blog);
      //   },

        postsByDate() {
          const postsWithDate = this.listPosts.filter(post => post.frontmatter.date);
          const postsWithoutDate = this.listPosts.filter(post => !post.frontmatter.date);

          let mapped = postsWithDate
            .map((p, i) => ({ index: i, date: +new Date(p.frontmatter.date)}));

          mapped.sort((a, b) => {
            if (a.date > b.date) {
              return -1;
            }
            if (a.date < b.date) {
              return 1;
            }
            return 0;
          });
          return mapped.map(m => postsWithDate[m.index]).concat(postsWithoutDate);
        },

        latestPost() {
          return this.postsByDate.shift();
        },

        otherPosts() {
          return this.postsByDate.slice(0, this.listPosts.length);
        }
    },
    methods: {
      sortByDate(array) {
        const sorted = array.sort((a, b) => {
          a.date
        })
      }
    }
}
</script>
