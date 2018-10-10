// bugfix for prod build, see https://github.com/vuejs/vuepress/issues/451
import Vuetify from "../../node_modules/vuetify";
import format from 'date-fns/format'
import fontawesome from '@fortawesome/fontawesome'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/fontawesome-free-brands'

const dataMixin = {
  computed: {
    $posts() {
      const pages = this.$site.pages;
      const pageFilter = p => {
        if (new RegExp("^/posts/$").test(p.regularPath)) {
          return false;
        }
        if (new RegExp("^/posts/").test(p.regularPath)) {
          return true;
        }
        // return p.regularPath.startsWith('/posts/')
      }; 
      const pageSort = (p1, p2) => p1.frontmatter.date < p2.frontmatter.date;
      const pageMap = p => {
        p.createdAt = format(p.frontmatter.date, 'DD.MM.YYYY');
        p.updatedAt = p.lastUpdated ? format(p.lastUpdated, 'DD.MM.YYYY') : null;
        p.tags = p.frontmatter.tags || [];
        p.category = p.frontmatter.category || null;
        return p;
      };
      const posts = pages.filter(pageFilter).sort(pageSort).map(pageMap);
      return posts;
    },

    $categories() {
      let categories = new Set();
      for (const post of this.$posts) {
        if (post.category) {
          categories.add(post.category);
        }
      }
      return Array.from(categories);
    },

    $tags() {
      let tags = [];
      for (const post of this.$posts) {
        tags = tags.concat(post.tags);
      }
      return Array.from(new Set(tags));
    },
  },
};

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.mixin(dataMixin);

  Vue.use(Vuetify);

  fontawesome.library.add(faTwitter, faFacebook, faLinkedin, faInstagram);
};
