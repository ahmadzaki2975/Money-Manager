// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIbZTBbgKAHhuXfyihmIFNr38Z-7irenI",
  authDomain: "money-manager-daa71.firebaseapp.com",
  projectId: "money-manager-daa71",
  storageBucket: "money-manager-daa71.appspot.com",
  messagingSenderId: "830494134542",
  appId: "1:830494134542:web:851d89bc0d92b8945b875f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();