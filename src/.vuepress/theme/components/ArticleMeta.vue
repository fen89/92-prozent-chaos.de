<template>
  <div
    class="flex flex-col sm:flex-row sm:items-center text-gray-700 font-semibold bg-gray-100 border-t border-b border-gray-400 px-4 py-2 overflow-hidden"
  >
    <div class="flex flex-no-shrink items-center mb-2 sm:mb-0 sm:mr-6">
      <Icon
        icon="calendar-alt"
        class="w-5 flex-no-shrink"
      />
      <div
        class="ml-2 flex-no-shrink"
        v-text="formattedDate"
      ></div>
    </div>
    <div class="flex flex-no-shrink items-center">
      <Icon
        icon="tag"
        class="w-5 h-5 flex-no-shrink"
      ></Icon>
      <div
        class="ml-2 flex-no-shrink"
        v-for="tag in tags"
        v-text="`${tag}`"
      ></div>
      <div class="ml-5 flex-no-shrink">
        <router-link to="/">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      return new Date(this.$page.frontmatter.date);
    },
    formattedDate() {
      return this.date.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },
    tags() {
      return this.$page.frontmatter.tags;
    }
  }
};
</script>
