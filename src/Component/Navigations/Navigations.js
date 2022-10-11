import React from 'react';
import './Navigations.css';
import { Link } from 'react-router-dom';

const Navigations = () => {
    return (
        <div className='navigations'>
            <div className='knowledgebit'>
                <Link to='#'>KnowLedgeBIT</Link>
            </div>
            <div className='topics'>
                <Link to='/home'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>


        </div>
    );
};

export default Navigations;