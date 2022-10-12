import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowTopic.css';

const ShowTopics = ({ topic }) => {
    const { id, name, logo, total } = topic;
    const navigate = useNavigate();
    const startQuizHandler = () => {
        return navigate(`/start/${id}`);
    }
    return (

        <div className='topic'>

            <img src={logo} alt="" />
            <h3>{name}</h3>
            <div className='topic-inside-div'>
                <p>Total quiz: {total}</p>
                <button onClick={startQuizHandler}>Start Quiz</button>
            </div>
        </div>


    );
};

export default ShowTopics;