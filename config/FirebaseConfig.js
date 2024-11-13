// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cartol-b1151.firebaseapp.com",
  projectId: "cartol-b1151",
  storageBucket: "cartol-b1151.firebasestorage.app",
  messagingSenderId: "386113301751",
  appId: "1:386113301751:web:c63cb5d6597e84706ef7f2",
  measurementId: "G-0PVGJNS6QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);