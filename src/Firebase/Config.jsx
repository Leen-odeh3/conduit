// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxO2maPXJzAEI_eJ14OyEs7-9oVJSonVg",
  authDomain: "conduit-fcd62.firebaseapp.com",
  projectId: "conduit-fcd62",
  storageBucket: "conduit-fcd62.appspot.com",
  messagingSenderId: "945986307195",
  appId: "1:945986307195:web:a14d68b6e7ebe4ba108ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
