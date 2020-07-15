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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    //If the user logged in we want to query the database
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();

    //If the user (snapshot) does not exist in the DB, we will create one
     if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message);
        }
     }
     
     return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;