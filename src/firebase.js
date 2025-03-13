// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClcICWaPRHmD-iiJSjB2zyFKv5CN-IZdk",
  authDomain: "hire-ai-30397.firebaseapp.com",
  projectId: "hire-ai-30397",
  storageBucket: "hire-ai-30397.firebasestorage.app",
  messagingSenderId: "5115693002",
  appId: "1:5115693002:web:6bdd6d37ad4612af60b133",
  measurementId: "G-LN52RSYMK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
