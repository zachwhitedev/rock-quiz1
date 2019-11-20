import React from 'react';
import styles from './Scoreboard.module.css';

export default function Scoreboard(props) {
  if (props.isFinished) {
    return (
      <div className={styles.container}>
        <h1>
          Score: {Math.round((props.score / props.questionslength) * 100)}%
        </h1>
      </div>
    );
  } else if (props.currentQuestion - 1) {
    return (
      <div className={styles.container}>
        <h1>
          Score: {Math.round((props.score / (props.currentQuestion - 1)) * 100)}
          %
        </h1>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h1>Score: 0% </h1>
      </div>
    );
  }
}
