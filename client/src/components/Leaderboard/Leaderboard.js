import styles from './Leaderboard.module.css';
import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

function Leaderboard(props) {

    const [scores, getScores] = useState([]);

    useEffect(useCallback(() => {
        axios
        .get('/api/rockscores')
        .then(res => {
            getScores(res.data)
        })  
        .catch(err => console.log(err));
      }), [props.isSubmitting]);

    if(scores[0]){ 
        console.log(scores);
    return (
      <div className={styles.container}>
          <p>Leaderboard</p>
    <li>1. {scores[0].username} ||{scores[0].score}%||</li>
    <li>2. {scores[1].username} ||{scores[1].score}%||</li>
    <li>3. {scores[2].username} ||{scores[2].score}%||</li>
    <li>4. {scores[3].username} ||{scores[3].score}%||</li>
    <li>5. {scores[4].username} ||{scores[4].score}%||</li>
    <li>6. {scores[5].username} ||{scores[5].score}%||</li>
    <li>7. {scores[6].username} ||{scores[6].score}%||</li>
    <li>8. {scores[7].username} ||{scores[7].score}%||</li>
      </div>
    )} else {
        return (
            <div className={styles.container}>
                <h1>Loading...</h1>
            </div>
        )
    }
}

function mapStoreToProps(store) {
    return {
        isSubmitting: store.quiz.isSubmitting
    };
}
export default connect(mapStoreToProps)(Leaderboard);
