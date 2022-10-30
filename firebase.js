// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaWyw3pQMZclCUEwWU_DYjt7gDmXP0Xp4",
  authDomain: "nikhilsharma-e1248.firebaseapp.com",
  databaseURL: "https://nikhilsharma-e1248-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nikhilsharma-e1248",
  storageBucket: "nikhilsharma-e1248.appspot.com",
  messagingSenderId: "533635628693",
  appId: "1:533635628693:web:ab062802a0119a4722e59c",
  measurementId: "G-WPPYCYCY39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

