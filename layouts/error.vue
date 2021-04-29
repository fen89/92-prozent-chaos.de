<template>
  <section
    class="container mx-auto flex flex-col items-center my-12 bg-grey-300 h-100"
  >
    <div
      class="flex flex-col w-full justify-center items-center pt-12 pb-24 px-6"
    >
      <h1 class="font-bold text-3xl my-4">
        <span v-if="error.message">{{ error.message }}</span>
        <span v-else>Die Seite, die du suchst, existiert nicht :(</span>
      </h1>
      <NuxtLink to="/">
        Zurück zur Startseite
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    error: { type: Object, required: true }
  }
}
</script>
