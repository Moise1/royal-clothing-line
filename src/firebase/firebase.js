import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8v2iIBAGkXvjfbUCnE6F8L6y2iBR42PM",
    authDomain: "royal-clothing-db-dafc0.firebaseapp.com",
    projectId: "royal-clothing-db-dafc0",
    storageBucket: "royal-clothing-db-dafc0.appspot.com",
    messagingSenderId: "119955121744",
    appId: "1:119955121744:web:644fee5e3d3d0e2ef4d355",
    measurementId: "G-8PLK0YG3JE"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); 
 }

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export {firebase}; 