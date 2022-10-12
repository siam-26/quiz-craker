import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div className='error'>
            <h1>OOPS!!!</h1>
            <p><i>Your requested Data was not found...</i></p>
        </div>
    );
};

export default Error;