// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeGzS9KmKeJzsO7hLzP1JhqUClyfY-EmA",
  authDomain: "todo-list-2f0cf.firebaseapp.com",
  projectId: "todo-list-2f0cf",
  storageBucket: "todo-list-2f0cf.appspot.com",
  messagingSenderId: "187740367858",
  appId: "1:187740367858:web:97bcbce6445178921e596b",
  measurementId: "G-LWZN9XS1VM"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }