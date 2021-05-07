/** Your web app's Firebase configuration
 * Copy from Login
 *      Firebase Console -> Select Projects From Top Naviagation
 *      -> Left Side bar -> Project Overview -> Project Settings
 *      -> General -> Scroll Down and Choose CDN for all the details
 */
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import './firebasse-messaging'
console.log('firebase')
var config = {
  apiKey: 'AIzaSyCSkb2PtrcULZdnFxSoJNLImCWiAmODftw',
  authDomain: 'dyna-cloud.firebaseapp.com',
  projectId: 'dyna-cloud',
  storageBucket: 'dyna-cloud.appspot.com',
  messagingSenderId: '752582535911',
  appId: '1:752582535911:web:a1a064b13ae5cda3d69042',
  measurementId: 'G-HY99D25VGV',
}
// Initialize Firebase
firebase.initializeApp(config)
/**
 * We can start messaging using messaging() service with firebase object
 */
var messaging = firebase.messaging()

/** Register your service worker here
 *  It starts listening to incoming push notifications from here
 */
navigator.serviceWorker
  .register('../js/firebase-messaging-sw.js')
  .then(function(registration) {
    /** Since we are using our own service worker ie firebase-messaging-sw.js file */
    messaging.useServiceWorker(registration)

    /** Lets request user whether we need to send the notifications or not */
    messaging
      .requestPermission()
      .then(function() {
        console.log('messaging')
        /** Standard function to get the token */
        messaging
          .getToken()
          .then(function(token) {
            /** Here I am logging to my console. This token I will use for testing with PHP Notification */
            console.log(token)
            $('#device_id').val(token)

            /** SAVE TOKEN::From here you need to store the TOKEN by AJAX request to your server */
            //                sendTokenToServer(token);
          })
          .catch(function(error) {
            /** If some error happens while fetching the token then handle here */
            updateUIForPushPermissionRequired()
            console.log('Error while fetching the token ' + error)
          })
      })
      .catch(function(error) {
        /** If user denies then handle something here */
        console.log('Permission denied ' + error)
      })
  })
  .catch(function() {
    console.log('Error in registering service worker')
  })

/** What we need to do when the existing token refreshes for a user */
messaging.onTokenRefresh(function() {
  messaging
    .getToken()
    .then(function(renewedToken) {
      console.log(renewedToken)
      /** UPDATE TOKEN::From here you need to store the TOKEN by AJAX request to your server */
    })
    .catch(function(error) {
      /** If some error happens while fetching the token then handle here */
      console.log('Error in fetching refreshed token ' + error)
    })
})

// Handle incoming messages
messaging.onMessage(function(payload) {
  console.log('ON MESSAGE TITLE')
  const notificationTitle = 'ON MESSAGE TITLE'
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

// Send the Instance ID token your application server, so that it can:
// - send messages back to this app
// - subscribe/unsubscribe the token from topics
function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    console.log('Sending token to server...')
    window.localStorage.setItem('token', currentToken)
    // TODO(developer): Send the current token to your server and save in database.
    $.post(
      '../ajax.php',
      {
        token: currentToken,
        action: 'save_token',
      },
      function(result) {
        if (result.status == true) {
          //                    window.location = result.data;
        } else {
          //                    window.location.reload();
          // alert(result.data);
        }
      },
      'json'
    )
    setTokenSentToServer(true)
  } else {
    console.log(
      "Token already sent to server so won't send it again " +
        'unless it changes'
    )
  }
}

function isTokenSentToServer() {
  return window.localStorage.getItem('senttoserver') == 1
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem('senttoserver', sent ? 1 : 0)
}
