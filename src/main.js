import Vue from 'vue'
import App from './App'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faBars, faBriefcase, faBullhorn, faMagnifyingGlass, faChevronDown, faChartSimple, faPalette, faGear, faWallet, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter, faInstagram, faGooglePlus, faYoutube, faPinterest, faSkype, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faBars,faMagnifyingGlass, faBullhorn, faBriefcase, faUser, faBookmark, faFacebook, faChevronDown, faChevronLeft, faChevronRight, faTwitter, faInstagram, faGooglePlus, faYoutube, faChartSimple, faPalette, faGear, faWallet, faFaceSmileBeam, faPinterest, faSkype,faDribbble, faLinkedinIn )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
