import React from 'react';
import './App.module.css';
import Scoreboard from './Scoreboard/index';
import QuestionCard from './QuestionCard/index';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <QuestionCard />
    </div>
  );
}

export default App;
