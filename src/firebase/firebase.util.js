import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config =
  {
    apiKey: "AIzaSyAdhjkUxbOzFW8I6vThaVS_dLhCqHnfez8",
    authDomain: "crown-clothing-e665a.firebaseapp.com",
    projectId: "crown-clothing-e665a",
    storageBucket: "crown-clothing-e665a.appspot.com",
    messagingSenderId: "63879834586",
    appId: "1:63879834586:web:cdc5fe6922298abcc76ee3",
    measurementId: "G-V7SPT2FWYZ"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, email, createdAt,...additionalData
      })
    }
    catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}else {
  firebase.app(); // if already initialized, use that one
}
//firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
