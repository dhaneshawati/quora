import { QUESTION, RESET } from "../actions/actionType";

const initialState = {
  questionId: null,
  questionName: null,
  timestamp: null,
  qSeeker: "",
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION:
      return {
        ...state,
        questionId: action.payload.questionId,
        questionName: action.payload.questionName,
        timestamp: action.payload.timestamp,
        qSeeker: action.payload.qSeeker,
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
};

export default questionReducer;
