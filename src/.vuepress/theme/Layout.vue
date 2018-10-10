<template>
    <div class="theme-container" :class="pageClasses">
        <v-app light>
            <TheHeader />
            <v-content>
                <TheMain :layout="$layout" />
                <TheFooter :class="$layout" />
            </v-content>
        </v-app>
    </div>
</template>

<script>
import nprogress from "nprogress";

import Home from "./layouts/Home";
import Post from "./layouts/Post";
import Page from "./layouts/Page";
import TheMain from "./components/TheMain";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default {
  name: "layout",
  components: {
    TheHeader,
    TheMain,
    TheFooter
  },

  data() {
    return {
      isSidebarOpen: false
    };
  },

  computed: {
    $layout() {
        // console.log('regularPath', this.$page.regularPath, 'path', this.$page.path);
      if (this.$page.path) {
        // return this.$page.frontmatter.layout || 'Home'; // code not working
        const path = this.$page.regularPath;
        if (path === '/') {
            return 'Home';
        } else if (new RegExp("^/posts/$").test(path)) {
            return 'Posts';
        } else if (new RegExp("^/posts/").test(path)) {
            return 'Post';
        } else {
            return 'Page';
        }
      }
      return '404';
    },
    layout() {
      const { path } = this.$page;

      if (path === "/") {
        return "home";
      } else if (new RegExp("^/posts/$").test(path)) {
        return "blog";
      } else {
        return "page";
      }
    },

    isHeroVisible() {
      const { path } = this.$page;
      if (path === "/") {
        return true;
      }

      return false;
    },

    pageClasses() {
      return `${this.layout}-page`;
    }
  },

  mounted() {
    // nprogress bar config
    nprogress.configure({ showSpinner: true });

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path) {
        nprogress.start();
      }

      next();
    });

    this.$router.afterEach(() => {
      nprogress.done();
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    }
  }
};
</script>

<style src="./styles/theme.styl" lang="stylus"></style>