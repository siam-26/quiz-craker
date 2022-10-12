import React from 'react';
import './ShowTopic.css';

const ShowTopics = ({ topic }) => {
    const { name, logo, total } = topic;
    return (

        <div className='topic'>

            <img src={logo} alt="" />
            <h3>{name}</h3>
            <div className='topic-inside-div'>
                <p>Total quiz: {total}</p>
                <button>Start Quiz</button>
            </div>
        </div>


    );
};

export default ShowTopics;