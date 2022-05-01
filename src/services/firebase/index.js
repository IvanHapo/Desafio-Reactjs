import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBdKWoG05yast6urSr-KoZAHUjEpWtJBJY",
  authDomain: "ecommerce31145-6a40b.firebaseapp.com",
  projectId: "ecommerce31145-6a40b",
  storageBucket: "ecommerce31145-6a40b.appspot.com",
  messagingSenderId: "687647752605",
  appId: "1:687647752605:web:59458f716f0b24be1cef74"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 