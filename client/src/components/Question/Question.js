import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from './Question.module.css';
import questions from '../../questions';
import { addScore, resetScore, getQuestionslength } from './actions';

export default function Question(props) {
  const score = useSelector(state => state.quiz.score);
  const questionslength = useSelector(state => state.quiz.questionslength);
  const dispatch = useDispatch();
  const [q, setQ] = useState(0);
  const [answer, setAnswer] = useState('');
  const [errorMessage, setError] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const submit = () => {
    if (q == questionslength - 1) {
      if (answer == ''){
        setError('Choose an answer.');
      };
      if (answer == questions[q].correct_answer) {
        dispatch(addScore(score));
        setIsFinished(true);
        setAnswer('');
      } else {
        setIsFinished(true);
        setAnswer('');
      }
      return;
    } else {
      if (answer == '') {
        setError('Choose an answer.');
      }
      if (answer == questions[q].correct_answer) {
        dispatch(addScore(score));
        if (q == questions.length - 1) {
          setIsFinished(true);
        } else {
          setQ(q + 1);
        }
        setAnswer('');
      } else {
        setQ(q + 1);
      }
    }
  };

  useEffect(() => {
    dispatch(getQuestionslength(questions.length));
  });

  if (!isFinished) {
    return (
      <div className={styles.container}>
        {errorMessage}
        <span className={styles.question}>{questions[q].question}</span>
        <FormControl component='fieldset'>
          <RadioGroup
            className={styles.form}
            name='customized-radios'
            onChange={e => setAnswer(e.target.value)}
          >
            <FormControlLabel
              value='a'
              name='a'
              control={<StyledRadio />}
              label={questions[q].answer_a}
              checked={answer == 'a'}
            />
            <FormControlLabel
              value='b'
              name='b'
              control={<StyledRadio />}
              label={questions[q].answer_b}
              checked={answer == 'b'}
            />
            <FormControlLabel
              value='c'
              name='c'
              control={<StyledRadio />}
              label={questions[q].answer_c}
              checked={answer == 'c'}
            />
            <FormControlLabel
              value='d'
              name='d'
              control={<StyledRadio />}
              label={questions[q].answer_d}
              checked={answer == 'd'}
            />
          </RadioGroup>
        </FormControl>
        <button onClick={submit} className={styles.btn}>
          Submit
        </button>
      </div>
    );
  } else if (isFinished) {
    return (
      <div>
        <h1>You're finished!</h1>
        <h1>Score: {score}</h1>
      </div>
    );
  }
}
