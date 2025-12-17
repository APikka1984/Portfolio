// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9m1icvVwRj0SCfKXP_GWNvoWUhZ_cGuo",
  authDomain: "portfolio-40c5b.firebaseapp.com",
  projectId: "portfolio-40c5b",
  storageBucket: "portfolio-40c5b.firebasestorage.app",
  messagingSenderId: "777994172486",
  appId: "1:777994172486:web:ad5389092ff2f82d8b3247",
  measurementId: "G-Z3X99QHEW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);