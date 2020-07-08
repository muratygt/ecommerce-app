import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRATCg2iYZQfC9OWlkMY-Oudiuw8VZpRY",
    authDomain: "crwn-db-ce0be.firebaseapp.com",
    databaseURL: "https://crwn-db-ce0be.firebaseio.com",
    projectId: "crwn-db-ce0be",
    storageBucket: "crwn-db-ce0be.appspot.com",
    messagingSenderId: "912118428306",
    appId: "1:912118428306:web:ceab8079f39a1e43f56c4b",
    measurementId: "G-791BP6863C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;