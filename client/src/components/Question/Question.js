import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from './Question.module.css';
import questions from '../../questions';
import {
  addScore,
  resetScore,
  getQuestionslength,
  getCurrentQuestion,
  setIsFinished,
  setIsSubmitting
} from './actions';

export default function Question(props) {
  const score = useSelector(state => state.quiz.score);
  const questionslength = useSelector(state => state.quiz.questionslength);
  const dispatch = useDispatch();
  const [q, setQ] = useState(0);
  const [answer, setAnswer] = useState('');
  const [errorMessage, setError] = useState('');

  const submit = () => {
    if (q == questionslength - 1) {
      if (answer == '') {
        setError('Choose an answer.');
        return;
      }
      if (answer == questions[q].correct_answer) {
        dispatch(addScore(score));
        dispatch(setIsFinished(true));
        setAnswer('');
        return;
      } else {
        dispatch(setIsFinished(true));
        setAnswer('');
        setQ(0);
      }
    } else {
      if (answer == '') {
        setError('Choose an answer.');
        return;
      } else if (answer == questions[q].correct_answer) {
        dispatch(addScore(score));
        setQ(q + 1);
        setAnswer('');
      } else {
        setQ(q + 1);
      }
    }
  };

  const startSubmit = () => {
    dispatch(setIsSubmitting(true));
  }

  const playAgain = () => {
    dispatch(setIsSubmitting(false));
    dispatch(addScore(-1));
    dispatch(setIsFinished(false));
    setQ(0);
    setAnswer('');
    setError('');
  }

  useEffect(() => {
    dispatch(getQuestionslength(questions.length));
    dispatch(getCurrentQuestion(q + 1));
  });

  if (!props.isFinished) {
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
  } else if (props.isFinished) {
    return (
      <div>
        <h1>You're finished!</h1>
        <h2>
        Score: {Math.round(((props.score / questionslength) * 100))}%
        <button onClick={playAgain}>Play Again</button>
        <button onClick={startSubmit}>Submit Score</button>
        </h2>
      </div>
    );
  }
}
