<template>
  <div
    class="flex flex-col text-gray-700 font-semibold bg-gray-400 border-t border-b border-gray-700 px-4 py-2 overflow-hidden"
  >
    <div class="flex flex-no-shrink items-center mb-2">
      <Icon
        icon="calendar"
        class="w-5 flex-no-shrink"
        primary="text-gray"
        secondary="text-gray-900"
      />
      <div
        class="ml-2 flex-no-shrink"
        v-text="date.toLocaleDateString('de-DE')"
      ></div>
    </div>
    <div class="flex flex-no-shrink items-center">
      <Icon
        icon="tag"
        class="w-5 h-5 flex-no-shrink"
        primary="text-grey"
        secondary="text-grey-lightest"
      ></Icon>
      <div
        class="ml-2 flex-no-shrink"
        v-for="tag in tags"
        v-text="`${tag}`"
      ></div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  components: { Icon },

  computed: {
    date() {
      return new Date(this.$page.frontmatter.date);
    },
    tags() {
      return this.$page.frontmatter.tags;
    }
  }
};
</script>
