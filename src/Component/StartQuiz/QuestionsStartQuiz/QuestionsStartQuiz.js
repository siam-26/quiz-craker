import React from 'react';
import ShowOptions from '../../ShowOptions/ShowOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './QuestionsStartQuiz.css';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';

const QuestionsStartQuiz = ({ questions }) => {
    const { question } = questions;

    return (
        <div className='questions'>
            <div className='question-child-div'>
                <h5><b>Ques:</b> {question} </h5><FontAwesomeIcon className='eyeIcon' icon={faEye}></FontAwesomeIcon>
            </div>
            {
                questions.options.map(option => <ShowOptions
                    key={option}
                    option={option}
                ></ShowOptions>)
            }
        </div>
    );
};

export default QuestionsStartQuiz;