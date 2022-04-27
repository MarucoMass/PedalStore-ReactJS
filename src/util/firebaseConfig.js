import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRP53E_tCnM0xP0kK0K4GjKHm27_JPpqY",
  authDomain: "pedalstore-ecc86.firebaseapp.com",
  projectId: "pedalstore-ecc86",
  storageBucket: "pedalstore-ecc86.appspot.com",
  messagingSenderId: "777730269721",
  appId: "1:777730269721:web:a41aa154f9842640f34088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;