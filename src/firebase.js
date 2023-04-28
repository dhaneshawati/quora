import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBEievkjh1nUI3JduukXm_L_EghWe-axzw",
  authDomain: "quora-clone-9e5f5.firebaseapp.com",
  projectId: "quora-clone-9e5f5",
  storageBucket: "quora-clone-9e5f5.appspot.com",
  messagingSenderId: "34157297077",
  appId: "1:34157297077:web:52f41a7b55741255e52dfc",
  measurementId: "G-0KY3WT7GEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//custom Hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    return unsubscribe;
  }, []);
  return currentUser;
}

export default app;
