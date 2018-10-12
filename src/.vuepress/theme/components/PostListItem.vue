<template>
  <v-card class="my-2 post-preview" hover :to="post.path">
    <v-img class="white--text" :src="$withBase(postFeaturedImage)" aspect-ratio="2.75">
    </v-img>
    <v-card-title primary-title>
      <CategoryIcon :category="post.category" class="category-icon"/>
      <div>
        <h3 class="headline mb-0" style="display: inline-block;">
          {{ post.title }}
        </h3>
        <div>{{ postDescription }}</div>
      </div>
    </v-card-title>
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
    aspectRatio() {
      return featured ? "2.75" : "10";
    },
    postFeaturedImageHeight() {
      return this.featured ? "50vh" : "300px";
    },
    postFeaturedImage() {
      return (
        this.frontmatter.image || "https://picsum.photos/g/600/400/?random"
      );
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

      return new Date(date).toLocaleDateString("de-de", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }
};
</script>
<style scoped>
.card-actions {
  flex: 1 0 auto;
}
.category-icon {
  margin-right: 15px;
}
</style>

