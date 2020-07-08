import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//copy paste config from firebase console of our application
const firebaseConfig = {
    apiKey: "AIzaSyCYoLW9zLzd0uyGvSPAf5YtWYojwchK9-A",
    authDomain: "battal-db.firebaseapp.com",
    databaseURL: "https://battal-db.firebaseio.com",
    projectId: "battal-db",
    storageBucket: "battal-db.appspot.com",
    messagingSenderId: "95362473678",
    appId: "1:95362473678:web:f1bff5f31ac1cf1f443a9f",
    measurementId: "G-40QEQRB3NT"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
