<template>
  <section class="container mx-auto flex flex-col items-center my-12 bg-grey-300 h-100">
    <div class="flex flex-col w-full justify-center items-center pt-12 pb-24 px-6">
      <h1 class="font-bold text-3xl my-4">
        <span v-if="error.message">{{ error.message }}</span>
        <span v-else>page does not exist ;/</span>
      </h1>
      <nuxt-link to="/">
        <app-button>back to home</app-button>
      </nuxt-link>
    </div>

    <!-- <div class="hero-body">
      <div class="container text-center">
        <h1 class="title is-size-1">
          <span v-if="error.message">{{ error.message }}</span>
          <span v-else>page does not exist ;/</span>
        </h1>
        <h2 class="subtitle mt-5">
          <nuxt-link to="/">
            <app-button>back to home</app-button>
          </nuxt-link>
        </h2>
      </div>
    </div> -->
  </section>
</template>
<script>
export default {
  props: {
    error: { type: Object, default: () => {} }
  }
}
</script>
