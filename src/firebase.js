import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVFRCs1UZhchmWVksEL_Q8KAwf1qBZWZI",
  authDomain: "chat-513a7.firebaseapp.com",
  projectId: "chat-513a7",
  storageBucket: "chat-513a7.appspot.com",
  messagingSenderId: "778635130805",
  appId: "1:778635130805:web:70884e600445c6a5534bfc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
