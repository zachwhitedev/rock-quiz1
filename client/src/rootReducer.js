  
import { combineReducers } from 'redux';
import questionReducer from './components/Question/reducer';

const rootReducer = combineReducers({
    quiz: questionReducer
});

export default rootReducer;