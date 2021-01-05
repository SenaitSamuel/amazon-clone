import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDULwrzD6D5FpRUgwCRIXT-nkvZLmc9ebw",
    authDomain: "clone-9c249.firebaseapp.com",
    projectId: "clone-9c249",
    storageBucket: "clone-9c249.appspot.com",
    messagingSenderId: "539877302101",
    appId: "1:539877302101:web:2b1c408d1e0f100f2259dc",
    measurementId: "G-72RWV027DX"
  }
  


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };