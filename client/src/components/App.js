import React from 'react';
import styles from './App.module.css';
import Scoreboard from './Scoreboard/index';
import QuestionCard from './QuestionCard/index';
import SubmitForm from '../components/SubmitForm/SubmitForm';
import { getThemeProps } from '@material-ui/styles';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      {props.isSubmitting && <SubmitForm />}
      {!props.isFinished && <Scoreboard />}
      <QuestionCard />
    </div>
  );
}


function mapStoreToProps(store) {
    return {
        score: store.quiz.score,
        questionslength: store.quiz.questionslength,
        currentQuestion: store.quiz.currentQuestion,
        isFinished: store.quiz.isFinished,
        isSubmitting: store.quiz.isSubmitting
    };
}
export default connect(mapStoreToProps)(App);
