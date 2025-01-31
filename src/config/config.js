import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqw2ObyajgWXhiWHw6ggydhJIzwwMXwc",
  authDomain: "e-commerce-fcde8.firebaseapp.com",
  projectId: "e-commerce-fcde8",
  storageBucket: "e-commerce-fcde8.firebasestorage.app",
  messagingSenderId: "359743209457",
  appId: "1:359743209457:web:d7fade7c5b4241fb58ce50",
  measurementId: "G-VH91GRXRDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, storage, db };
