import React from 'react';
import './ShowOptions.css';

const ShowOptions = ({ option }) => {

    return (
        <div className='showoptions'>
            <p>{option}</p>
        </div>
    );
};

export default ShowOptions;