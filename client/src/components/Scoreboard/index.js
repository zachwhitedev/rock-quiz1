  
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';
import { setIsFinished } from '../Question/actions';

function mapStoreToProps(store) {
    return {
        score: store.quiz.score,
        questionslength: store.quiz.questionslength,
        currentQuestion: store.quiz.currentQuestion,
        isFinished: store.quiz.isFinished
    };
};

export default connect(mapStoreToProps)(Scoreboard);
