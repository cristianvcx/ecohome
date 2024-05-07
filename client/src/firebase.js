// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-44d8a.firebaseapp.com",
  projectId: "mern-estate-44d8a",
  storageBucket: "mern-estate-44d8a.appspot.com",
  messagingSenderId: "80670503568",
  appId: "1:80670503568:web:9617d28fc51cf14d769e15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);