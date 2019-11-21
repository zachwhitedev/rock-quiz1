import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './SubmitForm.module.css';
import { setIsSubmitting, addScore, setIsFinished } from '../Question/actions';

function SubmitForm(props) {
  const [username, setUsername] = useState('');
//   const questionslength = useSelector(state => state.quiz.questionslength);
  const dispatch = useDispatch();
  

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const cancelSubmit = () => {
      dispatch(setIsSubmitting(false));
  }

  const sendScoreToDB = () => {
    const newScore = {
      name: username,
      score: Math.round(((props.score / props.questionslength) * 100))
    };
    axios
      .post('/api/rockscores', newScore)
      .then(res => res.data)
      .catch(err => console.loge(err));
      
      dispatch(setIsSubmitting(false));
      dispatch(addScore(-1));
      dispatch(setIsFinished(false));
  };

  return (
    <div className={styles.submitform}>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='username'
          onChange={handleChange}
          value={username}
          required
        />
        <h4>Score: {Math.round(((props.score / props.questionslength) * 100))}%</h4>
        <button id={styles.cancel} onClick={cancelSubmit}>Cancel</button>
        <button id={styles.submit} onClick={sendScoreToDB}>Submit</button>
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
export default connect(mapStoreToProps)(SubmitForm);
