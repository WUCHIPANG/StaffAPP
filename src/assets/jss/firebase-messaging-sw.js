/** Again import google libraries */
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js')

/** Your web app's Firebase configuration
 * Copy from Login
 *      Firebase Console -> Select Projects From Top Naviagation
 *      -> Left Side bar -> Project Overview -> Project Settings
 *      -> General -> Scroll Down and Choose CDN for all the details
 */
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

// Retrieve an instance of Firebase Data Messaging so that it can handle background messages.
const messaging = firebase.messaging()

/** THIS IS THE MAIN WHICH LISTENS IN BACKGROUND */
messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = 'BACKGROUND MESSAGE TITLE'
  const notificationOptions = {
    body: 'Data Message body',
    icon: 'https://c.disquscdn.com/uploads/users/34896/2802/avatar92.jpg',
    image: 'https://c.disquscdn.com/uploads/users/34896/2802/avatar92.jpg',
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})
