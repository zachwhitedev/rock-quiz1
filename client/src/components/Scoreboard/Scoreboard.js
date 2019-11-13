import React from "react";
import styles from './Scoreboard.module.css';

export default function Scoreboard(props) {

    return (
      <div className={styles.container}>
          <h1>{props.score} / {props.questionslength}</h1>
    </div>
  );
}
