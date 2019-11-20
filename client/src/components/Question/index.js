import { connect } from 'react-redux';
import Question from './Question';

function mapStoreToProps(store) {
    return {
        score: store.quiz.score,
        questionslength: store.quiz.questionslength,
        currentQuestion: store.quiz.currentQuestion,
        isFinished: store.quiz.isFinished,
        isSubmitting: store.quiz.isSubmitting
    };
}
export default connect(mapStoreToProps)(Question);