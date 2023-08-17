import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAWYvFnKvCkKus_2R_tmKKVmfBoqDpAf3U",
    authDomain: "ricardin-2ff7f.firebaseapp.com",
    projectId: "ricardin-2ff7f",
    storageBucket: "ricardin-2ff7f.appspot.com",
    messagingSenderId: "860604232560",
    appId: "1:860604232560:web:ff9be04d811a48e07395b5",
    measurementId: "G-XXRLLTM3WZ"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

export {db, auth, storage, functions};
