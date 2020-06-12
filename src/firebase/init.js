import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyCfuK1A1HsRnY-P_HgQLLdyaDZjSfPBX9E",
  authDomain: "logistics-app-68b9b.firebaseapp.com",
  databaseURL: "https://logistics-app-68b9b.firebaseio.com",
  projectId: "logistics-app-68b9b",
  storageBucket: "logistics-app-68b9b.appspot.com",
  messagingSenderId: "467381804168",
  appId: "1:467381804168:web:d60784bce8dfae7f49d33d",
  measurementId: "G-HLKJC66GHR"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()