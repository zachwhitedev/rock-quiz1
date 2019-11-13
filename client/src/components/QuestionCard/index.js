import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

function mapStoreToProps(store) {
    return {
        score: store.quiz.score,
        questionslength: store.quiz.questionslength
    };
}
export default connect(mapStoreToProps)(QuestionCard);