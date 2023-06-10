// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAtnRWxTMcrwoRGtf8QwXRPi3z-b81Nffk",
  authDomain: "first-react-firebase-app-69a6f.firebaseapp.com",
  projectId: "first-react-firebase-app-69a6f",
  storageBucket: "first-react-firebase-app-69a6f.appspot.com",
  messagingSenderId: "465978406855",
  appId: "1:465978406855:web:b534a216f803f1006e0be2",
  measurementId: "G-TWK562PWV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);