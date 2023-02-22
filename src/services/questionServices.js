import { db } from "../firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const questionCollectionRef = collection(db, "questions");
// const answerCollectionRef = collection(db, "questions");

class QuestionDataService {
    getAllQuestions = () => {
        return getDocs(questionCollectionRef);
    }
    getQuestion = (id) => {
        const queDoc = doc(db, "questions", id);
        return getDocs(queDoc);
    }
    getAllAnswers = (ansref) => {
        return getDocs(collection(ansref,"answers"));
    }
}


export default new QuestionDataService();