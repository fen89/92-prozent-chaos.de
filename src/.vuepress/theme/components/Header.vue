<template>
  <div>
    <Navbar />
    <div class="container">
      <div v-text="title"></div>
      <div v-text="subtitle"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  components: { Navbar },

  computed: {
    title() {
      return this.$page.title;
    },
    subtitle() {
      return this.$page.frontmatter.subtitle;
    }
  }
};
</script>
