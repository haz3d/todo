// Import the Firebase SDK modules
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Firebase configuration object
const firebaseConfig = {
  // Your Firebase project configuration settings
  apiKey: "AIzaSyB4Qikd16TtZA_KHJciR6OL-gprRfhi0p8",
  authDomain: "todo-a2b88.firebaseapp.com",
  projectId: "todo-a2b88",
  storageBucket: "todo-a2b88.appspot.com",
  messagingSenderId: "439147264246",
  appId: "1:439147264246:web:7c67e263799aa75dcd94d7",
  measurementId: "G-WS2BHH955V"
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Export the Firebase SDK modules
export const auth = firebase.auth()
export const firestore = firebase.firestore()

