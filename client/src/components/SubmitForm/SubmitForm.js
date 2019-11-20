import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './SubmitForm.module.css';

function SubmitForm (props){

    const[username, setUsername] = useState('');

    const handleChange = e => {
      setUsername(e.target.value);
    };
    
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
        <form className={styles.submitform}>
          <div>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='username'
              onChange={handleChange}
              value={username}
              required
            />
          </div>
          <button onClick={sendScoreToDB}>Submit!</button>
        </form>
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


