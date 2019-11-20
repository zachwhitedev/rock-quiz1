const axios = require('axios');


export function addScore(score) {
    return {
        type:'ADD_SCORE',
        payload: score
    };   
}

export function resetScore() {
    return {
        type:'RESET_SCORE'
    };   
}

export function getQuestionslength(length) {
    return {
        type:'GET_QUESTIONS_LENGTH',
        payload: length
    };   
}

export function currentQuestion(q) {
    return {
        type:'GET_CURRENT_QUESTION',
        payload: q + 1
    };   
}
