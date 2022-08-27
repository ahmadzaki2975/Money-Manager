//? Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDocs, setDoc, getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
//? https://firebase.google.com/docs/web/setup#available-libraries

//? Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIbZTBbgKAHhuXfyihmIFNr38Z-7irenI",
  authDomain: "money-manager-daa71.firebaseapp.com",
  projectId: "money-manager-daa71",
  storageBucket: "money-manager-daa71.appspot.com",
  messagingSenderId: "830494134542",
  appId: "1:830494134542:web:851d89bc0d92b8945b875f"
};

//? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//? Google Sign In
export const googleSignIn = () => {
  signInWithPopup(auth, provider)
  .then(response => {
    console.log(response);
    const user = JSON.stringify(response.user)
    localStorage.setItem("user", user)
  })
  .catch(err => console.error(err));
}