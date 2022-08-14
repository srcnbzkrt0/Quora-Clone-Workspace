// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCToddtu--VQXg_R_GmPbqIk1tw9s13D8I",
  authDomain: "quora-clone-mern-4a183.firebaseapp.com",
  projectId: "quora-clone-mern-4a183",
  storageBucket: "quora-clone-mern-4a183.appspot.com",
  messagingSenderId: "93935772912",
  appId: "1:93935772912:web:b2377b7631cef83835ce35",
  measurementId: "G-MX207LRTSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export{auth, provider};