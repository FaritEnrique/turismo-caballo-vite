// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBrVa0P6ClustxL-HZlilTmlQrh5M9jCk",
  authDomain: "turismo-caballococha.firebaseapp.com",
  projectId: "turismo-caballococha",
  storageBucket: "turismo-caballococha.firebasestorage.app",
  messagingSenderId: "441295118227",
  appId: "1:441295118227:web:3d7a415dff749c53829266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);