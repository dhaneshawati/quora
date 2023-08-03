import { NEWLOGIN, LOGOUT, QUESTION, RESET } from "../actions/actionType";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function setUser(userval) {
  return {
    type: NEWLOGIN,
    payload: userval,
  };
}
function onSignOut() {
  return {
    type: LOGOUT,
  };
}
function resetQuestion() {
  return {
    type: RESET,
  };
}
function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function setQuestionInfo(info) {
  return {
    type: QUESTION,
    payload: info,
  };
}

export { signUp, setUser, onSignOut, setQuestionInfo, resetQuestion };
