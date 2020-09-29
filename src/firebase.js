import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAk55_K2PkHtm9dc57ZPDqJPXtBmKTR6Wc",
    authDomain: "todo-app-d0a0d.firebaseapp.com",
    databaseURL: "https://todo-app-d0a0d.firebaseio.com",
    projectId: "todo-app-d0a0d",
    storageBucket: "todo-app-d0a0d.appspot.com",
    messagingSenderId: "899210179996",
    appId: "1:899210179996:web:ff94c6b7fad981b6368459",
    measurementId: "G-GWNCV6K2HY"
});

const db = firebaseApp.firestore();
export default db;