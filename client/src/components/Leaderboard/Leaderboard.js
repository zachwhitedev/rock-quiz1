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
    <li>1. {scores[0].username} ||{scores[0].score}%||</li>
    <li>2. {scores[1].username} ||{scores[1].score}%||</li>
    <li>3. {scores[2].username} ||{scores[2].score}%||</li>
    <li>4. {scores[3].username} ||{scores[3].score}%||</li>
    <li>5. {scores[4].username} ||{scores[4].score}%||</li>

      </div>
    )} else {
        return (
            <h1>Loading...</h1>
        )
    }
}

function mapStoreToProps(store) {
    return {
        isSubmitting: store.quiz.isSubmitting
    };
}
export default connect(mapStoreToProps)(Leaderboard);
