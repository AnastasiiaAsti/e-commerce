import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuTGKl7L6xmP2TERyB-J268xDIfu5hu58",
    authDomain: "e-commerce-b913c.firebaseapp.com",
    projectId: "e-commerce-b913c",
    storageBucket: "e-commerce-b913c.appspot.com",
    messagingSenderId: "634226707841",
    appId: "1:634226707841:web:da60a608cdb9a03af66c80",
    measurementId: "G-94K4MV40LQ"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestire();

const auth = firebase.auth();

export { db, auth };