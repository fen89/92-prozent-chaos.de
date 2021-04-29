<template>
  <div class="w-full">
    <TheHeader />
    <main class="container px-4 mx-auto max-w-screen-lg">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader'

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      title: '92 % chaos'
    }
  }
}
</script>
