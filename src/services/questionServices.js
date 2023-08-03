import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const questionCollectionRef = collection(db, "questions");

class QuestionDataService {
  getAllQuestions = () => {
    return getDocs(questionCollectionRef);
  };
  getQuestion = (id) => {
    const queDoc = doc(db, "questions", id);
    return getDocs(queDoc);
  };
  getAllAnswers = (ansref) => {
    return getDocs(collection(ansref, "answers"));
  };
  getSortedQuestions = (query) => {
    return getDocs(query);
  };
  getUserActionsData = (filteredQuery) => {
    return getDocs(filteredQuery);
  };
  getSingleDoc = (docref) => {
    return getDoc(docref);
  };
}

export default new QuestionDataService();
