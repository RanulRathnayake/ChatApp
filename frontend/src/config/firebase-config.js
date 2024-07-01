// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJKk2vO1nRP8tOjRIrc9CmljKy4kERQxA",
  authDomain: "chatapp-224bf.firebaseapp.com",
  projectId: "chatapp-224bf",
  storageBucket: "chatapp-224bf.appspot.com",
  messagingSenderId: "500826326352",
  appId: "1:500826326352:web:7e4ebaefbb75a1aba2d855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();