// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // <-- fixed import here
import { getFirestore } from "firebase/firestore";
import {setDoc,doc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ELFB8URHiHaMLfxlG9PkFVsWofdEVGs",
  authDomain: "login-auth-59d0d.firebaseapp.com",
  projectId: "login-auth-59d0d",
  storageBucket: "login-auth-59d0d.firebasestorage.app",
  messagingSenderId: "805821316805",
  appId: "1:805821316805:web:46c5beb35b5ab70d5a3aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);  // <-- pass app here
export const db=getFirestore(app);

export default app;
