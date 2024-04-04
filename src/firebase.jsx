// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCQV5c0U9T2n1EAuWnlWYHK_EU2ZE_3iYw",
  authDomain: "todo-app-c287d.firebaseapp.com",
  projectId: "todo-app-c287d",
  storageBucket: "todo-app-c287d.appspot.com",
  messagingSenderId: "470165790326",
  appId: "1:470165790326:web:749c47bfb81783522b0957",
  measurementId: "G-009YG38ET7"
};

// Initialize Firebase
// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }



