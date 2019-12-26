<template>
  <div>
    <!-- <Navbar /> -->
    <GradientBar class="h-3" />
    <div class="container my-16">
      <div
        class="text-black font-serif text-4xl md:text-5xl font-semibold leading-tight mr-12 sm:mr-20 lg:mr-0"
        v-text="title"
      ></div>
      <div
        class="text-black font-serif text-xl md:text-2xl font-medium"
        v-if="subtitle"
        v-text="subtitle"
      ></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import GradientBar from './GradientBar';

export default {
  components: { Navbar, GradientBar },

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
