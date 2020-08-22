import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBx5TAf1GMd-yYXPaEHt9fy3YSWx1lrB00",
  authDomain: "titanhacks-adf3c.firebaseapp.com",
  databaseURL: "https://titanhacks-adf3c.firebaseio.com",
  projectId: "titanhacks-adf3c",
  storageBucket: "titanhacks-adf3c.appspot.com",
  messagingSenderId: "937261596231",
  appId: "1:937261596231:web:ff7385ede7540601ee7b62",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
