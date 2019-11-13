const defaultState = {
    score: 0,
    questionslength: 0
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

        default: {
            return state;
        }
    }
}