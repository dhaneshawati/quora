import {NEWLOGIN,LOGOUT } from '../actions/actionType';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

 

function setUser(userval){
    return{
        type: NEWLOGIN,
        payload: userval
    }
}
function onSignOut(){
    return{
        type: LOGOUT
    }
}

function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}

export {signUp,setUser,onSignOut};