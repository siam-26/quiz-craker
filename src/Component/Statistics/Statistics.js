import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsDetails from '../StatisticsDetails/StatisticsDetails';

const Statistics = () => {
    const statistics = useLoaderData();

    return (
        <div>
            {
                statistics.data.map(showStatistics => <StatisticsDetails
                    key={showStatistics.id}
                    showStatistics={showStatistics}
                ></StatisticsDetails>)
            }
        </div>
    );
};

export default Statistics;