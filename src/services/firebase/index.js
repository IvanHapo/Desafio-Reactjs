import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvznuf_uuY_MvNoz5iAcNBkrCSLzOXCTs",
  authDomain: "ecommerce-react-50ccd.firebaseapp.com",
  projectId: "ecommerce-react-50ccd",
  storageBucket: "ecommerce-react-50ccd.appspot.com",
  messagingSenderId: "420531420995",
  appId: "1:420531420995:web:a09145583765346a62b9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 