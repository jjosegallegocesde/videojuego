// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSnvy5Z3HNd_uyq6yd0qvvul5g4eApjHc",
  authDomain: "juegolunes.firebaseapp.com",
  projectId: "juegolunes",
  storageBucket: "juegolunes.appspot.com",
  messagingSenderId: "832777897932",
  appId: "1:832777897932:web:9516382c64ca94156aff69",
  measurementId: "G-KSCNNYCZPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);