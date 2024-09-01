// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-e6ea7.firebaseapp.com",
  projectId: "mern-auth-e6ea7",
  storageBucket: "mern-auth-e6ea7.appspot.com",
  messagingSenderId: "676287682964",
  appId: "1:676287682964:web:10f4f6d34fe36e92f69781"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);