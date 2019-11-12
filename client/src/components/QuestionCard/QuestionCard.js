import React, { useState } from 'react';
import Question from '../Question/Question';
import styles from './QuestionCard.module.css'; // Import css modules stylesheet as styles

export default function QuestionCard () {


    return (
        <div className={styles.container}>
        <Question />
        </div>
    );

}