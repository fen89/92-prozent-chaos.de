<template>
<v-card class="my-2" hover :to="post.path">
  <v-img
    class="white--text"
    height="170px"
    src="https://picsum.photos/g/600/400/?random"
  >
   <!-- <v-container fill-height fluid>
    <v-layout>
      <v-flex xs12 align-end d-flex>
        <span class="headline">{{ post.title }}</span>
      </v-flex>
    </v-layout>
  </v-container> -->
  </v-img>
  <v-card-title>
    <span class="headline">{{ post.title }}</span>
  </v-card-title>
  <v-card-text>
    {{ postDescription }}
  </v-card-text>
   <v-card-actions>
      <v-btn icon class="red--text">
        <v-icon medium>fa-reddit</v-icon>
      </v-btn>
      <v-btn icon class="light-blue--text">
        <v-icon medium>fa-twitter</v-icon>
      </v-btn>
      <v-btn icon class="blue--text text--darken-4">
        <v-icon medium>fa-facebook</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :to="post.path" flat class="blue--text">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      required: true
    }
  },

  computed: {
    postDescription() {
      return this.frontmatter.description;
    },
    frontmatter() {
      return this.post.frontmatter;
    },
    postDate() {
      const {
        frontmatter: { date }
      } = this.post;

      return new Date(date).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
};
</script>
