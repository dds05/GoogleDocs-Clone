import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCK9cmUUK8lfD2FXcSkapjtzzi6uLMkvek",
    authDomain: "docs-e5b7b.firebaseapp.com",
    projectId: "docs-e5b7b",
    storageBucket: "docs-e5b7b.appspot.com",
    messagingSenderId: "244336453568",
    appId: "1:244336453568:web:e56e54db33d0a901ae8a25"
};


const app= !firebase.apps.length? firebase.initializeApp(firebaseConfig):firebase.app();

const db=app.firestore();

export {db};