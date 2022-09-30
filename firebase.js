// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4PYyC9hq8P26IGkbcvVWhuqSKpmZYnBs",
  authDomain: "discordbotbuilder-c06d2.firebaseapp.com",
  projectId: "discordbotbuilder-c06d2",
  storageBucket: "discordbotbuilder-c06d2.appspot.com",
  messagingSenderId: "371728028777",
  appId: "1:371728028777:web:98c6ba10c69bdffe0c7ef8",
  measurementId: "G-KZB0MEBDBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}