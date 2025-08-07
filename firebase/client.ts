// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6RSwYLAUPgkwxTVv_vc41KJdkTTilXoM",
  authDomain: "prepwise-45650.firebaseapp.com",
  projectId: "prepwise-45650",
  storageBucket: "prepwise-45650.firebasestorage.app",
  messagingSenderId: "607562465203",
  appId: "1:607562465203:web:ab08b6460bbf61187b95c6",
  measurementId: "G-B4LMGMZGGR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);