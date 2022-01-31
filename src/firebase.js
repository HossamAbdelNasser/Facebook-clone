import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCMWK755iiCuAvKHL-yT8q_xiqBk5KLLJA",
    authDomain: "facebook-clone-48dfa.firebaseapp.com",
    projectId: "facebook-clone-48dfa",
    storageBucket: "facebook-clone-48dfa.appspot.com",
    messagingSenderId: "374498452437",
    appId: "1:374498452437:web:0381a6c81cfc5b6e2f535c",
    measurementId: "G-8DET3SXLMD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;