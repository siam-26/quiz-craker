import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsDetails from '../StatisticsDetails/StatisticsDetails';

const Statistics = () => {
    const statistics = useLoaderData();

    return (
        <div>
            <StatisticsDetails statistics={statistics.data}></StatisticsDetails>
        </div>
    );
};

export default Statistics;