import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRhTpKRzlhBAVn1CIwvXQQl3MMzEmrszs",
  authDomain: "twitter-clever.firebaseapp.com",
  projectId: "twitter-clever",
  storageBucket: "twitter-clever.appspot.com",
  messagingSenderId: "496852653068",
  appId: "1:496852653068:web:dfe90756af6e17ac608a29",
  measurementId: "G-LX6GZ4CG0F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

export { auth, provider, fbProvider };
export default db;
