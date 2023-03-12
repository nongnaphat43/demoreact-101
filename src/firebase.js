// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLvYhuZ4x1I7oJE6EghdxsSQZ-JBsDJzg",
  authDomain: "nongnaphat-94d45.firebaseapp.com",
  projectId: "nongnaphat-94d45",
  storageBucket: "nongnaphat-94d45.appspot.com",
  messagingSenderId: "285365496894",
  appId: "1:285365496894:web:41d66026b5a4cc2df9b56f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();