// bugfix for prod build, see https://github.com/vuejs/vuepress/issues/451
import Vuetify from "../../node_modules/vuetify";

import fontawesome from '@fortawesome/fontawesome'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/fontawesome-free-brands'


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuetify);
  fontawesome.library.add(faTwitter, faFacebook, faLinkedin, faInstagram);
};
