import {NEWLOGIN,LOGOUT } from '../actions/actionType';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
} from "firebase/auth";
import { auth } from "../../firebase";

// function login(user){
//     return{
//         type: LOGIN,
//         payload: user
//     }
// }

function setUser(userval){
    return{
        type: NEWLOGIN,
        payload: userval
    }
}
function logOut(){
    return signOut(auth);
}

function signUp(displayName,email,password){
    return createUserWithEmailAndPassword(auth,displayName,email,password);
}
function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password);
}

export {logIn,signUp,setUser,logOut};