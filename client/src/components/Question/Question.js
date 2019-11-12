import React, { useState } from "react";
import StyledRadio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import styles from './Question.module.css';
import questions from '../../questions';

export default function Question() {

  const[q, setQ] = useState(0);
  const[score, setScore] = useState(0);
  const[answer, setAnswer] = useState('');

  const submit = () => {
    if(answer == questions[q].correct_answer){
    console.log('correct!');
    setScore(score + 1);
    setQ(q + 1);
    }else {
        setQ(q + 1);
    }
  }
  
  
  return (
      <div className={styles.container}>
        {score}
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
