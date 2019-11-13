const defaultState = {
    score: 0,
    questionslength: 0
};

export default function scoreboardReducer(state = defaultState, action) {
    const { type, payload } = action;


    switch (type) {
        case 'ADD_SCORE': {
            return {
                ...state,
                score: payload + 1
            };
        }

        default: {
            return state;
        }
    }
}