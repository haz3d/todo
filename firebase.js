// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Qikd16TtZA_KHJciR6OL-gprRfhi0p8",
  authDomain: "todo-a2b88.firebaseapp.com",
  projectId: "todo-a2b88",
  storageBucket: "todo-a2b88.appspot.com",
  messagingSenderId: "439147264246",
  appId: "1:439147264246:web:7c67e263799aa75dcd94d7",
  measurementId: "G-WS2BHH955V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
