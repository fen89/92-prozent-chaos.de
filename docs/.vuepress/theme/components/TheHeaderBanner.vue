<template>
    <section class="hero main-hero slanted">
        <v-parallax :src="backgroundImage" height="600">
          <v-layout
            column
            align-center
            justify-center
          >
           <v-avatar
              size="200px"
            >
              <img :src="portraitImage" alt="Me, myself and I">
           </v-avatar>
            <h1 class="white--text p-2 display-1 text-xs-center">{{ heading }}</h1>
            <div class="subheading">{{ subheading }}</div>
          </v-layout>
        </v-parallax>
    </section>
</template>

<script>
export default {
  props: {
    heading: {
      default: '92 % chaos'
    },
    subheading: {
      default: 'just another dev blog'
    }
  },
  data() {
    return {
      portraitImage: 'tobi.jpg',
      backgroundImage: 'images/header.jpeg', // 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }
  },
  mounted() {
    // TODO: remove debug trace
    // console.log(this.$route);
  }
};
</script>

<style>



</style>
