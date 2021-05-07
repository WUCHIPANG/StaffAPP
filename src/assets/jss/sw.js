importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
)
importScripts('https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.7.0/firebase-messaging.js')

workbox.clientsClaim()
workbox.skipWaiting()

workbox.precaching.precacheAndRoute([
  // 要快取的檔案
])

// firebase config
var config = {
  apiKey: 'AIzaSyCSkb2PtrcULZdnFxSoJNLImCWiAmODftw',
  authDomain: 'dyna-cloud.firebaseapp.com',
  projectId: 'dyna-cloud',
  storageBucket: 'dyna-cloud.appspot.com',
  messagingSenderId: '752582535911',
  appId: '1:752582535911:web:a1a064b13ae5cda3d69042',
  measurementId: 'G-HY99D25VGV',
}
firebase.initializeApp(config)

var messaging = firebase.messaging()
