// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3SR6NlvrvVYIfAe07doROOWcd7ewcNM4",
  authDomain: "netflixgpt-f4df0.firebaseapp.com",
  projectId: "netflixgpt-f4df0",
  storageBucket: "netflixgpt-f4df0.appspot.com",
  messagingSenderId: "571165393856",
  appId: "1:571165393856:web:6747a42b9d2d09e2d0be25",
  measurementId: "G-6ZZCRRRCJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);