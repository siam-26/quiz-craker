import React from 'react';
import { Link } from 'react-router-dom';

const Navigations = () => {
    return (
        <div className='navigations'>
            <Link to='#'>KnowLedgeBIT</Link>
            <Link to='/home'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Navigations;