import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "learning-management-syst-2c109.firebaseapp.com",
  projectId: "learning-management-syst-2c109",
  storageBucket: "learning-management-syst-2c109.firebasestorage.app",
  messagingSenderId: "613961237394",
  appId: "1:613961237394:web:12ae96626591e3db5af74b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}