<template>
  <div class="md:flex min-h-screen">
    <div class="w-full md:w-1/2 bg-white flex items-center justify-center ">
      <div class="max-w-sm m-8">
        <div class="text-black text-5xl md:text-15xl font-black">404</div>
        <div class="w-16 h-1 bg-purple-light my-3 md:my-6"></div>
        <p
          class="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal" v-text="getMessage" />
        <router-link
          to="/"
          tag="button"
          class="bg-transparent hover:bg-teal-600 hover:text-white text-gray-900 font-bold uppercase tracking-wide py-3 px-6 border-2 border-grey-light hover:border-grey rounded-lg"
        >
          Take me Home
        </router-link>
      </div>
    </div>
    <div
      class="relative pb-full md:flex md:pb-0 md:min-h-screen w-full md:w-1/2"
      :style="backgroundImageStyle"
    ></div>
  </div>
</template>

<script>
import Header from "@theme/components/Header";
import Footer from "@theme/components/Footer";
import NotFound from "@theme/components/NotFound";

const messages = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];

export default {
  components: { Header, Footer, NotFound },

  computed: {
    getMessage () {
      return messages[Math.floor(Math.random() * messages.length)];
    },
    backgroundImage() {
      return "/covers/header.jpeg";
    },

    backgroundImageStyle() {
      return {
        backgroundImage: `url('${this.$withBase(this.backgroundImage)}')`
      };
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>
