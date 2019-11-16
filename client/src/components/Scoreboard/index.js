  
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';

function mapStoreToProps(store) {
    return {
        score: store.quiz.score,
        questionslength: store.quiz.questionslength
    };
};

export default connect(mapStoreToProps)(Scoreboard);
