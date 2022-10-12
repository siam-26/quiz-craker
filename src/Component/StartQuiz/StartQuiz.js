import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionsStartQuiz from './QuestionsStartQuiz/QuestionsStartQuiz';

const StartQuiz = () => {
    const startQuiz = useLoaderData();

    return (
        <div>
            {
                startQuiz.data.questions.map(questions => <QuestionsStartQuiz
                    key={questions.id}
                    questions={questions}
                ></QuestionsStartQuiz>)
            }
        </div>
    );
};

export default StartQuiz;