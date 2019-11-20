import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './SubmitForm.module.css';
import { setIsSubmitting } from '../Question/actions';

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
      score: props.score
    };
    axios
      .post('/api/rockscores', newScore)
      .then(res => res.data)
      .catch(err => console.loge(err));
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
        <button onClick={sendScoreToDB}>Submit</button>
        <button onClick={cancelSubmit}>Cancel</button>
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
