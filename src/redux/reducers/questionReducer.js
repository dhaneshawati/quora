import { QUESTION } from "../actions/actionType";

const initialState = {
    questionId: null,
    questionName: null,
    timestamp: null,
    qSeeker: ""
}
 
const questionReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case QUESTION:
            return{
                ...state, 
                questionId: action.payload.questionId,
                questionName: action.payload.questionName,
                timestamp: action.payload.timestamp,
                qSeeker: action.payload.qSeeker
            }
        
        default:
            return state

    }
}

export default questionReducer;