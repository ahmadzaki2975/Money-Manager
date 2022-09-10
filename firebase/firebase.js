//? Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDocs, setDoc, getFirestore, collection } from "firebase/firestore";
import { execOnce } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";

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
    const user = JSON.stringify(response.user);
    localStorage.setItem("user", user);
  })
  .catch(err => console.error(err));
}

//? Log Out
export const logout = () => {
  localStorage.clear();
}

// check if email is already used
export const checkEmail = async (email) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map(doc => doc.data());
  const user = users.find(user => user.email === email);
  if (user) {
    return true;
  } else {  
    return false;
  }
}

// register user to database return true if success
export const registerUser = async (email, password, displayName) => {
  const user = {
    email : email,
    password : password,
    displayName : displayName
  }
  const docRef = await setDoc(doc(db, "users", email), user);
}

// login
export const login = async (email, password) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map(doc => doc.data());
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    throw new Error("Email or password is incorrect");
  } else {
    localStorage.setItem("user", JSON.stringify(
      {
        email: user.email,
        displayName: user.displayName
      }
      ));
  }
}