// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAymUHCDXwqzLK2lS1xdzUK5j00HttNak4",
  authDomain: "hackathon-1f5d4.firebaseapp.com",
  projectId: "hackathon-1f5d4",
  storageBucket: "hackathon-1f5d4.appspot.com",
  messagingSenderId: "452396698288",
  appId: "1:452396698288:web:d02c75b2c90ed5ff1c8975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };