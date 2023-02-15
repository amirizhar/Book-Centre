// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZeQY2IS6ohN1FCcTn-_yTefCfTk1w1gs",
  authDomain: "bookcentre-21891.firebaseapp.com",
  databaseURL: "https://bookcentre-21891-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bookcentre-21891",
  storageBucket: "bookcentre-21891.appspot.com",
  messagingSenderId: "573036855415",
  appId: "1:573036855415:web:cf1e7983aa8a621d7a8672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getDatabase(app);