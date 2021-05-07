importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

var firebaseConfig = {
  apiKey: 'AIzaSyCSkb2PtrcULZdnFxSoJNLImCWiAmODftw',
  authDomain: 'dyna-cloud.firebaseapp.com',
  projectId: 'dyna-cloud',
  storageBucket: 'dyna-cloud.appspot.com',
  messagingSenderId: '752582535911',
  appId: '1:752582535911:web:a1a064b13ae5cda3d69042',
  measurementId: 'G-HY99D25VGV',
}

const app = firebase.initializeApp(firebaseConfig)
app
  .messaging()
  .getToken({
    vapidKey:
      'BFAWhU1AnnjtL2WHMzsay0zhi7XLLFMoOhxpY4_tmtOt7Ze_KwVwasd2CAa6S5FKUYaCKtif58Ft4-eiBAAUEok',
  })
