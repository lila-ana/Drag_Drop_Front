import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET as string,
//   messagingSenderId: process.env
//     .REACT_APP_FIREBASE_MESSAGING_SENDER_ID as string,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID as string,
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYv-7k1HDuvfYj8jc0bha9IaYsPCvfgFQ",
  authDomain: "ratat-a778f.firebaseapp.com",
  projectId: "ratat-a778f",
  storageBucket: "ratat-a778f.appspot.com",
  messagingSenderId: "715959120339",
  appId: "1:715959120339:web:d046b0c5187b647f2c3f26",
  measurementId: "G-D54R16XNT8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
