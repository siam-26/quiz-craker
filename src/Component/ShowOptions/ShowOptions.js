import React from 'react';
import './ShowOptions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowOptions = ({ option, questions }) => {
    const choseAnswerHandler = () => {
        if (option === questions) {
            const notify = () => toast('Correct Answer!!!');
            return notify();
        }
        else {
            const notify = () => toast('Wrong Answer!!!');
            return notify();
        }
    }

    return (
        <div className='showoptions'>
            <p onClick={choseAnswerHandler}>{option}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowOptions;