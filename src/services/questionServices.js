import { db } from "../firebase";
import { collection, getDocs, doc } from "firebase/firestore";

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
}

export default new QuestionDataService();
