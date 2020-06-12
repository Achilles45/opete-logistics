import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyBx8tFUH-T3TmTQH8DiKaAHYZEwSTZhWD4",
  authDomain: "logistics-app-3d151.firebaseapp.com",
  databaseURL: "https://logistics-app-3d151.firebaseio.com",
  projectId: "logistics-app-3d151",
  storageBucket: "logistics-app-3d151.appspot.com",
  messagingSenderId: "931165160390",
  appId: "1:931165160390:web:babe69de5cfe8a1cc228c7",
  measurementId: "G-0KBZEBB41X"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()