import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKc3ucMc_6XO2ln0B6cl6BRex2sx97NTM",
  authDomain: "ai-interview-59a49.firebaseapp.com",
  projectId: "ai-interview-59a49",
  storageBucket: "ai-interview-59a49.firebasestorage.app",
  messagingSenderId: "537831337039",
  appId: "1:537831337039:web:43ec84c04f4d53e5d1ce3a",
  measurementId: "G-498J22P30Z"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)