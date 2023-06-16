import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAIVGeFLFfN-5ohsDXUcuFykwGpc4QjR8o",
  authDomain: "quora-clone-new-1249c.firebaseapp.com",
  projectId: "quora-clone-new-1249c",
  storageBucket: "quora-clone-new-1249c.appspot.com",
  messagingSenderId: "1016552429714",
  appId: "1:1016552429714:web:a450da7859f6d756ca2e4b",
  measurementId: "G-RTZKC30G0V",
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
