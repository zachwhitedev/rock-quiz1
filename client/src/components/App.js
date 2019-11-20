import React from 'react';
import './App.module.css';
import Scoreboard from './Scoreboard/index';
import QuestionCard from './QuestionCard/index';
import { getThemeProps } from '@material-ui/styles';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
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
        isFinished: store.quiz.isFinished
    };
}
export default connect(mapStoreToProps)(App);
