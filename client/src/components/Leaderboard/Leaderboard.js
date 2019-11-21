import styles from './Leaderboard.module.css';
import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { style } from '@material-ui/system';

function Leaderboard(props) {
  const [scores, getScores] = useState([]);

  useEffect(
    useCallback(() => {
      axios
        .get('/api/rockscores')
        .then(res => {
          getScores(res.data);
        })
        .catch(err => console.log(err));
    }),
    [props.isSubmitting]
  );

  if (scores[0]) {
    console.log(scores);
    return (
      <div className={styles.container}>
        <p id={styles.leaderboard}>Leaderboard</p>
        <div id={styles.scores}>
          <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{scores[0].username}</td>
                <td>{scores[0].score}%</td>
              </tr>
              <tr>
                <td>{scores[1].username}</td>
                <td>{scores[1].score}%</td>
              </tr>
              <tr>
                <td>{scores[2].username}</td>
                <td>{scores[2].score}%</td>
              </tr>
              <tr>
                <td>{scores[3].username}</td>
                <td>{scores[3].score}%</td>
              </tr>
              <tr>
                <td>{scores[4].username}</td>
                <td>{scores[4].score}%</td>
              </tr>
              <tr>
                <td>{scores[5].username}</td>
                <td>{scores[5].score}%</td>
              </tr>
              <tr>
                <td>{scores[6].username}</td>
                <td>{scores[6].score}%</td>
              </tr>
              <tr>
                <td>{scores[7].username}</td>
                <td>{scores[7].score}%</td>
              </tr>
              <tr>
                <td>{scores[8].username}</td>
                <td>{scores[8].score}%</td>
              </tr>
              <tr>
                <td>{scores[9].username}</td>
                <td>{scores[9].score}%</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h1>Loading...</h1>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {
    isSubmitting: store.quiz.isSubmitting
  };
}
export default connect(mapStoreToProps)(Leaderboard);
