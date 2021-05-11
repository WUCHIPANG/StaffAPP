import 'core-js/stable'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CoreuiVue from '@coreui/vue'
import {iconsSet as icons} from './assets/icons/icons.js'
import store from '@/sotre'
window.$ = window.jQuery = require('jquery')

import firebase from 'firebase'
// import firebase from 'firebase/app'
Vue.config.productionTip = false
Vue.config.performance = true
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)




const config = {
  apiKey: 'AIzaSyCSkb2PtrcULZdnFxSoJNLImCWiAmODftw',
  authDomain: 'dyna-cloud.firebaseapp.com',
  projectId: 'dyna-cloud',
  storageBucket: 'dyna-cloud.appspot.com',
  messagingSenderId: '752582535911',
  appId: '1:752582535911:web:a1a064b13ae5cda3d69042',
  measurementId: 'G-HY99D25VGV',
}

firebase.initializeApp(config)


Vue.prototype.$messaging = null
if (firebase.messaging.isSupported()) {
  // firebase.initializeApp(config)
  // Retrieve Firebase Messaging object, assign to Vue Object
  Vue.prototype.$messaging = firebase.messaging()
  // Add the public key generated from the Firebase console
  Vue.prototype.$messaging.usePublicVapidKey('BFAWhU1AnnjtL2WHMzsay0zhi7XLLFMoOhxpY4_tmtOt7Ze_KwVwasd2CAa6S5FKUYaCKtif58Ft4-eiBAAUEok')
}
// navigator.serviceWorker.getRegistrations().then(function (registrations) {
//   for (let registration of registrations) { registration.unregister() }
// })
// Change server-worker.js register path
navigator.serviceWorker.register('firebase-messaging-sw.js')
  .then((registration) => {
    Vue.prototype.$swRegistration = registration
    Vue.prototype.$messaging.useServiceWorker(registration)
  }).catch(err => {
    console.log(err)
  })




new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App,
  },
})
