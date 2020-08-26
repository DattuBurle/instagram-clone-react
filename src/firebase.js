import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRWAg5y75bjd7lNlk5gif1itkV4Uoho5k",
  authDomain: "instagram-clone-react-7d52d.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-7d52d.firebaseio.com",
  projectId: "instagram-clone-react-7d52d",
  storageBucket: "instagram-clone-react-7d52d.appspot.com",
  messagingSenderId: "1085465040143",
  appId: "1:1085465040143:web:936190605e4ac354bc5a7a",
  measurementId: "G-8CBF2RPYEX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
