import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDvznuf_uuY_MvNoz5iAcNBkrCSLzOXCTs",
  authDomain: "ecommerce-react-50ccd.firebaseapp.com",
  projectId: "ecommerce-react-50ccd",
  storageBucket: "ecommerce-react-50ccd.appspot.com",
  messagingSenderId: "420531420995",
  appId: "1:420531420995:web:4e20e45f394f759862b9f6"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 