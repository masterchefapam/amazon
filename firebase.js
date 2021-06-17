import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAsMiOwM-qwg7ezC28GXFfDrY5I6a4LJc8",
  authDomain: "clone-1098f.firebaseapp.com",
  projectId: "clone-1098f",
  storageBucket: "clone-1098f.appspot.com",
  messagingSenderId: "971063050963",
  appId: "1:971063050963:web:63a3782525ef3fda000a26"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  export default db;