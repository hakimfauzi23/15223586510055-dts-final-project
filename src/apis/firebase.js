// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "valorant-point.firebaseapp.com",
  projectId: "valorant-point",
  storageBucket: "valorant-point.appspot.com",
  messagingSenderId: "20907655786",
  appId: "1:20907655786:web:40710ba5b0f2b647074013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
