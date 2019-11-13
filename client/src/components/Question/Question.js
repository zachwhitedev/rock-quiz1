import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import StyledRadio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import styles from './Question.module.css';
import questions from '../../questions';
import {
  addScore,
  resetScore,
  getQuestionslength
} from './actions';

export default function Question(props) {
  const score = useSelector(state => state.quiz.score);
  const dispatch = useDispatch();
  const[q, setQ] = useState(0);
  const[answer, setAnswer] = useState('');
  const[errorMessage, setError] = useState('');

  const submit = () => {
    if(answer == ''){
      setError('Choose a fuckin answer.')
      return;
    }
    if(answer == questions[q].correct_answer){
    dispatch(addScore(score));
    setQ(q + 1);
    }else {
        setQ(q + 1);
    }
  }


  useEffect(() => {
    dispatch(getQuestionslength(questions.length));
  });
  
  
  return (
      <div className={styles.container}>
        {score}
        {errorMessage}
        <span className={styles.question}>{questions[q].question}</span>
      <FormControl component="fieldset" >
        <RadioGroup
          className={styles.form}
          name="customized-radios"
          onChange={(e) => setAnswer(e.target.value)}
          >
          <FormControlLabel
            value="a"
            name='a'
            control={<StyledRadio />}
            label={questions[q].answer_a}
            />
          <FormControlLabel
            value="b"
            name='b'
            control={<StyledRadio />}
            label={questions[q].answer_b}
            />
          <FormControlLabel
            value="c"
            name='c'
            control={<StyledRadio />}
            label={questions[q].answer_c}
          />
          <FormControlLabel
            value="d"
            name='d'
            control={<StyledRadio />}
            label={questions[q].answer_d}
          />
        </RadioGroup>
      </FormControl>
      <button onClick={submit} className={styles.btn}>Submit</button>
    </div>
  );
}
