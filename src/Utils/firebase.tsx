// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH-stgtnVMbtk4VtYdztLkIFRTQc5W0QU",
  authDomain: "neuroflixgpt007.firebaseapp.com",
  projectId: "neuroflixgpt007",
  storageBucket: "neuroflixgpt007.firebasestorage.app",
  messagingSenderId: "873919351794",
  appId: "1:873919351794:web:f76f850ded6cb78784796b",
  measurementId: "G-4KZZ24WVBV"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
// getauth is used everywhere in the app to get the current user
// Initialize Firebase