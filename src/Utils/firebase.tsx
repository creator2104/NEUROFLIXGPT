// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD441fhWdxcBoUvRxScZPB2um90aeFMTuM",
  authDomain: "neuroflix-f6656.firebaseapp.com",
  projectId: "neuroflix-f6656",
  storageBucket: "neuroflix-f6656.firebasestorage.app",
  messagingSenderId: "587924689678",
  appId: "1:587924689678:web:e028d023aad210267dbd5f",
  measurementId: "G-28BDJ3N5YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// getauth is used everywhere in the app to get the current user