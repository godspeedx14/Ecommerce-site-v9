import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDdGJEHBN_CsTmjNyhDR5hubLsTOe2-544",
  authDomain: "fir-b9562.firebaseapp.com",
  projectId: "fir-b9562",
  storageBucket: "fir-b9562.appspot.com",
  messagingSenderId: "1029183631920",
  appId: "1:1029183631920:web:039654ee96da812f3f33f5",
  measurementId: "G-941YSWLH1X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
