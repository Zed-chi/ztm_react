import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyBNe5VMKiydyKfmNsRP7tBuoUK_Zq9K6LI",
    authDomain: "udemy-react-37333.firebaseapp.com",
    databaseURL: "https://udemy-react-37333.firebaseio.com",
    projectId: "udemy-react-37333",
    storageBucket: "udemy-react-37333.appspot.com",
    messagingSenderId: "393859165267",
    appId: "1:393859165267:web:e7634b6ef86161f5b16aa6"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmtt:"select_account"});
  export const signInWithGoogle = ()=>auth.signInWithPopup();
  export default firebase;