// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgQXMR2c7U7-m7x2fX9SJUMi_DCaYeEBc",
  authDomain: "richpanel-messenger.firebaseapp.com",
  databaseURL: "https://richpanel-messenger-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "richpanel-messenger",
  storageBucket: "richpanel-messenger.appspot.com",
  messagingSenderId: "206497872081",
  appId: "1:206497872081:web:e6a52ab8155f6a3bd56df0",
  measurementId: "G-J930QQ8MD3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// Initialize Firebase

export default db;