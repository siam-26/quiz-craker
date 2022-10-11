import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigations from '../Navigations/Navigations';

const Main = () => {

    return (
        <div>
            <Navigations></Navigations>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;