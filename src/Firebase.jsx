// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv0kI01FaLoneda7vAdirdlR8b4yFNjB8",
  authDomain: "react-social-5a7c4.firebaseapp.com",
  projectId: "react-social-5a7c4",
  storageBucket: "react-social-5a7c4.appspot.com",
  messagingSenderId: "129364031140",
  appId: "1:129364031140:web:8ca5e01144218d4f4ad831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
