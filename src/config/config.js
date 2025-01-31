
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your Firebase config
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
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export instances
const storage = firebaseApp.storage();
const db = firebaseApp.firestore();

export { storage, db };
















// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDvqw2ObyajgWXhiWHw6ggydhJIzwwMXwc",
//   authDomain: "e-commerce-fcde8.firebaseapp.com",
//   projectId: "e-commerce-fcde8",
//   storageBucket: "e-commerce-fcde8.firebasestorage.app",
//   messagingSenderId: "359743209457",
//   appId: "1:359743209457:web:d7fade7c5b4241fb58ce50",
//   measurementId: "G-VH91GRXRDB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { auth, storage, db };
