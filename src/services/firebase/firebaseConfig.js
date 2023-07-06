// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8MUMYpMcWR7bJrji0J60VQYdxg7g2vYI",
  authDomain: "proyectoreactjsacascogiachetto.firebaseapp.com",
  projectId: "proyectoreactjsacascogiachetto",
  storageBucket: "proyectoreactjsacascogiachetto.appspot.com",
  messagingSenderId: "838316044361",
  appId: "1:838316044361:web:5ae20ca36ed1f6f8ae8f98",
  measurementId: "G-1VVVXG6C61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);