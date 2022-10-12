import React from 'react';
// import { ComposedChart, Line } from 'recharts';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


const StatisticsDetails = ({ showStatistics }) => {
    const { total } = showStatistics;
    console.log(showStatistics.total);
    return (
        <div>
            {/* <ComposedChart width={500}
                height={400}
                data={showStatistics}>
                <Line type="monotone" dataKey="total" stroke="#ff7300" />
                <Line type="monotone" dataKey="total" stroke="#ff7300" />
            </ComposedChart> */}

            <LineChart width={500} height={400} data={showStatistics}>
                <Line type="monotone" dataKey={total} stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default StatisticsDetails;