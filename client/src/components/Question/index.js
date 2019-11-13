import { connect } from 'react-redux';
import Question from './Question';

function mapStoreToProps(store) {
    return {
        score: store.quiz.score,
        questionslength: store.quiz.questionslength
    };
}
export default connect(mapStoreToProps)(Question);