import React from 'react';

const QuestionsStartQuiz = ({ questions }) => {
    const { question } = questions;
    return (
        <div>
            {question}
        </div>
    );
};

export default QuestionsStartQuiz;