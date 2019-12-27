import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import articles from "./articles";

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.mixin(articles);

    // font awesome
    library.add(...[faCalendarAlt, faTag, faGithubSquare]);

    Vue.component('font-awesome-icon', FontAwesomeIcon);
  }