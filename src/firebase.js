import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDY13lOm7brLfdgQYYXwnVAz52lyIaD23Y",
  authDomain: "quora-clone-ns.firebaseapp.com",
  projectId: "quora-clone-ns",
  storageBucket: "quora-clone-ns.appspot.com",
  messagingSenderId: "181549447218",
  appId: "1:181549447218:web:a2ba9049d651b206e7642b",
  measurementId: "G-MZXPWKSJJZ"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


//custom Hook

export function useAuth(){
  const[currentUser,setCurrentUser] = useState();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>setCurrentUser(user));
    return unsubscribe
  },[])
  return currentUser;
}

export default app;
