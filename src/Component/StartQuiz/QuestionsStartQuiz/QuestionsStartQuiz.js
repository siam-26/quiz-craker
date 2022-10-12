import React from 'react';
import ShowOptions from '../../ShowOptions/ShowOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './QuestionsStartQuiz.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionsStartQuiz = ({ questions }) => {
    const { question } = questions;
    const correctAnswer = questions.correctAnswer;

    const correctAnswerHandler = () => {
        const notify = () => toast(correctAnswer);
        return notify();
    }

    return (
        <div className='questions'>
            <div className='question-child-div'>
                <h5><b>Ques:</b> {question} </h5>

                <FontAwesomeIcon onClick={correctAnswerHandler} className='eyeIcon' icon={faEye}></FontAwesomeIcon>

                <ToastContainer></ToastContainer>
            </div>
            {
                questions.options.map(option => <ShowOptions
                    key={option}
                    option={option}
                    questions={questions.correctAnswer}
                ></ShowOptions>)
            }
        </div>
    );
};

export default QuestionsStartQuiz;