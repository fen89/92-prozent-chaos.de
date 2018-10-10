<template>
<v-card class="my-2 post-preview" hover :to="post.path">
  <v-img
    class="white--text"
    :src="$withBase(postFeaturedImage)"
    aspect-ratio="2.75"
  >
  </v-img>
  <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">{{ post.title }}</h3>
      <div>{{ postDescription }}</div>
    </div>
  </v-card-title>
  <!-- <v-card-text>
    <span class="grey--text">{{ postDate }}</span>
  </v-card-text> -->
  <!-- <v-card-text>
    <p>{{ postDescription }}</p>
  </v-card-text> -->
   <!-- <v-card-actions class="card-actions">
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
      <v-btn :to="post.path" flat class="blue--text">Weiterlesen</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    aspectRatio () {
      return featured ? '2.75' : '10';
    },
    postFeaturedImageHeight() {
      return this.featured ? '50vh' : '300px';
    },
    postFeaturedImage() {
      return this.frontmatter.image || 'https://picsum.photos/g/600/400/?random';
    },
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

      return new Date(date).toLocaleDateString('de-de', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
};
</script>
<style>
.card-actions {
  flex: 1 0 auto;
}
</style>

