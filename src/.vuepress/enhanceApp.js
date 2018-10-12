// bugfix for prod build, see https://github.com/vuejs/vuepress/issues/451
import Vuetify from "../../node_modules/vuetify";
import format from 'date-fns/format';
import fontawesome from '@fortawesome/fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/fontawesome-free-brands';
import CategoryIcon from './theme/components/ui/CategoryIcon';

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

    $postCategories() {
      let categories = [];
      for (const post of this.$posts) {
        if (post.category) {
          categories = categories.concat(post.category);
        }
      }
      return Array.from(new Set(categories));
    },

    $postTags() {
      let tags = [];
      for (const post of this.$posts) {
        tags = tags.concat(post.tags);
      }
      return Array.from(new Set(tags));
    },
  },
};

// @todo move to plugin, to gain access to markdown content, as this is buggy like this
const readingTime = {
  computed: {
    $readTime () {
        const article = this.$page;
        const averageWordsPerMinute = 248;
        const averageImageViewingTimeInMinutes = 1 / 6;
        const averageWordLengthInCharacters = 4.79;
    
        var el = window.document.createElement('template');
        el.innerHTML = article;
        const root = el.content;
        const children = el.content.querySelectorAll('*');
    
        const text = root.textContent;
        const textLength = text.replace(/\s/g, '').length;
    
        const numWords = textLength / averageWordLengthInCharacters; // Words are variable length. Remove that factor.
        let numImages = 0;
    
        for (let child of children) {
            if (child.tagName.toLowerCase() === 'img' || child.style.backgroundImage !== '') {
                numImages++;
            }
        }
    
        const readingTime = Number(numWords / averageWordsPerMinute + numImages * averageImageViewingTimeInMinutes).toFixed(2);
        return readingTime;
    },
    
    $readTimeInMinutes () {
        let readingTime = this.$readTime;
        return readingTime;
    }
  }
};

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.mixin(dataMixin);
  // Vue.mixin(readingTime);

  Vue.component('CategoryIcon', CategoryIcon);

  Vue.use(Vuetify);


  fontawesome.library.add(faTwitter, faFacebook, faLinkedin, faInstagram);
};
