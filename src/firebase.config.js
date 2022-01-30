import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCddWR7vMtUabm69WP_ap92YY_TUH6-Lk4",
  authDomain: "fir-test-d087d.firebaseapp.com",
  projectId: "fir-test-d087d",
  storageBucket: "fir-test-d087d.appspot.com",
  messagingSenderId: "1053555891881",
  appId: "1:1053555891881:web:52190b0a191f6f5623d3b8",
  measurementId: "G-05DBTSQCSD"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


export default db