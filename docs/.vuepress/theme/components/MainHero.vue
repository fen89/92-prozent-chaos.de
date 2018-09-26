<template>
    <section class="hero main-hero">
        <v-parallax src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="assets/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
    </section>
</template>

<script>
export default {
  name: 'main-hero',

  mounted() {
    // TODO: remove debug trace
    console.log(this.$route);
  }
};
</script>
