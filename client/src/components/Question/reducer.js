const defaultState = {
    score: 0,
    questionslength: 0,
    currentQuestion: 1,
    isFinished: false
};

export default function questionReducer(state = defaultState, action) {
    const { type, payload } = action;


    switch (type) {
        case 'ADD_SCORE': {
            return {
                ...state,
                score: payload + 1
            };
        }

        case 'RESET_SCORE': {
            return {
                ...state,
                score: 0
            };
        }

        case 'GET_QUESTIONS_LENGTH': {
            return {
                ...state,
                questionslength: payload
            }
        }

        case 'GET_CURRENT_QUESTION': {
            return {
                ...state,
                currentQuestion: payload
            }
        }

        case 'SET_IS_FINISHED': {
            return {
                ...state,
                isFinished: payload
            }
        }

        default: {
            return state;
        }
    }
}