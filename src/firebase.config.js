import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "news-app-10d10.firebaseapp.com",
  projectId: "news-app-10d10",
  storageBucket: "news-app-10d10.appspot.com",
  messagingSenderId: "370211044262",
  appId: "1:370211044262:web:be32cfe66b888ad43eed67",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
