import { NEWLOGIN, LOGOUT, QUESTION, RESET } from "../actions/actionType";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
async function signUp(name, email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
  } catch (err) {
    console.log(err);
  }
}

function setQuestionInfo(info) {
  return {
    type: QUESTION,
    payload: info,
  };
}

export { signUp, setUser, onSignOut, setQuestionInfo, resetQuestion };
